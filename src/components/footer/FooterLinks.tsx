import { footerLinks } from "utils/data";

interface FooterLinksProps {}

const FooterLinks: React.FC<FooterLinksProps> = ({}) => {
  return (
    <div className="p-12 grid grid-cols-4">
      {footerLinks.map((link) => (
        <div key={link.title}>
          <h6 className="mb-2 whitespace-nowrap">{link.title}</h6>
          <ul>
            {link.list.map((item, index) => (
              <li
                key={index}
                className="mb-2 text-sm opacity-60 text-[#1a1a2c]
                transition-all duration-200 whitespace-nowrap
                hover:opacity-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
