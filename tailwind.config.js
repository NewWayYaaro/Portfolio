/** 
 * Ye Tailwind CSS ka configuration file hai.
 * Isme hum apne Tailwind ka setup, customization aur extra features define karte hain.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dark mode setting:
  // 'class' ka matlab: jab HTML me 'dark' class add karenge tab dark mode enable hoga
  darkMode: 'class', 

  // Content files:
  // Tailwind in files ko scan karega aur jitni CSS classes use hui hain unka final CSS banayega
  content: [
    './index.html',                  // Main HTML file
    './src/**/*.{js,ts,jsx,tsx}',    // Sare JS, TS, JSX, TSX files inside src folder
  ],

  theme: {
    extend: {
      // ===== Custom animations ke liye keyframes add kar rahe hain =====
      keyframes: {
        // "gradientBlink" naam ka animation:
        // Ye background gradient ko left se right aur wapas left move karega
        gradientBlink: {
          '0%, 100%': { backgroundPosition: '0% 50%' },   // Start & end me position left side
          '50%': { backgroundPosition: '100% 50%' },      // Beech me position right side
        },
      },

      // Animation name define karna:
      animation: {
        // "gradient-blink" naam ka animation run karega
        // Ye "gradientBlink" keyframes ko 2 second me smoothly chalata rahega infinite loop me
        'gradient-blink': 'gradientBlink 2s ease infinite',
      },
    },
  },

  // Tailwind me extra features add karne ke liye plugins use hote hain
  // Abhi koi extra plugin use nahi kar rahe (empty array)
  plugins: [],
};
