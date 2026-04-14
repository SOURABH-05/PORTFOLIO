# 🚀 SOURABH's Premium Interactive Portfolio

A high-fidelity, ultra-modern digital experience crafted with precision. This portfolio features advanced physics-based interactions, magnetic elements, and a high-performance custom cursor engine.

---

## ✨ Features at a Glance

### 🎨 Design & Aesthetics
- **Bento Box Grid**: A modern, structured layout for cleaner information hierarchy.
- **Aurora Mesh Background**: A fluid, animated background using advanced CSS mesh gradients and noise grain.
- **Glassmorphism**: Sleek, transparent UI elements with high-impact backdrop blurs.
- **Premium Typography**: Built with **Outfit** and **Inter** for a sophisticated editorial feel.

### 🕹️ Custom Interaction Engine
- **60FPS Custom Cursor**: A high-performance, `requestAnimationFrame`-based cursor with fluid trailing lag.
- **Magnetic Components**: UI elements (Navbar, CTA buttons, Socials) physically attract to the cursor for a tactile feels.
- **Velocity-Based Morphing**: The cursor ring dynamically scales based on movement speed and element proximity.
- **Smooth Easing Parallax**: Mouse-tracked parallax depth in the Hero section.

### 🛠️ Technical Prowess
- **React + Vite**: Optimized frontend build system for ultra-fast performance.
- **Framer Motion**: State-of-the-art layout animations and entry transitions.
- **Node.js + Express Backend**: Robust API for handling project data and communications.
- **Interactive Contact System**: Seamless mail transmission using Nodemailer and Gmail SMTP.

---

## 📂 Project Structure

```bash
├── Backend/               # Express.js Server
│   ├── Controler/         # API logic & Mail systems
│   ├── Model/             # Database schemas
│   ├── SendMail/          # SMTP configuration
│   └── index.js           # Server Entry
├── my-project/            # React Frontend
│   ├── src/
│   │   ├── Component/     # UI Components (Hero, About, Project, etc.)
│   │   ├── hooks/         # Custom React hooks (useMagnetic)
│   │   ├── App.jsx        # Root Component
│   │   └── main.jsx       # Mount Point
```

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Gmail App Password (for mail features)

### 2. Setup Backend
```bash
cd Backend
npm install
# Create a .env file with PORT, MONGOURL, EMAIL, and PASS (App Password)
npm run dev
```

### 3. Setup Frontend
```bash
cd my-project
npm install
npm run dev
```

---

## 🛡️ Best Practices Implemented
- **Performance**: Zero frame drops on standard refresh rates (60Hz+).
- **Responsiveness**: Fully adaptive Bento Grid layouts from Mobile to Ultra-wide.
- **SEO Ready**: Semantic HTML5 structure and descriptive meta tags.

---

## 🤝 Connect
- **Portfolio**: [localhost:5173](http://localhost:5173) (Local Dev)
- **GitHub**: [SOURABH-05](https://github.com/SOURABH-05)

---

> Built with ⚡ by Sourabh
