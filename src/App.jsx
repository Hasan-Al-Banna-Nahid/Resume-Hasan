import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* Contact Info */}
      <div className="px-[200px]">
        <div className="bg-base-200 text-center">
          <h2 className=" font-bold text-[36px] ">Hasan Al Banna</h2>
          <p className="font-bold">Software Engineer</p>
          <div className="grid grid-cols-2 gap-2 font-semibold">
            <div>
              <h2>Address : Feni,Bangladesh</h2>
            </div>
            <div>
              <a
                className=" font-semibold"
                href="mailto:iamnahid591998@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email : IamNahid591998@gmail.com
              </a>
            </div>
            <div>
              <h2>Phone : +8801746432218</h2>
            </div>
            <div>
              <a
                className="mr-4  font-semibold"
                href="https://www.linkedin.com/in/hasan-al-banna-84390b276/"
                target="_blank"
                rel="noreferrer"
              >
                1. LinkedIn
              </a>
              <a
                className=" font-semibold"
                href="https://github.com/Hasan-Al-Banna-Nahid"
                target="_blank"
                rel="noreferrer"
              >
                2.GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl text-center font-bold my-4">
            Career Objectives
          </h2>
          <div className="font-semibold text-[20px]">
            <li>
              With 1.6+ years of industry-standard experience in web-based
              systems development, currently working as a MERN Stack Developer.
              I have a solid background in Full Stack development using
              Javascript Ecosystem. Additionally, I have intermediate-level
              experience in front-end development using React JS,Next JS and
              JavaScript,Typescript,Node-JS And MongoDB. Furthermore, I have
              gained proficiency in the NodeJs framework through hands-on
              experience. I'm a passionate developer who values clean code, best
              practices, and I embrace new challenges as opportunities to learn
              and grow.
            </li>

            <br />
          </div>
        </div>
        {/* Skills And Projects */}
        <div>
          <div className="p-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold   my-4">Skills </h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 font-medium text-[18px]">
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Front-End</h2>:{" "}
                <div className="w-2/3">React-JS, Next-JS</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Back-End</h2>:{" "}
                <div className="w-2/3">Node-JS, Express-JS</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Database</h2>:{" "}
                <div className="w-2/3">MongoDB, PostgreSQL</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Programming Language</h2>:{" "}
                <div className="w-2/3">JavaScript, TypeScript</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Tools</h2>:{" "}
                <div className="w-2/3">
                  Git, Mongoose, Sequelize, JWT, Tanstack Query, Redux
                </div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Version Control</h2>:{" "}
                <div className="w-2/3">Git, GitHub</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Familiar</h2>:{" "}
                <div className="w-2/3">AWS,Docker</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-4" />
        <div>
          <h2 className="text-2xl font-bold text-center  my-4">Experience</h2>

          <div className="text-left">
            <div className=" text-xl font-bold ">
              <h4 className="mt-2">
                Company :{" "}
                <a
                  target="_blank"
                  href="https://webtricker.com/"
                  referrerPolicy={"noreferrer"}
                  className="underline"
                >
                  WebTricker
                </a>
              </h4>
              <h4 className="my-2">Position: MERN Stack Developer</h4>
              <h2>Working Period : 1st july 2024 - present</h2>
              <h4 className="mt-2">
                Project :{" "}
                <h2
                  style={{ textDecoration: "underline" }}
                >
                  Thareja Ai- Recruit(Under Development)
                </h2>
              </h4>

              <h4 className="mt-2">
                <span className="text-blue-500">Responsibilities :</span> As a
                MERN Stack Developer at Webtricker, I'm immersed in a dynamic
                role that encompasses a wide range of responsibilities and
                technologies. I collaborate on frontend development project with
                React-based(Next-JS) application.
              </h4>
            </div>
            <hr className="border-4" />
          </div>
          <div className="text-left">
            <div className=" text-xl font-bold ">
              <h4 className="mt-2">
                Company :{" "}
                <a
                  target="_blank"
                  href="https://www.itransition.com/"
                  referrerPolicy={"noreferrer"}
                  className="underline"
                >
                  ITransition Group
                </a>
              </h4>
              <h4 className="my-2">Position: Software Engineer</h4>
              <h2>Working Period : 8th july 2024 - sep 16 2024</h2>
              <h4 className="mt-2">
                <span className="text-blue-500">Responsibilities :</span> As a
                Software Engineer Intern at iTransition, I'm immersed in a
                dynamic role that encompasses a wide range of responsibilities
                and technologies. I collaborate on frontend development
                projects,not only front-End But Also Have to work on different
                Technlogy leveraging my skills in cryptography,
                HMAC,OOP,DSA,WebRTC,SocketIO,Integration of Different Service or
                App, Node.js, SQL, and NoSQL databases. I actively contribute to
                React-based applications,Rest API Create And
                Integrate,manipulate, Security ,ensuring adherence to project
                defense protocols and coding standards set by both USA and
                European regulations. My tasks include implementing robust
                security measures, optimizing performance, and adhering to best
                practices to deliver high-quality software solutions that meet
                international coding standards and exceed client expectations.
              </h4>
            </div>
            <hr className="border-4" />
          </div>
          {/* ------------------ */}
          <div className="text-left">
            <div className=" text-xl font-bold ">
              <h4 className="mt-2">
                Company : <a>Red Rose Corporation</a>
              </h4>
              <h4 className="my-2">
                Position: Front End Developer(React-JS/Next-JS)
              </h4>
              <h2>Working Period : 8th july 2023 - 1st june 2024</h2>
              <h4 className="mt-2">
                Project :{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://www.redrosebd.com"
                  target="_blank"
                >
                  Red Rose Academy
                </a>
              </h4>
              <h4 className="mt-2">
                <span className="text-blue-500"> Responsibilities :</span> I
                work as a Frontend Developer at This Company, where I not only
                handle all frontend development tasks but also lead a team of
                developers in this domain. My role involves designing and
                implementing user interfaces that are intuitive, visually
                appealing, and responsive. I collaborate closely with designers
                and backend developers to integrate frontend components
                seamlessly into the overall application architecture. As a lead,
                I provide technical direction, mentorship, and support to ensure
                that our frontend projects meet high standards of quality and
                performance. I also oversee project timelines and conduct code
                reviews to maintain code integrity and optimize user experience
                across our applications.
              </h4>
            </div>
            <hr className="border-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
