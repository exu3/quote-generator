import React, { useState, useEffect } from "react";
import "./styles.css";

const url = "https://type.fit/api/quotes";
let data;
const randomNo = () => Math.floor(Math.random() * data.length) + 1;

export default function App() {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    getQuotes();
  }, []);

  async function getQuotes() {
    try {
      const res = await fetch(url);
      data = await res.json();
      setQuotes(data[randomNo()]);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (

    <div className="App">
      <h1 className="title">Quotes Generator</h1>
      <p className="quotes">{quotes.text}</p>
      <p className="author">- {quotes.author ? quotes.author : "Anonymous"}</p>
      <button className="button" onClick={getQuotes}>Get a Quote</button>
    </div>

  );
}
