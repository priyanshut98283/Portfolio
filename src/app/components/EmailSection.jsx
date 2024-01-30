"use client";
import React, { useState,useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sbokadi",
        "template_4yuaq53",
        form.current,
        "z3QZ6Czht4uyuWyiV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setEmailSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative bg-white/30 rounded-3xl w-full z-0 dark:bg-slate-600"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-800 to-transparent rounded-full h-80 w-80 z--20 blur-md absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 dark:hidden"></div> */}
      {/* <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-800 to-transparent rounded-full h-80 w-80 z--20 blur-md absolute top-1/4 left-3/4 transform -translate-y-1/2 -translate-1/2 ml-40 -mt-36 dark:hidden "></div> */}
      <div className="w-auto h-auto bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400 via-orange-600 to-transparent  absolute z--10  inset-0 rounded-3xl dark:hidden"></div>
      <div className="w-auto h-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400 via-blue-800 to-transparent  absolute z--10  inset-0 rounded-3xl dark:hidden"></div>
      <div className="z-0 mx-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 ">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/priyanshut98283" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/priyanshu-tiwari-5154281b1/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div>
          <p className="text-orange-400 text-xl mt-2 relative z-0">
            Email sent successfully.
            
          </p>
          <p className="text-orange-400 text-xl mt-2 relative z-0">
            Thank you for contacting ! 😀
          </p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col relative z-0">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium lg:-ml-4"
              >
                Your Name
              </label>
              <input
                name="user_name"
                type="text"
                id="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 lg:-ml-4"
                placeholder="Enter your name here"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm mb-2 font-medium lg:-ml-4"
              >
                Email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 lg:-ml-4"
                placeholder="Enter your email here"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium lg:-ml-4"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 lg:-ml-4"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full lg:-ml-4"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;



























