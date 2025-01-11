import React from "react";
import Desc from "./components/Desc";
import Testi from "./components/Testi";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const App = () => {
  const features = [
    {
      img: "./images/icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      img: "./images/icon-security.svg",
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      img: "./images/icon-collaboration.svg",

      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      img: "./images/icon-any-file.svg",
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
      img: "images/profile-1.jpg",
    },
    {
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      position: "Founder & CEO, Huddle",
      img: "images/profile-2.jpg",
    },
    {
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Iva Boyd",
      position: "Founder & CEO, Huddle",
      img: "images/profile-3.jpg",
    },
  ];

  return (
    <>
      <div className="min-h-[600px] relative  mx-auto w-full font-bai bg-dark-blue-intro">
        {/* bg-img --------------------------------- */}
        <div className="absolute w-full flex flex-col items-end justify-end bottom-0 left-0 h-[100%] md:h-[150vh]">
          <img
            className="w-full sm:hidden"
            src="images/bg-curvy-mobile.svg"
            alt="bg-curvy-mobile"
          />
          <img
            className=" mb-[-1px] hidden sm:inline-block w-full"
            src="images/bg-curvy-desktop.svg"
            alt="bg-curvy-mobile"
          />
          <div className="w-full h-[40vh] sm:max-h-[160px] lg:max-h-[0px] bg-dark-blue-main"></div>
        </div>

        {/* bg-img ------------------------------- */}
        <header className="w-full mx-auto max-w-[1240px] ">
          <div className="py-[30px] px-[20px] sm:p-[40px] md:py-[80px]  w-full flex items-center justify-between text-white">
            <img
              className="w-[20vw] min-w-[70px] max-w-[150px] "
              src="images/logo.svg"
              alt="logo"
            />
            <div className="text-[14px] sm:text-[1.1rem] font-thin sm:font-normal text-gray-400 flex items-center justify-center gap-4 sm:gap-8 lg:gap-12  ">
              <a
                className=" hover:text-gray-100 active:text-gray-100 hover:underline active:underline active:scale-105 hover:scale-105"
                href="#"
              >
                Features
              </a>
              <a
                className=" hover:text-gray-100 active:text-gray-100 hover:underline active:underline active:scale-105 hover:scale-105"
                href="#"
              >
                Team
              </a>
              <a
                className=" hover:text-gray-100 active:text-gray-100 hover:underline active:underline  active:scale-105 hover:scale-105 "
                href="#"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* hero-content ------------------------------- */}
          <div className="z-[99] py-[40px] px-[35px] relative flex flex-col  items-center justify-center gap-8 text-white text-center">
            <img
              className="w-full max-w-[700px]"
              src="images/illustration-intro.png"
              alt="illustration-intro"
            />
            <h1 className="text-[clamp(1.2rem,6vw,2.5rem)] max-w-[700px] font-semibold">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg lg:text-xl max-w-[600px]">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button className="text-sm sm:text-base lg:text-lg bg-gradient-to-tr from-cyan-accent to-blue-accent w-[80%] px-12 py-4 font-semibold rounded-full max-w-[300px] hover:to-cyan-accent focus:to-cyan-accent">
              Get Started
            </button>
          </div>
          {/* hero-content ------------------------------- */}
        </header>
      </div>
      <main className="bg-dark-blue-main text-white py-[30px] px-[35px]">
        <section className=" py-[50px] w-full max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 place-content-center gap-[80px]">
          {features.map((item) => (
            <Desc key={item.title} {...item} />
          ))}
        </section>
        <section className="flex min-h-[600px] w-full mx-auto max-w-[1240px] flex-col lg:flex-row items-center justify-center gap-12">
          <img
            className="w-full max-w-[600px] lg:w-[50vw]"
            src="images/illustration-stay-productive.png"
            alt="illustration-stay-productive"
          />
          <div className="flex flex-col gap-4">
            <p className="text-[clamp(1.2rem,6vw,2.8rem)] leading-[1.4] max-w-[600px] font-semibold">
              Stay productive, <br className="hidden lg:block" /> wherever you
              are
            </p>
            <p className="text-sm sm:text-base sm:max-w-[500px] text-gray-200">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-sm sm:text-base text-gray-200 sm:max-w-[500px]">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a
              className=" text-cyan-accent text-sm border-b border-cyan-accent w-fit pb-1"
              href="#"
            >
              See how Fylo works{" "}
              <img
                src="images/icon-arrow.svg"
                alt="arrow"
                className="inline-block"
              />
            </a>
          </div>
        </section>
        <section className="w-full pt-12 pb-[340px] flex items-start justify-center min-h-[300px]">
          <div className="w-full max-w-[1240px]  h-fit relative flex flex-col items-center justify-between gap-6 md:flex-row">
            <img
              src="images/bg-quotes.png"
              alt="quotes"
              className="w-[60px] absolute top-[-40px] left-0"
            />
            {testimonials.map((testi) => (
              <Testi key={testi.name} {...testi} />
            ))}
          </div>
        </section>
      </main>
      <footer className="relative bg-dark-blue-footer min-h-[500px] p-[30px]">
        <section className="w-[90%] p-8 sm:p-12 lg:p-20 text-center max-w-[1240px] min-h-[300px] rounded-lg absolute left-[50%] translate-x-[-50%] top-[0%] translate-y-[-50%] bg-dark-blue-intro text-white flex flex-col items-center justify-center gap-5 shadow-md shadow-[#00000079]">
          <p className="font-semibold text-[clamp(1.3rem,6vw,2.5rem)]">
            Get early access today
          </p>
          <p className="text-sm md:text-lg text-gray-400 max-w-[700px] ">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form className="w-full mt-4 flex flex-col gap-5 lg:gap-8 md:flex-row items-center justify-between">
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-white rounded-full w-full px-5 py-4"
            />
            <button className="w-full md:max-w-[280px] text-sm sm:text-base bg-gradient-to-tr from-cyan-accent to-blue-accent px-12 py-4 font-semibold rounded-full hover:to-cyan-accent focus:to-cyan-accent">
              Get Started For Free
            </button>
          </form>
        </section>

        <section className="mt-[260px] pb-4 w-full max-w-[1240px] mx-auto px-[30px]">
          <img
            className="w-[30vw] min-w-[150px] max-w-[240px] mb-[100px] "
            src="images/logo.svg"
            alt="logo"
          />
          <ul
            className="text-gray-300 w-full flex  items-start justify-start gap-12 flex-col flex-wrap md:flex-row
           "
          >
            <li className="flex w-fit text-xs md:text-sm lg:text-base max-w-[380px] items-start gap-5">
              <img src="images/icon-location.svg" alt="icon-location" /> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="text-sm">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center w-fit gap-5">
                  <img src="images/icon-location.svg" alt="icon-phone" />{" "}
                  +1-543-123-4567
                </li>
                <li className="flex w-fit items-center gap-5">
                  <img src="images/icon-email.svg" alt="icon-location" />{" "}
                  example@fylo.com
                </li>
              </ul>
            </li>
            <li className="w-fit flex flex-col gap-5 min-w-[100px]">
              <a
                href="/"
                className="text-gray-300 w-fit hover:text-white focus:text-white focus:font-bold hover:font-bold"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-gray-300 hover:text-white focus:text-white focus:font-bold hover:font-bold"
              >
                Jobs
              </a>
              <a
                href="/"
                className="text-gray-300 hover:text-white focus:text-white focus:font-bold hover:font-bold"
              >
                Press
              </a>
              <a
                href="/"
                className="text-gray-300 hover:text-white focus:text-white focus:font-bold hover:font-bold"
              >
                Blog
              </a>
            </li>
            <li className="w-fit min-w-[100px] flex flex-col gap-5">
              <a
                href="/"
                className="text-gray-300 hover:text-white focus:text-white focus:font-bold hover:font-bold"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="text-gray-300 hover:text-white focus:text-white focus:font-bold hover:font-bold"
              >
                Terms
              </a>
              <a
                href="/"
                className="text-gray-300 hover:text-white focus:text-white focus:font-bold hover:font-bold"
              >
                Privacy
              </a>
            </li>

            <li className="flex lg:flex-row flex-col items-center gap-3">
              <a
                className="hover:text-blue-accent hover:border-blue-accent duration-300 w-[30px] h-[30px] border flex items-center justify-center rounded-full bg-black"
                href="#"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                className="hover:text-blue-accent hover:border-blue-accent duration-300 w-[30px] h-[30px] border flex items-center justify-center rounded-full bg-black"
                href="#"
              >
                <FaTwitter size={20} />
              </a>
              <a
                className="hover:text-blue-accent hover:border-blue-accent duration-300 w-[30px] h-[30px] border flex items-center justify-center rounded-full bg-black"
                href="#"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default App;
