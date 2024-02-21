import Nav from "./components/Nav";
import subject from "./assets/Subject.png";
import react from "./assets/react.png";
import flutter from "./assets/Flutter.png";
import performance from "./assets/performance.png";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

function App() {
  return (
    <>
      <Nav />
      <div className="grid md:grid-cols-2 w-[100%]">
        <div className="flex flex-col justify-center mt-20">
          <div className="px-[10px] md:pl-[20%] md:pr-[10%]">
            <h1 className="text-[50px] font-extrabold flex items-center gap-5">
              Hi! I Am{" "}
              <span className="text-white font-bold text-[20px]">
                <button className="bg-blue-500 rounded-[500px] p-[2px] w-[120px]">
                  Developer
                </button>
              </span>{" "}
            </h1>
            <h1 className="text-[50px] font-extrabold ">Israel Tunji.</h1>
            <p className="mt-5 text-[25px] pr-[150px]">
              Developing User Interfaces for over{" "}
              <span className="font-bold"> 3yrs</span> as a Web Developer
            </p>
            <div className="relative">
              <div className="flex gap-5 mt-10">
                <button className="bg-[#f35738] p-[10px] w-[100px] text-white font-extrabold">
                  Hire Me
                </button>
                <button className="bg-transparent p-[10px] w-[100px] flex gap-2 items-center font-extrabold">
                  Projects <FiArrowUpRight />
                </button>
              </div>
              <div className="flex flex-col mt-10 ">
                <h1 className="font-extrabold text-[30px]">+50</h1>
                <p className="text-[20px]">Clients on work</p>
                <p className="text-[20px]">worldwide </p>
              </div>
              <div className="flex mt-5 gap-10">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px]">500</h1>
                  <p className="text-[20px]">Project Done</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px]">Github</h1>
                  <p className="text-[20px]">israel306</p>
                </div>
              </div>
              <div className="absolute top-12 md:top-8 right-10 md:right-10 xl:right-40">
                <img
                  src={performance}
                  alt="image"
                  className="hover:animate-spin h-[100px] md:h-[120px] xl:h-[150px]"
                />
              </div>
            </div>
          </div>

          <div className="dark:bg-gray-900 flex flex-col flex-grow">
            <div className="flex flex-col md:flex-row gap-10 mt-12 justify-between px-[15px] md:pl-[20%] md:pr-[10%]">
              <div className="flex flex-col">
                <h1 className="mb-5 text-white">
                  Projects
                  <p>Statistics 2024</p>
                </h1>
                <button className="bg-[#f3d438] p-[10px] w-[100%] text-white font-extrabold">
                  Know More
                </button>
              </div>
              <div className="flex flex-col pr-20">
                <div className="flex justify-between">
                  <h1 className="text-white">Website Design</h1>
                  <h1 className="text-white">75</h1>
                </div>
                <hr className="bg-slate-900 border-1 border-dotted mt-2 mb-2" />
                <div className="flex justify-between">
                  <h1 className="text-white">Mobile App Design</h1>
                  <h1 className="text-white">50</h1>
                </div>
                <hr className="bg-slate-900 border-1 border-dotted mt-2 mb-2" />
                <div className="flex gap-5 justify-between">
                  <h1 className="text-white">Machine Learning</h1>
                  <h1 className="text-white">20</h1>
                </div>
                <hr className="bg-slate-900 border-1 border-dotted mt-2 mb-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-slate-100">
          <div className="px-[10px] md:pl-[20%] md:pr-[10%] mt-20 mb-6 ">
            <h1 className="text-[30px] px-10">
              Create your site with{" "}
              <span className="font-extrabold">React</span> and your Mobile Apps
              with <span className="font-extrabold">Flutter</span>
            </h1>
            <div className="relative">
              <img src={subject} alt="" className="h-[700px] mt-5" />
              <div className="absolute top-20 animate-bounce hover:animate-spin">
                <img src={react} alt="" className="h-[80px] " />
              </div>
              <div className="absolute top-40 right-2 animate-bounce hover:animate-spin">
                <img src={flutter} alt="" className="h-[100px] " />
              </div>
              <div className="absolute bg-white p-[15px] left-20 bottom-5">
                <div className="flex items-center gap-2">
                  <h1>Subscribe my Newsletter</h1>
                  <div className="bg-black p-[10px]">
                    <GoArrowRight className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
