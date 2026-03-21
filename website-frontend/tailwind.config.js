import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'PT Serif', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      typography: (theme) => ({
        stone: {
          css: {
            '--tw-prose-body': theme('colors.stone[800]'),
            '--tw-prose-headings': theme('colors.stone[900]'),
            '--tw-prose-lead': theme('colors.stone[600]'),
            '--tw-prose-links': theme('colors.stone[900]'),
            '--tw-prose-bold': theme('colors.stone[900]'),
            '--tw-prose-counters': theme('colors.stone[500]'),
            '--tw-prose-bullets': theme('colors.stone[300]'),
            '--tw-prose-hr': theme('colors.stone[200]'),
            '--tw-prose-quotes': theme('colors.stone[900]'),
            '--tw-prose-quote-borders': theme('colors.stone[200]'),
            '--tw-prose-captions': theme('colors.stone[500]'),
            '--tw-prose-code': theme('colors.stone[900]'),
            '--tw-prose-pre-code': theme('colors.stone[200]'),
            '--tw-prose-pre-bg': theme('colors.stone[800]'),
            '--tw-prose-th-borders': theme('colors.stone[300]'),
            '--tw-prose-td-borders': theme('colors.stone[200]'),
            a: {
              fontWeight: '500',
              textDecoration: 'underline',
              textDecorationColor: theme('colors.stone.300'),
              textUnderlineOffset: '4px',
              transition: 'text-decoration-color 0.2s ease',
              '&:hover': {
                textDecorationColor: theme('colors.stone.900'),
              },
            },
            h1: { fontFamily: theme('fontFamily.sans').join(',') },
            h2: { fontFamily: theme('fontFamily.sans').join(',') },
            h3: { fontFamily: theme('fontFamily.sans').join(',') },
            h4: { fontFamily: theme('fontFamily.sans').join(',') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
