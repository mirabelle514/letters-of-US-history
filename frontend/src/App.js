import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { presidents } from './presidents';
import PresidentPage from './components/presidents/PresidentPage';
import StyleTemplate from './components/presidents/StyleTemplate';
import { allPresidents } from './data/presidents';
import Footer from './components/Footer';

// Navigation Component
function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">From Presidents to Presidents</Link>
        <ul className="nav-links">
          <li><Link to="/">All Presidents</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/template">Style Template</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

// Presidents List Component
function PresidentsList() {
  const chapters = allPresidents;

  return (
    <div className="book-container">
      <div className="book-header">
        <h1>From Presidents to Presidents</h1>
        <p>Imagined letters from each U.S. president to their successor, accompanied by 
          comprehensive historical analysis. Each page features biographical information, 
          major milestones, personal life details, historical legacy, and detailed analysis.</p>
      </div>
      <div className="book-content">
        <div className="presidents-grid">
          {presidents.map((president) => {
            const chapter = chapters.find(ch => ch.president === president);
            const hasContent = chapter && chapter.letter && chapter.letter.content && !chapter.letter.content.includes('[Letter content to be added]');
            return (
              <Link 
                key={president} 
                to={`/presidents/${encodeURIComponent(president)}`}
                className="president-card"
              >
                <h3>{president}</h3>
                {chapter?.subheader && (
                  <p className="president-subheader">{chapter.subheader}</p>
                )}
                <p>{chapter?.years || 'Years in office'}</p>
                {hasContent ? (
                  <p style={{ color: 'var(--accent-color)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    ✓ Content Available
                  </p>
                ) : (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    Coming Soon
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Timeline Component
function Timeline() {
  const chapters = allPresidents;

  return (
    <div className="book-container">
      <div className="book-header">
        <h1>Presidential Timeline</h1>
        <p>Chronological journey through American presidential history</p>
      </div>
      <div className="book-content">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {chapters.map((chapter, index) => (
            <div key={chapter.president} className="timeline-item">
              <div className="timeline-number">
                {index + 1}
              </div>
              <div className="timeline-content">
                <h3>{chapter.president}</h3>
                <p>{chapter.years}</p>
              </div>
              <Link 
                to={`/presidents/${encodeURIComponent(chapter.president)}`}
                className="btn btn-primary"
              >
                Read
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="book-container">
      <div className="book-header">
        <h1>About This Project</h1>
        <p>Exploring American history through imagined presidential correspondence</p>
      </div>
      <div className="book-content">
        <div className="chapter-section">
          <h2>Project Overview</h2>
          <p>
            "From Presidents to Presidents" is my unique exploration of American presidential history through imagined letters from each U.S. president to their successor. This project combines historical research with creative writing to provide insights into the challenges, decisions, and legacies of each administration.
          </p>
          <h3>What You'll Find</h3>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li><strong>Imagined Letters:</strong> Creative reconstructions of what each president might have written to their successor</li>
            <li><strong>Biographical & Presidency Facts:</strong> Key information about each president's background and time in office</li>
            <li><strong>Major Dates & Milestones:</strong> Important events and achievements during each presidency</li>
            <li><strong>Personal Life:</strong> Details about family, character, and personal circumstances</li>
            <li><strong>Historical Legacy:</strong> Lasting impact and influence on American history</li>
            <li><strong>Post-Presidency & Death:</strong> Life after office and final years</li>
            <li><strong>Historical Analysis:</strong> Comprehensive examination of each presidency's significance</li>
            <li><strong>Sources:</strong> Academic and historical references for further reading</li>
          </ul>
          <h3>Methodology</h3>
          <p>
            Each letter is crafted based on historical research, including presidential papers, contemporary accounts, and modern historical analysis. The content reflects the actual challenges, decisions, and concerns of each administration while imagining the personal reflections that might have been shared in private correspondence.
          </p>
        </div>
      </div>
    </div>
  );
}

// President Page Wrapper Component
function PresidentPageWrapper() {
  const { name } = useParams();
  const navigate = useNavigate();
  const president = {
    id: name,
    name: decodeURIComponent(name)
  };
  const handleBack = () => {
    navigate('/');
  };
  return <PresidentPage president={president} onBack={handleBack} />;
}

// Main App Component
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PresidentsList />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/template" element={<StyleTemplate />} />
        <Route path="/about" element={<About />} />
        <Route path="/presidents/:name" element={<PresidentPageWrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

