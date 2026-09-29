import React, { useEffect, useState } from "react";
const Next = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          List of Quotes
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Some inspiring quotes from different authors.
        </p>
      </div>
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading quotes...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-600px">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-5 py-3 text-left text-sm font-medium text-gray-600">
                    ID
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-medium text-gray-600">
                    Quote
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-medium text-gray-600">
                    Author
                  </th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {row.id}
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-700">
                      {row.quote}
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600">
                      {row.author}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default Next;