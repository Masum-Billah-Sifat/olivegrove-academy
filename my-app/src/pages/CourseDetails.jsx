import React from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  return (
    <div className="course-wrapper">
      <aside className="course-sidebar">
        <div className="logo">🟢 Olivegrove<br /><span>Acciderity</span></div>
        <ul className="course-nav">
          <li className="active">Overview</li>
          <li>Lessons</li>
          <li>Quizzes</li>
          <li>Chatroom</li>
          <li>Ask AI</li>
          <li>Resources</li>
          <li>Progress</li>
          <li>Certificate</li>
        </ul>
      </aside>

      <main className="course-content">
        <div className="course-breadcrumb">Courses /</div>
        <h2 className="course-title">Course Title</h2>

        <div className="course-video-row">
          <div className="video-placeholder">▶</div>
          <div className="course-overview">
            <h4>Course Overview</h4>
            <p>Lorem ipsum dolor ssit tamer, consectetear adip scing eiti, Intvtium euismod viablesdifacc.</p>
          </div>
        </div>

        <div className="course-meta-row">
          <div>
            <h4>Syllabus</h4>
            <p>• Quiz name</p>
          </div>
          <div>
            <h4>Teachers</h4>
            <p>👤 Teacher Name</p>
            <p>👤 Teacher Name</p>
          </div>
        </div>

        <div className="course-grid">
          <div className="card">
            <h4>Your Progress</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
            <div className="progress-labels">
              <span>Current progress</span>
              <span>Goal</span>
            </div>
          </div>

          <div className="card">
            <h4>Daily Quiz</h4>
            <p>Join the discussion</p>
            <button className="btn">Start quiz</button>
          </div>

          <div className="card">
            <h4>Chatroom</h4>
            <p>Ask your discussion</p>
            <button className="btn">Open chat</button>
          </div>

          <div className="card">
            <h4>Ask AI</h4>
            <p>Ask your questions</p>
            <button className="btn">Ask now</button>
          </div>

          <div className="card resources">
            <h4>Resources</h4>
            <div className="resource-grid">
              <div className="resource-item">🖼️ Image</div>
              <div className="resource-item">🖼️ Image</div>
              <div className="resource-item">🖼️ Image</div>
            </div>
          </div>

          <div className="card">
            <h4>Certificate</h4>
            <div className="certificate-placeholder"></div>
            <button className="btn">Download</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;