import React, { useState } from 'react';

const mockData = [
  { strike: 22500, callDelta: 0.72, callTheta: -4.23, callIV: 12.5, putDelta: -0.27 },
  { strike: 22600, callDelta: 0.62, callTheta: -5.12, callIV: 14.0, putDelta: -0.39 },
  { strike: 22700, callDelta: 0.51, callTheta: -5.88, callIV: 15.8, putDelta: -0.48 },
  { strike: 22800, callDelta: 0.42, callTheta: -6.23, callIV: 17.3, putDelta: -0.57 },
  { strike: 22900, callDelta: 0.32, callTheta: -6.91, callIV: 18.6, putDelta: -0.65 },
];

const GreeksPage = () => {
  const [symbol, setSymbol] = useState('NIFTY');
  const [expiry, setExpiry] = useState('2025-05-30');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Option Greeks Dashboard</h1>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="px-4 py-2 rounded bg-white shadow"
        >
          <option value="NIFTY">NIFTY</option>
          <option value="BANKNIFTY">BANKNIFTY</option>
          <option value="FINNIFTY">FINNIFTY</option>
        </select>

        <select
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="px-4 py-2 rounded bg-white shadow"
        >
          <option value="2025-05-30">30 May 2025</option>
          <option value="2025-06-06">6 June 2025</option>
          <option value="2025-06-13">13 June 2025</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-md">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Strike</th>
              <th className="px-4 py-2 text-left">Call Delta</th>
              <th className="px-4 py-2 text-left">Call Theta</th>
              <th className="px-4 py-2 text-left">Call IV</th>
              <th className="px-4 py-2 text-left">Put Delta</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr key={row.strike} className="border-b hover:bg-blue-50">
                <td className="px-4 py-2 font-semibold">{row.strike}</td>
                <td className="px-4 py-2 text-green-700">{row.callDelta.toFixed(2)}</td>
                <td className="px-4 py-2 text-red-600">{row.callTheta.toFixed(2)}</td>
                <td className="px-4 py-2">{row.callIV.toFixed(1)}%</td>
                <td className="px-4 py-2 text-purple-700">{row.putDelta.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => alert('Live data refresh coming soon...')}
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          🔄 Refresh Data
        </button>
      </div>
    </div>
  );
};

export default GreeksPage;
