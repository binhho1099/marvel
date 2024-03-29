gsap.registerPlugin(ScrollTrigger);

gsap.to('.s1-top__banner-car1', {
  scrollTrigger: {
    trigger: '.s1-top',
    start: 'top 10%',
    end: 'bottom 10%',
    scrub: true,
    // markers: true,
  },
  x: '-18%',
  y: '18%',
  ease: 'none',
  duration: 3,
});
gsap.to('.s1-top__banner-car2', {
  scrollTrigger: {
    trigger: '.s1-top',
    start: 'top 10%',
    end: 'bottom 10%',
    scrub: true,
    // markers: true,
  },
  x: '-35%',
  y: '35%',
  ease: 'none',
  duration: 3,
});

gsap.from('.s3-top__img--ironman', {
  scrollTrigger: {
    trigger: '.s3-top__img',
    start: 'center bottom',
    end: '130% bottom',
    scrub: true,
  },
  y: '-60%',
  opacity: 0.9,
  scale: 0.4,
  ease: 'none',
  duration: 3,
});
gsap.from('.s3-top__img--panther', {
  scrollTrigger: {
    trigger: '.s3-top__img',
    start: 'center bottom',
    end: '130% bottom',
    scrub: true,
  },
  y: '-60%',
  x: '-40%',
  opacity: 0.9,
  scale: 0.5,
  ease: 'none',
  duration: 3,
});
gsap.from('.s3-top__img--captainmarvel', {
  scrollTrigger: {
    trigger: '.s3-top__img',
    start: 'center bottom',
    end: '130% bottom',
    scrub: true,
  },
  y: '-55%',
  x: '40%',
  opacity: 0.9,
  scale: 0.5,
  ease: 'none',
  duration: 3,
});
gsap.from('.s3-top__img--spiderman', {
  scrollTrigger: {
    trigger: '.s3-top__img',
    start: 'center bottom',
    end: '130% bottom',
    scrub: true,
  },
  y: '-30%',
  x: '-50%',
  opacity: 0.9,
  scale: 0.5,
  ease: 'none',
  duration: 3,
});
gsap.from('.s3-top__img--hulk', {
  scrollTrigger: {
    trigger: '.s3-top__img',
    start: 'center bottom',
    end: '130% bottom',
    scrub: true,
  },
  y: '-25%',
  x: '40%',
  opacity: 0.9,
  scale: 0.5,
  ease: 'none',
  duration: 3,
});
gsap.from('.s3-top__img--s3-2-ironman', {
  scrollTrigger: {
    trigger: '.s3-top__img-2',
    start: 'center bottom',
    end: 'bottom bottom',
    scrub: true,
  },
  y: '-60%',
  opacity: 0.9,
  scale: 0.5,
  ease: 'none',
  duration: 1,
});
gsap.from('.s3-top__img--s3-2-hulk', {
  scrollTrigger: {
    trigger: '.s3-top__img-2',
    start: 'center bottom',
    end: 'bottom bottom',
    scrub: true,
  },
  y: '-40%',
  x: '40%',
  opacity: 0.9,
  scale: 0.5,
  ease: 'none',
  duration: 1,
});
gsap.from('.s3-top__img--s3-2-miles', {
  scrollTrigger: {
    trigger: '.s3-top__img-2',
    start: 'center bottom',
    end: 'bottom bottom',
    scrub: true,
  },
  y: '-40%',
  x: '-40%',
  opacity: 0.9,
  scale: 0.5,
  ease: 'none',
  duration: 1,
});
