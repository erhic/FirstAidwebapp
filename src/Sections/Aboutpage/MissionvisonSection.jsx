const MissionvisonSection = () => {
  return (
    <section className="flex px-16 py-16 gap-10">
      <div className="p-8 border hover:border-slate-900 rounded-lg bg-gray-50 hover:bg-gray-100">
        <h2 className="leading-9 text-slate-700 font-bold">Our Mission</h2>
        <p className="leading-6 text-base text-slate-500">
          To provide comprehensive, accessible, and easy-to-understand first aid
          education to everyone.
        </p>
      </div>
      <div className="p-8 border hover:border-slate-900 rounded-lg bg-gray-50 hover:bg-gray-100 ">
        <h2 className="leading-9 text-slate-700 font-bold">Our Vision</h2>
        <p className="leading-6 text-base text-slate-500 ">
          To create a world where everyone is equipped with the skills to save
          lives and manage emergencies confidently.
        </p>
      </div>
    </section>
  );
};

export default MissionvisonSection;
