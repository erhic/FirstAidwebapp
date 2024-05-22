import { FooterLink } from "../Constants";

const Footer = () => {
  return (
    <>
      <section className="w-full flex justify-around bg-slate-100 p-14 fontSize-base max-lg:flex-col ">
        <div>
          <h3 className="text-lg pb-4 text-black font-bold">Contact Info</h3>
          <ul>
            {FooterLink.filter((item, index) => index <= 1).map((item) => (
              <li key={item.linkContext}>
                <a href={item.linkContext}>{item.linkName}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg pb-4 text-black font-bold">Social Media</h3>
          <ul>
            {FooterLink.filter((item, index) => index < 5 && index > 1).map(
              (item) => (
                <li key={item.linkContext}>
                  <a href={item.linkContext}>{item.linkName}</a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-lg pb-4 text-black font-bold">
            Additional Links
          </h3>
          <ul>
            {FooterLink.filter((item, index) => index > 4).map((item) => (
              <li key={item.linkContext}>
                <a href={item.linkContext}>{item.linkName}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
