# Responsive Gaming Website

A modern, responsive gaming website built with React, Vite, TailwindCSS, and GSAP animations.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (comes with Node.js)
- Git
- Git LFS (Large File Storage) - Required for video files

## Installation

### 1. Install Git LFS

This project uses Git LFS to store large video files. You **must** install Git LFS before cloning or the videos won't work.

**On Ubuntu/Debian:**

```bash
sudo apt update
sudo apt install git-lfs
```

**On macOS:**

```bash
brew install git-lfs
```

**On Windows:**
Download from [git-lfs.github.com](https://git-lfs.github.com/)

### 2. Clone the Repository

```bash
git clone https://github.com/Seiya380/Responsive-Website.git
cd Responsive-Website
```

### 3. Initialize Git LFS

If you cloned **before** installing Git LFS, run these commands to fetch the actual video files:

```bash
git lfs install
git lfs pull
```

This will replace the placeholder files with the real video content (~20MB each).

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
Responsive-Website/
├── public/
│   ├── videos/          # Video files (managed by Git LFS)
│   ├── fonts/           # Custom fonts
│   └── img/             # Images
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Story.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles (TailwindCSS)
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Technologies Used

- **React** 18.3 - UI framework
- **Vite** 5.4 - Build tool and dev server
- **TailwindCSS** 3.4 - Utility-first CSS framework
- **GSAP** 3.12 - Animation library
- **React Icons** - Icon library

## License

not set yet

## Repository

[https://github.com/Seiya380/Responsive-Website](https://github.com/Seiya380/Responsive-Website)
