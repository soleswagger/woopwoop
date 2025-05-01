"use client";
import { useState, useEffect } from "react";
import uploadData from "src/app/api/upload-stuff/upload";
import { useRouter } from "next/navigation";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    // This hook will run after the component is mounted on the client side
    // Any code that interacts with the browser (e.g., navigation, DOM manipulation) should go here
  }, []); // Empty dependency array ensures it runs only once, after initial render

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await uploadData(title, content);
    console.log(result); // Handle the result as needed
    router.push("/"); // Redirect to the home page after submission, not needed but good to have as example
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card bg-base-100 image-full w-96 shadow-xl">

<div className="card-body">
  <h2 className="card-title">Notes Title</h2>
      <input className=""
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      </div></div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">

<div className="card-body">
  <h2 className="card-title">Notes Content</h2>
  <figure>
  

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      </figure>
  <div className="card-actions justify-end">
  </div>
</div>
</div>

      <button className="btn btn-primary bg-cyan-500 hover:bg-green-600" type="submit">Upload</button>
    </form>
  );
}


import { db } from "~/server/db";
 import { posts } from "~/server/db/schema";
 
