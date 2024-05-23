import { CommonProcedureCPR, basicPrinciple } from "../../Constants";

const PrincipleSection = () => {
  return (
    <>
      <div className="py-16 px-16">
        <h2 className="flex justify-start pl-8 font-montserrat font-bold pt-8 tracking-normal font-semibold leading-10 text-slate-900">
          Basic Principles of First Aid
        </h2>
        <ul className="font-montserrat leading-6 ">
          {basicPrinciple.map((item) => (
            <li key={item.listName} className="leading-8 pr-[12px]">
              <span>{`> `} </span>
              <strong className="text-slate-700">{item.listName}</strong>
              <span className="px-8"> {item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-16 px-16 ">
        <h2 className="flex justify-start pl-8 font-montserrat font-bold pt-8 tracking-normal font-semibold leading-10 text-slate-900">
          CPR (Cardiopulmonary Resuscitation)
        </h2>
        <ul className="font-montserrat leading-6 ">
          {CommonProcedureCPR.map((item) => (
            <li key={item.listName} className="leading-8 pr-[12px]">
              <span>{`> `} </span>
              <span className="px-8"> {item.listProcedure}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PrincipleSection;
