import React, { useState } from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function renderWithIfElse(activeTab) {
  if (activeTab === "books") {
    return <BookDetails />;
  } else if (activeTab === "blogs") {
    return <BlogDetails />;
  } else if (activeTab === "courses") {
    return <CourseDetails />;
  } else {
    return <p>Please select a tab above.</p>;
  }
}

function renderWithTernary(activeTab) {
  return activeTab === "books" ? (
    <BookDetails />
  ) : activeTab === "blogs" ? (
    <BlogDetails />
  ) : activeTab === "courses" ? (
    <CourseDetails />
  ) : (
    <p>Please select a tab above.</p>
  );
}

function renderWithAnd(activeTab) {
  return (
    <div>
      {activeTab === "books" && <BookDetails />}
      {activeTab === "blogs" && <BlogDetails />}
      {activeTab === "courses" && <CourseDetails />}
    </div>
  );
}

function renderWithSwitch(activeTab) {
  switch (activeTab) {
    case "books":
      return <BookDetails />;
    case "blogs":
      return <BlogDetails />;
    case "courses":
      return <CourseDetails />;
    default:
      return <p>Please select a tab above.</p>;
  }
}

function App() {
  const [activeTab, setActiveTab] = useState("books");
  const [renderMethod, setRenderMethod] = useState("ifelse");

  const tabStyle = (tab) => ({
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: activeTab === tab ? "#4CAF50" : "#e0e0e0",
    color: activeTab === tab ? "white" : "black",
    border: "none",
    borderRadius: "5px",
    marginRight: "10px",
    fontSize: "14px",
  });

  const methodStyle = (method) => ({
    padding: "6px 14px",
    cursor: "pointer",
    backgroundColor: renderMethod === method ? "#2196F3" : "#e0e0e0",
    color: renderMethod === method ? "white" : "black",
    border: "none",
    borderRadius: "3px",
    marginRight: "8px",
    fontSize: "12px",
  });

  const getRenderedContent = () => {
    switch (renderMethod) {
      case "ifelse":
        return renderWithIfElse(activeTab);
      case "ternary":
        return renderWithTernary(activeTab);
      case "and":
        return renderWithAnd(activeTab);
      case "switch":
        return renderWithSwitch(activeTab);
      default:
        return renderWithIfElse(activeTab);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Blogger App</h1>

      <div style={{ marginBottom: "15px" }}>
        <h3>Select Content:</h3>
        <button style={tabStyle("books")} onClick={() => setActiveTab("books")}>
          Books
        </button>
        <button style={tabStyle("blogs")} onClick={() => setActiveTab("blogs")}>
          Blogs
        </button>
        <button style={tabStyle("courses")} onClick={() => setActiveTab("courses")}>
          Courses
        </button>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <h3>Conditional Rendering Method:</h3>
        <button style={methodStyle("ifelse")} onClick={() => setRenderMethod("ifelse")}>
          If/Else
        </button>
        <button style={methodStyle("ternary")} onClick={() => setRenderMethod("ternary")}>
          Ternary
        </button>
        <button style={methodStyle("and")} onClick={() => setRenderMethod("and")}>
          && Operator
        </button>
        <button style={methodStyle("switch")} onClick={() => setRenderMethod("switch")}>
          Switch Case
        </button>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <p style={{ fontSize: "12px", color: "#666" }}>
          Rendering using: <strong>{renderMethod}</strong>
        </p>
        {getRenderedContent()}
      </div>
    </div>
  );
}

export default App;
