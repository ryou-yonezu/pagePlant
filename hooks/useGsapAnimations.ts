import { useEffect } from 'react';
import { gsap } from 'gsap';
// ScrollTriggerは_app.tsxで登録済み

const useGsapAnimations = () => {
  useEffect(() => {
    const fadeInElements = gsap.utils.toArray<HTMLElement>('.gsap-fade-in');
    fadeInElements.forEach(el => {
      gsap.fromTo(el, { opacity: 0 }, {
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        delay: parseFloat(el.dataset.gsapDelay || "0")
      });
    });

    const fadeInUpElements = gsap.utils.toArray<HTMLElement>('.gsap-fade-in-up');
    fadeInUpElements.forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        delay: parseFloat(el.dataset.gsapDelay || "0")
      });
    });

    const scaleInElements = gsap.utils.toArray<HTMLElement>('.gsap-scale-in');
    scaleInElements.forEach(el => {
      gsap.fromTo(el, { opacity: 0, scale: 0.8 }, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        delay: parseFloat(el.dataset.gsapDelay || "0")
      });
    });

    const flowItems = gsap.utils.toArray<HTMLElement>('.flow-item');
    flowItems.forEach((item) => {
        const card = item.querySelector<HTMLElement>('.glassmorphism');
        const icon = item.querySelector<HTMLElement>('.flow-icon');
        // Check for md:flex-row-reverse for desktop, default to -100 for mobile or standard layout
        let direction = -100; // Default direction (from left for card)
        if (window.innerWidth >= 768) { // md breakpoint
            if (item.classList.contains('md:flex-row-reverse')) {
                direction = 100; // from right for card
            }
        }
        
        if (card) {
          gsap.fromTo(card,
              { opacity: 0, x: (window.innerWidth < 768 ? 0 : direction) , y: (window.innerWidth < 768 ? 30 : 0)},
              { opacity: 1, x: 0, y:0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 80%", toggleActions: "play none none none" }}
          );
        }
        if (icon) {
          gsap.fromTo(icon,
              { scale: 0 },
              { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", scrollTrigger: { trigger: item, start: "top 80%", toggleActions: "play none none none" }, delay: 0.3 }
          );
        }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export default useGsapAnimations;