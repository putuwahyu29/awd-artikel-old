import config from "@config/config.json";
import menu from "@config/menu.json";
import ImageFallback from "@layouts/components/ImageFallback";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  return (
    <footer className="section relative mt-12 bg-slate-100 pb-[50px] pt-[70px] dark:bg-dark">
      {/* <ImageFallback
        className="-z-[1] object-cover object-left  md:object-top"
        src="/images/footer-bg-shape.svg"
        alt="footer background"
        fill={true}
      /> */}
      <div className="container text-center">
        <div className="mb-6 inline-flex">
          <Logo />
        </div>
        {markdownify(footer_content, "p", "max-w-[638px] mx-auto")}

        {/* footer menu */}
        <ul className="mb-12 mt-6 flex-wrap space-x-2 lg:space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link
                href={menu.url}
                className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <li className="inline-block">
            <a
              href="/sitemap.xml"
              className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
              target="_blank"
            >
              Peta Situs
            </a>
          </li>
          <li className="inline-block">
            <a
              href="/rss.xml"
              className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
              target="_blank"
            >
              Umpan RSS
            </a>
          </li>
        </ul>
        {/* copyright */}
        {markdownify(
          `Copyright &copy; 2023 - ${new Date().getFullYear()} ${copyright}`,
          "p"
        )}
      </div>
    </footer>
  );
};

export default Footer;
