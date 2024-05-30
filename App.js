import axios from 'axios';
import { createProxyMiddleware } from 'http-proxy-middleware';
import React, { useEffect, useState } from 'react';
import './App.css';
const proxy = createProxyMiddleware({
  target: 'http://20.244.56.144',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/test/rand'
  }
});
function App() {
  const [qualifiedId, setQualifiedId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."; // Your access token
  const API_URL = '/api'; // API URL
  useEffect(() => {
    fetchData();
  }, []); 
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/${qualifiedId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setResult(response.data);
      setError(null);
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Error fetching data');
      setResult(null);
    }
  };
  const handleFetchNumbers = () => {
    fetchData();
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <label htmlFor="qualifiedId">Qualified ID:</label>
      <input
        id="qualifiedId"
        type="text"
        value={qualifiedId}
        onChange={(e) => setQualifiedId(e.target.value)}
        placeholder="Enter qualified ID (p, f, e, r)"
      />
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h2>Result</h2>
          <p><strong>Window Previous State:</strong> {result.windowPrevState.join(', ')}</p>
          <p><strong>Window Current State:</strong> {result.windowCurrState.join(', ')}</p>
          <p><strong>Fetched Numbers:</strong> {result.numbers.join(', ')}</p>
          <p><strong>Average:</strong> {result.avg.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
export default App;
