import { FooterLink } from "../Constants";

const Footer = () => {
  return (
    <>
      <section className="w-full tracking-wide flex justify-around bg-slate-900 text-white p-14 fontSize-base max-lg:flex-col ">
        <div>
          <h3 className="text-lg pb-4 text-white font-bold">Contact Info</h3>
          <ul>
            {FooterLink.filter((item, index) => index <= 1).map((item) => (
              <li key={item.linkContext}>
                <a href={item.linkContext}>{item.linkName}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg pb-4 text-white font-bold">Social Media</h3>
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
          <h3 className="text-lg pb-4 text-white font-bold">
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
