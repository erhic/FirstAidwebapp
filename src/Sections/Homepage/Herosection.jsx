import { takecharge } from "../../assets/images";

const Herosection = () => {
  return (
    <section className=" w-full  min-h-screen grid grid-cols-1 md:grid-cols-2 place-items-center ">
      <div className="   p-8   flex flex-col">
        <h1 className="max-sm:text-[62px] max-sm:leading-[72px] text-4xl font-bold ">
          Learn How <br />
          To Save Lives
        </h1>
        <p className="text-base leading-8 mt-6 mb-7 sm:max-w-sm font-montserrat text-slate-gray">
          Comprehensive guides and resources on first aid.
        </p>
        <div className="flex  flex-col md:w-40 w-100 w: place-items-center mb-16 pb-8 ">
          <a
            href=""
            className="bg-red-600 text-white px-6 py-3 rounded-full border-none hover:bg-red-500 border font-montserrat text-lg leading-none font-semibold "
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="hidden md:block  place-items-center">
        <img className="w-[500px]" src={takecharge} alt="" />
      </div>
    </section>
  );
};

export default Herosection;
