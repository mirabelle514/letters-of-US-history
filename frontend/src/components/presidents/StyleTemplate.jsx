import React, { useState } from 'react';
import './StyleTemplate.css';

const StyleTemplate = () => {
  const [inputText, setInputText] = useState(`[BOLD]This text will be bold

[SECTION]This will be a section header

[EMPHASIS]This will be emphasized in gold

[QUOTE]This will appear as a quote with a border

[BREAK]This creates a horizontal line

[DIVIDER]This creates a centered divider

Domestic Policy and Federal Structure
This will automatically be detected as a header

Regular paragraph text continues normally...

George Washington's presidency fundamentally shaped the American executive office and established precedents that endure today..

Washington's administration focused heavily on establishing the federal government's authority and administrative structure..

[BREAK]

Foreign Policy and Neutrality
Washington's Proclamation of Neutrality in 1793 during the French Revolutionary Wars was crucial for the young nation..

[EMPHASIS]This is an important point that should be emphasized.

You can also add [LINK:https://www.whitehouse.gov/about-the-white-house/presidents/george-washington/|links to external sources] like this.

Political Legacy and Precedents
Washington's decision to step away from power solidified his legacy and had a powerful impact on the future of the presidency.

[QUOTE]All his successors, until Franklin D. Roosevelt, willingly followed his example of retiring after two terms.

Historical Assessment
George Washington's presidency has generally been viewed as one of the most successful, and he is often considered to be one of the three greatest American presidents ever.

---

Letter Example:
My Dear Successor,

As I take my final steps within these walls....

Your servant and friend, [President Name]`);

  const processText = (text) => {
    return text
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
      .join('');
  };

  return (
    <div className="style-template-page">
      {/* Header */}
      <div className="template-page-header">
        <div className="header-content">
          <h1>Style Template</h1>
          <p>Test and preview your text formatting styles for president content</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="template-page-content">
        <div className="template-grid">
          {/* Input Section */}
          <div className="input-panel">
            <div className="panel-header">
              <h2>Input Text</h2>
              <p>Edit your text with formatting tags below</p>
            </div>
            
            <div className="input-container">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text with formatting tags..."
                className="text-input"
              />
            </div>

            <div className="formatting-guide">
              <h3>Formatting Guide</h3>
              <ul>
                <li><code>[BOLD]</code> - Makes text bold</li>
                <li><code>[SECTION]</code> - Creates a section header</li>
                <li><code>[EMPHASIS]</code> - Emphasizes text in gold</li>
                <li><code>[QUOTE]</code> - Creates a quoted text block</li>
                <li><code>[BREAK]</code> - Adds a horizontal line</li>
                <li><code>[DIVIDER]</code> - Creates a centered divider</li>
                <li><code>[LINK:URL|Text]</code> - Creates a clickable link</li>
              </ul>
              <p><strong>Note:</strong> Text that matches the pattern "Title Case Words" will automatically be detected as headers.</p>
            </div>
          </div>

          {/* Preview Section */}
          <div className="preview-panel">
            <div className="panel-header">
              <h2>Live Preview</h2>
              <p>See how your content will appear on president pages</p>
            </div>
            
            <div className="preview-container">
              <div className="preview-content">
                <div 
                  className="analysis-content"
                  dangerouslySetInnerHTML={{ __html: processText(inputText) }}
                />
              </div>
            </div>

            <div className="preview-info">
              <h3>💡 Tips</h3>
              <ul>
                <li>Use <code>[BREAK]</code> to separate major sections</li>
                <li>Use <code>[EMPHASIS]</code> for important points</li>
                <li>Use <code>[QUOTE]</code> for memorable quotes or key statements</li>
                <li>Use ALL CAPS for automatic header detection</li>
                <li>Copy your formatted text to president data files when ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleTemplate; 