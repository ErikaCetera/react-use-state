import { useState } from "react"
import languages from "./data/languages.js"


function App() {
  const [visibleDescription, setVisibleDescription] = useState(null);

  return (
    <>
      <h1>Learn Web Development</h1>
      {languages.map((curLanguage) => (
        <button
          onClick={() => setVisibleDescription(curLanguage.description)}
          key={curLanguage.id}
          className={curLanguage.title}
        >
          {curLanguage.title}
        </button>
      ))}
      {visibleDescription && (
        <div className="card">
          <h3></h3>
          <p>{visibleDescription}</p>
        </div>
      )}
    </>
  );
}

export default App;

