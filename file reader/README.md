# Local File Viewer

A responsive React + Tailwind CSS file viewer with drag-and-drop, browse-file, and search-within-a-selected-folder support.

## Run it
Requires Node.js 20.19+ or 22.12+ recommended.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## How to use
1. **Drag and drop** a file into Box 1, or click **Browse Files** to select one. Its contents appear in Box 2.
2. To search by filename in a folder, click **Choose Folder on Computer** and grant folder access.
3. Enter a filename such as `notes.txt` and click **Search**. The app searches the chosen folder and its subfolders.
4. A missing file displays **File Not Found**.

## Browser support
Folder search uses the File System Access API (`showDirectoryPicker`), available in recent Chromium-based browsers such as Chrome and Edge, usually on localhost or HTTPS. If unavailable, use Browse Files or drag-and-drop.

## Content support
Text-like files (TXT, JSON, CSV, HTML, CSS, JS, etc.) are shown as text. Images show a preview and file details. PDF, DOCX, XLSX and other binary formats need format-specific parsing to show their full readable content.

## Privacy
The app reads files locally in the browser and does not upload their contents. Folder access requires explicit user selection and permission.
