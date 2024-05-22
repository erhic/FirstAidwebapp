import { FooterLink } from "../Constants";

const Footer = () => {
  return (
    <>
      <section>
        <h3>Contact Info</h3>
        <ul>
          {FooterLink.filter((item, index) => index <= 1).map((item) => (
            <li key={item.linkContext}>
              <a href={item.linkContext}>{item.linkName}</a>
            </li>
          ))}
        </ul>

        <h3>Social Media</h3>
        <ul>
          {FooterLink.filter((item, index) => index < 5 && index > 1).map(
            (item) => (
              <li key={item.linkContext}>
                <a href={item.linkContext}>{item.linkName}</a>
              </li>
            )
          )}
        </ul>
        <h3>Additional Links</h3>
        <ul>
          {FooterLink.filter((item, index) => index > 4).map((item) => (
            <li key={item.linkContext}>
              <a href={item.linkContext}>{item.linkName}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Footer;
