import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Blogger & Learning Portal</h1>
      <div className="layout">
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </div>
    </div>
  );
}

export default App;
