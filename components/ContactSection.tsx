"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function FreeSessionSection() {
  const [mode, setMode] = useState("online");

  // Floating icons — all gold, keys added for react list keys
  const floatingIcons = [
    <svg
      key="plus"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 sm:w-12 h-10 sm:h-12"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
    </svg>,
    <svg
      key="minus"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 sm:w-12 h-10 sm:h-12"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M19 11H5v2h14z" />
    </svg>,
    <span key="multiply" className="text-2xl sm:text-4xl">
      ✖
    </span>,
    <svg
      key="divide"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 sm:w-12 h-10 sm:h-12"
      viewBox="0 0 24 24"
    >
      <circle fill="currentColor" cx="12" cy="6" r="1.5" />
      <path fill="currentColor" d="M4 11h16v2H4z" />
      <circle fill="currentColor" cx="12" cy="18" r="1.5" />
    </svg>,
    <span key="pi" className="text-2xl sm:text-4xl">
      π
    </span>,
    <span key="protractor" className="text-2xl sm:text-4xl">
      📐
    </span>,
  ];

  // Same positions, but will scale fine since we use relative units
  const iconPositions = [
    { top: "-2.5rem", left: "2.5rem" },
    { top: "2.5rem", right: "2.5rem" },
    { bottom: "-3rem", left: "4rem" },
    { bottom: "2.5rem", right: "4rem" },
    { top: "50%", left: "-2.5rem" },
    { top: "50%", right: "-2.5rem" },
  ];

  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Girl Image + Floating Icons */}
        <div className="relative flex justify-center items-center py-6 sm:py-10">
          <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
  <Image
    src="/girl-student.png"
    alt="Excited Student"
    fill
    style={{ objectFit: "contain" }}
    priority
    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 500px"
  />
</div>

          {floatingIcons.map((icon, i) => (
            <span
              key={`icon-${i}`}
              className={`absolute text-[#e9c49a] ${
                i % 2 === 0
                  ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              } animate-float${(i % 4) + 1}`}
              style={{
                ...iconPositions[i],
                color: "#e9c49a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {typeof icon === "string" ? (
                <span style={{ color: "#e9c49a" }}>{icon}</span>
              ) : (
                React.cloneElement(icon, { fill: "#e9c49a" })
              )}
            </span>
          ))}
        </div>

        {/* Right Side - Form Card */}
        <div className="bg-[#1a1a1a] text-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md mx-auto w-full border border-[#e9c49a]">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#e9c49a]">
            Book your Free Session
          </h2>
          <p className="text-gray-400 text-center text-xs sm:text-sm mt-1">
            Learn from India&apos;s best teachers
          </p>

          {/* Session Mode Toggle */}
          <div className="flex border border-[#e9c49a] rounded-lg mt-5 overflow-hidden">
            {["online", "offline"].map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className={`flex-1 py-2 text-xs sm:text-sm font-medium transition ${
                  mode === item
                    ? "bg-[#e9c49a] text-black"
                    : "text-[#e9c49a] bg-transparent"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Enter Name of your Child"
              className="w-full px-3 py-2 text-sm sm:text-base border border-[#e9c49a] bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9c49a]"
              required
            />
            <div className="flex space-x-2">
              <input
                type="tel"
                placeholder="Enter your Mobile Number"
                className="flex-1 px-3 py-2 text-sm sm:text-base border border-[#e9c49a] bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9c49a]"
                required
              />
              <button
                type="button"
                className="px-3 py-2 text-sm sm:text-base bg-[#e9c49a] text-black rounded-lg font-medium"
              >
                Send OTP
              </button>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 text-sm sm:text-base border border-[#e9c49a] bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9c49a]"
            />
            <select
              className="w-full px-3 py-2 text-sm sm:text-base border border-[#e9c49a] bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9c49a]"
              required
            >
              <option value="">State</option>
              <option>Odisha</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
            </select>
            <button
              type="submit"
              className="w-full py-3 text-sm sm:text-base bg-[#e9c49a] text-black font-bold rounded-lg hover:opacity-90 transition"
            >
              Continue to Schedule
            </button>
          </form>
        </div>
      </div>

      {/* Address & Logo */}
      <div className="bg-black text-white py-8 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-[#d4a373] mb-4">
              Our Address
            </h2>
            <p className="font-semibold">QUICKR MATHCODES</p>
            <p>F-2, Chandaka Industrial Estate</p>
            <p>In front of Infocity, Infocity</p>
            <p>Chandrasekharpur, Bhubaneswar</p>
            <p>Odisha - 751024</p>
            <p className="mt-2">
              <span className="font-bold">Phone:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-bold">Email:</span> contact@quickrmathcodes.com
            </p>
          </div>
<div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
  <Image
    src="/logo.png"
    alt="Quickr Mathcodes"
    fill
    style={{ objectFit: "contain" }}
    priority
    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, (max-width: 1280px) 208px, 256px"
  />
</div>



        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden shadow-lg mt-6 max-w-7xl mx-auto">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.0614668432645!2d85.807754!3d20.340349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190902b2a59ce5%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sus!4v1738245957890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-5deg);
          }
        }
        .animate-float1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 6s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
