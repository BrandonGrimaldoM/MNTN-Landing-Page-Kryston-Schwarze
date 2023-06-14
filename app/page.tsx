import {
  ArrowLongDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full flex items-center justify-center h-screen">
        <div className="p-10">
          <div className="flex gap-5 items-center">
            <div className="w-12 h-[1px] bg-[#FBD784]"></div>
            <p className="uppercase text-lg text-[#FBD784] font-sans font-extrabold tracking-[6px] max-md:text-sm ">
              A Hiking guide
            </p>
          </div>
          <h1 className="text-7xl py-10 max-md:text-3xl">
            Be Prepared For The <br className="max-md:hidden" /> Mountains And
            Beyond!
          </h1>
          <Link href="#seccion-uno" className="flex gap-2 items-center">
            <p className="font-sans">scroll down</p>
            <ArrowLongDownIcon className="text-white w-5 h-5" />
          </Link>
        </div>
      </section>

      <section
        id="seccion-uno"
        className="w-full flex flex-col justify-center mt-[20%] max-md:mt-0"
      >
        <div className="flex flex-wrap items-center p-20 gap-10 justify-center max-md:p-0 ">
          <div className="p-10">
            <div className="flex gap-5 items-center relative">
              <p className="text-[240px] opacity-5 absolute -top-63 -left-36 font-sans max-md:hidden">
                01
              </p>
              <div className="w-12 h-[1px] bg-[#FBD784]"></div>
              <p className="uppercase text-lg text-[#FBD784] font-sans font-extrabold tracking-[6px] max-md:text-sm one">
                Get Started
              </p>
            </div>
            <h1 className="text-7xl py-10 max-md:text-3xl">
              What level of hiker <br /> are you?
            </h1>

            <div className="w-[500px] max-md:w-full">
              <p className="pb-10 font-sans">
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help
                you plan hikes according to different hike ratings set by
                various websites like All Trails and Modern Hiker. What type of
                hiker are you - novice, moderate, advanced moderate, expert, or
                expert backpacker?
              </p>
            </div>
            <Link href="#" className="flex gap-2 items-center">
              <p className="font-sans text-[#FBD784]">read more</p>
              <ArrowLongRightIcon className="text-[#FBD784] w-5 h-5" />
            </Link>
          </div>

          <img src="/images/01.jpg" alt="01" className="max-md:w-80" />
        </div>

        <div className="flex flex-wrap flex-row-reverse items-center p-20 gap-32 justify-center max-md:p-0 max-md:gap-10">
          <div className="p-10">
            <div className="flex gap-5 items-center relative">
              <p className="text-[240px] opacity-5 absolute -top-63 -left-36 font-sans max-md:hidden">
                02
              </p>
              <div className="w-12 h-[1px] bg-[#FBD784]"></div>
              <p className="uppercase text-lg text-[#FBD784] font-sans font-extrabold tracking-[6px] max-md:text-sm two">
                Hiking Essentials
              </p>
            </div>
            <h1 className="text-7xl py-10 max-md:text-3xl">
              Picking the right <br /> Hiking Gear!
            </h1>

            <div className="w-[500px] max-md:w-full">
              <p className="pb-10 font-sans">
                The nice thing about beginning hiking is that you don’t really
                need any special gear, you can probably get away with things you
                already have. Let’s start with clothing. A typical mistake
                hiking beginners make is wearing jeans and regular clothes,
                which will get heavy and chafe wif they get sweaty or wet.
              </p>
            </div>
            <Link href="#" className="flex gap-2 items-center">
              <p className="font-sans text-[#FBD784]">read more</p>
              <ArrowLongRightIcon className="text-[#FBD784] w-5 h-5" />
            </Link>
          </div>

          <img src="/images/02.jpg" alt="02" className="max-md:w-80" />
        </div>

        <div className="flex flex-wrap items-center p-20 gap-10 justify-center max-md:p-0 ">
          <div className="p-10">
            <div className="flex gap-5 items-center relative">
              <p className="text-[240px] opacity-5 absolute -top-63 -left-36 font-sans max-md:hidden">
                03
              </p>
              <div className="w-12 h-[1px] bg-[#FBD784]"></div>
              <p className="uppercase text-lg text-[#FBD784] font-sans font-extrabold tracking-[6px] max-md:text-sm three">
                where you go is the key
              </p>
            </div>
            <h1 className="text-7xl py-10 max-md:text-3xl">
              Understand Your <br /> Map & Timing
            </h1>

            <div className="w-[500px] max-md:w-full">
              <p className="pb-10 font-sans">
                To start, print out the hiking guide and map. If it’s raining,
                throw them in a Zip-Lock bag. Read over the guide, study the
                map, and have a good idea of what to expect. I like to know what
                my next landmark is as I hike. For example, I’ll read the guide
                and know that say, in a mile, I make a right turn at the
                junction..
              </p>
            </div>
            <Link href="#" className="flex gap-2 items-center">
              <p className="font-sans text-[#FBD784]">read more</p>
              <ArrowLongRightIcon className="text-[#FBD784] w-5 h-5" />
            </Link>
          </div>

          <img src="/images/03.jpg" alt="03" className="max-md:w-80" />
        </div>
      </section>
    </>
  );
}
