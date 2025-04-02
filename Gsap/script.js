const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  autoplay: {
    delay: 2000, // Delay between slides (in ms)
  },
  loop: true,
});

swiper.update();

function breakthetext() {
  var h1 = document.querySelector(".h1");

  var h1text = h1.textContent;

  var splittedtext = h1text.split("");
  var halfvalue = splittedtext.length / 2;

  var clutter = "";

  splittedtext.forEach((e, idx) => {
    if (idx < halfvalue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class= "b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakthetext();

gsap.from(".a", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(".b", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.2,
});

function locoplussrcroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".container").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

document.addEventListener("DOMContentLoaded", () => {
  locoplussrcroll();
});

gsap.to(".page2 h1", {
  transform: "translate(-60%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".container",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
