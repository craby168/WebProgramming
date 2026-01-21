# My Homepage

A modern, Notion-inspired personal homepage with a top navigation bar and dynamic portfolio section. Built with HTML, CSS, and vanilla JavaScript for a clean, minimal aesthetic.

## Overview

This is a front-end-only website designed with simplicity and elegance in mind. The design follows Notion's philosophy: minimal clutter, maximum clarity, with a focus on readability and user experience.

### Key Features

- **Top Navigation Bar**: Clean horizontal navigation with branding
- **Mobile-Friendly Menu**: Responsive dropdown menu for mobile devices
- **Smooth Navigation**: Scroll-spy highlighting of current section
- **Portfolio/About Section**: Comprehensive education and social media display
- **School Emblems**: Visual school badges for each educational institution
- **Brand Color Social Icons**: Colored social media buttons with brand colors on hover
- **Responsive Design**: Fully responsive layout from mobile to desktop
- **Notion-like Aesthetics**: Clean color palette, smooth transitions, and thoughtful spacing
- **Lightweight**: No heavy dependencies, pure vanilla JavaScript for fast performance

## Project Structure

```
HW1/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── app.js              # JavaScript for dynamic functionality
├── package.json        # Project configuration
└── README.md          # This file
```

## Design Philosophy

### Style: Notion-like
- **Clean & Minimal**: No unnecessary visual clutter
- **Consistent Spacing**: Proper use of whitespace and padding
- **Subtle Interactions**: Smooth transitions and hover effects
- **Readable Typography**: Clear hierarchy with appropriate font sizes
- **Neutral Palette**: Calming colors (whites, grays, subtle blue accent)

### Architecture
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern CSS with custom properties (variables) for maintainability
- **Vanilla JavaScript**: No framework dependencies, pure ES6+ code

## Features Explained

### 1. Top Navigation Bar
- Horizontal navigation with bold branding ("My Homepage")
- Clickable brand name to return to home
- Desktop menu with active link highlighting
- Mobile hamburger menu that slides in from top
- Smooth animations and responsive adjustments

### 2. Portfolio/About Section
- **Profile Header**: Avatar and introduction
- **Education Timeline**: Current university (NYCU) plus educational history
  - School emblems (colored badges) for each institution
  - Chinese school names with English translations in parentheses
  - Current education highlighted
- **Social Media Links**: 
  - GitHub (black)
  - LinkedIn (blue)
  - Instagram (colorful gradient)
  - Facebook (blue)
  - Email (red)
  - Brand color hover effects with smooth transitions

### 3. Responsive Layout
- **Desktop (>1024px)**: Full top navigation, side-by-side hero layout
- **Tablet (768-1024px)**: Optimized spacing, stacked layouts
- **Mobile (≤768px)**: Hidden navigation, hamburger menu, optimized typography
- **Small Mobile (≤480px)**: Further optimized for ultra-small screens

## Getting Started

### Setup

1. Install dependencies (optional, for TypeScript support):
```bash
npm install
```

2. Run a local server:
```bash
npm run dev
```

This will start a local HTTP server on `http://localhost:8000`

### File Overview

#### `index.html`
- Semantic HTML5 structure
- Top navigation bar with mobile menu
- Hero section with greeting
- About/Portfolio section with:
  - Profile card
  - Education list with school emblems
  - Social media icons
- Placeholder sections for Projects, Blog, Contact

#### `styles.css`
- CSS custom properties for consistent theming
- Flexbox and Grid layout for responsive design
- Top navigation styling
- Mobile menu styling
- Social media brand colors
- Comprehensive media queries
- Scroll-friendly styling

#### `app.js`
- `HomepageApp` class managing all interactions
- Mobile menu toggle functionality
- Smooth scroll navigation
- Scroll-spy for active link highlighting
- Brand name click to go home
- Event delegation for performance
- Media query listener for responsive behavior

#### `package.json`
- Project metadata
- Dev dependencies (TypeScript ready)
- Scripts for development and building

## Customization

### Colors
Edit CSS custom properties in `:root`:
```css
--color-accent: #0084ff;           /* Change accent color */
--color-bg: #ffffff;               /* Change background */
--color-text: #37352f;             /* Change text color */
--color-github: #1f2937;           /* Social media colors */
--color-linkedin: #0a66c2;
--color-instagram: #e1306c;
--color-facebook: #1877f2;
--color-email: #ea4335;
```

### Navigation
Edit `.nav-menu` items in `index.html` to add/remove navigation links

### Education
Add/remove education items in the `.education-list`:
```html
<div class="education-item">
    <div class="education-icon">
        <img src="emblem-url" alt="School" class="school-emblem"/>
    </div>
    <div class="education-content">
        <p class="education-title">School Name (EN Name)</p>
        <p class="education-year">Level</p>
    </div>
</div>
```

### Social Media
Update social media links in the `.social-links` section with your actual URLs

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Media queries
- **JavaScript (ES6+)**: Vanilla JS for interactions
- **Optional**: TypeScript support ready (via package.json)

## Future Enhancements

This is a foundation ready for:
- Adding React or Vue for dynamic content
- Integration with TypeScript for larger features
- Adding content management system integration
- Dark mode implementation
- Animation library integration (Framer Motion, etc.)
- Blog functionality
- Project portfolio expansion

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Performance

- **No external dependencies**: Fast loading
- **Minimal CSS**: ~12KB
- **Lightweight JavaScript**: ~4KB
- **Responsive images ready**: Add lazy loading when adding content

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus states for all interactive elements
- Skip to main content ready

## Updates & Features

### Latest Changes
- ✅ Switched from sidebar to top navigation
- ✅ Added school emblems/badges
- ✅ Implemented brand-colored social media icons
- ✅ Made "My Homepage" heading larger and clickable
- ✅ Added mobile hamburger menu
- ✅ Updated education display with Chinese names first
- ✅ Added scroll-spy navigation highlighting

## License

MIT

---

**Status**: Structure and styling complete. Ready for content customization and feature additions.

