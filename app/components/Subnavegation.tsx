"use client";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Subnavegation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".animation-scroll", {
        translateY: 50,
        duration: 0,
        scrollTrigger: {
          trigger: ".one",
          start: "top center",
          end: "bottom",
          toggleActions: "play none none reverse",
        },
      });
      
      gsap.to(".animation-scroll", {
        translateY:100,
        duration: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top center",
          end: "bottom",
          toggleActions: "play none none reverse",
        },
      });
      
      gsap.to(".animation-scroll", {
        translateY: 150,
        duration: 0,
        scrollTrigger: {
          trigger: ".three",
          start: "top center",
          end: "bottom",
          toggleActions: "play none none reverse",
        },
      });
  }, []);

  return (
    <div className="font-sans flex items-center fixed 2xl:right-[3%] lg:right-0 top-[30%] gap-5 max-lg:hidden">
      <div className="flex flex-col gap-7">
        <p className="-translate-x-5">Start</p>
        <p>01</p>
        <p>02</p>
        <p>03</p>
      </div>

      <div className="w-1 h-52 bg-white/50 overflow-hidden">
        <div className="bg-white w-full h-14 animation-scroll"></div>
      </div>
    </div>
  );
}
