import { cpr, takecharge } from "../../assets/images";

const MainSection = () => {
  return (
    <>
      <section className="py-16 px-16 font-montserrat ">
        <div className="flex justify-center items-center pb-8">
          <div className="lex justify-around  items-center py-8">
            <h3 className="text-base font-extralight  ">Emergency Situation</h3>
            <p className="font-palanquin">
              Step to step guides on handling various emergencies.
            </p>
            <a href="">- Learn More</a>
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
            <h3 className="text-base font-extralight"> First Aid Basics</h3>
            <p className="font-palanquin">
              Learn Fundamental principle of first aid.
            </p>
            <a href="">- Learn More</a>
          </div>
        </div>

        <div className="flex justify-center items-center pb-8">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-base font-extralight  ">Resources</h3>
            <p className="font-palanquin">
              Downloadable guides, videos, and more.
            </p>
            <a href="">- Learn More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
