import Link from "next/link";

import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex w-full justify-center bg-light/50 px-4 py-6 sm:px-6">
      <div className="flex w-full max-w-[1000px] justify-evenly gap-10 sm:justify-end">
        <Link
          href="https://github.com/TomasCuevas"
          target="_blank"
          className="group flex w-5 items-center"
        >
          <FaGithub className="h-full w-full text-purple/60 duration-300 hover:text-purple" />
        </Link>
        <Link
          href="https://twitter.com/TomasC0D1NG"
          target="_blank"
          className="flex w-5 items-center"
        >
          <FaTwitter className="h-full w-full text-purple/60 duration-300 hover:text-purple" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
          target="_blank"
          className="flex w-5 items-center"
        >
          <FaLinkedinIn className="h-full w-full text-purple/60 duration-300 hover:text-purple" />
        </Link>
      </div>
    </footer>
  );
};
