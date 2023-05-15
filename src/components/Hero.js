import React from "react";
import bgDesktop from "../assets/bg-intro-desktop.svg";
import heroImg from "../assets/image-mockups.png";

function Hero() {
  return (
    <section className="bg-[##FAFAFA]  ">
      <div className=" py-40  relative ">
        <div className="container w-10/12 mx-auto flex items-center justify-between">
          <div className="w-full flex flex-col items-center md:w-2/5 md:block">
            <h1 className=" text-[#2D314D] text-4xl md:text-6xl">
              Next generation
            </h1>
            <h1 className=" text-[#2D314D] text-4xl md:text-6xl">
              digital banking
            </h1>
            <p className="py-8 tracking-normal text-lg text-black/40">
              Take your financial life online. Your easy bank account will be a
              one stop shop for spending, saving, budgeting, investing and much
              more
            </p>
            <button className="bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] rounded-full py-2 px-4 text-white capitalize">
              Request invite
            </button>
          </div>
          <div
            className="absolute -right-28 hidden md:block"
            style={{
              backgroundImage: `url(${bgDesktop})`,
              backgroundPosition: "10% 180%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={heroImg} alt="/" />
          </div>
          {/* <div
            style={{ backgroundImage: `url(${bgDesktop})` }}
            className="min-h-full w-3/5"
          ></div> */}
        </div>
      </div>
    </section>
  );
  //   'hero-pattern': "url('/img/hero-pattern.svg')",
}

export default Hero;
