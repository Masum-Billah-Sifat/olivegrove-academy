import React from 'react';
import './dashboard.css'; // Ensure this file uses the latest structure we just refined

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Student Dashboard</h2>
        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Courses</li>
          <li>Quizzes</li>
          <li>Schedule</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Header */}
        <div className="header-bar">
          <h1>Student Dashboard</h1>
          <button className="edit-btn">📎 Add/Update</button>
        </div>

        {/* Row 1: Profile, Graph, Quiz Stats, Schedule */}
        <div className="dashboard-row">
          {/* Profile Card */}
          <div className="card profile-card">
            <h4>Profile Details</h4>
            <div className="profile-info">
              <div className="avatar"></div>
              <div>
                <div className="name">John Doe</div>
                <div className="email">john.doe@example.com</div>
              </div>
            </div>
          </div>

          {/* Graph Card */}
          <div className="card">
            <h4>Progress Graphs</h4>
            <div className="graph-placeholder">📈</div>
            <div className="graph-labels">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Jun</span>
            </div>
          </div>

          {/* Quiz Stats */}
          <div className="card">
            <h4>Quiz Stats</h4>
            <div className="stats">
              <div>
                <strong>86%</strong>
                <div>Accuracy</div>
              </div>
              <div>
                <strong>24</strong>
                <div>Quizzes Attempt</div>
              </div>
            </div>
            <div className="attempt-history">📊 Attempt History</div>
          </div>

          {/* Schedule */}
          <div className="card">
            <h4>Schedule Summary</h4>
            <p><strong>Next Class:</strong> Today, 4:00 PM</p>
            <p><strong>Missed Tasks:</strong> 2 overdue</p>
          </div>
        </div>

        {/* Row 2: Certificates */}
        <div className="dashboard-row">
          <div className="card">
            <h4>Certificates</h4>
            <div className="cert-placeholder">📄 Certificate 1</div>
            <div className="cert-placeholder">📄 Certificate 2</div>
            <div className="cert-placeholder">📄 Certificate 3</div>
            <div className="view-all">View all</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
