# Source Registry

This registry defines the bounded but expandable corpus used to derive Dhiraj's frontend standards.

## Source Classes

| Class | Role | Inclusion Rule |
| --- | --- | --- |
| Expert video transcript | Practitioners explaining technique, taste, workflow, or stack decisions | Transcript fetched locally or marked blocked after an attempt |
| Official documentation | Maintainer truth for current APIs, install commands, accessibility, or capabilities | Prefer official docs over blogs |
| Award/case study | Awwwards/Codrops/studio case studies with explicit stack or design process | Must include stack, interaction, or implementation details |
| Component ecosystem | Public component catalogs such as React Bits, 21st, Magic UI, Aceternity, shadcn | Must expose categories, stack, or copy-paste workflow |
| Community signal | Reddit and public/provided X posts showing adoption, objections, or warnings | Must include permalink/public URL |

## Transcript Policy

- Store transcript status, snippet counts, extracted claims, and timestamps.
- Do not store full transcripts in this repository.
- If transcript fetching fails, record the video as `transcript_blocked` with the attempted method.
- A blocked transcript stays out of T0/T1 scoring until a transcript or equivalent source is provided.

## Processed Video Transcripts

Fetched locally with `youtube-transcript-api` on 2026-05-24.

| ID | Channel | Video | Status |
| --- | --- | --- | --- |
| yt-olivier-custom-cursor-motion | Olivier Larose | How to Build a Custom Cursor with Framer Motion | transcript_processed |
| yt-tim-gabe-world-class-design-system | Tim Gabe | How to Build a World Class Design System | transcript_processed |
| yt-tim-gabe-secret-better-ui | Tim Gabe | The Secret to Better UI Design | transcript_processed |
| yt-tim-gabe-master-ui-design | Tim Gabe | How to Master UI Design (Step by Step) | transcript_processed |
| yt-olivier-web-animation-trends-2024 | Olivier Larose | Top 10 Web Animation Trends of 2024 | transcript_processed |
| yt-olivier-top-10-resources | Olivier Larose | My Top 10 Resources for Web Animations | transcript_processed |
| yt-olivier-floating-gallery-gsap | Olivier Larose | Build an Awwwards Floating Image Gallery using Nextjs and GSAP | transcript_processed |
| yt-tim-gabe-world-class-app-design | Tim Gabe | Our World Class App Design Formula | transcript_processed |
| yt-jsmastery-awwwards-react-tailwind-gsap | JavaScript Mastery | Build and Deploy an Awwwards Winning Website | transcript_processed |
| yt-jsmastery-master-web-animations | JavaScript Mastery | Master Web Animations in 2 Hours | transcript_processed |
| yt-jsmastery-creative-frontend | JavaScript Mastery | Master Creative Frontend in 2 Hours | transcript_processed |
| yt-prismic-3d-ecommerce-next-gsap | Prismic | Build a 3D Ecommerce Landing Page with Next.js, GSAP, Three.js and Prismic | transcript_processed |
| yt-designcourse-shadcn-cursor | DesignCourse | PRO LEVEL ShadCN & Cursor Landing Page in 20 minutes | transcript_processed |
| yt-codegrid-3d-scroll-product | Codegrid | 3D Scroll Animation Makes Your Product Page Feel Alive | transcript_processed |
| yt-wawa-3d-book-slider | Wawa Sensei | Build a 3D Book Slider Landing Page with Three.js & React | transcript_processed |
| yt-oxeni-awwwards-3d | Oxeni | Build an Awwwards Winning 3D Website | transcript_processed |

## Discovery Queries Used

- `creative web animation gsap react three fiber`
- `web animation trends GSAP Framer Motion Olivier Larose`
- `award winning website design gsap lenis three.js`
- `design engineering frontend components shadcn motion`
- `world class app design formula Tim Gabe`
- `Awwwards case study Next.js GSAP Lenis Three.js React Three Fiber`
- `React animated component library shadcn Motion GSAP`

## X/Twitter Boundary

X search redirected to login in the browser session on 2026-05-24. V1 therefore uses only public/indexed X references surfaced through component ecosystem pages or links provided later by the user. This is an explicit evidence gap, not a silent omission.
