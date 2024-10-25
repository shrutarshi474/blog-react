// src/components/Home.js
import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "../bootstrap.min.css";
import Button from "react-bootstrap/Button";
import LandingPage from "./frontend/LandingPage";
import "./App.css";
function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app-background">
      <LandingPage />
      <h2 className="text">All Blogs</h2>
      <div className="container text-center">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col">
              <div key={blog.id}>
                <div class="card" style={{ width: "18rem" }}>
                  {blog.imageUrl && (
                    <img
                      className="card-img-top"
                      src={blog.imageUrl}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  {/* <img src="..." class="card-img-top" alt="..."/> */}
                  <div className="card-body">
                    <h5 className="card-title">
                      <h3>{blog.title}</h3>
                    </h5>
                    <p className="card-text">
                      <p>{blog.content}</p>
                    </p>
                    <p className="card-text">
                      <p>By {blog.author}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
