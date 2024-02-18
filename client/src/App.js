
import About from './components/About';
import Articles from './components/Articles';
import Choosing from './components/Choosing';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
       
      <Header/>
      <About/>
      <Choosing/>
      <Articles/>
      <Footer/>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
