import React from "react";

const jobs = [
  {
    title: "Software Engineer (Infrastructure)",
    location: "Americas / Remote / Full-time",
  },
  {
    title: "DevOps Engineer",
    location: "Americas / Remote / Full-time",
  },
];

const Hiring = () => {
  return (
    <section className="bg-black text-white py-12 relative bottom-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-normal mb-2">
          Open Positions
        </h2>
        <p className="text-gray-400 mb-10">
          Come build the future of email with us.
        </p>

         
       <div className="space-y-0">
  {jobs.map((job, index) => (
    <div
      key={index}
      className="py-6 border-y"
      style={{
        borderColor: "hsla(208, 91%, 92%, 0.19)",
        borderWidth: "1px 0px 1px 0px",
        borderStyle: "solid",
      }}
    >
      <h3 className="text-base md:text-lg font-medium items-center text-left">{job.title}</h3>
      <p className="text-sm text-gray-400 items-center text-left">{job.location}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Hiring;
