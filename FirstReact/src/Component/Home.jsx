import React, { useState, useEffect } from "react";
const Home = () => {
  // Text states
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("Welcome to Home Page");
  // Clock state
  const [currentTime, setCurrentTime] = useState(new Date());
  // Timer states
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // Update display text using useEffect
  useEffect(() => {
    if (text.trim() === "") {
      setDisplayText("Welcome to Home Page");
    } else {
      setDisplayText(text);
    }
  }, [text]);
  // Live clock
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);
  // Stopwatch timer
  useEffect(() => {
    let timerInterval;
    if (isRunning) {
      timerInterval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isRunning]);
  const formatTimer = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  // Format current clock
  const time = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const date = currentTime.toLocaleDateString([], {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-6">
      <nav className="max-w-6xl mx-auto mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              My <span className="text-blue-400">Home</span>
            </h2>
          </div>
          <div className="hidden sm:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20
                            rounded-2xl px-5 py-3 shadow-xl text-right">
              <div className="flex items-center gap-2 justify-end">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-300 font-semibold tracking-wider">
                  LIVE
                </span>
              </div>
              <p className="text-2xl font-bold tracking-wider">
                {time}
              </p>
              <p className="text-xs text-gray-300">
                {date}
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20
                        rounded-3xl shadow-2xl p-8">
          <div className="mb-8">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
              Welcome
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {displayText}
            </h1>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 font-semibold mb-3">
              Enter your text
            </label>
            <input
              id="message"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something..."
              className="w-full px-5 py-4 bg-white/10 border border-white/20
                         rounded-xl text-white placeholder-gray-400
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition"/>
          </div>
          <div className="mt-6 p-5 bg-blue-500/10 border border-blue-400/20 rounded-2xl">
            <p className="text-sm text-blue-300 mb-2">
              Home Screen Preview
            </p>
            <p className="text-xl font-semibold">
              {displayText}
            </p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20
                        rounded-3xl shadow-2xl p-8 flex flex-col justify-center">
          <div className="text-center">
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest">
              Stopwatch
            </p>
            <h2 className="text-6xl md:text-7xl font-bold tracking-widest mt-6
                           bg-gradient-to-r from-blue-400 to-purple-400
                           bg-clip-text text-transparent">
              {formatTimer()}
            </h2>
            <p className="text-gray-400 mt-3">
              {isRunning ? "Timer is running..." : "Timer is paused"}
            </p>
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="px-6 py-3 rounded-xl font-semibold
                           bg-blue-600 hover:bg-blue-500
                           transition-all duration-300
                           hover:scale-105 shadow-lg">
                {isRunning ? "Pause" : "Start"}
              </button>
              <button
                onClick={() => {
                  setSeconds(0);
                  setIsRunning(false);
                }}
                className="px-6 py-3 rounded-xl font-semibold
                           bg-white/10 hover:bg-white/20
                           border border-white/20
                           transition-all duration-300
                           hover:scale-105">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden max-w-6xl mx-auto mt-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20
                        rounded-2xl p-5 text-center shadow-xl">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-300 font-semibold tracking-wider">
              LIVE CLOCK
            </span>
          </div>
          <p className="text-3xl font-bold tracking-wider">
            {time}
          </p>
          <p className="text-sm text-gray-300 mt-1">
            {date}
          </p>
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm mt-12">
        Live Clock • Stopwatch • React Hooks • Tailwind CSS
      </footer>

    </div>
  );
};
export default Home;