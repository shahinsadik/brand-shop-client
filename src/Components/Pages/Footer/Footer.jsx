import React from "react";

const Footer = () => {
  return (
    <div className="my-10 ">
      <footer className="footer p-10 bg-slate-500 text-base-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered md:w-full lg:pr-16"
              />
              <button className="btn btn-primary  top-0 right-0 rounded-xl mt-2 hover:bg-black bg-[#ef1d26]">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
