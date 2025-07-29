import React from 'react';
import './Home.css';

const mockCourses = [
  { title: 'Introduction to Programming', category: 'Computer Science', progress: 75 },
  { title: 'Physics 101', category: 'Physics', progress: 50 },
  { title: 'Graphic Design Basics', category: 'Design', progress: 50 },
  { title: 'World History', category: 'History', progress: 90 },
];

const featured = [
  { title: 'Data Structures and Algorithms', category: 'Computer Science' },
  { title: 'Introduction to Philosophy', category: 'Philosophy' },
  { title: 'Web Development Fundamentals', category: 'Web Development' },
  { title: 'Marketing Strategies', category: 'Business' },
];

const recommended = [
  { title: 'Mobile App Development', category: 'Software Development' },
  { title: 'Creative Writing Workshop', category: 'Writing' },
  { title: 'Artificial Intelligence', category: 'Computer Science' },
  { title: 'Environmental Science', category: 'Science' },
];

const CourseCard = ({ title, category, progress }) => (
  <div className="course-card">
    <div className="course-title">{title}</div>
    <div className="course-category">{category}</div>
    {progress !== undefined && (
      <>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-footer">
          <span>{progress}%</span>
          <button className="resume-btn">Resume</button>
        </div>
      </>
    )}
  </div>
);

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="logo">🎓 Home</div>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Profile</a>
          <a href="#">Help</a>
          <button className="resume-header-btn">Resume Learning</button>
        </nav>
      </header>

      <div className="notification-banner">
        📢 You have a quiz due today in <strong>Physics 101</strong>
      </div>

      <section className="section">
        <h3>Enrolled Courses</h3>
        <div className="course-grid">
          {mockCourses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Featured Courses</h3>
        <div className="course-grid">
          {featured.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Recommended for You</h3>
        <div className="course-grid">
          {recommended.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
