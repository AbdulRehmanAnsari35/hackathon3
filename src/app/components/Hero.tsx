import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative text-gray-600 body-font">
      {/* Background Image */}
      <Image
        src="/backhome.jpg" // Replace with your background image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-90 -z-10" // 70% opacity and send it behind content
      />

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            NEXGEN GAMING
            <br className="hidden lg:inline-block" />
            BUDGET PRICING
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Discover the latest AAA titles at unbeatable discounts and low
            prices Explore a wide range of games from thrilling action packed
            adventures to immersive role playing experiences all designed to
            take your gaming to the next level Dont miss out on these
            incredible deals grab your favorite games now!
          </p>
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
              <Link href="/RPG"
                className="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-red-500 active:bg-gray-200"> 
                Role-Play
              </Link>
              <Link href="/AAA"
                className="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-red-500 active:bg-gray-200"> 
                Triple-A
              </Link>
              {/* Corrected apostrophe in href */}
              <Link href="/SBG"
                className="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-red-500 active:bg-gray-200"> 
                SandBox
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/home1.jpg"
            width={700}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
