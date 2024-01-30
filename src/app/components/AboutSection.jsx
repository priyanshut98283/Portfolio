"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex float-left :flex-col">
      <section>
      <h3 className="">Full Stack Tech/Frameworks</h3>
      <ul className="list-disc pl-2">
        <li>Html,Css,Javascript</li>
        <li>React,NextJs,Canva</li>
        <li>Bootstrap,Tailwind</li>
        <li>Jquery,Typescript</li>
        <li>Mysql,Mongodb</li>
        <li>Node,Express,AWS,GCP</li>
        <li>Php,Django,Rest Api's</li>
      </ul>
      </section>
      <section className="ml-8">
      <h3>Programming</h3>
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Javascript</li>
        <li>Python</li>
      </ul><br></br>
      <section className="">
      <h3>Other Tech/Softwares</h3>
      <ul className="list-disc pl-2">
        <li>React Native,Git</li>
        <li>Docker,Redux</li>
      </ul>
      </section>
      </section>
    </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
      <ul className="list-disc pl-2">
        <li>BTech. CSE &nbsp; Aug '21 - Present  {'▶'}</li>
        <p>Lovely Professional University | Phagwara, IN</p>
      </ul><br></br>
       <ul className="list-disc pl-2">
       <li>Higher Secondary - CBSE &nbsp; Apr '20 – Mar‘21  {'▶'}</li>
       <p>Presidency The International School | Bhiwadi, IN</p>
     </ul><br></br>
      <ul className="list-disc pl-2">
      <li>Secondary - CBSE &nbsp; Apr’18 - Mar’19  {'▶'}</li>
      <p>Presidency The International School | Bhiwadi, IN</p>
    </ul>
    </div>
    ),
  },
  {
    title: "Certificates",
    id: "Certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>Advaced React Coursera course by Meta</li><br></br>
        <li>Web Dev Masterclass Udemy course by YouAccel</li><br></br>
        <li>Python for AI & Development Coursera course by IBM</li><br></br>
        <li>Python Summer Training by Programming Pathshala</li><br></br>

      </ul>
    ),
  },
  {
    title: "Domains",
    id: "Domains",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>DSA, AI and System Design</li><br></br> */}
        <li>Data Structure and Algorithms</li><br></br>
        <li>Software Engineering and DBMS</li><br></br>
        <li>Computer Networks and Operating System</li><br></br>
        <li>Virtualization and Cloud Computing</li><br></br>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    // For dark theme put classname after dark: ...
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/about-image-dark.jpg" width={500} height={500} className="rounded-2xl h-full "/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-8">
          I am a focused and calm individual who consistently 
          maintains positive attitude. My biggest strength is my passion for learning new
          tech/tools and seamlessly integrating them into my work. Proficient in competitive
          coding. I enjoy travelling, listening to music, reading books and solving puzzles
          in my free time.
          </p>
          <div className="flex flex-row justify-start ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certificates")}
              active={tab === "Certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Domains")}
              active={tab === "Domains"}
            >
              {" "}
              Domains{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
