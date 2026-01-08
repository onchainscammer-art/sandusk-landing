# SanDusk Landing Page

A satirical memecoin landing page featuring "Crayon Minimalism" aesthetic - high-end tech product design executed with hand-drawn crayon visuals.

## Tech Stack

- **React 18** + **Vite** - Fast, modern build tooling
- **Tailwind CSS** - Utility-first styling with custom crayon colors
- **Framer Motion** - Smooth, elegant animations
- **Lucide React** - Hand-drawn style icons

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Contract Address

**CRITICAL**: Before launching, update the contract address in `src/App.jsx`:

```javascript
// Line 5 in App.jsx
const CA = "INSERT_CA_HERE";
```

Replace `"INSERT_CA_HERE"` with your actual Solana contract address.

### 3. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## Features

### Core Functionality

✅ **Single-Variable CA Management** - Update contract address in one place
✅ **Jupiter Integration** - Direct buy link to Jupiter DEX
✅ **Copy-to-Clipboard** - Click SD card or press 'C' to copy CA
✅ **Sound Effects** - Audio feedback on interactions (placeholder implemented)
✅ **Toast Notifications** - Visual feedback for user actions
✅ **Easter Egg** - Hidden glitch effect (click warning icon)
✅ **Keyboard Shortcuts** - Press 'C' to copy contract address

### Design Features

🎨 **Crayon Aesthetic** - All UI elements look hand-drawn
🎨 **Custom Fonts** - "Permanent Marker" for headings, "Patrick Hand" for body
🎨 **Wobbly Borders** - SVG filters create hand-drawn appearance
🎨 **Multi-Colored Logo** - SanDusk text with crayon color gradient
🎨 **Paper Texture** - Subtle grain overlay for authenticity
🎨 **Responsive Design** - Mobile-first approach, works on all devices

### Sections

1. **Hero** - Multi-colored logo, tagline, CTA button
2. **SD Card Visual** - Interactive contract address display
3. **Tech Specs** - Satirical comparison table (SanDisk vs SanDusk)
4. **How to Buy** - Step-by-step guide for newcomers
5. **Tokenomics** - Supply, tax, distribution info
6. **Footer** - Social links and branding

## Customization

### Colors

Edit `tailwind.config.js` to adjust the crayon color palette:

```javascript
colors: {
  'crayon-red': '#ED1C24',
  'crayon-orange': '#FF7F27',
  'crayon-yellow': '#FFF200',
  'crayon-blue': '#0066CC',
  'crayon-lightblue': '#00A8E1',
  'paper': '#FDFBF7',
}
```

### Content

All content is in `src/App.jsx` for easy editing:
- Hero tagline: Line ~260
- Tech specs: Lines ~405-410
- How to Buy steps: Lines ~460-465
- Tokenomics values: Lines ~515-540

### Social Links

Update Twitter link in Footer component (line ~665):

```javascript
href="https://twitter.com/sandusk"
```

### Sound Effects

To add actual sound effects, replace the placeholder in `playScribbleSound()` (line ~700):

```javascript
const audio = new Audio('/sounds/scribble.mp3')
audio.play().catch(err => console.log('Audio play failed:', err))
```

Then add your sound file to `public/sounds/scribble.mp3`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Upload `dist/` folder to Netlify
3. Configure as single-page app

### Custom Server

1. Run `npm run build`
2. Serve the `dist/` folder with any static host
3. Configure redirects to `index.html` for SPA routing

## SEO & Social Sharing

### Update Meta Tags

Edit `index.html` to customize social sharing appearance:

```html
<!-- Line 12-13 -->
<meta property="og:title" content="Your Custom Title" />
<meta property="og:description" content="Your Custom Description" />

<!-- Add OG image after creating it -->
<meta property="og:image" content="https://yourdomain.com/og-image.png" />
```

### Create OG Image

Recommended size: 1200x630px
Screenshot the hero section and save as `public/og-image.png`

## Analytics

Analytics tracking hooks are commented in the code. To enable:

1. Add Google Analytics to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. Uncomment analytics hooks in `src/App.jsx`:
   - Line ~715: Copy CA event
   - Line ~728: Buy button click
   - Line ~740: Easter egg trigger

## Performance Optimization

✅ **Font Preloading** - Google Fonts are preconnected in `index.html`
✅ **Code Splitting** - Vite handles automatic splitting
✅ **Image Optimization** - All visuals are inline SVG (no image requests)
✅ **Lazy Loading** - Framer Motion handles animation optimization

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Clipboard API requires HTTPS in production.

## Troubleshooting

### Copy function not working

- Ensure site is served over HTTPS (required for Clipboard API)
- Fallback method will work on older browsers

### Fonts not loading

- Check Google Fonts CDN is accessible
- Fonts are preloaded in `index.html` for performance

### Jupiter link not opening

- Verify contract address is set correctly
- Check browser pop-up blocker settings

## License

Do whatever you want with this code. We just like crayons.

## Credits

Built with crayons and determination.

© 2026 SanDusk Corporation. Not financial advice.
