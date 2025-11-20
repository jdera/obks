// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // This makes 'font-sans' use the Noto Sans variable
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // This makes 'font-mono' use the Noto Sans Mono variable
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
    },
  },
  // ...
}
