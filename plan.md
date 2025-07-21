# Axiom Coffee App – UI/UX Design Plan

This document outlines the design plan for a demo mobile app for Axiom Coffee, a local coffee shop. The app features three main screens: Home, Menu, and Events. All data is hardcoded for demonstration purposes.

---

## General Guidelines

- **Device Frame:** Simulate an iPhone device frame.
- **Navigation:** Bottom navigation bar for switching between Home, Menu, and Events.
- **Colors:** White background, dark purple text, light purple backgrounds for elements.
- **Typography:** Clean, readable fonts with clear hierarchy.
- **Icons:** Use Lucide React icons.
- **CSS:** Use Tailwind for styling.
- **No scroll bars.**
- **Demo Only:** All menu items, prices, and events are hardcoded.

---

## 1. Home Screen

**Header:**  
- Name: **Axiom Coffee**
- Tagline: *CONNECTING TO THE COMMUNITY*

**Mission Statement:**  
Axiom means a statement or proposition that is regarded as being established, accepted, or self-evidently true. Axiom Coffee has been talked about and worked on for four years. Axiom exists to serve the best coffee in an environment that develops community.

**Details:**  
- **Hours:** Monday - Saturday: 8:00 AM – 6:00 PM, Sunday Closed
- **Address:** 4005 Golden Triangle Blvd, Fort Worth, TX 76244
- **Map:** Render a Google Map with the address.

**Layout:**  
- Centered logo and tagline.
- Mission statement in a card with light purple background.
- Hours and address in a separate card.
- Embedded map below address.

---

## 2. Menu Screen

**Sections:**  
- Hot Drinks  
- Cold Drinks  
- Specialty Drinks  
- Pastries

**Layout:**  
- Each section is a grid.
- Drink sections: Columns for Small, Medium, Large. Each cell shows price and calories.
- Pastries: Grid with item name, price, and calories.

**Sample Data (Hardcoded):**  
- Hot Drinks: Coffee, Espresso, Americano  
- Cold Drinks: Iced Coffee, Cold Brew  
- Specialty Drinks: Latte, Mocha  
- Pastries: Croissant, Muffin

**Colors:**  
- Section headers: Dark purple text.
- Cards: Light purple background.

---

## 3. Events Screen

**Calendar:**  
- Monthly grid view (current month by default).
- Option to view past/future months.
- Hardcoded sample events (e.g., "Live Music", "Latte Art Class").

**Layout:**  
- Calendar grid with event highlights.
- Event details pop up on tap.

**Colors:**  
- Calendar: White background, purple accents for event days.

---

## Navigation

- **Bottom Nav Bar:**  
  - Home  
  - Menu  
  - Events  
- Icons for each tab.
- Persistent across all screens.

---

## Accessibility & Responsiveness

- High contrast for readability.
- Large tap targets for navigation.
- Responsive layout for mobile screens.

---

## Demo Constraints

- All data is hardcoded.
- No backend or dynamic updates.
- Focus on UI/UX and visual design.

---

## File Structure

- Each screen in its own file, imported into main App view.
- Main route: `/`

---

## Elevator Pitch

Axiom Coffee’s app connects the community, showcases the menu, and keeps customers informed about events—all in a clean, modern, and welcoming interface.
