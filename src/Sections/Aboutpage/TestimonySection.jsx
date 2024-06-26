import { AboutTestimonial } from "../../Constants";

const TestimonySection = () => {
  return (
    <>
      <h3 className="pl-16  mx-4 text-lg font-bold text-slate-600 pt-6">
        What Our Users Say
      </h3>
      <section className="w-full  max-lg:flex-col flex gap-6 justify-center pt-14 pb-16 font-palanquin px-10">
        <h3></h3>
        {AboutTestimonial.map((item) => (
          <div key={item.memberStatement} className=" w-full flex bg-gray-50">
            <div className="border  rounded-lg px-10 md:px-16 p-6">
              <div className="mb-8">
                <p className="text-base  text-slate-500 leading-6">
                  {'" ' + item.memberStatement + ' " '}
                </p>
              </div>
              <div className="flex items-center ">
                {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                <div className="text-sm leading-6">
                  <p className="text-gray-700 leading-none">
                    {"~ " + item.memberName}
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

export default TestimonySection;
