import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="fixed bottom-5 right-3 flex flex-col gap-4 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(17,81,115,1)_50%,rgba(255,255,255,0)_100%)] px-1.5 py-16 justify-center">
      <Link
        href="https://github.com/mamunur13525"
        target="_blank"
        rel="noreferrer"
      >
        <Github
          className="text-[#04fde8] hover:text-[#fd3247] duration-300 cursor-pointer"
          size={16}
        />
      </Link>
      <Link
        rel="noreferrer"
        href="https://linkedin.com/in/mamunahmed13525/"
        target="_blank"
      >
        <Linkedin
          className="text-[#04fde8] hover:text-[#fd3247] duration-300 cursor-pointer"
          size={16}
        />
      </Link>

      <Link rel="noreferrer" target="_blank" href="https://x.com/Mamun13525">
        <Twitter
          className="text-[#04fde8] hover:text-[#fd3247] duration-300 cursor-pointer"
          size={16}
        />
      </Link>

      <Link href="">
        <Youtube
          className="text-[#04fde8] hover:text-[#fd3247] duration-300 cursor-pointer"
          size={16}
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
