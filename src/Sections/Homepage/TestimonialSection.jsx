import { HomeTestimonial } from "../../Constants";

const TestimonialSection = () => {
  return (
    <>
      <h3 className=" text-lg font-bold pl-16 text-slate-600 pt-6">
        Testmonial
      </h3>
      <section className="w-full max-md:flex-col place-items-center  flex gap-6 justify-center pt-14  pb-[100px] font-palanquin px-10">
        <h3></h3>
        {HomeTestimonial.map((item) => (
          <div
            key={item.clientStatement}
            className="max-w-sm w-full lg:max-w-2/5 lg:flex bg-gray-50"
          >
            <div className="border  rounded-lg p-6">
              <div className="mb-8">
                <p className="text-base  text-slate-500 leading-6">
                  {'" ' + item.clientStatement + ' " '}
                </p>
              </div>
              <div className="flex items-center">
                {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                <div className="text-sm leading-6">
                  <p className="text-gray-700 leading-none">
                    {"~ " + item.clientName}
                  </p>
                  <p className="text-gray-600">{item.testifyDate}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TestimonialSection;
