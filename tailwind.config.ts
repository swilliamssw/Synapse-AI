/**
 * Tailwind CSS Configuration
 *
 * This file configures Tailwind CSS for the Synapse AI chat application,
 * including custom theme extensions and plugin configurations.
 */

import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  // Enable dark mode with class strategy
  darkMode: "class",
  // Specify files to scan for utility classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App directory (Next.js 13+)
  ],
  theme: {
    extend: {
      // Custom typography configuration for markdown and code blocks
      typography: {
        DEFAULT: {
          css: {
            // Set default text color for prose content
            color: "#9ca3af",
            // Style inline code blocks
            code: {
              color: "#86efac", // Light green text
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background
              padding: "0.2em 0.4em", // Consistent padding
              borderRadius: "0.375rem", // Rounded corners
              fontWeight: "500", // Medium font weight
            },
            // Style multiline code blocks
            pre: {
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background
              code: {
                backgroundColor: "transparent", // Remove nested code background
                padding: "0", // Remove nested code padding
              },
            },
          },
        },
      },
    },
  },
  // Enable the typography plugin for markdown content
  plugins: [typography],
};

export default config;
