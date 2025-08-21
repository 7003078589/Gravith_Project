# GRAVIT Website

A modern, responsive website for GRAVIT - "Your Business, Our Expertise". Built with React, Tailwind CSS, and Vite.

## 🚀 Features

- **Modern Design**: Dark teal-to-blue gradient background with bright cyan accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Accessible**: Semantic HTML and ARIA labels
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🎨 Design System

### Colors
- **Background Gradient**: `#042B35` → `#063C49` → `#073D4C`
- **Accent**: `#17CFE3` (Bright Cyan)
- **Text**: `#E8F2F4` (Off-white)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header with mobile menu
│   ├── Hero.jsx        # Hero section with watermark G
│   └── Logo.jsx        # GRAVIT logo component
├── App.jsx             # Main application component
├── main.jsx           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎯 Key Components

### Header Component
- Sticky navigation with logo
- Desktop navigation menu
- Mobile hamburger menu
- Scroll-based background opacity

### Hero Component
- Large "Driving Business Growth" heading
- Subtle watermark "G" graphic
- Call-to-action button
- Responsive typography scaling

### Logo Component
- GRAVIT branding with logo image
- Consistent styling across components

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'gravit': {
    'bg-start': '#042B35',
    'bg-mid': '#063C49',
    'bg-end': '#073D4C',
    'accent': '#17CFE3',
    'text': '#E8F2F4',
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fadeIn`: Opacity animation
- `slideUp`: Slide up with fade animation

## 🔧 Development

### Adding New Components
1. Create component file in `src/components/`
2. Import and use in `App.jsx`
3. Style with Tailwind classes

### Styling Guidelines
- Use Tailwind utility classes
- Create custom components in `src/index.css` for reusable styles
- Follow the established color scheme
- Maintain accessibility standards

## 📄 License

This project is proprietary to GRAVIT.

## 🤝 Contributing

1. Follow the existing code style
2. Test on multiple devices
3. Ensure accessibility compliance
4. Update documentation as needed

---

**GRAVIT** - Your Business, Our Expertise
