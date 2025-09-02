import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeText = async () => {
    const res = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📰 Fake News Detector</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste article text here..."
        rows={6}
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={analyzeText}>Analyze</button>

      {result && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Result</h2>
          <p>
            <b>Score:</b> {result.score}
          </p>
          <p>
            <b>Label:</b> {result.label}
          </p>
          <p>
            <b>Reason:</b> {result.reason}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
