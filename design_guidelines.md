# Design Guidelines: Static HTML Web Server

## Design Approach
**Utility-Focused Approach**: Since you have existing HTML files, the design will preserve and enhance your current work while ensuring proper display and functionality.

## Core Principles
- **Respect Existing Structure**: Maintain your original HTML design and layout
- **Clean Presentation**: Ensure all content displays properly with correct spacing and hierarchy
- **Responsive Foundation**: Add responsive viewport settings if not present
- **Asset Loading**: Properly link all CSS, JavaScript, and image files

## Typography System
**Preserve Existing Fonts**: Keep your current font choices
- If no fonts specified: Use system fonts for fast loading
- Ensure proper font fallbacks: `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

## Layout & Spacing
**Maintain Original Layout**: Keep your existing spacing and structure
- Add `box-sizing: border-box` globally for consistent sizing
- Ensure proper viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Responsive spacing using relative units (rem, em, %) where applicable

## Component Guidelines

### Navigation
- Keep existing navigation structure
- Ensure links route properly to your HTML pages
- Add smooth scrolling for anchor links if applicable

### Content Sections
- Preserve your original section layouts
- Ensure proper image loading with alt text
- Maintain existing forms and interactive elements

### Links & Routing
- Configure clean URL routing (e.g., `/about` instead of `/about.html`)
- Support both `/page` and `/page.html` paths
- Proper 404 page for missing routes

## Technical Requirements
- Serve all static assets (CSS, JS, images) from proper directories
- Enable proper MIME types for all file types
- Add basic caching headers for performance
- Auto-reload during development

## Images
**Use Existing Images**: Serve all your current images
- Place images in `/public/images` or similar directory
- Ensure proper relative paths in HTML
- Optimize image loading with proper dimensions

**No New Design Elements**: This setup focuses on running your existing HTML without modifications unless explicitly broken or non-functional.