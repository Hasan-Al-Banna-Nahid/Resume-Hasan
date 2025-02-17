import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* Contact Info */}
      <div className="px-[200px]">
        <div className="bg-base-200 text-center">
          <h2 className="font-bold text-[36px]">Hasan Al Banna Nahid</h2>
          <p className="font-bold">MERN Stack Developer</p>
          <div className="grid grid-cols-2 gap-2 font-semibold">
            <div>
              <h2>Address: Feni, Bangladesh</h2>
            </div>
            <div>
              <a
                className="font-semibold"
                href="mailto:iamnahid591998@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email: iamnahid591998@gmail.com
              </a>
            </div>
            <div>
              <h2>Phone: +8801746432218(Whatsapp/Telegram)</h2>
            </div>
            <div>
              <a
                className="mr-4 font-semibold"
                href="https://www.linkedin.com/in/hasan-al-banna-84390b276/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="font-semibold"
                href="https://github.com/Hasan-Al-Banna-Nahid"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Career Objectives */}
        <div className="text-left">
          <h2 className="text-3xl text-center font-bold my-4">
            Career Objective
          </h2>
          <div className="font-semibold text-[20px]">
            <p>
              I am a passionate and detail-oriented MERN Stack Developer with 2
              years of hands-on experience in full-stack web development. I
              specialize in building high-performance web applications using
              React, Next.js, Node.js, and MongoDB. Focused on delivering clean,
              efficient code while adhering to best practices. I am highly
              motivated to take on complex challenges and continuously improve
              my skill set to deliver user-centric solutions.
            </p>
          </div>
        </div>

        {/* Skills and Projects */}
        <div>
          <div className="p-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold my-4">Skills</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 font-medium text-[18px]">
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Front-End</h2>:{" "}
                <div className="w-2/3">React, Next.js</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Back-End</h2>:{" "}
                <div className="w-2/3">Node.js, Express.js</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Database</h2>:{" "}
                <div className="w-2/3">MongoDB</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Languages</h2>:{" "}
                <div className="w-2/3">JavaScript, TypeScript</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Tools</h2>:{" "}
                <div className="w-2/3">
                  Git, Mongoose, JWT, Redux, Tanstack Query
                </div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Version Control</h2>:{" "}
                <div className="w-2/3">Git, GitHub</div>
              </div>
              <div className="flex justify-between w-full max-w-[500px] gap-4">
                <h2 className="w-1/3">Familiar</h2>:{" "}
                <div className="w-2/3">AWS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="text-left">
          <h2 className="text-2xl font-bold text-center my-4">Experience</h2>

          {/* WebTricker */}
          <div className="text-left">
            <div className="text-xl font-bold">
              <h4 className="mt-2">
                Company:{" "}
                <a
                  target="_blank"
                  href="https://webtricker.com/"
                  referrerPolicy={"noreferrer"}
                  className="underline text-blue-600"
                >
                  WebTricker
                </a>
              </h4>
              <h4 className="my-2">Position: MERN Stack Developer</h4>
              <h2>Working Period: 1st July 2024 - 7th Sept 2024</h2>
              <h4 className="mt-2" style={{ display: "flex", gap: "8px" }}>
                Project:{" "}
                <h2 style={{ textDecoration: "underline" }}>
                  <a
                    target="_blank"
                    href="https://main.d2iyv1nj0eamw0.amplifyapp.com/"
                  >
                    Thareja Ai - Recruit
                  </a>
                </h2>
              </h4>
              <h4 className="mt-2">
                <span className="text-blue-500">Responsibilities:</span>
                <ul className="list-disc ml-8">
                  <li>
                    Led the frontend development using React and Next.js,
                    ensuring seamless integration with the backend API for
                    optimized performance.
                  </li>
                  <li>
                    Implemented a dynamic recruitment platform that allows job
                    seekers to apply and track applications in real-time.
                  </li>
                  <li>
                    Solved cross-browser compatibility issues and improved page
                    load speed by optimizing React components and reducing
                    bundle size.
                  </li>
                  <li>
                    Collaborated with backend developers to integrate MongoDB
                    with the frontend using Mongoose for efficient data fetching
                    and manipulation.
                  </li>
                  <li>
                    Addressed complex UI/UX challenges, making sure the
                    application was responsive, user-friendly, and accessible on
                    all devices.
                  </li>
                </ul>
              </h4>
            </div>
            <hr className="border-4" />
          </div>

          {/* ITransition Group */}
          <div className="text-left">
            <div className="text-xl font-bold">
              <h4 className="mt-2">
                Company:{" "}
                <a
                  target="_blank"
                  href="https://www.itransition.com/"
                  referrerPolicy={"noreferrer"}
                  className="underline text-blue-600"
                >
                  ITransition Group
                </a>
              </h4>
              <h4 className="my-2">Position: Software Engineer Intern</h4>
              <h2>Working Period: 8th July 2024 - 16th Sept 2024</h2>
              <h4 className="mt-2">
                <span className="text-blue-500">Responsibilities:</span>
                <ul className="list-disc ml-8">
                  <li>
                    Worked on both frontend and backend components of a web
                    application, contributing to the improvement of core
                    features.
                  </li>
                  <li>
                    Integrated WebRTC for real-time communication and
                    implemented Socket.IO for chat and notifications.
                  </li>
                  <li>
                    Optimized database queries in MongoDB and PostgreSQL to
                    improve app performance by 20%.
                  </li>
                  <li>
                    Implemented security measures such as JWT authentication and
                    encrypted sensitive user data.
                  </li>
                  <li>
                    Actively participated in code reviews, ensuring best
                    practices and high-quality code.
                  </li>
                </ul>
              </h4>
            </div>
            <hr className="border-4" />
          </div>

          {/* Red Rose Corporation */}
          <div className="text-left">
            <div className="text-xl font-bold">
              <h4 className="mt-2">Company: Red Rose Corporation</h4>
              <h4 className="my-2">Position: Front-End Developer</h4>
              <h2>Working Period: 8th July 2023 - 1st June 2024</h2>
              <h4 className="mt-2">
                Project:{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://www.redrosebd.com"
                  target="_blank"
                  className="text-blue-600"
                >
                  Red Rose Academy
                </a>
              </h4>
              <h4 className="mt-2">
                <span className="text-blue-500">Responsibilities:</span>
                <ul className="list-disc ml-8">
                  <li>
                    Led the frontend development of the Red Rose Academy
                    platform, ensuring a user-friendly experience for students
                    and teachers.
                  </li>
                  <li>
                    Implemented responsive and accessible web pages using React
                    and Next.js, optimized for mobile-first interactions.
                  </li>
                  <li>
                    Integrated RESTful APIs for fetching and displaying course
                    content, student information, and notifications.
                  </li>
                  <li>
                    Collaborated with the backend team to ensure efficient data
                    exchange between the client and server.
                  </li>
                  <li>
                    Troubleshot and resolved bugs, enhancing overall user
                    satisfaction and system reliability.
                  </li>
                </ul>
              </h4>
            </div>
            <hr className="border-4" />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-center my-4">Soft Skills</h2>
          <div className="max-w-[600px] mx-auto text-lg font-medium text-center">
            <p>
              <strong>Problem-Solving</strong>: Ability to analyze complex
              problems and find effective solutions.
            </p>
            <p>
              <strong>Team Collaboration</strong>: Works efficiently in team
              environments, ensuring seamless communication.
            </p>
            <p>
              <strong>Adaptability</strong>: Quickly learns new technologies and
              adjusts to changing project requirements.
            </p>
            <p>
              <strong>Critical Thinking</strong>: Strong analytical skills for
              decision-making and problem-solving.
            </p>
            <p>
              <strong>Time Management</strong>: Efficiently prioritizes tasks to
              meet deadlines.
            </p>
          </div>
        </div>

        {/* English Proficiency */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-center my-4">
            English Proficiency
          </h2>
          <p className="text-center text-lg font-medium">
            Fluent in both written and spoken English, ensuring effective
            communication in professional and technical discussions.
          </p>
        </div>

        {/* Degree Section */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-center my-4">Degree</h2>
          <div className="max-w-[600px] mx-auto text-lg font-medium text-center">
            <p>
              <strong>Degree:</strong> Diploma in Engineering
            </p>
            <p>
              <strong>Major:</strong> Computer Science and Technology
            </p>
            <p>
              <strong>Institute:</strong> National Institute of Technology
              (Chittagong)
            </p>
            <p>
              <strong>Session:</strong> 2020-2021
            </p>
            <p>
              <strong>Passing Year:</strong> 2024
            </p>
            <p>
              <strong>CGPA:</strong> 3.74/4.00
            </p>
          </div>
        </div>

        {/* Certificate Link */}
        <div className="text-center my-4">
          <h3 className="text-xl font-bold">Certification</h3>
          <a
            href="https://drive.google.com/file/d/1EtnRdnnUsetHg6a0V74dMems6E0Hek20/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="underline my-2"
          >
            Click here to view Certificate
          </a>
          <br />
          <a
            target="_blank"
            href="https://web.programming-hero.com/dashboard"
            className="underline my-2"
          >
            Complete Web Development With Jhankar Mahbub (Programming Hero)
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
