import { CommonProcedureCPR, basicPrinciple } from "../../Constants";

const PrincipleSection = () => {
  return (
    <section className="px-16 py-16  ">
      <h2 className=" flex  w-full  justify-center  py-4 font-montserrat  tracking-normal font-semibold leading-10 text-slate-900 pr-2">
        Basic Principles of First Aid
      </h2>{" "}
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-10">
        <div className=" flex-col w-[50%] px-5 flex-1 items-center justify-center text-wrap">
          <p className=" flex-1 m-3  p-4  flex justify-center  text-white font-bold font-palanquin  rounded-full items-center bg-red-600">
            {" "}
            DRABC
          </p>
          <p className=" flex-1 m-3  p-4  flex justify-center  text-white font-bold font-palanquin  rounded-full items-center bg-red-600">
            Stay Calm
          </p>
          <p className=" flex-1 m-3  p-4  flex justify-center  text-white font-bold font-palanquin  rounded-full items-center bg-red-600">
            Call for Help
          </p>
          <p className=" flex-1 m-3  p-4  flex justify-center  text-white font-bold font-palanquin  rounded-full items-center bg-red-600">
            Protect Yourself
          </p>
        </div>
        <div className="  w-[50%] ">
          <ul className="font-montserrat leading-6 ">
            {basicPrinciple.map((item) => (
              <li key={item.listName} className="leading-10 pr-[12px] ">
                <span className="border">{` `} </span>
                <span className="border-r">{` `} </span>
                <strong className="text-slate-700 pl-6">{item.listName}</strong>
                <br />
                <span className="px-6"> {item.description}</span>
              </li>
            ))}
          </ul>
        </div>{" "}
      </div>
      <div className="flex px-16">
        <div className="">
          <h2 className="flex justify-center px-16 font-montserrat pt-16 tracking-normal font-semibold leading-10 text-slate-900">
            CPR (Cardiopulmonary Resuscitation)
          </h2>
          <ul className="font-montserrat leading-6  justify-center ">
            {CommonProcedureCPR.map((item) => (
              <li key={item.listName} className="leading-10">
                <span className="border">{` `} </span>
                <span className="border-r-8">{` `} </span>
                <span className="px-6"> {item.listProcedure}</span>
              </li>
            ))}
          </ul>{" "}
          {/* <div className="mx-12"></div> */}
        </div>{" "}
      </div>
    </section>
  );
};

export default PrincipleSection;
