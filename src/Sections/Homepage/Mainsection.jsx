import { cpr, takecharge } from "../../assets/images";

const MainSection = () => {
  return (
    <>
      <section className=" grid  font-montserrat px-16 py-16">
        <h3 className=" text-lg font-bold text-slate-500 ">What To Learn</h3>
        <div className="grid sm:grid-cols-2 gap-5 place-items-center pt-8">
          <div className="bg-red-100  grid ">
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
          <div className="bg-green-100 sm:block hidden">
            <img src={takecharge} alt="" />
          </div>
        </div>

        <div className="py-8 grid sm:grid-cols-2 place-items-center">
          <div>
            <img src={cpr} alt="" />
          </div>
          <div>
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
