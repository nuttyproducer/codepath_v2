# Sprint 7 - Stretch Goal: Interactive Photo Gallery

Build a complete interactive photo gallery with the following features:

## Requirements

1. **Display Photos**: Show a grid of thumbnail images
2. **Lightbox View**: Click a photo to view it in a larger modal/overlay
3. **Navigation**: Add previous/next buttons to navigate between photos in lightbox
4. **Close Button**: Allow closing the lightbox
5. **Keyboard Support**: Use arrow keys to navigate, ESC to close
6. **Add New Photos**: Form to add new photos with title and URL
7. **Delete Photos**: Button to remove photos from the gallery

## Technical Specifications

- Use an array of photo objects: `{ id, title, url, thumbnail }`
- Implement event delegation for efficiency
- Use CSS for the lightbox overlay
- Save gallery data to localStorage

## Bonus Features

- Add photo captions/descriptions
- Implement drag-and-drop reordering
- Add filtering/sorting options
- Create slideshow mode with auto-advance

## Files to Create

1. `photo-gallery.html` - Main HTML structure
2. `photo-gallery.css` - Styling for gallery and lightbox
3. `photo-gallery.js` - All JavaScript functionality

## Sample Photo Data

```javascript
const photos = [
  { id: 1, title: "Sunset", url: "https://picsum.photos/800/600?random=1", thumbnail: "https://picsum.photos/200/150?random=1" },
  { id: 2, title: "Mountains", url: "https://picsum.photos/800/600?random=2", thumbnail: "https://picsum.photos/200/150?random=2" },
  { id: 3, title: "Ocean", url: "https://picsum.photos/800/600?random=3", thumbnail: "https://picsum.photos/200/150?random=3" }
];
```

## Expected Functionality

- Grid layout that's responsive
- Smooth transitions when opening/closing lightbox
- Proper state management for current photo
- Clean, user-friendly interface

This exercise combines everything you've learned: DOM manipulation, event handling, arrays, objects, and localStorage!
