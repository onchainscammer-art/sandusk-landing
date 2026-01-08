# Pre-Launch Deployment Checklist

## Critical (Must Do Before Launch)

- [ ] **Update Contract Address** in `src/App.jsx` (Line 5)
  ```javascript
  const CA = "YOUR_ACTUAL_CONTRACT_ADDRESS_HERE";
  ```

- [ ] **Update Twitter Link** in `src/App.jsx` (Line ~665)
  ```javascript
  href="https://twitter.com/YOUR_ACTUAL_TWITTER"
  ```

- [ ] **Test Copy Function** - Click SD card, verify CA copies correctly

- [ ] **Test Buy Button** - Verify Jupiter link opens with correct CA

- [ ] **Mobile Testing** - Check on actual mobile devices (iOS & Android)

## Highly Recommended

- [ ] **Create OG Image** (1200x630px)
  - Screenshot the hero section
  - Save to `public/og-image.png`
  - Uncomment OG image meta tags in `index.html` (Lines ~17 & ~23)

- [ ] **Add Sound Effect** (Optional but cool)
  - Add scribble/crinkle sound file to `public/sounds/scribble.mp3`
  - Uncomment audio code in `src/App.jsx` (Lines ~701-702)

- [ ] **Setup Analytics**
  - Add Google Analytics ID to `index.html`
  - Uncomment analytics hooks in `src/App.jsx` (Lines ~715, ~728, ~740)

- [ ] **Custom Domain**
  - Configure DNS records
  - Enable HTTPS (required for clipboard function)
  - Test SSL certificate

## Quality Assurance

- [ ] **Browser Testing**
  - Chrome ✓
  - Safari ✓
  - Firefox ✓
  - Mobile Safari ✓
  - Mobile Chrome ✓

- [ ] **Functionality Testing**
  - Hero buy button opens Jupiter ✓
  - SD card click copies CA ✓
  - Keyboard 'C' shortcut works ✓
  - Toast notification appears ✓
  - Easter egg glitch effect works ✓
  - All links open in new tabs ✓

- [ ] **Responsive Testing**
  - Desktop (1920px+) ✓
  - Laptop (1440px) ✓
  - Tablet (768px) ✓
  - Mobile (375px) ✓

- [ ] **Performance**
  - Lighthouse score > 90 ✓
  - First Contentful Paint < 2s ✓
  - Time to Interactive < 3s ✓

## Post-Launch

- [ ] **Monitor Analytics**
  - Track copy CA events
  - Track buy button clicks
  - Monitor traffic sources

- [ ] **Social Media**
  - Post launch announcement
  - Share screenshots
  - Engage with community

- [ ] **Community Support**
  - Monitor questions about how to buy
  - Update How to Buy section if needed
  - Address any technical issues

## Emergency Contacts

- Developer: [Your Contact]
- Designer: [Your Contact]
- Community Manager: [Your Contact]

## Rollback Plan

If critical issues occur:

1. Revert to previous deployment
2. Fix issue in development
3. Test thoroughly
4. Redeploy

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

## Notes

- Clipboard function requires HTTPS
- Jupiter link uses SOL-{CA} format
- All content is in single `App.jsx` file for easy updates
- Font loading is optimized with preconnect

---

**Last Updated**: Before Launch
**Next Review**: After Launch
