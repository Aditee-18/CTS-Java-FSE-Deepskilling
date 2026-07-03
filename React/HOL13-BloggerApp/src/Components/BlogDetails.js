import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "Getting Started with React", content: "React is a JavaScript library for building user interfaces.", author: "John Doe" },
    { id: 2, title: "Understanding JSX", content: "JSX is a syntax extension for JavaScript used with React.", author: "Jane Smith" },
    { id: 3, title: "State and Props", content: "State and props are core concepts in React component architecture.", author: "Bob Wilson" },
    { id: 4, title: "React Hooks", content: "Hooks let you use state and other React features without writing a class.", author: "Alice Brown" },
    { id: 5, title: "Component Lifecycle", content: "Understanding lifecycle methods helps manage side effects in components.", author: "Charlie Davis" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px",
            backgroundColor: "#fff3e0",
          }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p><strong>Author:</strong> {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
