# President Components

This directory contains React components for displaying individual president pages in the "Letters of US History" application.

## Structure

```jsx
presidents/
├── PresidentPage.js          # Generic president page component (fallback)
├── PresidentPage.css         # Styling for president pages
├── individual/               # Individual president components
│   ├── index.js             # Exports all individual components
│   ├── GeorgeWashington.js  # George Washington's page
│   ├── JohnAdams.js         # John Adams' page
│   ├── ThomasJefferson.js   # Thomas Jefferson's page
│   └── ...                  # All other presidents
└── README.md                # This file
```

## Individual President Components

Each president has their own dedicated React component that:

- **Fetches specific content** from the backend API
- **Displays personalized content** including:
  - Letter to their successor
  - Historical analysis
  - Key themes
  - Historical context
  - Sources
- **Provides navigation** between presidents
- **Handles loading and error states**
- **Uses consistent styling** from `PresidentPage.css`

## Features

### Navigation

- **Previous/Next President** buttons for chronological navigation
- **Timeline view** button to see all presidents
- **All Presidents** button to return to the main grid
- **Back button** to return to the previous page

### Content Sections

- **Letter Section**: The imagined letter to the successor
- **Historical Analysis**: Comprehensive analysis of the presidency
- **Key Themes**: Important themes and challenges (displayed as cards)
- **Historical Context**: Background information about the era
- **Sources**: Academic and historical references

### Responsive Design

- **Mobile-friendly** layout
- **Elegant typography** with serif fonts
- **Color-coded sections** for easy navigation
- **Smooth animations** and hover effects

## Usage

The components are automatically loaded based on the URL route `/presidents/:name`. The App.js file maps president names to their corresponding components.

### Example URLs

- `/presidents/George Washington`
- `/presidents/John Adams`
- `/presidents/Thomas Jefferson`
- etc.

## Customization

Each individual president component can be customized with:

- **President-specific content** and styling
- **Custom navigation** logic
- **Special features** or sections
- **Unique theming** or branding

## Fallback

If a specific president component doesn't exist, the application falls back to the generic `PresidentPage.js` component, ensuring all presidents are accessible even if their individual components haven't been created yet.

## Adding New Presidents

To add a new president:

1. Create a new component file in the `individual/` directory
2. Follow the naming convention: `PresidentName.js`
3. Export the component from `index.js`
4. Add the mapping in `App.js`

## Styling

All components use the shared `PresidentPage.css` file for consistent styling. The CSS includes:

- **Book-like design** with elegant typography
- **Color-coded sections** (blue for letters, red for analysis, etc.)
- **Responsive grid layouts**
- **Smooth transitions** and hover effects
- **Mobile-optimized** design