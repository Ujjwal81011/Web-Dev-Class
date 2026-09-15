import React, { useState, useEffect } from "react";
const Home = () => {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState(
    "Welcome to Home Page"
  );
  useEffect(() => {
    if (text.trim() === "") {
      setDisplayText("Welcome to Home Page");
    } else {
      setDisplayText(text);
    }
  }, [text]);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          {displayText}
        </h1>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2">
            Enter your text
          </label>
          <input
            id="message"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition"/>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">
            Home Screen Preview:
          </p>
          <p className="text-xl font-semibold text-gray-800">
            {displayText}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;