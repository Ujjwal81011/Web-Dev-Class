import { useRef, useState } from "react";
import {
  Search, FileText, FileX, FolderOpen, Upload, LoaderCircle,
  CheckCircle2, AlertCircle, Code2, X, File, FileImage
} from "lucide-react";

const TEXT_EXTENSIONS = new Set([
  "txt", "md", "csv", "json", "js", "jsx", "ts", "tsx", "css", "html",
  "xml", "yaml", "yml", "log", "py", "java", "c", "cpp", "h", "sql",
  "env", "ini", "sh", "bat", "toml", "svg"
]);

function extensionOf(name = "") {
  return name.includes(".") ? name.split(".").pop().toLowerCase() : "";
}

function formatSize(bytes = 0) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function readFile(file) {
  const ext = extensionOf(file.name);
  if (TEXT_EXTENSIONS.has(ext) || file.type.startsWith("text/") ||
      ["application/json", "application/xml"].includes(file.type)) {
    return { data: await file.text(), kind: "text" };
  }
  if (file.type.startsWith("image/")) {
    return { data: `Image file selected: ${file.name}\nSize: ${formatSize(file.size)}\n\nImage preview is available below.`, kind: "image", url: URL.createObjectURL(file) };
  }
  return {
    data: `This is a binary file, so its raw contents cannot be displayed as readable text.\n\nFile: ${file.name}\nType: ${file.type || "Unknown"}\nSize: ${formatSize(file.size)}\n\nFor PDF, DOCX, XLSX, or other binary formats, a format-specific reader would be needed.`,
    kind: "binary"
  };
}

export default function App() {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [currentFile, setCurrentFile] = useState(null);
  const [output, setOutput] = useState("");
  const [kind, setKind] = useState("text");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("idle");
  const [isDragging, setIsDragging] = useState(false);
  const [folderHandle, setFolderHandle] = useState(null);
  const [folderName, setFolderName] = useState("");
  const [message, setMessage] = useState("");

  function clearImageUrl() {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    setImageUrl("");
  }

  async function showFile(file) {
    if (!file) return;
    clearImageUrl();
    setCurrentFile(file);
    setQuery(file.name);
    setStatus("loading");
    setMessage("");
    try {
      const result = await readFile(file);
      setOutput(result.data);
      setKind(result.kind);
      if (result.url) setImageUrl(result.url);
      setStatus("found");
    } catch {
      setOutput("");
      setStatus("error");
      setMessage("The selected file could not be read.");
    }
  }

  async function chooseFolder() {
    if (!("showDirectoryPicker" in window)) {
      setMessage("Folder search is not supported by this browser. Use Browse Files or drag and drop a file instead.");
      return;
    }
    try {
      const handle = await window.showDirectoryPicker({ mode: "read" });
      setFolderHandle(handle);
      setFolderName(handle.name);
      setMessage(`Folder selected: ${handle.name}. You can now search its files.`);
      setStatus("idle");
    } catch (error) {
      if (error?.name !== "AbortError") setMessage("Could not open that folder. Please try again.");
    }
  }

  async function findInDirectory(dirHandle, targetName, prefix = "", depth = 0) {
    if (depth > 15) return null;
    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === "file" && name.toLowerCase() === targetName.toLowerCase()) {
        return { handle, path: `${prefix}${name}` };
      }
    }
    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === "directory") {
        const found = await findInDirectory(handle, targetName, `${prefix}${name}/`, depth + 1);
        if (found) return found;
      }
    }
    return null;
  }

  async function searchFile(event) {
    event.preventDefault();
    const name = query.trim();
    setMessage("");
    if (!name) {
      setStatus("empty");
      return;
    }
    if (name.includes("/") || name.includes("\\") || name === "." || name === "..") {
      setStatus("invalid");
      setMessage("Enter only a filename, such as report.txt.");
      return;
    }
    if (!folderHandle) {
      setStatus("no-folder");
      setMessage("First click “Choose Folder” and select the computer folder you want to search, or drag and drop a file.");
      return;
    }
    clearImageUrl();
    setCurrentFile(null);
    setOutput("");
    setStatus("loading");
    try {
      const found = await findInDirectory(folderHandle, name);
      if (!found) {
        setStatus("not-found");
        return;
      }
      const file = await found.handle.getFile();
      await showFile(file);
      setMessage(`Found in ${found.path}`);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Could not access that folder. Choose it again and allow access.");
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) showFile(file);
    else setMessage("Drop a file here.");
  }

  function reset() {
    clearImageUrl();
    setQuery("");
    setCurrentFile(null);
    setOutput("");
    setKind("text");
    setStatus("idle");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 sm:py-12">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-28 -top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-9 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
            <FolderOpen size={32} />
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-400">Local files · Instant preview</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            File <span className="text-blue-400">Viewer</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Search inside a folder you choose on your computer, or drag a file into the first box. Its contents appear in the second box.
          </p>
        </header>

        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          <section
            onDragEnter={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsDragging(false); }}
            onDrop={handleDrop}
            className={`rounded-3xl border bg-slate-900/90 p-5 shadow-2xl transition sm:p-7 ${isDragging ? "border-blue-400 bg-blue-950/40 ring-4 ring-blue-500/10" : "border-slate-800"}`}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400"><Search size={23} /></div>
              <div>
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">Box 01</div>
                <h2 className="text-xl font-bold">Find or drop a file</h2>
                <p className="mt-1 text-sm text-slate-400">Search your chosen folder or drag here</p>
              </div>
            </div>

            <div className={`mb-5 rounded-2xl border-2 border-dashed px-4 py-7 text-center transition ${isDragging ? "border-blue-400 bg-blue-500/10" : "border-slate-700 bg-slate-950/50"}`}>
              <Upload className={`mx-auto mb-3 ${isDragging ? "text-blue-300" : "text-slate-500"}`} size={30} />
              <p className="font-semibold text-slate-200">{isDragging ? "Drop your file now" : "Drag & drop a file here"}</p>
              <p className="mt-2 text-xs text-slate-500">Or choose a file from your computer</p>
              <button type="button" onClick={() => inputRef.current?.click()} className="mt-4 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700">
                Browse Files
              </button>
              <input ref={inputRef} type="file" className="hidden" onChange={(e) => { const file = e.target.files?.[0]; if (file) showFile(file); e.target.value = ""; }} />
            </div>

            <div className="mb-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-800" /><span className="text-xs uppercase tracking-widest text-slate-600">or search a folder</span><div className="h-px flex-1 bg-slate-800" />
            </div>

            <button type="button" onClick={chooseFolder} className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/15">
              <FolderOpen size={18} /> {folderName ? `Folder: ${folderName}` : "Choose Folder on Computer"}
            </button>
            <p className="mt-2 text-xs leading-5 text-slate-500">Folder search requires a browser that supports the File System Access API, such as recent Chrome or Edge.</p>

            <form onSubmit={searchFile} className="mt-6">
              <label htmlFor="filename" className="mb-2 block text-sm font-semibold text-slate-300">Search filename in selected folder</label>
              <div className="flex gap-2">
                <input id="filename" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. report.txt" autoComplete="off" className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                <button type="submit" disabled={status === "loading"} aria-label="Search filename" className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-500 disabled:opacity-60">
                  {status === "loading" ? <LoaderCircle size={18} className="animate-spin" /> : <Search size={18} />} <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </form>

            {message && <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm leading-6 text-slate-300">{message}</div>}

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300"><Code2 size={16} className="text-blue-400" /> Supported content</div>
              <p className="text-sm leading-6 text-slate-500">Text, TXT, JSON, CSV, HTML, CSS, JS and similar files display as readable text. Images show a preview. Other binary formats show file details.</p>
            </div>
          </section>

          <section className="flex min-h-[440px] flex-col rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400"><FileText size={23} /></div>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">Box 02</div>
                  <h2 className="text-xl font-bold">File data</h2>
                  <p className="mt-1 text-sm text-slate-400">Actual selected file contents</p>
                </div>
              </div>
              {status !== "idle" && <button onClick={reset} type="button" title="Clear output" aria-label="Clear output" className="rounded-xl border border-slate-700 p-2.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"><X size={17} /></button>}
            </div>

            <div aria-live="polite" className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              {status === "idle" && <div className="flex flex-1 flex-col items-center justify-center px-5 py-12 text-center"><FileText size={42} className="mb-4 text-slate-700" /><p className="font-semibold text-slate-300">No file loaded</p><p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">Drop a file or browse for one. To search by filename, choose a folder first.</p></div>}
              {status === "loading" && <div className="flex flex-1 flex-col items-center justify-center py-12"><LoaderCircle size={36} className="animate-spin text-blue-400" /><p className="mt-4 text-sm text-slate-400">Reading file...</p></div>}
              {status === "found" && <>
                <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                  {kind === "image" ? <FileImage size={17} className="text-emerald-400" /> : <CheckCircle2 size={17} className="text-emerald-400" />}
                  <span className="min-w-0 truncate text-sm font-semibold text-emerald-400">{currentFile?.name}</span>
                  <span className="ml-auto shrink-0 text-xs text-slate-500">{currentFile ? formatSize(currentFile.size) : ""}</span>
                </div>
                {kind === "image" && imageUrl && <div className="flex justify-center border-b border-slate-800 p-3"><img src={imageUrl} alt={currentFile?.name || "Selected image"} className="max-h-64 max-w-full rounded-lg object-contain" /></div>}
                <pre className="max-h-[520px] flex-1 overflow-auto whitespace-pre-wrap break-words p-4 font-mono text-xs leading-6 text-slate-300 sm:text-sm">{output}</pre>
              </>}
              {status === "not-found" && <div className="flex flex-1 flex-col items-center justify-center px-5 py-12 text-center"><FileX size={44} className="mb-4 text-red-400" /><h3 className="text-xl font-bold text-red-400">File Not Found</h3><p className="mt-3 max-w-xs break-words text-sm leading-6 text-slate-400">No file named <span className="font-semibold text-slate-200">{query}</span> exists in the selected folder or its subfolders.</p></div>}
              {(status === "empty" || status === "invalid" || status === "no-folder" || status === "error") && <div className="flex flex-1 flex-col items-center justify-center px-5 py-12 text-center"><AlertCircle size={40} className="mb-4 text-amber-400" /><h3 className="font-semibold text-amber-400">{status === "no-folder" ? "Choose a folder first" : status === "error" ? "Could not read file" : "Check your input"}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">{message || "Enter a filename to search."}</p></div>}
            </div>
          </section>
        </div>

        <footer className="mt-8 text-center text-xs leading-6 text-slate-600">
          Files are read locally in your browser. No file content is uploaded to a server by this app.
        </footer>
      </div>
    </main>
  );
}