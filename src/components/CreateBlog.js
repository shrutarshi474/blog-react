// src/components/CreateBlog.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await addDoc(collection(db, "blogs"), {
          title,
          content,
          author: user.email,
          createdAt: new Date(),
        });
        navigate("/");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("You need to be logged in to create a post");
    }
  };

  return (
    <div>
      <h2>Create Blog Post</h2>
      <form onSubmit={handlePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreateBlog;
