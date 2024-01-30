"use client";
import React,{useRef} from "react";
import Link from "next/link";
import { motion,useMotionValue} from "framer-motion";
import Layout from "../components/Layout";
import articleImage from "../../../public/vercel.svg";
import Image from "next/image";
import Navbar from "../components/ArticleNavbar";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x=useMotionValue(0);
  const y=useMotionValue(0);
  const imgRef=useRef(null);

  function handleMouse(event){
    imgRef.current.style.display="inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event){
    imgRef.current.style.display="none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank" className="float-left hover:underline"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold">{title}</h2>
      <FramerImage
      style={{x:x,y:y}}
      initial={{opacity:0.2}}
      whileInView={{opacity:1,transition:{duration:0.2}}}
      ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg"></FramerImage>
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
    viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex-items-ceter justify-between
    bg-white text-black first:mt-0 border border-solid border-black list-none flex
    border-r-4 border-b-4 dark:border-red-400 dark:bg-slate-400 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="float-right text-cyan-400 font-semibold sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-black rounded-2xl text-black bg-white dark:bg-slate-400">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl dark:bg-red-400" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        ></FramerImage>
      </Link>

      <Link href={link} target="_blank" className="">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-cyan-400 font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <main className="bg-slate-500 w-full h-full flex flex-col items-center justify-center overflow-hidden mt-14 dark:bg-[#121212]">
      <Navbar />
        <Layout className="pt-16">
          <h1 className="text-4xl text-center font-extrabold text-black dark:text-white">
            Featured Articles
          </h1>
          <br />
          <br />
          <ul className="grid lg:grid-cols-2 gap-16 font-semibold md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="Build custom Glassmorphism effects"
              summary="Build custom Glassmorphism effects..."
              time="9 min read"
              link="/"
              img={articleImage}
            />
            <FeaturedArticle
              title="Build custom Glassmorphism effects"
              summary="Build custom Glassmorphism effects..."
              time="9 min read"
              link="/"
              img={articleImage}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            {" "}
            All Articles
          </h2>
          <Article
            title="Build custom Glassy effects with react js."
            date="20 Oct 2023"
            link="/"
            img={articleImage}
          />
          <Article
            title="Build custom Glassy effects with react js."
            date="20 Oct 2023"
            link="/"
            img={articleImage}
          />
          <Article
            title="Build custom Glassy effects with react js."
            date="20 Oct 2023"
            link="/"
            img={articleImage}
          />
          <Article
            title="Build custom Glassy effects with react js."
            date="20 Oct 2023"
            link="/"
            img={articleImage}
          />
        </Layout>
      </main>
    </>
  );
};

export default articles;
