# From Presidents to Presidents

A React web application exploring imagined letters from each U.S. president to their successor, followed by comprehensive historical analysis and sources.

## Project Overview

This React application combines historical research with creative writing to provide insights into the challenges, decisions, and legacies of each American presidency. Each president page includes:

- **Imagined Letters**: Creative reconstructions of what each president might have written to their successor
- **Historical Analysis**: Comprehensive examination of each presidency's impact and legacy
- **Biographical Information**: Key facts about each president's background and time in office
- **Major Milestones**: Important events and achievements during each presidency
- **Personal Life**: Details about family, character, and personal circumstances
- **Historical Legacy**: Lasting impact and influence on American history
- **Post-Presidency**: Life after office and final years
- **Sources**: Academic and historical references for further reading

## Features

- **Beautiful Book-like Interface**: Elegant typography and layout designed for reading
- **Chronological Navigation**: Seamless browsing between presidents with predecessor/successor links
- **Timeline View**: Chronological journey through American presidential history
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Search & Navigation**: Find presidents quickly and navigate between chapters

## Tech Stack

- **Frontend**: React, React Router
- **Styling**: Custom CSS with Google Fonts (Inter, Playfair Display)
- **Build Tool**: Create React App
- **Deployment**: Static site deployment (cPanel, Netlify, Vercel, etc.)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mirabelle514/letters-of-US-history.git
   cd letters-of-US-history/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The application will be running on `http://localhost:3000`

## Deployment to cPanel

### Step 1: Build the Production Version

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Build the production version:

   ```bash
   npm run build
   ```

This creates a `build` folder with optimized production files.

### Step 2: Upload to cPanel

1. **Access your cPanel** - Log into your hosting provider's cPanel
2. **Navigate to File Manager** - Go to the `public_html/frompresidentstopresidents.com` folder
3. **Upload the build folder contents** - Upload everything from the `frontend/build` folder:
   - `index.html`
   - `asset-manifest.json`
   - The entire `static` folder (with css and js subfolders)
4. **Important Notes:**
   - Upload all files to your domain's root directory
   - Make sure `index.html` is in the root
   - Keep the folder structure intact (static/css and static/js folders)

### Step 3: Handle React Router (Important!)

Since the app uses React Router, create a `.htaccess` file in your root directory with this content:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This ensures that React Router routes work properly when users navigate directly to URLs like `/presidents/George-Washington`.

### Alternative: Use cPanel's Git Integration

If your hosting provider supports it, you could also:

1. Connect your GitHub repository directly to cPanel
2. Set up automatic deployments when you push to main
3. Configure the build process in cPanel

## Content Structure

Each presidential page contains:

```javascript
{
  presidentNumber: 1,
  president: "George Washington",
  subheader: "The Founding Father",
  years: "1789-1797",
  predecessor: null,
  successor: "John Adams",
  disclaimer: {
    text: "This document is the verified original.",
    link: "https://example.com"
  },
  letter: {
    header: "Letter to John Adams",
    content: "The imagined letter content..."
  },
  biographical: ["Born February 22, 1732 in Virginia", ...],
  milestones: ["April 30, 1789: First inauguration...", ...],
  personalLife: ["Married Martha Dandridge Custis...", ...],
  impactAndLegacy: ["Holds enduring status...", ...],
  postPresidency: ["Washington's Farewell Address...", ...],
  historicalAnalysis: "Comprehensive historical analysis...",
  sources: ["Source 1", "Source 2", "Source 3"]
}
```

### Disclaimer Parameter (Optional)

The `disclaimer` parameter is completely optional and allows you to add a small note at the bottom of the letter section:

```javascript
// With link
disclaimer: {
  text: "This document is the verified original.",
  link: "https://archives.gov/example"
}

// Without link (text only)
disclaimer: {
  text: "This is a fictional letter for educational purposes"
}

// No disclaimer (omit the property entirely)
// Simply don't include the disclaimer property
```

**Features:**

- **Optional** - Not required, won't break anything if missing
- **Link support** - Can include an optional URL for verification
- **Styling** - Automatically styled as small, gray, italic text
- **Positioning** - Appears at the bottom of the letter section with a separator line

## Adding Content

To add or edit presidential content:

1. Navigate to `frontend/src/data/presidents/`
2. Edit the corresponding president file (e.g., `georgeWashington.jsx`)
3. Update the content sections as needed
4. Add predecessor and successor fields for navigation
5. Rebuild and deploy the application

### Using the Style Template

The application includes a Style Template component to help you format text content with proper styling. Access it at `/style-template` in your development environment.

#### Text Formatting Tags

Use these tags in your `historicalAnalysis` content for rich formatting:

- `[BOLD]` - Makes text bold
- `[SECTION]` - Creates a section header with gold accent
- `[EMPHASIS]` - Emphasizes text in gold color
- `[QUOTE]` - Creates a quoted text block with border
- `[BREAK]` - Adds a horizontal line separator
- `[DIVIDER]` - Creates a centered divider with optional text
- `[LINK:URL|Text]` - Creates a clickable link to external sources

#### Automatic Header Detection

Text that matches the pattern "Title Case Words" will automatically be detected as headers:

```jsx
Economic Prosperity and Fiscal Policy
This will automatically be detected as a header

Regular paragraph text continues normally...
```

#### Example Usage

```javascript
historicalAnalysis: `[BOLD]This text will be bold

[SECTION]This will be a section header

[EMPHASIS]This will be emphasized in gold

[QUOTE]This will appear as a quote with a border

[BREAK]This creates a horizontal line

[DIVIDER]This creates a centered divider

You can also add [LINK:https://www.whitehouse.gov/about-the-white-house/presidents/george-washington/|links to external sources] like this.

Regular paragraph text continues normally...`
```

#### Tips for Content Creation

- Use `[BREAK]` to separate major sections
- Use `[EMPHASIS]` for important points
- Use `[QUOTE]` for memorable quotes or key statements
- Use ALL CAPS for automatic header detection
- Test your formatting in the Style Template before adding to president files

## Project Structure

```jsx
letters-of-US-history/
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main React app with routing
│   │   ├── presidents.js       # Presidents list
│   │   ├── components/
│   │   │   ├── presidents/     # President page components
│   │   │   │   ├── PresidentPage.js    # Generic president page component
│   │   │   │   ├── PresidentPage.css   # Styling for president pages
│   │   │   │   └── StyleTemplate.jsx   # Style template component
│   │   │   └── Footer.jsx      # Footer component
│   │   ├── data/
│   │   │   └── presidents/     # President data files
│   │   │       ├── index.js    # Exports all president data
│   │   │       ├── georgeWashington.jsx
│   │   │       ├── johnAdams.jsx
│   │   │       └── ...         # All other presidents
│   │   └── index.css           # Global styling
│   ├── public/
│   └── package.json
└── README.md
```

## Presidents Components

The application uses React components for displaying individual president pages with the following structure:

### Component Features

- **Navigation**: Previous/Next President buttons, Timeline view, All Presidents grid, Back button
- **Content Sections**:
  - Letter to successor
  - Biographical & Presidency Facts
  - Major Dates & Milestones
  - Personal Life
  - Historical Legacy
  - Post-Presidency & Death
  - Historical Analysis
  - Sources
- **Responsive Design**: Mobile-friendly layout with elegant typography and smooth animations

### Chronological Navigation

Each president page includes a "Presidential Timeline" navigation section at the bottom with:

- **Previous President**: Navigate to the predecessor (orange button)
- **All Presidents**: Return to the main grid view (purple button)
- **Timeline**: View chronological timeline (dark gray button)
- **Next President**: Navigate to the successor (green button)

This allows users to seamlessly browse through presidents in chronological order, with special handling for the first president (no predecessor) and current president (no successor).

### URL Structure

President pages are accessed via `/presidents/:name` routes:

- `/presidents/George Washington`
- `/presidents/John Adams`
- `/presidents/Thomas Jefferson`
- etc.

### Fallback System

If a specific president component doesn't exist, the application falls back to the generic `PresidentPage.js` component, ensuring all presidents are accessible.

### Development Tools

- **Style Template**: Available at `/template` for development purposes (hidden from public navigation)
- **Responsive Design**: Mobile-optimized with touch-friendly navigation
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Historical research and analysis
- Creative writing and letter composition
- Web development and design
- American presidential history scholarship
