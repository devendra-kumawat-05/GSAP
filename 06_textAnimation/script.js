function textBreaker() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splitText = h1Text.split("");
  let halfText = splitText.length / 2;

  let clutter = "";

  splitText.forEach(function (e, idx) {
    if (idx < halfText) {
      clutter += `<span class="firstHalf">${e}</span>`;
    } else {
      clutter += `<span class="secondHalf">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

textBreaker();

gsap.from("h1 .firstHalf", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .secondHalf", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
