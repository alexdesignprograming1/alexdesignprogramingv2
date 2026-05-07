# Product Specification & Test Plan
**Project:** Alex Design Programing (ADP) Landing Page
**Platform:** Next.js (React), TailwindCSS, GSAP
**Scope:** Frontend UI/UX, Animations, and Interactive Components

## 1. Overview
The ADP Landing Page is a high-performance, design-centric portfolio site. The primary goal of the frontend is to provide an immersive, highly animated experience that works flawlessly across desktop and mobile devices. 

This document serves as the specification for writing automated and manual frontend tests.

## 2. Core User Flows to Test

### 2.1 Navigation & Menu Modal
- **Trigger:** The floating "Hamburger" button (Top Right).
- **Desktop Behavior:** Hovering should trigger the Magnetic effect. Clicking opens the full-screen Menu Modal.
- **Mobile Behavior:** Hamburger menu is present at the top left. Clicking opens the full-screen Menu Modal.
- **Menu Modal State:**
  - Upon opening, the body scroll must be locked (`overflow: hidden`).
  - The backdrop and navigation links must stagger in (GSAP).
  - The white logo (`logowhite.png`) must be visible and properly sized.
  - Clicking any navigation link (e.g., 'PROJETOS', 'SERVIÇOS') must close the menu and smoothly scroll to the section.
  - Clicking the "Close Menu" (X) button must reverse the animation and unlock body scroll.

### 2.2 Hero Section
- **Visual Integrity:**
  - Background 3D Spline scene must render without blocking the main thread.
  - The massive typography ("Alex Design Programing") must resize correctly on mobile viewports (no overflow, breaking onto 3 lines).
- **Interactions:**
  - The "Role para explorar" (Scroll to Explore) indicator must bounce correctly.
  - On mobile, the custom Lucide `Pointer` touch icon must bounce.

### 2.3 Projects Section (`#work`)
- **Grid Layout:** Displays a 2-column grid on desktop, 1-column on mobile.
- **Hover Effects:** Hovering over a project card must slightly zoom the background image and fade in the black overlay.
- **Modal Interaction:**
  - Clicking the "Ver Projeto" (View Project) button must prevent default navigation.
  - The `ProjectModal` must mount and become visible.
  - The modal must display the correct data (Title, Tag, Number, Image) corresponding to the clicked project.
  - The "Acessar" (Access) link inside the modal must contain the correct external URL (`href`).
  - Clicking the "X" button or the backdrop overlay inside the modal must close it.

### 2.4 Services Section (`#services`)
- **Sticky Layout:** 
  - On Desktop, the left column ("NÓS CRIAMOS, A I.A. TRABALHA.") must remain sticky (`sticky top-32`) while the right column (service list) scrolls.
  - On Mobile, the sticky behavior must be disabled (`lg:sticky`) to prevent overlapping text.
- **Contact Button:** 
  - The "Entrar em contato" button must be styled red and white (`bg-red-600 !text-white`).
  - It must link to the correct WhatsApp API endpoint.

### 2.5 Footer
- **Logo:** The white logo (`logowhite.png`) must be visible under the "CONTATE-NOS" heading.
- **External Links:** Instagram, WhatsApp, LinkedIn, and Email links must correctly resolve and open in a new tab (`target="_blank"`).

## 3. Performance & Layout Requirements

### 3.1 Scroll Performance
- **Scroll Listeners:** The active scroll listener determining `isScrolled` and `isLightSection` must use `requestAnimationFrame` and `passive: true` to prevent layout thrashing and maintain 60 FPS.
- **Backdrop Blurs:** Blurs must not exceed `backdrop-blur-xl` (24px) to ensure mobile GPU performance does not degrade.

### 3.2 Z-Index Hierarchy
- **`z-[-10]`**: Background mesh / Spline.
- **`z-10 / 20 / 30`**: Main content layers.
- **`z-50`**: Floating navigation buttons.
- **`z-[100]`**: Menu Modal.
- **`z-[9999]`**: Global noise overlay (`.noise-overlay`).
- **`z-[10000]`**: Project Modal (Must sit above the noise overlay to prevent visual distortion on images).

## 4. Test Types Required
1. **Visual Regression Testing:** Ensure the massive typography doesn't break on 320px screens.
2. **Component Testing:** Verify `<Button>` and `<Magnetic>` interactions.
3. **E2E Testing (Cypress / Playwright):** Automate the flow of opening the menu, navigating to a section, clicking a project, verifying the modal, and closing it.
