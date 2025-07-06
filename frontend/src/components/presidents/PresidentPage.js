import React from 'react';
import '../presidents/PresidentPage.css';
import { allPresidents } from '../../data/presidents';
import { Link } from 'react-router-dom';

const PresidentPage = ({ president, onBack }) => {
  const chapter = allPresidents.find(ch => ch.president === president.name);

  if (!chapter) {
    return (
      <div className="president-page">
        <div className="error-container">
          <h2>Chapter Not Found</h2>
          <p>No content available for {president.name}.</p>
          <button onClick={onBack} className="back-button">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="president-page">
      <nav className="president-nav">
        <button onClick={onBack} className="nav-menu-item">
          &larr; Back to Timeline
        </button>
      </nav>
      <div className="president-header">
        <div className="president-info">
          <h1>{chapter.president}</h1>
          {chapter.presidentNumber && (
            <p className="president-number">{chapter.presidentNumber}th President of the United States</p>
          )}
          {chapter.subheader && (
            <p className="president-subheader">{chapter.subheader}</p>
          )}
          <p className="president-years">{chapter.years}</p>
        </div>
      </div>

      {/* Simple Navigation Links */}
      <div className="simple-nav-links">
        <div className="nav-links-container">
          {chapter.predecessor ? (
            <Link 
              to={`/presidents/${encodeURIComponent(chapter.predecessor)}`}
              className="nav-link prev-link"
            >
              ← {chapter.predecessor}
            </Link>
          ) : (
            <span className="nav-link disabled">← No Predecessor</span>
          )}
          
          {chapter.successor ? (
            <Link 
              to={`/presidents/${encodeURIComponent(chapter.successor)}`}
              className="nav-link next-link"
            >
              {chapter.successor} →
            </Link>
          ) : (
            <span className="nav-link disabled">No Successor →</span>
          )}
        </div>
      </div>

      <div className="content-container">
        {/* Letter Section */}
        <section className="letter-section">
          <h2>Letter to Successor</h2>
          <div className="letter-content">
            <div className="letter-body">
              {chapter.letter?.content ? (
                chapter.letter.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>Letter content not available.</p>
              )}
            </div>
            {chapter.disclaimer && (
              <div className="letter-disclaimer">
                {chapter.disclaimer.link ? (
                  <a 
                    href={chapter.disclaimer.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="disclaimer-link"
                  >
                    {chapter.disclaimer.text}
                  </a>
                ) : (
                  <span className="disclaimer-text">{chapter.disclaimer.text}</span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Biographical & Presidency Facts Section */}
        <section className="biographical-section">
          <h2>Biographical & Presidency Facts</h2>
          <div className="biographical-content">
            {chapter.biographical ? (
              Array.isArray(chapter.biographical) ? (
                <ul>
                  {chapter.biographical.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div dangerouslySetInnerHTML={{ 
                  __html: chapter.biographical
                }} />
              )
            ) : (
              <p>Biographical content not available.</p>
            )}
          </div>
        </section>

        {/* Major Dates & Milestones Section */}
        <section className="milestones-section">
          <h2>Major Dates & Milestones</h2>
          <div className="milestones-content">
            {chapter.milestones ? (
              Array.isArray(chapter.milestones) ? (
                <ul>
                  {chapter.milestones.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div dangerouslySetInnerHTML={{ 
                  __html: chapter.milestones
                }} />
              )
            ) : (
              <p>Major dates and milestones not available.</p>
            )}
          </div>
        </section>

        {/* Personal Life Section */}
        <section className="personal-life-section">
          <h2>Personal Life</h2>
          <div className="personal-life-content">
            {chapter.personalLife ? (
              Array.isArray(chapter.personalLife) ? (
                <ul>
                  {chapter.personalLife.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div dangerouslySetInnerHTML={{ 
                  __html: chapter.personalLife
                }} />
              )
            ) : (
              <p>Personal life information not available.</p>
            )}
          </div>
        </section>

        {/* Historical Legacy Section */}
        <section className="legacy-section">
          <h2>Historical Legacy</h2>
          <div className="legacy-content">
            {chapter.impactAndLegacy ? (
              Array.isArray(chapter.impactAndLegacy) ? (
                <ul>
                  {chapter.impactAndLegacy.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div dangerouslySetInnerHTML={{ 
                  __html: chapter.impactAndLegacy
                }} />
              )
            ) : (
              <p>Historical legacy information not available.</p>
            )}
          </div>
        </section>

        {/* Post-Presidency & Death Section */}
        <section className="post-presidency-section">
          <h2>Post-Presidency & Death</h2>
          <div className="post-presidency-content">
            {chapter.postPresidency ? (
              Array.isArray(chapter.postPresidency) ? (
                <ul>
                  {chapter.postPresidency.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div dangerouslySetInnerHTML={{ 
                  __html: chapter.postPresidency
                }} />
              )
            ) : (
              <p>Post-presidency information not available.</p>
            )}
          </div>
        </section>

        {/* Historical Analysis Section */}
        <section className="analysis-section">
          <h2>Historical Analysis</h2>
          <div className="analysis-content">
            {chapter.historicalAnalysis ? (
              <div dangerouslySetInnerHTML={{ 
                __html: chapter.historicalAnalysis
                  .split('\n\n')
                  .map(paragraph => {
                    // Check if paragraph starts with a section header pattern
                    if (paragraph.match(/^[A-Z][a-zA-Z\s]+$/)) {
                      return `<p class="text-header">${paragraph}</p>`;
                    }
                    // Check for other formatting patterns
                    if (paragraph.includes('[BOLD]')) {
                      return `<p class="text-bold">${paragraph.replace(/\[BOLD\]/g, '')}</p>`;
                    }
                    if (paragraph.includes('[SECTION]')) {
                      return `<p class="text-section">${paragraph.replace(/\[SECTION\]/g, '')}</p>`;
                    }
                    if (paragraph.includes('[EMPHASIS]')) {
                      return `<p class="text-emphasis">${paragraph.replace(/\[EMPHASIS\]/g, '')}</p>`;
                    }
                    if (paragraph.includes('[QUOTE]')) {
                      return `<p class="text-quote">${paragraph.replace(/\[QUOTE\]/g, '')}</p>`;
                    }
                    if (paragraph.includes('[BREAK]')) {
                      return `<div class="text-break"></div>`;
                    }
                    if (paragraph.includes('[DIVIDER]')) {
                      const text = paragraph.replace(/\[DIVIDER\]/g, '').trim();
                      return `<div class="text-divider"><span>${text || '•'}</span></div>`;
                    }
                    // Process links in the paragraph
                    const processedParagraph = paragraph.replace(/\[LINK:([^\]]+)\|([^\]]+)\]/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-link">$2</a>');
                    return `<p>${processedParagraph}</p>`;
                  })
                  .join('')
              }} />
            ) : (
              <p>Historical analysis not available.</p>
            )}
          </div>
        </section>

        {/* Sources Section */}
        {chapter.sources && chapter.sources.length > 0 && (
          <section className="sources-section">
            <h2>Sources</h2>
            <div className="sources-list">
              {chapter.sources.map((source, index) => (
                <div key={index} className="source-item">
                  <div dangerouslySetInnerHTML={{ 
                    __html: source.replace(/\[LINK:([^\]]+)\|([^\]]+)\]/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-link">$2</a>')
                  }} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default PresidentPage; 