import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://real-time-collaborative-code-editor-e8a2.onrender.com/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);


  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the field is requried");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
    toast.success("room is created");
  };

  // when enter then also join
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <>

      <h4 className="">Enter the ROOM ID</h4>

      <div className="">
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="ROOM ID"
          onKeyUp={handleInputEnter}
        />
      </div>
      <div className="">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
          onKeyUp={handleInputEnter}
        />
      </div>
      <button
        onClick={joinRoom}
      >
        JOIN
      </button>
      <p className="">
        Don't have a room ID? create{" "}
        <span
          onClick={generateRoomId}
          style={{ cursor: "pointer" }}
        >
          {" "}
          New Room
        </span>
      </p>
    </>
  );
}

export default Home;
