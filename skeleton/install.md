# Install Commands

Create a new default Dhiraj web app:

```bash
npx create-next-app@latest dhiraj-app --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd dhiraj-app
npm install @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-popover
npm install class-variance-authority clsx tailwind-merge lucide-react sonner
npm install react-hook-form zod @hookform/resolvers
npm install motion gsap @gsap/react lenis
```

Only add 3D/WebGL when the project concept requires it:

```bash
npm install three @react-three/fiber @react-three/drei
```

## Default Use

- Use Motion for React UI transitions, card hover, scroll reveal, modal transition, and page entrance.
- Use GSAP for ScrollTrigger, SVG/path work, text splitting, and timeline choreography.
- Use Lenis only on creative/marketing pages, disabled for reduced-motion users and product workflows.
- Use Radix/shadcn-style primitives for dialog, sheet, tabs, tooltip, popover, form, and toast surfaces.
