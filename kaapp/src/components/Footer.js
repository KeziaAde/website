import {
  IoMailOutline,
  IoCallOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const socialLinks = [
  {
    id: "mail",
    icon: <IoMailOutline />,
    url: "keziaadesanya@gmail.com",
  },
  {
    id: "phone",
    icon: <IoCallOutline />,
    url: "+4917643352544",
  },
  {
    id: 1,
    icon: <IoLogoGithub />,
    url: "https://github.com/KeziaAde?tab=repositories",
  },
  {
    id: 2,
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/keziaadesanya/",
  },
];

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <p>&copy; 2024</p>
        <ul className="footerList">
          {socialLinks.map((link) => {
            let hrefValue;
            if (link.id === "mail") {
              hrefValue = `mailto:${link.url}`;
            } else if (link.id === "phone") {
              hrefValue = `tel:${link.url}`;
            } else {
              hrefValue = link.url;
            }

            return (
              <li key={link.id}>
                <a href={hrefValue} target="__blank">
                  <i className="footerIcon">{link.icon}</i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
