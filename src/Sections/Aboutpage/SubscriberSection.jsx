const SubscriberSection = () => {
  return (
    <section className="flex justify-center bg-slate-50 border-b-1 py-16 ">
      <div className="justify-center">
        <p className="font-monteserrat"></p>
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-1xl sm:text-2xl text-1xl font-bold py-2">
            Sign up to our newsletter for latest first aid tips and updates.
          </h1>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriberSection;
