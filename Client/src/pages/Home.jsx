import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa"; // Add icons
import teacher from "../assets/download.png";
import teacherf from "../assets/download1.png";
import studentm from "../assets/download3.png";
import studentf from "../assets/download4.png";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <h1 className="text-white text-5xl mb-12" style={{ fontFamily: "cursive" }}>Welcome</h1>
      <div className="flex gap-16 mb-8">
        <Link
          to="/teacher-auth"
          className="no-underline text-white bg-pBlue p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex flex-col items-center">
            <div className="flex gap-4 items-center mb-4">
              <img
                className="w-24 rounded-full border-4 border-yellow-500 shadow-lg"
                src={teacher}
                alt="teacher-male"
              />
              <img
                className="w-24 rounded-full border-4 border-yellow-500 shadow-lg"
                src={teacherf}
                alt="teacher-female"
              />
            </div>
            <FaChalkboardTeacher className="text-4xl mb-2" />
            <h2 className="text-3xl font-semibold" style={{ fontFamily: "cursive" }}>
              Teacher
            </h2>
          </div>
        </Link>
        <Link
          to="/student-auth"
          className="no-underline text-white bg-pBlue p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <div className="flex flex-col items-center">
            <div className="flex gap-4 items-center mb-4">
              <img
                className="w-24 rounded-full border-4 border-yellow-500 shadow-lg"
                src={studentm}
                alt="student-male"
              />
              <img
                className="w-24 rounded-full border-4 border-yellow-500 shadow-lg"
                src={studentf}
                alt="student-female"
              />
            </div>
            <FaUserGraduate className="text-4xl mb-2" />
            <h2 className="text-3xl font-semibold" style={{ fontFamily: "cursive" }}>
              Student
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
