# From Presidents to Presidents

Hey there! This is my React web app where I imagined what each U.S. president would write to their successor. It's basically a creative history project that combines my love for American history with some creative writing.

## What This Project Is

So I built this React app that explores the transition of power between presidents through imagined letters. Each president page has:

- **The Letter**: My creative take on what each president might have written to their successor
- **Historical Analysis**: My deep dive into each presidency's impact and legacy
- **Biographical Info**: Key facts about each president's background and time in office
- **Major Milestones**: Important events and achievements during each presidency
- **Personal Life**: Details about family, character, and personal circumstances
- **Historical Legacy**: Lasting impact and influence on American history
- **Post-Presidency**: Life after office and final years
- **Sources**: Academic and historical references I used for research

## Cool Features I Built

- **Book-like Interface**: I designed it to feel like you're reading a beautiful history book
- **Chronological Navigation**: You can seamlessly browse between presidents with predecessor/successor links
- **Timeline View**: A chronological journey through American presidential history
- **Responsive Design**: Works great on desktop, tablet, and mobile
- **Search & Navigation**: Find presidents quickly and navigate between chapters

## Tech Stuff I Used

- **Frontend**: React, React Router
- **Styling**: Custom CSS with Google Fonts (Inter, Playfair Display)
- **Build Tool**: Create React App
- **Deployment**: Static site deployment (cPanel, Netlify, Vercel, etc.)

## Getting Started (For Future Me)

### What You Need

- Node.js (v14 or higher)
- npm or yarn

### Setting Up Development

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

The app will be running on `http://localhost:3000`

## Deploying to cPanel (For When I Need to Update the Live Site)

When I want to update the live website, I need to build the React app and upload it to cPanel.

First, build the production version:

```bash
cd frontend && npm run build
```

Check what files were created:

```bash
ls -la build/
```

## **Step 1: Access cPanel**

1. Log into my hosting provider's cPanel
2. Navigate to the **File Manager**

## **Step 2: Find My Website Directory**

1. In File Manager, go to my website's root directory (usually `public_html` or my domain folder)
2. Make sure I'm in the correct directory where my website files are located

## **Step 3: Upload the Build Files**

I have a few options for uploading:

### **Option A: Upload via File Manager**

1. In cPanel File Manager, click **Upload**
2. Upload all files from my `build/` folder:
   - `index.html`
   - `asset-manifest.json`
   - The entire `static/` folder

### **Option B: Upload via FTP/SFTP**

1. Use an FTP client like FileZilla
2. Connect to my hosting server
3. Upload the contents of the `build/` folder to my website directory

### **Option C: Use the ZIP file I created**

I already created a ZIP file:

```bash
cd build && zip -r ../website-build.zip .
```

This creates `website-build.zip` in the frontend directory.

## **Step 4: Upload to cPanel**

1. **Go to my cPanel File Manager**
2. **Navigate to my website directory** (usually `public_html`)
3. **Upload the ZIP file**:
   - Click "Upload" in File Manager
   - Upload the `website-build.zip` file from my frontend directory
4. **Extract the ZIP file**:
   - Right-click the uploaded ZIP file
   - Select "Extract"
   - Extract to my website root directory

## **Step 5: Configure for Single Page Application (SPA)**

Since this is a React app with client-side routing, I need a `.htaccess` file to handle routing properly. I already created one:

```bash
cp ../.htaccess . && cd .. && cd build && zip -r ../website-build-with-htaccess.zip .
```

I have two ZIP files ready:

## **Files Ready for Upload:**

1. **`website-build.zip`** - Basic build files
2. **`website-build-with-htaccess.zip`** - Build files + .htaccess for proper routing

## **Complete Deployment Steps:**

### **1. Upload to cPanel:**

- Go to my cPanel File Manager
- Navigate to my website directory (`public_html` or my domain folder)
- Upload `website-build-with-htaccess.zip`
- Extract the ZIP file in my website root directory

### **2. Verify the Upload:**

After extraction, I should see:

- `index.html`
- `asset-manifest.json`
- `static/` folder
- `.htaccess` file

### **3. Test My Website:**

- Visit my domain to make sure everything works
- Test the navigation between presidents
- Check that the new footer styling is applied
- Verify that all the new URLs in the sources are working

## **Important Notes for Future Me:**

- **Backup first**: If I have an existing website, make sure to backup the current files before uploading
- **Domain configuration**: Make sure my domain is pointing to the correct directory
- **SSL certificate**: If I have HTTPS, make sure it's properly configured

## How I Structure the Content

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

### The Disclaimer Parameter (Optional)

The `disclaimer` parameter is completely optional and lets me add a small note at the bottom of the letter section:

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

**What it does:**

- **Optional** - Not required, won't break anything if missing
- **Link support** - Can include an optional URL for verification
- **Styling** - Automatically styled as small, gray, italic text
- **Positioning** - Appears at the bottom of the letter section with a separator line

## Adding Content (For When I Want to Update Presidents)

To add or edit presidential content:

1. Navigate to `frontend/src/data/presidents/`
2. Edit the corresponding president file (e.g., `georgeWashington.jsx`)
3. Update the content sections as needed
4. Add predecessor and successor fields for navigation
5. Rebuild and deploy the application

### Using My Style Template

I built a Style Template component to help me format text content with proper styling. I can access it at `/style-template` in my development environment.

#### Text Formatting Tags I Can Use

I can use these tags in my `historicalAnalysis` content for rich formatting:

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

I can also add [LINK:https://www.whitehouse.gov/about-the-white-house/presidents/george-washington/|links to external sources] like this.

Regular paragraph text continues normally...`
```

#### Tips for Content Creation

- Use `[BREAK]` to separate major sections
- Use `[EMPHASIS]` for important points
- Use `[QUOTE]` for memorable quotes or key statements
- Use ALL CAPS for automatic header detection
- Test my formatting in the Style Template before adding to president files

## My Project Structure

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

## How My Presidents Components Work

I built React components for displaying individual president pages with this structure:

### Component Features I Built

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

### Chronological Navigation I Built

Each president page includes a "Presidential Timeline" navigation section at the bottom with:

- **Previous President**: Navigate to the predecessor (orange button)
- **All Presidents**: Return to the main grid view (purple button)
- **Timeline**: View chronological timeline (dark gray button)
- **Next President**: Navigate to the successor (green button)

This lets users seamlessly browse through presidents in chronological order, with special handling for the first president (no predecessor) and current president (no successor).

### URL Structure I Set Up

President pages are accessed via `/presidents/:name` routes:

- `/presidents/George Washington`
- `/presidents/John Adams`
- `/presidents/Thomas Jefferson`
- etc.

### Fallback System I Built

If a specific president component doesn't exist, the application falls back to the generic `PresidentPage.js` component, ensuring all presidents are accessible.

### Development Tools I Created

- **Style Template**: Available at `/template` for development purposes (hidden from public navigation)
- **Responsive Design**: Mobile-optimized with touch-friendly navigation
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## Contributing (For Others Who Might Want to Help)

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Historical research and analysis I did
- Creative writing and letter composition I wrote
- Web development and design I built
- American presidential history scholarship I referenced
