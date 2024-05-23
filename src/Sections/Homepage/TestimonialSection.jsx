import { HomeTestimonial } from "../../Constants";

const TestimonialSection = () => {
  return (
    <>
      <h3 className="pl-14 text-lg font-bold text-slate-600 pt-6">
        Testmonial
      </h3>
      <section className="w-full flex gap-6 justify-center py-14 font-palanquin px-10">
        <h3></h3>
        {HomeTestimonial.map((item) => (
          <div
            key={item.clientStatement}
            className="max-w-sm w-full lg:max-w-2/5 lg:flex"
          >
            <div className="border  rounded-lg p-6">
              <div className="mb-8">
                <p className="text-gray-700 text-base italic text-slate-500">
                  {'" ' + item.clientStatement + ' " '}
                </p>
              </div>
              <div className="flex items-center">
                {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                <div className="text-sm">
                  <p className="text-gray-700 leading-none">
                    {"~ " + item.clientName}
                  </p>
                  <p className="text-gray-600">Aug{18}</p>
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
