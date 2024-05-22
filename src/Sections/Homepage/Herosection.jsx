import { cpr, takecharge } from "../../assets/images";

const Herosection = () => {
  return (
    <section className=" w-full flex  max-lg:flex-col flex-row justify-center items-center gap-10 max-container min-h-screen  ">
      <div className=" flex flex-col  mb-16 max-lg:justify-center px-4 max-lg:p">
        <h1 className="max-sm:text-[62px] max-sm:leading-[72px] text-4xl font-bold ">
          {" "}
          Learn How to <br />
          Save Lives
        </h1>
        <p className="text-base leading-8 mt-6 mb-7 sm:max-w-sm font-montserrat text-slate-gray">
          Comprehensive guides and resources on first aid.
        </p>
        <div className="flex flex-row max-lg:flex-col max-lg:w-40  mb-16 pb-8">
          <a
            href=""
            className="bg-red-600 text-white px-6 py-3 rounded-full border-none hover:bg-red-500 border font-montserrat text-lg leading-none"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-2/5">
        <img className="w-[600px]" src={takecharge} alt="" />
      </div>
    </section>
  );
};

export default Herosection;
