import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    { id: 1, icon: <FaFacebook size={36} />, link: "/" },
    { id: 2, icon: <InstagramIcon size={36} />, link: "/" },
    { id: 3, icon: <FaXTwitter size={36} />, link: "/" },
    { id: 4, icon: <FaYoutube size={46} />, link: "/" },
  ];
  const footerLinks = [
    {
      title: "About Nintendo",
      links: ["Careers", "Corporate Social Responsibility"],
    },
    {
      title: "Shop",
      links: [
        "Games",
        "Hardware",
        "Merchandise",
        "Sales & deals",
        "Exclusives",
        "Nintendo Switch Online",
        "Nintendo Store US",
      ],
    },
    {
      title: "Orders",
      links: ["Order details", "Shipping info", "Refunds and returns", "FAQ"],
    },
    {
      title: "Support",
      links: [
        "Nintendo Switch",
        "Nintendo Account",
        "Other systems",
        "Repairs",
        "Nintendo product recycling",
        "Warranty",
        "Licensed product information",
      ],
    },
    {
      title: "",
      links: ["", ""],
    },
    {
      title: "Privacy",
      links: ["Privacy policy", "Cookies and interest-based ads"],
    },
    {
      title: "Community",
      links: ["Community guidelines", "Online safety"],
    },
    {
      title: "Documents & policies",
      links: [
        "Health & safety precautions",
        "Wireless regulatory info",
        "Supply chain transparency",
      ],
    },
  ];

  return (
    <div>
      <div className="bg-primary py-10">
        <h1 className="text-3xl text-white rounded-3xl px-4 mx-auto w-max font-bold border-4 border-white">
          Nintendo
        </h1>
      </div>

      <div className="p-6 bg-white text-textColor">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 border-t pt-10">
          {footerLinks.map((section, index) => (
            <div
              key={index}
              className="space-y-3 border-r last:border-r-0 pr-4"
            >
              <h4 className="font-semibold text-lg text-gray-800">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-red-600 hover:underline transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="mt-8 flex flex-wrap items-center justify-start gap-6">
            {socials.map((item) => (
              <Link href={item.link} key={item.id}>
                <span className="hover:text-red-600 transition-colors">
                  {item.icon}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-2 md:mt-0 relative w-[70px] h-[90px] ">
            <Image src={"/images/certified.png"} fill alt="Certified" />
          </div>
        </div>
      </div>

      <div className="py-6 px-4 text-xs text-white bg-[#242424]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <p className="flex-1">
            Â© Nintendo. Games are property of their respective owners. Nintendo
            of America Inc. Headquarters are in Redmond, Washington, USA
          </p>
          <div className="flex flex-wrap gap-4 text-nowrap items-center">
            <p>Contact us</p>
            <p>Website feedback</p>
            <p>Terms of Use</p>
            <div className="flex items-center gap-1">
              <Image src="/images/en.png" width={28} height={28} alt="EN" />
              <p>English (United States)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
