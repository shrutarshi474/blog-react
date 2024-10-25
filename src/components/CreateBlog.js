// src/components/CreateBlog.js
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from "../firebase";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [author, setAuthor] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      setError("You must be logged in to create a post");
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        // Upload image to Firebase Storage
        const storageRef = ref(storage, `blogImages/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        await uploadTask;

        imageUrl = await getDownloadURL(storageRef);
      }

      // Add blog post to Firestore
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        imageUrl, // Store the image URL
        createdAt: new Date(),
        author: author,
      });

      alert("Blog posted successfully!");
    } catch (err) {
      setError("Error adding document: " + err.message);
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div>
      <h2>Create a Blog</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handlePost}>
        <div class="mb-3">
          {/* <label for="exampleInputEmail1" class="form-label">
            Email address
          </label> */}
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <textarea
          className="form-control"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          className="form-control"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input type="file" onChange={handleImageChange} accept="image/*" />
        <br />
        <button className="btn btn-primary" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
