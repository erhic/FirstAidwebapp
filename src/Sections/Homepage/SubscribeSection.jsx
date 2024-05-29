const SubscribeSection = () => {
  return (
    <section className="flex justify-center bg-slate-200 py-16 px-16">
      <div className="justify-center">
        <p className="font-monteserrat"></p>
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-1xl sm:text-2xl text-1xl font-bold py-2">
            Sign up to our newsletter and stay up to date.
          </h1>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full justify-center rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our
            <span className="text-slate-600"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
