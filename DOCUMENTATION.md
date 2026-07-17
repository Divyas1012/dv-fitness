# D V Fitness - Documentation

Welcome to the development and feature documentation for the **D V Fitness** web application. This project is a self-contained, fully responsive web application with a premium theme toggler, a virtual gym assistant, and a mock AI posture analyzer.

---

## 1. Project Architecture

The codebase consists of three core files:
1. **[index.html](file:///c:/Users/EMECHANICZ/Desktop/dv-fitness/index.html)**: Declares the semantic HTML structure, imports Tailwind CSS CDN, maps custom CSS variables, and hosts sections from Hero to Contact Form.
2. **[styles.css](file:///c:/Users/EMECHANICZ/Desktop/dv-fitness/styles.css)**: Hosts the central CSS custom property variables, layout animations (loading spinners, laser scans), custom scrollbars, and helper classes.
3. **[app.js](file:///c:/Users/EMECHANICZ/Desktop/dv-fitness/app.js)**: Governs page events, DOM manipulation, mock databases (equipment cards, testimonials, FAQ data), and local storage state persistence.

---

## 2. Style System (Tailwind + CSS Variables)

To allow dynamic theme switching without sacrificing the speed of Tailwind CSS, we map CSS variables into the inline Tailwind configuration:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        textPrimary: 'var(--text-primary)',
        borderPrimary: 'var(--border-color)',
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        bgTertiary: 'var(--bg-tertiary)'
      }
    }
  }
}
```

### Color Variables
* **Dark Mode (Default)**: Deep black background (`#050505`) overlayed with glowing fixed radial gradients (crimson red, blue, purple) and vibrant red accents (`#ef4444`).
* **Light Mode**: Clean white background (`#ffffff`) overlayed with soft warmth/cool radial-gradients and red accents (`#dc2626`).

---

## 3. Core Feature Documentation

### A. AI Posture Checker ("Posture Lab")
The Posture Lab (`#posture-lab` in `index.html`) is located below the Photo Gallery.
1. **Upload Handler**: A drag-and-drop zone listens for files. Supports image or video rendering in the preview window.
2. **Laser Scanner**: Triggering analysis runs a CSS translate animation (`.scanner-line`), sliding a neon red bar down the preview box.
3. **Canvas Drawing**: Draws a custom stick-figure skeleton on a translucent `<canvas>` overlay.
4. **Calculations**: Coordinates scale relative to the bounding box of the canvas so the skeleton stays aligned with the subject:
   * **Squats**: Renders correct squat depth (94% score).
   * **Push-Ups**: Highlights sagging hips (72% score).
   * **Deadlifts**: Highlights rounded lumbar spine (58% score).
   * **Bicep Curls**: Renders full range isolation (96% score).

### B. Virtual Gym Buddy (Chatbot)
Located in the floating chat widget on the bottom-right.
1. **Hydration Tracker**:
   * Logs water volume in 250ml or 500ml increments.
   * Progress is persistent across refreshes via `localStorage.getItem('dv_fitness_water_log')`.
2. **Q&A Quick Replies**:
   * Pre-programmed chips (`Fat Loss Tips`, `Build Muscle`, `Gym Hours`) let users query standard gym parameters instantly.
3. **Motivational Quotes**:
   * Triggering "Motivate Me 🔥" queries a quote database to output randomized motivational text.
4. **Passive Reminders**:
   * An interval timer monitors inactivity. If the chat is open and the user has not logged water for 75 seconds, the bot pings them with a custom hydration tip.

---

## 4. How to Run Locally

Since this application uses standard static HTML/CSS/JS files, it can be run directly without any compilation:
1. Double click **[index.html](file:///c:/Users/EMECHANICZ/Desktop/dv-fitness/index.html)** to load it locally in any browser.
2. Alternatively, serve it using a lightweight local web server to verify absolute assets loading (e.g. Python):
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.
