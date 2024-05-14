import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import "./App.css";

function App() {
  const contractAddress = "0x99eB607f86f9fA9bB9dFb7Bd9513dBac1A2347Bf";

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const [inputMessage, setInputMessage] = useState(""); // Renamed state variable
  const [getmsg, setGetmsg] = useState(" ");

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };
  async function sendMessageToContract() {
    // Renamed function
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.setMessage(inputMessage);
        await transaction.wait();

        setInputMessage(" ");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function getMessageToContract() {
    // Renamed function
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.getMessage();
        setGetmsg(transaction);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Metacrafters Front end Project</h1>
        <h3 className="subtitle">
          <i>send a message to the block chain and have it returned to you</i>
        </h3>
        <br />
        <input
          type="text"
          placeholder="Type your message"
          value={inputMessage}
          onChange={handleMessageChange}
          className="input-field"
        />
        <br /> <br />
        <button onClick={sendMessageToContract} className="btn send-btn">
          Send Message
        </button>
        {"  "}
        <button onClick={getMessageToContract} className="btn get-btn">
          Get sent Message
        </button>
      </div>
      <div className="message-container">
        <p className="message">{getmsg}</p>
        <button onClick={() => setGetmsg(" ")} className="btn clear-btn">
          Clear message
        </button>
      </div>
    </div>
  );
}

export default App;
