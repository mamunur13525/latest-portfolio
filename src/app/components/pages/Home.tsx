import { SendHorizontal } from "lucide-react";
import Image from "next/image";
import BlurryNavBar from "../Navbar/Navbar";
import TitleEffect from "../TitleEffect";
import Button from "../ui/Button";
import images from "@/app/Assets/ImagesUrls";

const Home = () => {
  return (
    <section className="w-full min-h-screen h-screen flex justify-evenly items-center bg-[#022c43] overflow-y-auto px-[5%] py-0">
      <BlurryNavBar />
      <div className="w-1/2">
        <TitleEffect className="mb-2" h1="" title="Hi," />
        <div className="flex gap-3">
          <TitleEffect h1="" title="I'm" />
          <TitleEffect h1="" title="Mamun" />
          <TitleEffect h1="" title="Ahmed," />
        </div>
        <div className="flex gap-3">
          <TitleEffect h1="" title="Web" />
          <TitleEffect h1="" title="developer" />
        </div>
        <p
          className="text-[gray] tracking-[3px] text-base mt-[1.1rem];
  font-family: Arial, Helvetica, sans-serif; my-5"
        >
          Full Stack Developer / Javascript Expert / Freelancer
        </p>
        <Button className="mt-2 flex items-center gap-2 group">
          <span className="tracking-widest"> contact me</span> <SendHorizontal size={16} />
        </Button>
      </div>
      <div className="w-1/2">
        <div className="right_side_logo">
          <Image
            className="w-full h-full"
            src={images.logo}
            alt="logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
