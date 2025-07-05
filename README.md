# From Presidents to Presidents

A dynamic book exploring imagined letters from each U.S. president to their successor, followed by comprehensive historical analysis and sources.

## Project Overview

This project combines historical research with creative writing to provide insights into the challenges, decisions, and legacies of each American presidency. Each chapter includes:

- **Imagined Letters**: Creative reconstructions of what each president might have written to their successor
- **Historical Analysis**: Comprehensive examination of each presidency's impact and legacy
- **Key Themes**: Identification of major issues and challenges faced during each administration
- **Historical Context**: Background information to understand the era and circumstances
- **Sources**: Academic and historical references for further reading

## Features

- **Beautiful Book-like Interface**: Elegant typography and layout designed for reading
- **Timeline Navigation**: Chronological journey through American presidential history
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Admin Panel**: Easy content management for adding and editing presidential chapters
- **Search & Navigation**: Find presidents quickly and navigate between chapters

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, React Router
- **Styling**: Custom CSS with Google Fonts (Crimson Text, Playfair Display, Source Sans Pro)
- **Database**: MongoDB for flexible document storage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB connection:
   - Create a `.env` file in the backend directory
   - Add your MongoDB URI: `MONGODB_URI=mongodb://localhost:27017/letters-of-us-history`
   - Or use MongoDB Atlas: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/letters-of-us-history`

4. Run the data migration (creates placeholder chapters for all presidents):

   ```bash
   node migrate-data.js
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

The backend will be running on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The frontend will be running on `http://localhost:3000`

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
2. **Navigate to File Manager** - Go to the `public_html` folder (or your domain's root directory)
3. **Upload the build folder contents** - Upload everything from the `frontend/build` folder:
   - `index.html`
   - `asset-manifest.json` 
   - The entire `static` folder (with css and js subfolders)
4. **Important Notes:**
   - Upload all files to your domain's root directory (usually `public_html`)
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

Each presidential chapter contains:

```javascript
{
  president: "George Washington",
  successor: "John Adams",
  letterTitle: "Letter to John Adams",
  letterContent: "The imagined letter content...",
  historicalAnalysis: "Comprehensive historical analysis...",
  sources: ["Source 1", "Source 2", "Source 3"],
  keyThemes: ["Theme 1", "Theme 2", "Theme 3"],
  historicalContext: "Brief historical context...",
  presidencyYears: "1789-1797"
}
```

## Adding Content

1. Access the admin panel at `http://localhost:3000/admin`
2. Select a president from the list or create a new chapter
3. Fill in all the required fields:
   - President and successor names
   - Letter title and content
   - Historical analysis
   - Key themes (one per line)
   - Sources (one per line)
   - Historical context
   - Presidency years
4. Save the chapter

## API Endpoints

- `GET /api/chapters` - Get all chapters
- `GET /api/chapters/:id` - Get a specific chapter by ID
- `GET /api/chapters/president/:president` - Get chapter by president name
- `POST /api/chapters` - Create a new chapter
- `PUT /api/chapters/:id` - Update a chapter
- `DELETE /api/chapters/:id` - Delete a chapter

## Project Structure

```jsx
letters-of-US-history/
├── backend/
│   ├── models/
│   │   └── Chapter.js          # MongoDB schema
│   │   
│   ├── routes/
│   │   └── chapters.js         # API routes
│   │   
│   ├── migrate-data.js         # Data migration script
│   │   
│   ├── washington_chapters.json # Sample Washington data
│   │   
│   └── index.js                # Express server
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main React app
│   │   ├── AdminPanel.js       # Admin interface
│   │   ├── presidents.js       # Presidents list
│   │   └── index.css           # Styling
│   │   
│   └── public/
└── README.md
```

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
