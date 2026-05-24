# Community Signal Pass

Date: 2026-05-24

## Reddit Signals Added Or Reconfirmed

| Signal | Source |
| --- | --- |
| GSAP/ScrollTrigger, Motion, Three.js/R3F, and IntersectionObserver recur as answers to "how do these scroll-heavy sites get built?" | [r/webdev frontend animations](https://www.reddit.com/r/webdev/comments/1rp81e3/frontend_animations/) |
| Motion is treated as a good React UI animation tool; GSAP is treated as the stronger complex timeline/scroll tool; CSS is enough for simple transitions | [r/reactjs animation library](https://www.reddit.com/r/reactjs/comments/1pmbum9/which_animation_library_should_i_use/) |
| shadcn primitives plus a motion layer is a visible ecosystem pattern: microinteractions, morphing dialogs, animated dropdowns, buttons, and scroll transitions | [r/shadcn motion-driven components](https://www.reddit.com/r/shadcn/comments/1rtpd5f/motiondriven_ui_components_built_on_top_of/) |
| Reduced-motion support, bounce discipline, and "not everything needs animation" are recurring critique points | [r/reactjs animated components feedback](https://www.reddit.com/r/reactjs/comments/1rh0qpy/collection_of_animated_ui_components_built_with/) |
| Awwwards-style work is often criticized as too experimental, slow, scroll-hijacking, or unsuitable for real product/client work | [r/web_design inspiration critique](https://www.reddit.com/r/web_design/comments/1ko8f6i/where_do_you_find_actually_good_website_design/) |
| Creative web/interactive media communities cluster around Three.js, WebGL, shaders, creative coding, FWA, and X/Instagram sharing | [r/web_design interactive media communities](https://www.reddit.com/r/web_design/comments/169adm7/are_there_any_communities_for_the_more/) |
| R3F is praised for React integration and ecosystem, but raw Three.js is still preferred by some for low-level or simulation-heavy work | [r/threejs React Three Fiber](https://www.reddit.com/r/threejs/comments/1c5gw0l/react_three_fiber/) |
| Recent creative 3D demos publicly list Three.js, R3F, GSAP, and GLSL together | [r/threejs cinematic 3D experience](https://www.reddit.com/r/threejs/comments/1titi4c/built_a_cinematic_interactive_3d_experience_for_a/) |
| React + GSAP is being used for browser motion editors and motion tooling, not only marketing pages | [r/react motion editor](https://www.reddit.com/r/react/comments/1roh3sy/i_built_a_motion_editor_with_react_gsap_beta_is/) |
| Copy-paste component libraries repeatedly cite Tailwind, shadcn-style ownership, accessibility, and AI-friendly docs as adoption reasons | [r/react Nocta UI](https://www.reddit.com/r/react/comments/1lnlzft/nocta_ui_a_modern_react_component_library/) |
| shadcn-style patterns have spread outside React, reinforcing the primitive/token/copy-paste model as a cross-framework standard | [r/webdev Basecoat](https://www.reddit.com/r/webdev/comments/1kxepor/i_rebuilt_shadcnui_in_html_tailwind_no_react/) |
| Developers are actively comparing Next.js and Astro for scroll-driven, motion-heavy GSAP sites, meaning the creative stack is not exclusively Next.js | [r/astrojs motion-heavy sites](https://www.reddit.com/r/astrojs/comments/1qycb0b/nextjs_or_astro_for_scrolldriven_motionheavy/) |

## Decision Impact

- The Dhiraj base should stay practical and product-safe.
- The Dhiraj signature layer can include scroll/text/card/toast motion, but must never require heavy WebGL or scroll hijacking.
- shadcn/Radix-style primitives are more durable than a single visual theme.
- The final agent prompt should include review questions for over-animation, accessibility, reduced motion, and duplicate interactions.
