# Reddit App Clone (Vite + React + Redux)

A modular, responsive Reddit-style web app built with Vite, React, and Redux Toolkit. Users can browse posts by category, view post details and comments, and search Reddit content in real time using the Reddit public API.

---

## Example Layout

- **Home View**: Category filter + post feed  
- **Post Detail View**: Full post + comments  
- **Search View**: Search bar + results

---

## Tech Stack

| Layer        | Technology                      |
|--------------|---------------------------------|
| Frontend     | Vite + React + Redux Toolkit    |
| Routing      | React Router                    |
| Styling      | CSS Modules + Global Variables  |
| State Mgmt   | Redux Toolkit + Async Thunks    |
| Deployment   | Netlify                         |
| API          | Reddit Public API (`https://www.reddit.com`) |

---

## Features

- **Search Reddit**: Live search using Reddit’s public API  
- **Category Filtering**: Browse posts by Popular, News, Technology, Funny  
- **Post Detail View**: View full post content and comments  
- **Skeleton Loaders**: Smooth loading experience with animated placeholders  
- **Error Handling**: Reusable `ErrorMessage` component with retry logic  
- **Responsive Design**: Optimized for mobile and desktop  
- **Portrait/landscape media detection**: Dynamically adjusts layout based on media dimensions  
- **Accessibility**: Focus-visible outlines, semantic roles, keyboard navigation

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Locally

Use this command to start the development server:

```bash
npm run dev
```

---

## Future Improvements

- Infinite Scroll or Pagination  
- Dark Mode Toggle  
- Comment Voting & Sorting  
- User Authentication  
- Bookmarking Posts  
- Unit Tests for Redux Thunks  
- PWA Support (Service Worker + Manifest)

---

## Author

Built by [Edu](https://github.com/edu-navarre)
