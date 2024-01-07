/*
 ** ** =========================================================================
 ** ** ** Init
 ** ** =========================================================================
 */
gsap.registerPlugin("ScrollTrigger");
const matchMedia = gsap.matchMedia();

/*
 ** ** =========================================================================
 ** ** ** Match Media Query
 ** ** =========================================================================
 */
matchMedia.add("(min-width: 800px)", () => {
  /*
   ** ** =========================================================================
   ** ** ** Section [Hero] Animations
   ** ** =========================================================================
   */
  //Intro
  gsap.fromTo(
    ".hero .intro",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.6,
      ease: "expoScale(0.5,7,none)",
    }
  );

  //Services
  gsap.fromTo(
    ".services article.card",
    {
      y: 2000,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: {
        amount: 0.5,
      },
      ease: "expoScale(0.5,7,none)",
    }
  );

  //Tagline
  gsap.fromTo(
    ".end h2",
    {
      scale: 2,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".end h2",
        scrub: 1,
        start: "top center",
        end: "+=100",
      },
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "expoScale(0.5,7,none)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [About] Animations
   ** ** =========================================================================
   */
  gsap.fromTo(
    "section.about .featured-image",
    {
      x: 500,
      opacity: 0.5,
    },
    {
      scrollTrigger: {
        trigger: "section.about .featured-image",
        scrub: 1,
        start: "top bottom",
        end: "center center",
      },
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expoScale(0.5,7,none)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [Activity] Animations
   ** ** =========================================================================
   */
  gsap.fromTo(
    "section.activity .featured-image",
    {
      x: 500,
      opacity: 0.5,
    },
    {
      scrollTrigger: {
        trigger: "section.activity .featured-image",
        scrub: 1,
        start: "top bottom",
        end: "center center",
      },
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expoScale(0.5,7,none)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [Our Customers] Animations
   ** ** =========================================================================
   */
  gsap.fromTo(
    "section.our-customers .wrapper",
    {
      x: -500,
      opacity: 0.5,
    },
    {
      scrollTrigger: {
        trigger: "section.our-customers .wrapper",
        scrub: 1,
        start: "top bottom",
        end: "center center",
      },
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "expoScale(0.5,7,none)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [Contact Us] Animations
   ** ** =========================================================================
   */
  //Intro
  gsap.fromTo(
    "section.contact-us .intro",
    {
      y: -1200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "expoScale(0.5,7,none)",
    }
  );

  //Links
  gsap.fromTo(
    "section.contact-us .links",
    {
      y: 1200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "expoScale(0.5,7,none)",
    }
  );

  //Form
  gsap.fromTo(
    "section.contact-us .start-form",
    {
      flex: "0 0 0px",
      opacity: 0,
    },
    {
      flex: 4,
      opacity: 1,
      duration: 0.4,
      delay: 0.8,
      ease: "expoScale(0.5,7,none)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [Professionals] Animations
   ** ** =========================================================================
   */
  gsap.fromTo(
    "section.professionals .row > *",
    {
      y: 200,
    },
    {
      y: 0,
      scrollTrigger: {
        trigger: "section.professionals",
        start: "top center",
      },
      stagger: { amount: 0.7 },
      duration: 1,
      ease: "back.out(1.7)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [Additionally] Animations
   ** ** =========================================================================
   */
  gsap.fromTo(
    "section.additionally .row > *",
    {
      y: 200,
    },
    {
      y: 0,
      scrollTrigger: {
        trigger: "section.additionally",
        start: "top center",
      },
      stagger: { amount: 0.5 },
      duration: 1,
      ease: "back.out(1.7)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [Customers] Animations
   ** ** =========================================================================
   */
  gsap.set("section.customers .row .icon-wrap", {
    perspective: 400,
    rotationY: "180deg",
  });

  gsap.fromTo(
    "section.customers .row > p",
    {
      x: "100%",
    },
    {
      x: 0,
      scrollTrigger: {
        trigger: "section.customers",
        start: "top center",
      },
      stagger: {
        amount: 0.5,
        onStart: () =>
          gsap.to("section.customers .row .icon-wrap", {
            rotationY: "0",
            stagger: { amount: 0.5 },
            duration: 1,
            delay: 0.3,
            ease: "back.out(1.7)",
          }),
      },
      duration: 1,
      ease: "back.out(1.7)",
    }
  );

  /*
   ** ** =========================================================================
   ** ** ** Section [Lands] Animations
   ** ** =========================================================================
   */
  //Info
  gsap.fromTo(
    "section.lands .row > *",
    {
      y: 100,
    },
    {
      y: 0,
      scrollTrigger: {
        trigger: "section.customers",
        start: "top center",
      },
      stagger: {
        amount: 0.5,
      },
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)",
    }
  );

  //Map
  gsap.fromTo(
    "section.lands .lands__map",
    {
      x: "100%",
      scale: 0.1,
    },
    {
      x: 0,
      scale: 1,
      duration: 1,
      delay: 1,
      ease: "expo.out",
    }
  );
});
