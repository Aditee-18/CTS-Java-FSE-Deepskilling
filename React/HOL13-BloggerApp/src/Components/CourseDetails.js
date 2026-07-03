import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "React Fundamentals", duration: "4 Weeks", fee: "$199" },
    { id: 2, name: "Advanced JavaScript", duration: "6 Weeks", fee: "$299" },
    { id: 3, name: "Node.js Backend", duration: "8 Weeks", fee: "$349" },
    { id: 4, name: "Full Stack Development", duration: "12 Weeks", fee: "$599" },
    { id: 5, name: "Python for Data Science", duration: "10 Weeks", fee: "$449" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Course Details</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#e3f2fd" }}>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Course Name</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Duration</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Fee</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{course.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{course.duration}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{course.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseDetails;
