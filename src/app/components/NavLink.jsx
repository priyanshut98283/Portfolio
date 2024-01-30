import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white hover:text-black sm:text-xl rounded md:p-0 dark:hover:text-slate-400"
    >
      {title}
    </Link>
  );
};

export default NavLink;
