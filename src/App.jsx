import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, AlertTriangle, Twitter } from 'lucide-react'

// ============================================
// CONTRACT ADDRESS - UPDATE THIS AFTER LAUNCH
// ============================================
const CA = "F7grH2Bazbr5HjGBLDT1VfyQNVVmopYgcw8pvbCEpump";

// ============================================
// HAND-DRAWN SVG COMPONENTS
// ============================================

const WobblyBorder = ({ children, className = "", color = "#ED1C24" }) => (
  <div className={`relative ${className}`}>
    <svg className="absolute inset-0 w-full h-full" style={{ filter: 'url(#wobble)' }}>
      <defs>
        <filter id="wobble">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </defs>
      <rect
        x="2"
        y="2"
        width="calc(100% - 4px)"
        height="calc(100% - 4px)"
        fill="none"
        stroke={color}
        strokeWidth="3"
        rx="8"
      />
    </svg>
    <div className="relative z-10 p-6">
      {children}
    </div>
  </div>
)

const CrayonDivider = ({ color = "#ED1C24" }) => (
  <svg width="100%" height="8" className="my-8">
    <path
      d={`M 0 4 Q 10 ${3 + Math.random()}, 20 ${4 + Math.random()} T 40 4 T 60 4 T 80 4 T 100 4 T 120 4 T 140 4 T 160 4 T 180 4 T 200 4 T 220 4 T 240 4 T 260 4 T 280 4 T 300 4`}
      stroke={color}
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

// ============================================
// TOAST NOTIFICATION SYSTEM
// ============================================

const Toast = ({ message, show, onClose }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <WobblyBorder color="#0066CC" className="bg-paper shadow-2xl">
          <div className="font-hand text-lg text-crayon-blue">
            {message}
          </div>
        </WobblyBorder>
      </motion.div>
    )}
  </AnimatePresence>
)

// ============================================
// SD CARD COMPONENT
// ============================================

const SDCardComponent = ({ contractAddress, onCopy }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative mx-auto cursor-pointer"
      style={{ maxWidth: '500px' }}
      whileHover={{ scale: 1.05, rotate: isHovered ? 2 : 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onCopy}
    >
      <svg viewBox="0 0 400 280" className="w-full drop-shadow-2xl">
        {/* SD Card Body */}
        <path
          d="M 30 20 L 370 22 L 368 260 L 32 258 Z"
          fill="#FDFBF7"
          stroke="#ED1C24"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Notch at top right */}
        <path
          d="M 300 22 L 315 22 L 330 45 L 330 22"
          fill="#FDFBF7"
          stroke="#ED1C24"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Label area */}
        <rect
          x="50"
          y="50"
          width="300"
          height="180"
          fill="white"
          stroke="#FF7F27"
          strokeWidth="4"
          rx="8"
        />

        {/* "SanDusk" branding at top */}
        <text x="200" y="90" fontFamily="Permanent Marker" fontSize="36" textAnchor="middle" fill="#0066CC">
          SanDusk
        </text>

        {/* "Click to Copy" instruction */}
        <text x="200" y="120" fontFamily="Patrick Hand" fontSize="16" textAnchor="middle" fill="#666">
          Click to Copy
        </text>

        {/* Contract Address - split into lines for readability */}
        <text x="200" y="155" fontFamily="Gochi Hand" fontSize="16" textAnchor="middle" fill="#000" fontWeight="bold">
          {contractAddress.substring(0, 22)}
        </text>
        <text x="200" y="180" fontFamily="Gochi Hand" fontSize="16" textAnchor="middle" fill="#000" fontWeight="bold">
          {contractAddress.substring(22)}
        </text>

        {/* Copy icon */}
        <g transform="translate(320, 200)">
          <rect x="0" y="0" width="20" height="20" fill="none" stroke="#0066CC" strokeWidth="2" rx="2" />
          <rect x="4" y="4" width="20" height="20" fill="white" stroke="#0066CC" strokeWidth="2" rx="2" />
        </g>
      </svg>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-crayon-blue text-white px-4 py-2 rounded-lg font-hand text-sm whitespace-nowrap"
        >
          Copy Contract Address
        </motion.div>
      )}
    </motion.div>
  )
}

// ============================================
// HERO SECTION
// ============================================

const Hero = ({ onBuyClick }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
    {/* Founder Image - Floating on the side (Desktop only) */}
    <motion.img
      src="/founder.png"
      alt="Founder"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="hidden md:block absolute top-20 right-4 md:right-16 lg:right-32 xl:right-40 w-32 md:w-48 lg:w-64 pointer-events-none z-10"
      style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.1))' }}
    />

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center relative z-20"
    >
      {/* Mobile Image - Above Logo */}
      <motion.img
        src="/founder.png"
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden mx-auto mb-6 w-32 -rotate-3"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
      />

      {/* Multi-colored SanDusk Logo */}
      <h1 className="font-marker mb-6" style={{ fontSize: 'clamp(3rem, 15vw, 8rem)', lineHeight: '1.2' }}>
        <span className="text-crayon-red">S</span>
        <span className="text-crayon-red">a</span>
        <span className="text-crayon-red">n</span>
        <span className="text-crayon-orange">D</span>
        <span className="text-crayon-yellow">u</span>
        <span className="text-crayon-blue">s</span>
        <span className="text-crayon-lightblue">k</span>
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-hand text-xl md:text-3xl mb-16 text-gray-700 max-w-4xl mx-auto leading-relaxed"
      >
        The Degenerate Retards Stock of Choice<br />
        and Preferred Storage for the Epstein Files
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={onBuyClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="wobble-hover bg-crayon-red text-white font-marker text-2xl md:text-3xl px-12 py-6 rounded-3xl shadow-2xl relative overflow-hidden"
        style={{
          border: '4px solid #000',
          transform: 'rotate(-1deg)',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-crayon-orange"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">BUY STORAGE (TOKEN)</span>
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-16 text-crayon-blue font-hand text-lg"
      >
        ↓ Scroll for specs ↓
      </motion.div>
    </motion.div>
  </section>
)

// ============================================
// TECH SPECS COMPARISON TABLE
// ============================================

const TechSpecs = () => {
  const specs = [
    { label: 'Storage Capacity', sandisk: '256 GB', sandusk: '1 Billion Supply' },
    { label: 'Read Speed', sandisk: '150 MB/s', sandusk: 'Instant Pump Speed' },
    { label: 'Write Speed', sandisk: '70 MB/s', sandusk: 'Moon Velocity' },
    { label: 'Durability', sandisk: 'Water/Shock Proof', sandusk: 'Diamond Hands Proof' },
    { label: 'Rug Probability', sandisk: 'N/A', sandusk: '0%' },
    { label: 'Warranty', sandisk: '5 Years', sandusk: 'Forever (Trust Me Bro)' },
  ]

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-marker text-5xl md:text-7xl text-center mb-12 text-crayon-red">
          Tech Specs
        </h2>

        <WobblyBorder color="#FF7F27">
          <div className="overflow-x-auto">
            <table className="w-full font-hand text-lg">
              <thead>
                <tr className="border-b-4 border-crayon-yellow">
                  <th className="text-left py-4 px-2 md:px-4 text-xl md:text-2xl">Feature</th>
                  <th className="text-center py-4 px-2 md:px-4 text-xl md:text-2xl text-gray-600">SanDisk</th>
                  <th className="text-center py-4 px-2 md:px-4 text-xl md:text-2xl text-crayon-blue">SanDusk</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <motion.tr
                    key={spec.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b-2 border-gray-200"
                  >
                    <td className="py-4 px-2 md:px-4 font-bold">{spec.label}</td>
                    <td className="py-4 px-2 md:px-4 text-center text-gray-600">{spec.sandisk}</td>
                    <td className="py-4 px-2 md:px-4 text-center text-crayon-blue font-bold">{spec.sandusk}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </WobblyBorder>
      </motion.div>
    </section>
  )
}

// ============================================
// HOW TO BUY SECTION
// ============================================

const HowToBuy = () => {
  const steps = [
    { number: '1', title: 'Get a Wallet', description: 'Download Phantom or Solflare wallet' },
    { number: '2', title: 'Get Some SOL', description: 'Buy SOL on an exchange and send to your wallet' },
    { number: '3', title: 'Go to Jupiter', description: 'Click the BUY button above or visit jup.ag' },
    { number: '4', title: 'Swap SOL for SanDusk', description: 'Paste the contract address and swap' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-paper to-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-marker text-5xl md:text-7xl text-center mb-12 text-crayon-orange">
          How to Buy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <WobblyBorder color={['#ED1C24', '#FF7F27', '#FFF200', '#0066CC'][index]}>
                <div className="text-center">
                  <div
                    className="font-marker text-6xl mb-4"
                    style={{ color: ['#ED1C24', '#FF7F27', '#FFF200', '#0066CC'][index] }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-marker text-2xl mb-2">{step.title}</h3>
                  <p className="font-hand text-lg text-gray-600">{step.description}</p>
                </div>
              </WobblyBorder>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// ============================================
// TOKENOMICS SECTION
// ============================================

const Tokenomics = () => (
  <section className="py-20 px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="font-marker text-5xl md:text-7xl text-center mb-12 text-crayon-yellow" style={{ WebkitTextStroke: '2px #000' }}>
        Tokenomics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WobblyBorder color="#ED1C24">
          <div className="text-center">
            <div className="font-marker text-5xl text-crayon-red mb-4">1B</div>
            <div className="font-hand text-xl">Total Supply</div>
            <div className="font-hand text-sm text-gray-600 mt-2">Fixed Forever</div>
          </div>
        </WobblyBorder>

        <WobblyBorder color="#FF7F27">
          <div className="text-center">
            <div className="font-marker text-5xl text-crayon-orange mb-4">0%</div>
            <div className="font-hand text-xl">Tax</div>
            <div className="font-hand text-sm text-gray-600 mt-2">Buy & Sell</div>
          </div>
        </WobblyBorder>

        <WobblyBorder color="#0066CC">
          <div className="text-center">
            <div className="font-marker text-5xl text-crayon-blue mb-4">100%</div>
            <div className="font-hand text-xl">Community</div>
            <div className="font-hand text-sm text-gray-600 mt-2">No Team Tokens</div>
          </div>
        </WobblyBorder>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="font-hand text-2xl text-gray-700 italic">
          "We burned the keys and ate the crayons"
        </p>
      </motion.div>
    </motion.div>
  </section>
)

// ============================================
// CORRUPTED FILE EASTER EGG
// ============================================

const CorruptedFileEasterEgg = ({ onTrigger }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-24 left-8 cursor-pointer z-40"
    onClick={onTrigger}
  >
    <WobblyBorder color="#FF7F27" className="bg-paper">
      <AlertTriangle className="text-crayon-orange" size={32} />
    </WobblyBorder>
  </motion.div>
)

const GlitchOverlay = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        style={{ mixBlendMode: 'difference' }}
      >
        <motion.div
          className="glitch-active bg-crayon-red text-white font-marker text-4xl md:text-6xl p-12 text-center"
          style={{
            border: '8px solid #FFF200',
            transform: 'rotate(-2deg)',
          }}
        >
          FILE CORRUPTED
          <br />
          <span className="text-2xl md:text-4xl">BUY MORE TO FIX</span>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

// ============================================
// BACKGROUND STICKERS (GUTTER SYSTEM)
// ============================================

const BackgroundStickers = () => {
  const stickers = [
    // Top Left Gutter
    {
      src: '/IMG_4171.png',
      className: 'hidden md:block absolute top-10 left-10 w-32 -rotate-6',
    },
    // Top Right Gutter
    {
      src: '/IMG_4169.jpeg',
      className: 'hidden md:block absolute top-20 right-10 w-40 rotate-12',
    },
    // Middle Left Gutter (moved up to avoid red divider)
    {
      src: '/IMG_0434.png',
      className: 'hidden md:block absolute top-[28%] left-8 w-36 rotate-6',
    },
    // Right side - Above Tech Specs
    {
      src: '/IMG_4170.jpeg',
      className: 'hidden md:block absolute top-[32%] right-12 w-44 -rotate-3',
    },
    // Bottom Left Gutter
    {
      src: '/IMG_4162.jpeg',
      className: 'hidden md:block absolute bottom-20 left-12 w-32 rotate-12',
    },
  ]

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {stickers.map((sticker, index) => (
        <motion.img
          key={index}
          src={sticker.src}
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={sticker.className}
          style={{
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
          }}
        />
      ))}
    </div>
  )
}

// ============================================
// GOOGLE MEME SECTION (Between Tech Specs and How to Buy)
// ============================================

const GoogleMemeSection = () => (
  <section className="py-16 px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto flex justify-center"
    >
      <motion.img
        src="/IMG_0448.png"
        alt=""
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="w-full max-w-md md:max-w-lg"
        style={{
          transform: 'rotate(-2deg)',
          filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.15))',
        }}
      />
    </motion.div>
  </section>
)

// ============================================
// MOBILE IMAGE GALLERY (Mobile Only)
// ============================================

const MobileImageGallery = () => {
  const mobileImages = [
    { src: '/IMG_4169.jpeg', rotation: '8deg' },
    { src: '/IMG_4171.png', rotation: '-6deg' },
    { src: '/IMG_0434.png', rotation: '5deg' },
    { src: '/IMG_4170.jpeg', rotation: '-4deg' },
    { src: '/IMG_4162.jpeg', rotation: '6deg' },
  ]

  return (
    <section className="md:hidden py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <h2 className="font-marker text-4xl text-center mb-8 text-crayon-red">
          The Evidence
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {mobileImages.slice(0, 4).map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt=""
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
              style={{
                transform: `rotate(${image.rotation})`,
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
              }}
            />
          ))}
        </div>

        {/* Fifth image centered below */}
        <div className="mt-6 flex justify-center">
          <motion.img
            src={mobileImages[4].src}
            alt=""
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-1/2"
            style={{
              transform: `rotate(${mobileImages[4].rotation})`,
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================

const Footer = () => (
  <footer className="py-12 px-4 border-t-4 border-crayon-red">
    <div className="max-w-4xl mx-auto">
      <CrayonDivider color="#0066CC" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Social Links */}
        <div className="flex gap-6">
          <motion.a
            href="https://x.com/sandusk67"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="bg-crayon-lightblue p-4 rounded-full"
            style={{ border: '3px solid #000' }}
          >
            <Twitter className="text-white" size={32} />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="font-hand text-lg text-center text-gray-600">
          © 2026 SanDusk Corporation
          <br />
          <span className="text-sm">Not financial advice, we just like crayons.</span>
        </div>

        {/* Logo */}
        <div className="font-marker text-4xl">
          <span className="text-crayon-red">San</span>
          <span className="text-crayon-blue">Dusk</span>
        </div>
      </div>

      <CrayonDivider color="#FF7F27" />
    </div>
  </footer>
)

// ============================================
// MAIN APP COMPONENT
// ============================================

function App() {
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [showGlitch, setShowGlitch] = useState(false)

  // Sound effect for copy action
  const playScribbleSound = () => {
    // Placeholder: Replace with actual sound URL
    // const audio = new Audio('/sounds/scribble.mp3')
    // audio.play().catch(err => console.log('Audio play failed:', err))
    console.log('🎵 Scribble sound played')
  }

  // Copy to clipboard function
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CA)
      setToastMessage("Address Copied. Don't fumble it.")
      setShowToast(true)
      playScribbleSound()
      setTimeout(() => setShowToast(false), 3000)

      // Analytics hook: Track copy event
      // window.gtag?.('event', 'copy_ca', { contract_address: CA })
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = CA
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setToastMessage("Address Copied. Don't fumble it.")
        setShowToast(true)
        playScribbleSound()
        setTimeout(() => setShowToast(false), 3000)
      } catch (fallbackErr) {
        setToastMessage("Copy failed. Do it manually!")
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
      }
      document.body.removeChild(textArea)
    }
  }

  // Buy button handler
  const handleBuyClick = () => {
    const jupiterUrl = `https://jup.ag/swap/SOL-${CA}`
    window.open(jupiterUrl, '_blank', 'noopener,noreferrer')

    // Analytics hook: Track buy click
    // window.gtag?.('event', 'click_buy', { contract_address: CA })
  }

  // Corrupted file easter egg
  const triggerGlitch = () => {
    setShowGlitch(true)
    setTimeout(() => setShowGlitch(false), 2000)

    // Analytics hook: Track easter egg
    // window.gtag?.('event', 'easter_egg_triggered')
  }

  // Keyboard shortcut: Press 'C' to copy
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'c' || e.key === 'C') {
        if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          copyToClipboard()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="relative min-h-screen bg-paper">
      {/* Background Stickers Layer */}
      <BackgroundStickers />

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero onBuyClick={handleBuyClick} />

        {/* SD Card Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-marker text-5xl md:text-7xl text-center mb-12 text-crayon-blue">
              Your Storage Solution
            </h2>
            <SDCardComponent contractAddress={CA} onCopy={copyToClipboard} />
            <p className="text-center font-hand text-xl mt-8 text-gray-600">
              Click the card to copy • Press 'C' on keyboard
            </p>
          </motion.div>
        </section>

        {/* Tech Specs */}
        <TechSpecs />

        <CrayonDivider color="#FFF200" />

        {/* Google Meme Section */}
        <GoogleMemeSection />

        {/* How to Buy */}
        <HowToBuy />

        <CrayonDivider color="#0066CC" />

        {/* Tokenomics */}
        <Tokenomics />

        {/* Mobile Image Gallery */}
        <MobileImageGallery />

        {/* Footer */}
        <Footer />
      </div>

      {/* Overlays and UI Elements (above everything) */}
      <div className="relative z-50">
        {/* Easter Egg Trigger */}
        <CorruptedFileEasterEgg onTrigger={triggerGlitch} />

        {/* Glitch Overlay */}
        <GlitchOverlay show={showGlitch} />

        {/* Toast Notification */}
        <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
      </div>
    </div>
  )
}

export default App
