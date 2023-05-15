import React from "react";
import logo from "../assets/logo.svg";
import instagram from "../assets/icon-instagram.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import youtube from "../assets/icon-youtube.svg";
import pinterest from "../assets/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="bg-[#2D314D] py-7">
      <div className="container w-10/12 mx-auto grid md:grid-cols-5">
        <div className="flex flex-col items-center md:items-start">
          {/* <img src={logo} alt="logo" /> */}
          <p className="text-white font-bold py-2">easybank</p>
          <div className="socials flex items-center my-10">
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" className="ml-2" />
            <img src={twitter} alt="twitter" className="ml-2" />
            <img src={pinterest} alt="pinterest" className="ml-2" />
            <img src={instagram} alt="instagram" className="ml-2" />
          </div>
        </div>
        <div>
          <ul className="text-white flex flex-col items-center md:items-start">
            <li className="py-2">About Us</li>
            <li className="py-2">Contact</li>
            <li className="py-2">Blog</li>
          </ul>
        </div>
        <div>
          <ul className="text-white flex flex-col items-center md:items-start">
            <li className="py-2">Careers</li>
            <li className="py-2">Support</li>
            <li className="py-2">Privacy Policy</li>
          </ul>
        </div>
        <div className="my-5 flex flex-col justify-around items-center md:col-span-2  md:items-end md:my-0">
          <button className="bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] rounded-full py-2 px-4 text-white capitalize">
            Request invite
          </button>
          <p className="text-white/40 my-6 md:my-0">
            EasyBank. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
