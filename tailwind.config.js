/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          0: "var(--primary-0)",
          10: "var(--primary-10)",
          20: "var(--primary-20)",
          25: "var(--primary-25)",
          30: "var(--primary-30)",
          35: "var(--primary-35)",
          40: "var(--primary-40)",
          50: "var(--primary-50)",
          60: "var(--primary-60)",
          70: "var(--primary-70)",
          80: "var(--primary-80)",
          90: "var(--primary-90)",
          95: "var(--primary-95)",
          98: "var(--primary-98)",
          99: "var(--primary-99)",
          100: "var(--primary-100)",
        },
        secondary: {
          0: "var(--secondary-0)",
          10: "var(--secondary-10)",
          20: "var(--secondary-20)",
          25: "var(--secondary-25)",
          30: "var(--secondary-30)",
          35: "var(--secondary-35)",
          40: "var(--secondary-40)",
          50: "var(--secondary-50)",
          60: "var(--secondary-60)",
          70: "var(--secondary-70)",
          80: "var(--secondary-80)",
          90: "var(--secondary-90)",
          95: "var(--secondary-95)",
          98: "var(--secondary-98)",
          99: "var(--secondary-99)",
          100: "var(--secondary-100)",
        },
        tertiary: {
          0: "var(--tertiary-0)",
          10: "var(--tertiary-10)",
          20: "var(--tertiary-20)",
          25: "var(--tertiary-25)",
          30: "var(--tertiary-30)",
          35: "var(--tertiary-35)",
          40: "var(--tertiary-40)",
          50: "var(--tertiary-50)",
          60: "var(--tertiary-60)",
          70: "var(--tertiary-70)",
          80: "var(--tertiary-80)",
          90: "var(--tertiary-90)",
          95: "var(--tertiary-95)",
          98: "var(--tertiary-98)",
          99: "var(--tertiary-99)",
          100: "var(--tertiary-100)",
        },
        neutral: {
          0: "var(--neutral-0)",
          10: "var(--neutral-10)",
          20: "var(--neutral-20)",
          25: "var(--neutral-25)",
          30: "var(--neutral-30)",
          35: "var(--neutral-35)",
          40: "var(--neutral-40)",
          50: "var(--neutral-50)",
          60: "var(--neutral-60)",
          70: "var(--neutral-70)",
          80: "var(--neutral-80)",
          90: "var(--neutral-90)",
          95: "var(--neutral-95)",
          98: "var(--neutral-98)",
          99: "var(--neutral-99)",
          100: "var(--neutral-100)",
          4: "var(--neutral-4)",
          6: "var(--neutral-6)",
          12: "var(--neutral-12)",
          17: "var(--neutral-17)",
          22: "var(--neutral-22)",
          24: "var(--neutral-24)",
          87: "var(--neutral-87)",
          92: "var(--neutral-92)",
          94: "var(--neutral-94)",
          96: "var(--neutral-96)",
        },
        neutralVariant: {
          0: "var(--neutral-variant-0)",
          10: "var(--neutral-variant-10)",
          20: "var(--neutral-variant-20)",
          25: "var(--neutral-variant-25)",
          30: "var(--neutral-variant-30)",
          35: "var(--neutral-variant-35)",
          40: "var(--neutral-variant-40)",
          50: "var(--neutral-variant-50)",
          60: "var(--neutral-variant-60)",
          70: "var(--neutral-variant-70)",
          80: "var(--neutral-variant-80)",
          90: "var(--neutral-variant-90)",
          95: "var(--neutral-variant-95)",
          98: "var(--neutral-variant-98)",
          99: "var(--neutral-variant-99)",
          100: "var(--neutral-variant-100)",
        },
        error: {
          0: "var(--error-0)",
          10: "var(--error-10)",
          20: "var(--error-20)",
          25: "var(--error-25)",
          30: "var(--error-30)",
          35: "var(--error-35)",
          40: "var(--error-40)",
          50: "var(--error-50)",
          60: "var(--error-60)",
          70: "var(--error-70)",
          80: "var(--error-80)",
          90: "var(--error-90)",
          95: "var(--error-95)",
          98: "var(--error-98)",
          99: "var(--error-99)",
          100: "var(--error-100)",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
