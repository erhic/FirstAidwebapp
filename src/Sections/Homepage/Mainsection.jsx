import { cpr, takecharge } from "../../assets/images";

const MainSection = () => {
  return (
    <>
      <section className="py-16 px-16 font-montserrat ">
        <h3 className=" text-lg font-bold text-slate-500 ">What To Learn</h3>
        <div className="flex justify-center items-center py-6  ">
          <div className="  items-center   ">
            <h3 className="text-lg font-bold text-slate-700  leading-9">
              Emergency Situation
            </h3>
            <p className="font-montserrat text-slate-600 leading-6">
              Step to step guides on handling various emergencies.
            </p>
            <a href="" className="font-montserrat text-slate-400 underline">
              - Learn More
            </a>
          </div>
          <div className="hidden md:block ">
            <img src={takecharge} alt="" />
          </div>
        </div>

        <div className="py-8 grid md:grid-cols-2 place-items-center md:px-[150px] gap-4 ">
          <div className=" ">
            <img src={cpr} alt="" />
          </div>
          <div className="">
            <h3 className="text-lg font-bold text-slate-700 leading-9">
              First Aid Basics
            </h3>
            <p className="font-montserrat text-slate-600 leading-6">
              Learn Fundamental principle of first aid.
            </p>
            <a href="" className="font-montserrat text-slate-400  underline">
              - Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center  items-center pb-8">
          <div className=" s     max-lg:hidden">
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-700  leading-9  ">
              Resources
            </h3>
            <p className="font-montserrat text-slate-600 leading-6">
              Downloadable guides, videos, and more.
            </p>
            <a href="" className="font-montserrat text-slate-400  underline">
              - Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
