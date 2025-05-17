import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { onChildAdded, push, ref, set } from "firebase/database";
import { database } from "../firebase";

// Save the Firebase message folder name as a constant to avoid bugs due to misspelling
const DB_MESSAGES_KEY = "messages";
function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const messagesRef = ref(database, DB_MESSAGES_KEY);
    // onChildAdded will return data for every child at the reference and every subsequent new child
    onChildAdded(messagesRef, (data) => {
      // Add the subsequent child to local component state, initialising a new array to trigger re-render
      setMessages((prevState) =>
        // Store message key so we can use it as a key in our list items when rendering messages
        [...prevState, { key: data.key, val: data.val() }]
      );
    });
  }, []);
  ///
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const writeData = () => {
    const messageListRef = ref(database, DB_MESSAGES_KEY);
    const newMessageRef = push(messageListRef);
    set(newMessageRef, message);
    setMessage("");
  };

  // Convert messages in state to message JSX elements to render
  let messageListItems = messages.map((message) => (
    <li key={message.key}>{message.val}</li>
  ));

  return (
    <div className="card">
      {/* TODO: Add input field and add text input as messages in Firebase */}
      <label>Message</label>
      <input type="text" value={message} onChange={handleChange} />
      <button onClick={writeData}>Send</button>
      <ol>{messageListItems}</ol>
    </div>
  );
}

export default Chat;
