"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function PrideSupportHero() {
  // Generate floating dots only once to avoid hydration mismatch
  const floatingDots = useMemo(
    () =>
      Array.from({ length: 15 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        background: `hsl(${Math.random() * 360}, 100%, 60%)`,
        animationDuration: `${6 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 3}s`,
      })),
    []
  );

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),transparent_60%)] animate-pulse"></div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingDots.map((dot, i) => (
          <span
            key={i}
            className="absolute w-3 h-3 rounded-full animate-float"
            style={dot}
          />
        ))}
      </div>

      {/* Main Heading with glow */}
      <h1 className="relative text-5xl  md:text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-[gradientMove_6s_linear_infinite] pt-26">
        🌈 We Support Pride! 🌈
      </h1>

      {/* Intro Text */}
    <div className="max-w-3xl text-center mb-12 text-lg md:text-xl leading-relaxed bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 animate-[fadeIn_1s_ease_forwards]">
  <p className="mb-4">
    At <span className="font-bold text-yellow-300">Cameron Digital Works</span>, I am proud to openly support Pride and the wider LGBTQIA+ community. 
    As someone who identifies as <span className="text-pink-300 font-semibold">Pansexual</span>, I believe representation and visibility are essential. 
    Pride is more than a celebration — it is a reminder of the progress I have made and the work still to do to create an inclusive world 
    where everyone feels safe and valued for who they are.
  </p>
  
  <p className="mb-4">
    When building my company, one of the top priorities I set was to ensure that inclusivity and support for the LGBTQIA+ community are at the 
    heart of everything we do. This commitment goes beyond words; it shapes the way I approach my work, my collaborations, and the projects I take on. 
    I believe businesses have a responsibility to use their platform to empower people, amplify diverse voices, and challenge barriers that still exist today.
  </p>
  
  <p className="mb-4">
    For me, supporting Pride is about creating space where individuality is respected, celebrated, and protected. At 
    <span className="font-bold text-yellow-300"> Cameron Digital Works</span>, I want every client, partner, and community member to know they are welcomed 
    exactly as they are. My vision is to build not just a company, but a culture of acceptance, where being authentic is not only encouraged but seen 
    as a strength that drives creativity and progress.
  </p>
  
  <p className="font-semibold text-pink-300">
    I ain’t just a digital agency — we ride with you, stand loud, and rep real change.” 💖
  </p>
</div>


      {/* Pride-Themed Image with glow effect */}
      <div
        className="w-full max-w-lg mb-10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-transform duration-700 hover:scale-110 hover:rotate-2 animate-[fadeIn_1.5s_ease_forwards]"
        style={{
          border: "6px solid",
          borderImage:
            "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1",
        }}
      >
        <Image
          src="/image/CameronDigitalWorksLOGOPRIDE.png"
          alt="Cameron Digital Works Pride Support"
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>

      {/* Call-to-Action Buttons */}
      <div className="text-center animate-[fadeIn_2s_ease_forwards] mb-16 flex flex-col md:flex-row gap-6 justify-center items-center mb-24">
        <Link
          href="https://www.burtonpride.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block px-10 py-4 font-extrabold rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-black shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-transform duration-500 hover:scale-125 overflow-hidden group "
        >
          <span className="relative z-10">Go Back To Burton Pride Website</span>
          <span className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </Link>

        <Link
          href="https://www.camerondigitalworks.com/about/CoreValues"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block px-10 py-4 font-extrabold rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-black shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-transform duration-500 hover:scale-125 overflow-hidden group"
        >
          <span className="relative z-10">Go To Your Core Value Page</span>
          <span className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity "></span>
        </Link>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </main>
  );
}
