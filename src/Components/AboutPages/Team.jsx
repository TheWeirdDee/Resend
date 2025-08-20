import Team from "../../assets/Images/About/Team.png";
import Tlink from "../../assets/Images/About/Tlink.png";

export default function Teams() {
  return (
    <section className="bg-black text-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mt-12 font-[Inter]">
        The team behind it
      </h2>
      <p className="mt-2 text-gray-400 text-md max-w-2xl mx-auto mb-2">
        A fully remote team on a mission to build <br />
        the best communication platform for developers.
      </p>

       
      <div className="flex justify-center mt-0 md:mt-8 mb-6">
        <img
          src={Team}
          alt="Team Image"
          className="w-full max-w-[800px] rounded-3xl object-contain h-[270px] sm:h-[400px] md:h-auto"
        />
      </div>

       
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-5 text-center sm:text-left">
  <img
    src={Tlink}
    alt="Twitter link"
    className="w-5 h-5"
  />
  <p className="text-gray-400 text-xs sm:text-sm max-w-xs sm:max-w-lg">
    Some of our team meeting for the first time in-person during a trip to Portugal
  </p>
</div>

    </section>
  );
}
