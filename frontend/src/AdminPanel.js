import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { presidents } from './presidents';

function AdminPanel() {
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [form, setForm] = useState({
    president: '',
    successor: '',
    letterTitle: '',
    letterContent: '',
    historicalAnalysis: '',
    sources: [],
    keyThemes: [],
    historicalContext: '',
    presidencyYears: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchChapters();
  }, []);

  const fetchChapters = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/chapters');
      setChapters(res.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch chapters');
      setLoading(false);
    }
  };

  const handleSelect = (chapter) => {
    setSelectedChapter(chapter);
    setForm({
      president: chapter.president || '',
      successor: chapter.successor || '',
      letterTitle: chapter.letterTitle || '',
      letterContent: chapter.letterContent || '',
      historicalAnalysis: chapter.historicalAnalysis || '',
      sources: chapter.sources || [],
      keyThemes: chapter.keyThemes || [],
      historicalContext: chapter.historicalContext || '',
      presidencyYears: chapter.presidencyYears || ''
    });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleArrayChange = (field, value) => {
    const items = value.split('\n').filter(item => item.trim());
    setForm({ ...form, [field]: items });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing && selectedChapter) {
        const res = await axios.put(
          `http://localhost:3001/api/chapters/${selectedChapter._id}`,
          form
        );
        setChapters(chapters.map(ch => ch._id === selectedChapter._id ? res.data : ch));
        setSelectedChapter(res.data);
      } else {
        const res = await axios.post('http://localhost:3001/api/chapters', form);
        setChapters([...chapters, res.data]);
        setForm({
          president: '',
          successor: '',
          letterTitle: '',
          letterContent: '',
          historicalAnalysis: '',
          sources: [],
          keyThemes: [],
          historicalContext: '',
          presidencyYears: ''
        });
      }
      setError('');
    } catch (err) {
      setError('Failed to save chapter');
    }
  };

  const handleNew = () => {
    setSelectedChapter(null);
    setForm({
      president: '',
      successor: '',
      letterTitle: '',
      letterContent: '',
      historicalAnalysis: '',
      sources: [],
      keyThemes: [],
      historicalContext: '',
      presidencyYears: ''
    });
    setIsEditing(false);
  };

  if (loading) return <div className="loading">Loading admin panel...</div>;

  return (
    <div className="book-container">
      <div className="book-header">
        <h1>Admin Panel</h1>
        <p>Add and edit presidential content</p>
      </div>
      
      <div className="book-content">
        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Chapters List */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2>Chapters</h2>
              <button onClick={handleNew} className="btn btn-primary">New Chapter</button>
            </div>
            
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {chapters.map((chapter) => (
                <div
                  key={chapter._id}
                  onClick={() => handleSelect(chapter)}
                  style={{
                    padding: '1rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    marginBottom: '0.5rem',
                    cursor: 'pointer',
                    background: selectedChapter && selectedChapter._id === chapter._id ? 'var(--accent-color)' : 'var(--background-secondary)',
                    color: selectedChapter && selectedChapter._id === chapter._id ? 'white' : 'inherit'
                  }}
                >
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{chapter.president}</h3>
                  <p style={{ margin: '0', fontSize: '0.9rem', opacity: 0.8 }}>
                    {chapter.presidencyYears} • {chapter.successor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ flex: 2 }}>
            <h2>{isEditing ? 'Edit Chapter' : 'New Chapter'}</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label>President:</label>
                  <input
                    name="president"
                    value={form.president}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                  />
                </div>
                <div>
                  <label>Successor:</label>
                  <input
                    name="successor"
                    value={form.successor}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                  />
                </div>
              </div>

              <div>
                <label>Presidency Years:</label>
                <input
                  name="presidencyYears"
                  value={form.presidencyYears}
                  onChange={handleChange}
                  placeholder="e.g., 1789-1797"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                />
              </div>

              <div>
                <label>Letter Title:</label>
                <input
                  name="letterTitle"
                  value={form.letterTitle}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                />
              </div>

              <div>
                <label>Historical Context:</label>
                <textarea
                  name="historicalContext"
                  value={form.historicalContext}
                  onChange={handleChange}
                  rows={3}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                />
              </div>

              <div>
                <label>Letter Content:</label>
                <textarea
                  name="letterContent"
                  value={form.letterContent}
                  onChange={handleChange}
                  required
                  rows={8}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                />
              </div>

              <div>
                <label>Historical Analysis:</label>
                <textarea
                  name="historicalAnalysis"
                  value={form.historicalAnalysis}
                  onChange={handleChange}
                  required
                  rows={8}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                />
              </div>

              <div>
                <label>Key Themes (one per line):</label>
                <textarea
                  value={form.keyThemes.join('\n')}
                  onChange={(e) => handleArrayChange('keyThemes', e.target.value)}
                  rows={3}
                  placeholder="Theme 1&#10;Theme 2&#10;Theme 3"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                />
              </div>

              <div>
                <label>Sources (one per line):</label>
                <textarea
                  value={form.sources.join('\n')}
                  onChange={(e) => handleArrayChange('sources', e.target.value)}
                  rows={4}
                  placeholder="Source 1&#10;Source 2&#10;Source 3"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary">
                  {isEditing ? 'Update Chapter' : 'Create Chapter'}
                </button>
                {isEditing && (
                  <button type="button" onClick={handleNew} className="btn btn-secondary">
                    Cancel
                  </button>
                )}
              </div>
            </form>

            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel; 