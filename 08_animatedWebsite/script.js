function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav h1 , nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.2,
  });

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.6,
  });

  tl.from(
    ".center-part1 p",
    {
      x: -100,
      opacity: 0,
      duration: 0.3,
    },
    "-=0.3"
  );
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.3,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.3,
      x: 200,
    },
    "-=0.5"
  );

  tl.from(
    ".section-bottom img",
    {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.2,
    },
    "-=0.5"
  );
}

page1Animation();

function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
      end: "top 0%",
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );

  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
}

page2Animation();
