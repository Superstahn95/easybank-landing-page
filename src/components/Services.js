import React from "react";
import bankingImg from "../assets/icon-online.svg";
import budgetingImg from "../assets/icon-budgeting.svg";
import apiImg from "../assets/icon-api.svg";
import onboardingImg from "../assets/icon-onboarding.svg";

function Services() {
  return (
    <section className="bg-[#F3F3F3] py-16">
      <div className="container w-10/12 mx-auto">
        <div>
          <h2 className="text-4xl text-[#2D314D] py-4 text-center md:text-start">
            Why choose EasyBank?
          </h2>
          <p className="text-lg text-black/40 py-2 text-center md:text-start">
            We leverage Open banking to turn your bank account into your
            financial hub. Control your finances like never before
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 py-4 mt-4">
          <div className="flex flex-col items-center md:block">
            <div className="py-5">
              <img src={bankingImg} alt="banking" />
            </div>
            <h3 className="text-[#2D314D] text-3xl">Online Banking</h3>
            <p className="text-black/40 text-lg leading-loose py-4">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world
            </p>
          </div>
          <div className="flex flex-col items-center md:block">
            <div className="py-5">
              <img src={budgetingImg} alt="banking" />
            </div>
            <h3 className="text-[#2D314D] text-3xl">Simple Budgeting</h3>
            <p className="text-black/40 text-lg leading-loose py-4">
              See exactly where your money goes each month. Receive
              notifications when you are close to hitting your limits
            </p>
          </div>

          <div className="flex flex-col items-center md:block">
            <div className="py-5">
              <img src={onboardingImg} alt="banking" />
            </div>
            <h3 className="text-[#2D314D] text-3xl">Fast Onboarding</h3>
            <p className="text-black/40 text-lg leading-loose py-4">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away
            </p>
          </div>
          <div className="flex flex-col items-center md:block">
            <div className="py-5">
              <img src={apiImg} alt="banking" />
            </div>
            <h3 className="text-[#2D314D] text-3xl">Open API</h3>
            <p className="text-black/40 text-lg leading-loose py-4">
              Manage your savings, investments, pensions and much more from one
              account. Tracking your money has never been easier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
