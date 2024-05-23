import { cpr, takecharge } from "../../assets/images";

const MainSection = () => {
  return (
    <>
      <section className="py-16 px-16 font-montserrat ">
        <h3 className="pl-14 text-lg font-bold text-slate-500 pt-6">
          Learn About
        </h3>
        <div className="flex justify-center items-center pb-8">
          <div className="lex justify-around  items-center py-8">
            <h3 className="text-base font-bold text-slate-700  leading-9">
              Emergency Situation
            </h3>
            <p className="font-montserrat text-slate-600 leading-6">
              Step to step guides on handling various emergencies.
            </p>
            <a href="" className="font-montserrat text-slate-400">
              - Learn More
            </a>
          </div>
          <div>
            <img src={takecharge} alt="" />
          </div>
        </div>

        <div className="flex justify-around  items-center g py-8">
          <div>
            <img src={cpr} alt="" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-700 leading-9">
              First Aid Basics
            </h3>
            <p className="font-montserrat text-slate-600 leading-6">
              Learn Fundamental principle of first aid.
            </p>
            <a href="" className="font-montserrat text-slate-400">
              - Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center pb-8">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-700  leading-9  ">
              Resources
            </h3>
            <p className="font-montserrat text-slate-600 leading-6">
              Downloadable guides, videos, and more.
            </p>
            <a href="" className="font-montserrat text-slate-400">
              - Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
