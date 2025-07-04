import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { presidents } from './presidents';
import AdminPanel from './AdminPanel';

// Navigation Component
function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">Letters of US History</Link>
        <ul className="nav-links">
          <li><Link to="/">All Presidents</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
}

// Presidents List Component
function PresidentsList() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

    useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/chapters');
        setChapters(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch presidents');
        setLoading(false);
      }
    };
    fetchChapters();
  }, []);

  if (loading) return <div className="loading">Loading presidents...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="book-container">
      <div className="book-header">
        <h1>Letters of US History</h1>
        <p>Imagined letters from each U.S. president to their successor, followed by comprehensive historical analysis</p>
      </div>
      
      <div className="book-content">
        <div className="presidents-grid">
          {presidents.map((president) => {
            const chapter = chapters.find(ch => ch.president === president);
            const hasContent = chapter && chapter.letterContent && 
              !chapter.letterContent.includes('[Content to be added');
            
            return (
              <Link 
                key={president} 
                to={`/presidents/${encodeURIComponent(president)}`}
                className="president-card"
              >
                <h3>{president}</h3>
                <p>{chapter?.presidencyYears || 'Years in office'}</p>
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
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/chapters');
        setChapters(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchChapters();
  }, []);

  if (loading) return <div className="loading">Loading timeline...</div>;

  return (
    <div className="book-container">
      <div className="book-header">
        <h1>Presidential Timeline</h1>
        <p>Chronological journey through American presidential history</p>
      </div>
      
      <div className="book-content">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {chapters.map((chapter, index) => (
            <div key={chapter._id} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '2rem',
              padding: '1rem',
              background: 'var(--background-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'var(--accent-color)', 
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: '600',
                marginRight: '1.5rem',
                flexShrink: 0
              }}>
                {index + 1}
              </div>
        <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{chapter.president}</h3>
                <p style={{ margin: '0', color: 'var(--text-secondary)' }}>
                  {chapter.presidencyYears} • Successor: {chapter.successor}
                </p>
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
            "Letters of US History" is a unique exploration of American presidential history through 
            imagined letters from each U.S. president to their successor. This project combines 
            historical research with creative writing to provide insights into the challenges, 
            decisions, and legacies of each administration.
          </p>
          
          <h3>What You'll Find</h3>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
            <li><strong>Imagined Letters:</strong> Creative reconstructions of what each president might have written to their successor</li>
            <li><strong>Historical Analysis:</strong> Comprehensive examination of each presidency's impact and legacy</li>
            <li><strong>Key Themes:</strong> Identification of major issues and challenges faced during each administration</li>
            <li><strong>Historical Context:</strong> Background information to understand the era and circumstances</li>
            <li><strong>Sources:</strong> Academic and historical references for further reading</li>
          </ul>
          
          <h3>Methodology</h3>
          <p>
            Each letter is crafted based on extensive historical research, including presidential 
            papers, contemporary accounts, and modern historical analysis. The content reflects 
            the actual challenges, decisions, and concerns of each administration while imagining 
            the personal reflections that might have been shared in private correspondence.
          </p>
        </div>
      </div>
    </div>
  );
}

// President Page Component
function PresidentPage() {
  const { name } = useParams();
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:3001/api/chapters/president/${encodeURIComponent(name)}`);
        setChapter(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch chapter');
        setLoading(false);
      }
    };
    fetchChapter();
  }, [name]);

  const getCurrentPresidentIndex = () => {
    return presidents.findIndex(p => p === name);
  };

  const getPreviousPresident = () => {
    const currentIndex = getCurrentPresidentIndex();
    return currentIndex > 0 ? presidents[currentIndex - 1] : null;
  };

  const getNextPresident = () => {
    const currentIndex = getCurrentPresidentIndex();
    return currentIndex < presidents.length - 1 ? presidents[currentIndex + 1] : null;
  };

  if (loading) return <div className="loading">Loading chapter...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!chapter) return <div className="error">Chapter not found</div>;

  const hasContent = chapter.letterContent && !chapter.letterContent.includes('[Content to be added');

  return (
    <div className="book-container">
      <div className="book-header">
        <h1>{chapter.president}</h1>
        <p>{chapter.presidencyYears} • Successor: {chapter.successor}</p>
      </div>
      
      <div className="book-content">
        <button onClick={() => navigate('/')} className="btn btn-back">
          ← Back to Presidents
        </button>

        {/* Timeline Navigation */}
        <div className="timeline-nav">
          <button 
            onClick={() => navigate(`/presidents/${encodeURIComponent(getPreviousPresident())}`)}
            disabled={!getPreviousPresident()}
          >
            ← {getPreviousPresident() || 'First President'}
          </button>
          <span style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-color)' }}>
            {chapter.presidencyYears}
          </span>
          <button 
            onClick={() => navigate(`/presidents/${encodeURIComponent(getNextPresident())}`)}
            disabled={!getNextPresident()}
          >
            {getNextPresident() || 'Current President'} →
          </button>
        </div>

        {hasContent ? (
          <>
            {/* Historical Context */}
            {chapter.historicalContext && (
              <div className="chapter-section">
                <h2>Historical Context</h2>
                <p>{chapter.historicalContext}</p>
              </div>
            )}

            {/* The Letter */}
            <div className="chapter-section">
              <h2>{chapter.letterTitle}</h2>
              <div className="letter-content">
                {chapter.letterContent}
              </div>
            </div>

            {/* Historical Analysis */}
            <div className="chapter-section">
              <h2>Historical Analysis</h2>
              <div className="historical-analysis">
                {chapter.historicalAnalysis}
              </div>
            </div>

            {/* Key Themes */}
            {chapter.keyThemes && chapter.keyThemes.length > 0 && (
              <div className="chapter-section">
                <h2>Key Themes</h2>
                <div className="themes-section">
                  {chapter.keyThemes.map((theme, index) => (
                    <span key={index} className="theme-tag">{theme}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Sources */}
            {chapter.sources && chapter.sources.length > 0 && (
              <div className="chapter-section">
                <h2>Sources</h2>
                <div className="sources-section">
                  <ul className="sources-list">
                    {chapter.sources.map((source, index) => (
                      <li key={index}>{source}</li>
        ))}
      </ul>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="placeholder">
            <h2>Content Coming Soon</h2>
            <p>
              The imagined letter from {chapter.president} to {chapter.successor} 
              is currently being researched and written. Check back soon for this 
              fascinating piece of historical imagination.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              This will include the imagined letter, comprehensive historical analysis, 
              key themes, and academic sources.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PresidentsList />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/presidents/:name" element={<PresidentPage />} />
      </Routes>
    </Router>
  );
}

export default App;

