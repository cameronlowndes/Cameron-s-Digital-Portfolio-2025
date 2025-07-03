// data/valuesData.ts
import React from "react";
import Link from "next/link";

export const values = [
  {
    title: "Inclusion for All",
    description:
      "As a web developer at Cameron Digital Works, I believe in Inclusion for All. No matter your background, beliefs, or identity, you deserve respect and equal opportunity. I’m committed to building websites that reflect these values because I will never create a site for a client whose vision doesn’t align with the principles of respect, acceptance, and diversity. Together, let’s build digital spaces that empower everyone and celebrate what makes us unique.",
  },
  {
    title: "Celebrating Diversity",
    description:
      "At Cameron Digital Works, it’s just me behind the screen  a passionate pansexual developer who believes diversity isn’t just important, it’s essential. I’m committed to creating a welcoming, respectful space where everyone feels seen and valued. This company is my way of giving back to a community I care deeply about, through projects that are thoughtful, inclusive, and built to make a real difference. If you share these values and want to create something meaningful together, check out my Special Deals page  let’s build a more inclusive digital future, one project at a time.",
  },
  {
    title: "Supporting Neurodiversity",
    description:
      "At Cameron Digital Works, it’s just me and I’m deeply committed to celebrating neurodiversity by designing websites that are genuinely accessible and user-friendly for people with dyslexia and other neurodivergent conditions. I focus on clear typography, simple navigation, and helpful tools that make browsing smoother and more enjoyable. My goal is to create digital spaces where everyone can engage confidently and comfortably, because no one should ever feel left out of the online world.",
  },
  {
    title: "Respect",
    description: (
      <>
        <p className="mb-4">
          I hold firm to the values of respect, kindness, and professionalism in everything I do. Even when there are disagreements, I believe in approaching every conversation with patience and understanding. Building strong, respectful relationships with clients and collaborators is important to me, because clear and honest communication leads to better outcomes and a more positive experience for everyone.
        </p>
        <p>
          At the same time, I stand by my principles. I won’t take on projects that promote hate, discrimination, or values that go against inclusivity and equality. While I always handle these decisions with courtesy and professionalism, I reserve the right to turn down work that doesn’t align with what I believe in. My mission is to create digital experiences rooted in empathy, integrity, and respect  and that begins with the choices I make every day.
        </p>
      </>
    ),
  },
  {
    title: "Integrity and Transparency",
    description:
      "I firmly believe that transparency is the foundation of trust and success. Even when differences of opinion or disagreements arise, I commit to open, honest communication and clear accountability in every aspect of my work. This unwavering dedication to transparency ensures that both my clients and I are always informed, respected, and confident in the integrity of everything we create together. Because these values guide everything I do, I won’t create websites for clients whose principles don’t align with mine ensuring that every project I take on reflects mutual respect and a shared commitment.",
  },
  {
    title: "Unity and Collaboration",
    description:
      "I believe that clear communication and mutual understanding are the foundation of a successful partnership. That’s why I work closely with each client to create tailored, specific agreements that outline every detail of the project from scope and deliverables to timelines and responsibilities. This ensures we both have aligned expectations and can collaborate smoothly, resulting in a final product that truly meets your needs while upholding the values I stand for.",
  },
  {
    title: "Online Responsibility",
    description:
      "I hold a strong belief in online responsibility and the power of maintaining a positive digital presence. I am committed to creating websites that reflect respect, kindness, and integrity. Because of this, I make it clear that I will not take on projects for clients whose values conflict with mine or who promote negativity, hate, or disrespect online. This isn’t about being harsh  it’s about standing firmly by my principles and ensuring that every website I build contributes positively to the online community and upholds the respectful standards I believe in.",
  },
  {
    title: "Ongoing Learning and Growth",
    description: (
      <>
        I believe in continuous learning and growth, always striving to improve my skills, processes, and services to better serve my clients and adapt to the ever-changing digital landscape.
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 font-semibold tracking-wide"
          >
            Send Feedback
          </Link>
        </div>
      </>
    ),
  },
];
