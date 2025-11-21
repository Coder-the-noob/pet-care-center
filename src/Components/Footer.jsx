import React from "react";
import petLogo from "../assets/company_logo.png.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center justify-center md:justify-start gap-4">
          <img className="w-25 rounded-full" src={petLogo} alt="WarmPaws Logo" />
          <p className="text-xl font-bold">
           WarmPaws - Pet Care Center
            <br />
           <span className="font-semibold text-sm">
            Protecting Pets with Warmth & Expertise.
           </span>
          </p>
        </aside>
       
      </footer>
    </div>
  );
};

export default Footer;
