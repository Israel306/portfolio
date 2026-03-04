import { useState } from "react";
import Nav from "./components/Nav";
import avatar from "./assets/avatar.png";
import front from "./assets/front.png";
import control from "./assets/control.png";
import script from "./assets/script.png";
import udemy from "./assets/udemy.png";
import coursera from "./assets/coursera.png";
import aul from "./assets/aul.png";
import logo from "./assets/logo.svg";
import hiit from "./assets/hiit.jpeg";
import zealluck from "./assets/zealluck.jpg";
import grocart from "./assets/grocart.jpg";
import mothvid from "./assets/mothvid.mp4";
import axessvid from "./assets/axessvid.mp4";
import tracker from "./assets/tracker.mp4";
import mothapp from "./assets/mothapp.mp4";
import hillpost from "./assets/hillpost.mp4";
import Skills from "./components/skills";
import Projects from "./components/projects";
import AccordionItem from "./components/AccordionItem";
import Certificate from "./components/certification";
import EducationCard from "./components/Education";
import SocialIcons from "./components/socialicons";

function App() {
  const [curOpen, setCurOpen] = useState(0);
  return (
    <>
      <Nav />
      <div className="flex">
        <SocialIcons />
        <div className="bg-slate-100 min-h-screen flex-1">
          <div
            id="about-me"
            className="px-5 md:px-0 container-w pt-10 md:pt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start"
          >
            {/* Left Section */}
            <div className="text-[#000033] max-w-3xl">
              <h1 className="font-bold text-5xl">Israel Ogundele</h1>
              <p className="font-semibold text-2xl pt-5">
                Software Developer & Machine Learning Enthusiast
              </p>

              <p className="pt-5 font-normal text-lg leading-loose text-justify">
                A computer scientist with experience developing web and mobile applications
                and exploring machine learning solutions to real-world problems. I work with
                technologies such as React, Flutter, and Python to build practical digital
                systems and data-driven tools. My academic background in Computer Science,
                combined with industry experience in software development and data analysis,
                has shaped my interest in intelligent systems and applied AI. My undergraduate
                research focused on predicting student academic performance using machine
                learning, and I continue to explore how data and technology can improve
                systems in education, finance, and other real-world domains.
              </p>
              <a
                href="https://drive.google.com/file/d/1rJ3IhgMfBNi0aUeSQErK_7CN54Qoifl_/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-8 px-6 py-2 rounded-lg border-2 border-[#000033] bg-[#000033] text-white hover:bg-white hover:text-[#000033] transition-all">
                  My CV
                </button>
              </a>
            </div>

            {/* Right Section */}
            <div className="mt-10 lg:mt-0 ">
              <div className="avatar-container">
                <img src={avatar} alt="Avatar" className="avatar-img" />
              </div>
            </div>
          </div>

          <section
            id="skills"
            className="px-5 md:px-0 container-w text-[#000033] pt-20"
          >
            <div className="flex justify-center items-center text-center">
              <div className="flex flex-col">
                <p className="text-[#00d4ff] text-[18px]">SKILLS</p>
                <h1 className="mt-3 text-[25px]">
                  {" "}
                  Some of My <span className="text-[#00d4ff]">
                    {" "}
                    Skills{" "}
                  </span>{" "}
                  And Technologies
                </h1>
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-5 w-[100%]">
             <Skills
  name="Frontend & Mobile"
  image={front}
  content="React, Flutter, Dart, JavaScript (ES6+), Tailwind CSS, GetX"
/>
              <Skills
  name="Programming"
  image={script}
  content="Python, JavaScript, SQL, Object-Oriented Programming, Data Structures & Algorithms"
/>
             <Skills
  name="Tools & Collaboration"
  image={control}
  content="Git, GitHub, Postman, Docker, VS Code, Android Studio"
/>

             <Skills
  name="Data & Research"
  image={script}
  content="Pandas, NumPy, Power BI, Excel, LaTeX, SPSS"
/>
            </div>
          </section>

          <section
            id="projects"
            className="px-5 md:px-0 container-w text-[#000033] pt-20"
          >
            <div className="flex justify-center items-center text-center">
              <div className="flex flex-col">
                <p className="text-[#00d4ff] text-[18px]">PROJECTS</p>
                <h1 className="mt-3 text-[25px]">
                  {" "}
                  Some of My <span className="text-[#00d4ff]">
                    {" "}
                    Projects{" "}
                  </span>{" "}
                  And Collaborations
                </h1>
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-5 w-[100%]">
              <Projects
                name="Moth Web App"
                video={mothvid}
                content="This app offers banking services like transfers, wallet top-ups, card services for online transactions, and currency rate conversion."
                gitlink="https://github.com/Israel306/mothproject"
                demolink=""
              />
              <Projects
                name="Performance Tracker"
                video={tracker}
                content="Collaborating with the team in developing a management information system  for SAMTL that integrates machine learning to help track the performance of different operations within the company."
                gitlink=""
                demolink="https://samtl-mis.vercel.app/"
              />
              <Projects
                name="Axess Web Banking"
                video={axessvid}
                content="This app offers banking services like transfers, wallet top-ups, card services for online transactions, and currency rate conversion."
                gitlink="https://github.com/Israel306/Acces2Cash"
                demolink=""
              />
            </div>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-5 w-[100%]">
              <Projects
                name="Moth Mobile App"
                video={mothapp}
                content="This app offers banking services like transfers, wallet top-ups, card services for online transactions, and currency rate conversion."
                gitlink=""
                demolink=""
                videoPosition="object-contain"
              />
              <Projects
                name="Front-End"
                video={mothvid}
                content="Html, css, JavaScript, Reactjs, Tailwind, Bootstrap, Flutter"
                gitlink=""
                demolink=""
              />
              <Projects
                name="Hillpost App"
                video={hillpost}
                content="This app offers banking services like online transactions, mobile top-up, payment of utilities bill, and many more."
                gitlink="https://hillpostmfb.com/"
                demolink="https://play.google.com/store/apps/details?id=com.hillpostbank.mfb&pli=1"
                videoPosition="object-contain"
              />
            </div>
          </section>

          <section
            id="experience"
            className="px-5 md:px-0 container-w text-[#000033] pt-20"
          >
            <div className="flex justify-center items-center text-center">
              <div className="flex flex-col">
                <p className="text-[#00d4ff] text-[18px]">Expereinces</p>
                <h1 className="mt-3 text-[25px]">
                  {" "}
                  My Work<span className="text-[#00d4ff]"> Expereince </span>
                </h1>
              </div>
            </div>
            <div className="px-[20px] md:px-[100px] py-10 container-w ">
              {data.map((section, i) => (
                <AccordionItem
                  curOpen={curOpen}
                  onOpen={setCurOpen}
                  title={section.question}
                  num={i}
                  key={i}
                >
                  {section.experiences.map((experience, index) => (
                    <div
                      className={`border-[1px] p-4 rounded-xl text-[#000033] mt-5`}
                      style={{ borderColor: experience.borderColor }} // Dynamic border color
                    >
                      {/* Header Section: Logo, Title, and Duration */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <img
                            src={experience.logo}
                            alt="Company Logo"
                            className="w-16 h-12 object-cover"
                          />
                          <div className="flex flex-col">
                            <span className="font-bold text-lg">
                              {experience.jobTitle}
                            </span>
                            <p className="font-semibold">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm">{experience.duration}</span>
                          <p className="flex justify-end">
                            {experience.jobdescription}
                          </p>
                        </div>
                      </div>

                      {/* Job Description */}
                      <p className="leading-6">{experience.description}</p>
                    </div>
                  ))}
                </AccordionItem>
              ))}
            </div>
          </section>

          <section className="px-5 md:px-0 container-w text-[#000033]">
            <div className="flex justify-center items-center text-center">
              <div className="flex flex-col">
                <p className="text-[#00d4ff] text-[18px]">Certifications</p>
                <h1 className="mt-3 text-[25px]">
                  {" "}
                  My <span className="text-[#00d4ff]"> Certifications </span>
                </h1>
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-5 w-[100%]">
              <Certificate
                logo={hiit}
                name="Web Developement"
                institution="HiiT Plc"
                bgColor="bg-blue-300" // Dynamically pass color here
              />
               <Certificate
                logo={hiit}
                name="Mobile App Developement with Flutter"
                institution="HiiT Plc"
                bgColor="bg-blue-300" // Dynamically pass color here
                 onClick={() => window.open("https://drive.google.com/file/d/10dLQacgbJgp0D4uA_EE2QkbwbjdLjFez/view?usp=drive_link", "_blank")}
              />
             
              <Certificate
                logo={udemy}
                name="Mobile Developement"
                institution="Udemy"
                bgColor="bg-[purple]"
              />
              <Certificate
                logo={hiit}
                name="Graphic Design"
                institution="HiiT Plc"
                bgColor="bg-slate-300"
              />
            </div>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-5 w-[100%]">
              <Certificate
                logo={coursera}
                name="Python Data Science"
                institution="Colorado University - Coursera"
                bgColor="bg-[blue]"
              />
              <Certificate
                logo={udemy}
                name="React Developement"
                institution="Udemy"
                bgColor="bg-[purple]"
              />
             <Certificate
              logo={udemy}
              name="2026: Complete AI Engineer Bootcamp"
              institution="Udemy365"
              bgColor="bg-[purple]"
              onClick={() => window.open("https://drive.google.com/file/d/1qgFHdwOTuEo6VW7zPWCXur7YWi0QPYUX/view?usp=drive_link", "_blank")}
            />
            </div>
          </section>

          <section
            id="education"
            className="px-5 md:px-0 container-w text-[#000033] pt-20"
          >
            <div className="flex justify-center items-center text-center">
              <div className="flex flex-col">
                <p className="text-[#00d4ff] text-[18px]">Education</p>
                <h1 className="mt-3 text-[25px]">
                  {" "}
                  My <span className="text-[#00d4ff]"> Education Journey </span>
                </h1>
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-5 w-[100%]">
              <EducationCard
                year="2019 - 2023"
                degree="Bachelor's Degree"
                logo={aul}
                courses="B.Sc in Computer Science"
                university="Anchor University Lagos"
                cgpa="First Class Honor - 3.9 / 4.0"
              />
            </div>
            <div className="mt-10">
              <h1 className="text-[30px]">Honors & Award:</h1>

              <div className="bg-white border rounded-lg shadow-md p-5 mt-4">
                <ul className="list-disc list-inside">
                  <li className="py-2">
                    <span className="font-bold">
                      {" "}
                      Best Graduating Student in the Computer Science Program
                      (2022/2023 Academic Session){" "}
                    </span>{" "}
                    <br /> Awarded to the top 1\% of students out of over 30
                    Computer Science graduates, based on academic excellence and
                    outstanding performance across core disciplines.
                  </li>

                  <li>
                    {" "}
                    <span className="font-bold">
                      {" "}
                      Best Graduating Student in the Computer Science Department
                      (2022/2023 Academic Session){" "}
                    </span>{" "}
                    <br /> Recognized as the highest-performing student among 45
                    candidates in the department, evaluated based on GPA,
                    research contributions, and leadership activities.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-[30px]">Publications:</h1>

              <div className="bg-white border rounded-lg shadow-md p-5 mt-4">
                <ul className="list-disc list-inside">
                  <li className="py-2">
                    <span className="font-bold">I.M. Ogundele,</span> O. Taiwo,
                    A. E. Babalola, and O. C. Ayeni, "Prediction of Student
                    Academic Performance Based on Machine Learning Model," 2024
                    International Conference on Science, Engineering and
                    Business for Driving Sustainable Development Goals
                    (SEB4SDG), Omu-Aran, Nigeria, 2024, pp. 1-11,
                    <a
                      href="https://doi.org/10.1109/SEB4SDG60871.2024.10629703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      doi:10.1109/SEB4SDG60871.2024.10629703
                    </a>
                    . Keywords: (Training; Accuracy; Machine learning
                    algorithms; Linear regression; Predictive models; Prediction
                    algorithms).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-slate-900 flex items-center justify-center p-2">
            <p className="text-white">All Rights Reserved. © 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const data = [
  {
    question: "Work Experience",
    experiences: [
      {
        logo: logo, // Replace with actual logo path
        jobTitle: "Front-End Developer & IT Support",
        company: "SAMTL",
        jobdescription: "OnSite",
        duration: "Jan 2024 - Present",
        description:
          "Developed user-friendly web and mobile applications using ReactJs and Flutter. Improved the user experience through responsive design and performance optimization.",
        borderColor: "#A22228",
      },
      {
        logo: grocart,
        jobTitle: "Mobile Developer",
        company: "GROCART",
        jobdescription: "Remote",
        duration: "Dec 2025 - Present",
        description:
          "Developing and maintaining the customer and shopper mobile applications for a multi-sided delivery and e-commerce platform using Flutter and GetX. Implemented features such as authentication, product browsing, cart management, order tracking, and real-time delivery updates. Integrated RESTful APIs and socket-based communication to support live order status and efficient delivery workflows.",
        borderColor: "#A22228",
      },
      {
        logo: zealluck, // Replace with relevant logo path
        jobTitle: "Data Analyst & IT Support",
        company: "Zeallucks Resources",
        jobdescription: "Part-time",
        duration: "2024",
        description:
          "Analyzed business data to generate insights, and automated reports to enhance decision-making processes. ",
        borderColor: "#ee894a",
      },
      {
        logo: hiit, // Replace with relevant logo path
        jobTitle: "Intern",
        company: "HiiT Plc",
        jobdescription: "OnSite",
        duration: "Apr 2022 - Sept 2022",
        description:
          "Trained in web design and development using Html, CSS, Js and Tailwind by cloning platforms like Spotify and Weebly. Enhanced graphic design proficiency using Adobe Photoshop and Illustrator, creating numerous flyers, logos, and company cards.",
        borderColor: "#8C60F0",
      },
    ],
  },
];
