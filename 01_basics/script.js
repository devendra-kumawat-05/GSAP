gsap.to("#box1", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "green",
  borderRadius: "50",
});
gsap.from("#box2", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "yellow",
  borderRadius: "50",
});

// ----------------------

// gsap.to("h1", {
//   color: "red",
//   duration: 2,
//   delay: 1,
// });

gsap.from("h1", {
  opacity: 0,
  y: 30,
  x: 10,
  color: "red",
  duration: 2,
  delay: 1,
  stagger: 0.3,
});

gsap.to("#box3", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
});

// gsap.to("#box4", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });
// gsap.to("#box5", {
//   x: 1000,
//   duration: 2,
//   delay: 2.5,
//   backgroundColor: "yellow",
// });
// gsap.to("#box6", {
//   x: 1000,
//   scale: 0.5,
//   duration: 2,
//   borderRadius: "50",
//   delay: 4,
// });

let tl = gsap.timeline();

tl.to("#box4", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
});

tl.to("#box5", {
  x: 1000,
  duration: 2,
  backgroundColor: "yellow",
});
tl.to("#box6", {
  x: 1000,
  duration: 2,
});

let tl2 = gsap.timeline();

tl2.from("h2", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

tl2.from("h4", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl2.from("#name", {
  y: 40,
  opacity: 0,
  duration: 1,
});
