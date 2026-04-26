import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const experiences = [
  {
    event: "HACK8ON",
    organiser: "GDG RANCHI & CBNCC",
    Year: "2025",
    description:
      "Got under top 10 in Hackathon conducted by GDG Ranchi in collaboration with CBNCC of NETAJI SUBHAS UNIVERSITY.",
  },
  {
    event: "SIH INTERNAL",
    organiser: "CBNCC",
    Year: "2025",
    description:
      "Qualified in the internal Hackathon round of Smart India Hackathon 2025, organised by NETAJI SUBHAS UNIVERSITY.",
  },
  {
    event: "HACK HORIZON",
    organiser: "ARKA JAIN UNIVERSITY",
    Year: "2026",
    description: "Out of 160+ teams made it to the top 30",
  },
];

function ExperienceItem({ exp, idx, layout }) {
  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0 h-[300px]">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"></div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className={`absolute left-1/2 -translate-x-1/2 ${
            idx % 2 === 0 ? "bottom-[60%]" : "top-[60%]"
          } bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-70 sm:w-75 shadow-lg`}
        >
          <h3 className="text-xl font-semibold">{exp.event}</h3>
          <p className="text-md text-gray-400 mb-3">
            {exp.organiser} | {exp.Year}
          </p>
          <p className="text-md text-gray-300 break-words">
            {exp.description}
          </p>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <div className="absolute -left-3.5 top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"></div>

      <motion.article
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900/80 backdrop-blur border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
      >
        <h3 className="text-lg font-semibold break-words">{exp.event}</h3>
        <p className="text-sm text-gray-400 mb-2 break-words">
          {exp.organiser} | {exp.Year}
        </p>
        <p className="text-sm text-gray-300 break-words">
          {exp.description}
        </p>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="experience" className="bg-black text-white py-32 min-h-screen">
      <h2 className="text-4xl sm:text-5xl mb-16 font-semibold text-center italic">
        Experience
      </h2>

      <div className="flex flex-col items-center gap-20 px-6">
        {!isMobile ? (
          <div className="relative w-full max-w-5xl mx-auto">
            {/* timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20"></div>

            <div className="relative flex justify-between items-center h-[350px]">
              {experiences.map((exp, idx) => (
                <ExperienceItem
                  key={idx}
                  exp={exp}
                  idx={idx}
                  layout="desktop"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <ExperienceItem
                key={idx}
                exp={exp}
                idx={idx}
                layout="mobile"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}