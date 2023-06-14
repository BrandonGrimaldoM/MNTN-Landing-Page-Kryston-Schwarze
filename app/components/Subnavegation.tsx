"use client";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Subnavegation() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".animation-scroll", {
      scrollTrigger: {
        trigger: ".one",
        start: "top 98%",
        onEnter: function () {
          setNum(50);
        },
        onLeaveBack: function () {
          setNum(0);
        },
      },
    });

    gsap.to(".animation-scroll", {
      scrollTrigger: {
        trigger: ".two",
        start: "top 98%",
        onEnter: function () {
          setNum(100);
        },
        onLeaveBack: function () {
          setNum(50);
        },
      },
    });

    gsap.to(".animation-scroll", {
      scrollTrigger: {
        trigger: ".three",
        start: "top 98%",
        onEnter: function () {
          setNum(150);
        },
        onLeaveBack: function () {
          setNum(100);
        },
      },
    });
  }, []);

  const translateY = `translateY(${num}px)`;

  return (
    <aside className="font-sans flex items-center fixed 2xl:right-[3%] lg:right-0 top-[30%] gap-5 max-lg:hidden">
      <div className="flex flex-col gap-7">
        <p className="-translate-x-5">Start</p>
        <p>01</p>
        <p>02</p>
        <p>03</p>
      </div>

      <div className="w-1 h-52 bg-white/50 overflow-hidden">
        <div
          className="bg-white w-full h-14 animation-scroll duration-500"
          style={{ transform: translateY }}
        ></div>
      </div>
    </aside>
  );
}
