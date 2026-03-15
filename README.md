# 🌐 AGNCI — Webflow HTML Website Template

> A modern agency-style website template meticulously recreated from Webflow using pure HTML5, CSS3, and vanilla JavaScript — zero frameworks, zero dependencies.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://agnci-webflow-html-template.vercel.app/)

**Live Demo:** [agnci-webflow-html-template.vercel.app](https://agnci-webflow-html-template.vercel.app/)

---

## 1. Project Title

**AGNCI** — Webflow HTML Website Template

A professional agency-style website rebuilt from scratch using pure HTML5, CSS3, and JavaScript — inspired by the AGNCI Webflow template and fully reconstructed without exporting any Webflow code.

---

## 2. Description

AGNCI is a hands-on learning project born from a desire to go deeper than tutorials. Instead of exporting the Webflow template, the **VisBug browser extension** was used to inspect every element — spacing, typography, layout, color — and the entire site was rebuilt line by line from scratch.

The result is a clean, lightweight, production-ready agency template with full responsive support across all major breakpoints, dark mode, accessibility features, and a mobile hamburger menu — built with zero dependencies and no build process required.

---

## 3. Features

**Design & Layout**
- 🏢 **Modern Agency Design** — Clean, professional aesthetic ideal for creative studios and agencies.
- 📱 **Fully Responsive** — Optimized for desktop, tablet, mobile, and landscape orientations.
- 🖥️ **All Breakpoints Covered** — 320px, 480px, 768px, 1024px, 1440px, and 1441px+ support.

**Code Quality**
- 🧼 **Pure HTML5 + CSS3** — Zero dependencies, no frameworks, lightweight and fast.
- 🎨 **CSS Variables** — Easy color and spacing customization throughout.
- ✅ **Production Ready** — Clean code, semantic HTML, and SEO-friendly markup.

**Accessibility & UX**
- 🌙 **Dark Mode Support** — Auto-detects system preference via `prefers-color-scheme`.
- ♿ **Accessibility First** — Reduced motion, high contrast, and touch-friendly buttons (48px min).
- ⌨️ **Keyboard Navigation** — Full keyboard support throughout.

**Interactivity**
- ☰ **Mobile Menu** — JavaScript-powered hamburger navigation toggle.

---

## 4. Technologies

| Category        | Technology                                            |
|-----------------|-------------------------------------------------------|
| Markup          | HTML5 — semantic structure and accessibility          |
| Styling         | CSS3 — Flexbox, Grid, custom properties, media queries|
| Interactivity   | Vanilla JavaScript (ES6+)                             |
| Design Tool     | VisBug — browser extension for element inspection     |
| Deployment      | [Vercel](https://vercel.com/)                         |

---

## 5. Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor like [VS Code](https://code.visualstudio.com/) *(optional, for customization)*
- No Node.js, npm, or build tools required!

---

## 6. Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/neelpatel6262/AGNCI-Webflow-HTML-Template.git
   cd AGNCI-Webflow-HTML-Template
   ```

2. **Open the project**

   ```bash
   # No build process needed — just open index.html directly
   open index.html
   ```

   Or use a local development server for a better experience:

   ```bash
   # Using Python
   python -m http.server 8000
   # Visit http://localhost:8000

   # Using VS Code Live Server extension
   # Right-click index.html → Open with Live Server
   ```

---

## 7. Usage

- Open `index.html` in any modern browser.
- Resize the window to test responsive behavior across breakpoints.
- Toggle system dark mode to verify automatic theme switching.
- Use the hamburger icon on mobile/tablet to test the JS menu.
- Customize colors and spacing by editing CSS variables in `style.css`.
- Replace images inside the `assets/` folder with your own.
- Update text content directly in `index.html`.

### Responsive Breakpoints

| Breakpoint      | Target Devices                      |
|-----------------|-------------------------------------|
| 320px – 480px   | Mobile phones                       |
| 481px – 768px   | Large phones & small tablets        |
| 769px – 1024px  | iPad & medium tablets               |
| 1025px – 1440px | Laptops & desktops                  |
| 1441px+         | Large monitors & ultrawide displays |

---

## 8. Keyboard Shortcuts

This is a static website template and does not include custom keyboard shortcuts. All interactive elements (navigation, forms, buttons) are keyboard-accessible via standard `Tab`, `Enter`, and `Escape` keys.

---

## 9. Project Structure

```text
AGNCI-Webflow-HTML-Template/
├── assets/          # Images and media files
├── index.html       # Main HTML entry point
├── style.css        # Complete responsive CSS with variables
├── script.js        # JavaScript — mobile menu and interactions
└── README.md        # Project documentation
```

---

## 10. Development Process

- **Design Analysis:** Used the VisBug browser extension to inspect the original Webflow template — documented layout structure, spacing values, typography scale, and color system.
- **HTML Structure:** Built semantic HTML5 markup with proper heading hierarchy, accessible forms, and organized sections from top to bottom.
- **CSS Development:** Established CSS custom properties for the design system, then implemented mobile-first responsive styles across 5 media query breakpoints.
- **Dark Mode & Accessibility:** Added `prefers-color-scheme` detection for automatic dark mode, `prefers-reduced-motion` for animation control, and high contrast mode support.
- **JavaScript Implementation:** Added mobile menu toggle, smooth interactions, and ensured cross-browser compatibility.
- **Testing & Optimization:** Tested across Chrome, Firefox, Safari, and Edge on multiple device sizes; verified all breakpoints, dark mode, and accessibility features.

---

## 11. What I Learned

- Writing clean, semantic **HTML5** with proper document structure and accessibility attributes.
- Building a complete **CSS design system** using custom properties for scalable, maintainable styles.
- Implementing a **mobile-first responsive layout** with Flexbox and Grid across 5 breakpoints.
- Using `@media` queries for `prefers-color-scheme` and `prefers-reduced-motion` to respect user system preferences.
- Inspecting professional web designs with **VisBug** and translating visual design into code without copying a single line.
- Writing lightweight **vanilla JavaScript** for interactive UI components without framework overhead.
- Understanding how professional Webflow templates are structured — spacing systems, type scales, component patterns.

---

## 12. Overall Growth

| Aspect              | Before                            | After                                        |
|---------------------|-----------------------------------|----------------------------------------------|
| HTML confidence     | Basic tags and structure          | Semantic, accessible, production-grade markup|
| CSS skills          | Inline and basic styles           | Full design system with CSS variables        |
| Responsive design   | Simple breakpoints                | 5-breakpoint mobile-first system             |
| Accessibility       | Not considered                    | Dark mode, reduced motion, high contrast     |
| Design-to-code      | Relied on tutorials               | Inspected and rebuilt independently          |
| JavaScript          | Basic DOM manipulation            | Interactive menu and cross-browser handling  |

> This project proved that you don't need a framework to build something professional — just a sharp eye and clean fundamentals.

---

## 13. Future Enhancements

- [ ] 🎞️ **CSS animations** — Scroll-reveal effects and smooth section transitions.
- [ ] 📝 **Contact form backend** — Form submission via Formspree or Netlify Forms.
- [ ] 🔍 **SEO improvements** — Meta tags, Open Graph, and structured data (JSON-LD).
- [ ] 🧩 **Additional pages** — About, Services, Case Studies, and Blog templates.
- [ ] ♾️ **Infinite scroll** — For portfolio or blog listing sections.
- [ ] ⚡ **Performance** — Image lazy loading and WebP format support.
- [ ] 🧪 **Accessibility audit** — Full WCAG 2.1 AA compliance check and fixes.

---

## 14. Known Issues / Limitations

- No backend — contact forms are static and non-functional without a form service.
- Content is hardcoded in HTML — no CMS or data-driven templating.
- No JavaScript build process — scripts are not minified for production.
- Internet Explorer is not supported (by design — modern browsers only).

---

## 15. Contributing

Contributions and improvements are welcome!

1. **Fork** the repository.
2. **Create** a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit** your changes and push:

   ```bash
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** describing what you changed.

---

## 16. License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT) — free to use as a personal or commercial template.

---

## 17. Contact

- **Name:** Neel Patel
- **Email:** patelneel392003@gmail.com
- **GitHub:** [github.com/neelpatel6262](https://github.com/neelpatel6262)
- **LinkedIn:** [linkedin.com/in/uxui-designer-devloper](https://www.linkedin.com/in/uxui-designer-devloper/)

---

## 18. Acknowledgments

- [AGNCI Webflow Template](https://webflow.com/) — Original design inspiration used as a visual reference.
- [VisBug](https://visbug.web.app/) — Browser extension for design inspection and analysis.
- [Vercel](https://vercel.com/) — Fast, free deployment platform.
- [MDN Web Docs](https://developer.mozilla.org/) — The go-to reference for HTML, CSS, and JS.

---

## 19. Footer

| Field          | Info                     |
|----------------|--------------------------|
| Project Status | Complete / Portfolio-ready |
| Version        | 1.0.0                    |
| Deployment     | Vercel                   |

---

## 20. Checklist

- [x] Semantic HTML5 structure
- [x] CSS3 with custom properties (variables)
- [x] Mobile-first responsive layout
- [x] 5 breakpoints (320px → 1441px+)
- [x] Dark mode via `prefers-color-scheme`
- [x] Reduced motion support
- [x] High contrast mode
- [x] Touch-friendly button sizing (48px min)
- [x] Keyboard navigation support
- [x] JavaScript mobile hamburger menu
- [x] Deployed to Vercel
- [ ] Scroll-reveal animations
- [ ] Functional contact form
- [ ] SEO meta tags and Open Graph
- [ ] Additional page templates
- [ ] Image lazy loading + WebP
