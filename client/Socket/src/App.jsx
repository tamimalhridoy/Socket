import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// Establish a socket connection to the server at the specified URL
const socket = io.connect("http://localhost:3000");

const App = () => {
  const [message, setMessage] = useState();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket Open now");
    });

    socket.on("res_server", (data) => console.log(data));
  }, []);

  const hendeal = () => {
    console.log(message);
    socket.emit("message-Clint", {
      message,
    });
  };
  return (
    <>
      <div>
        <h1>Socket</h1>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button onClick={hendel}>Send</button>
      </div>
    </>
  );
};

export default App;
