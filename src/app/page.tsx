import { SendHorizontal } from "lucide-react";
import Button from "./components/ui/Button";
import images from "./Assets/ImagesUrls";
import TitleEffect from "./components/TitleEffect";

export default function Home() {
  return (
    <section className="w-full min-h-screen h-screen flex justify-evenly items-center bg-[#022c43] overflow-y-auto px-[5%] py-0">
      <div className="left_side">
        <TitleEffect className="mb-2" h1="" title="Hi," />
        <div className="flex">
          <TitleEffect h1="" title="I'm" />
          <TitleEffect h1="" title="Mamun" />
          <TitleEffect h1="" title="Ahmed," />
        </div>
        <div className="flex">
          <TitleEffect h1="" title="Web" />
          <TitleEffect h1="" title="developer" />
        </div>
        <p
          className="text-[gray] tracking-[3px] text-base mt-[1.1rem];
  font-family: Arial, Helvetica, sans-serif; my-5"
        >
          Front End Developer / Javascript Expert / Freelancer
        </p>
        <Button className="mt-2 flex items-center gap-2 group">
          <span className="text"> contact me</span>{" "}
          <SendHorizontal
            className="btn_icon group-hover:fill-black"
            size={16}
          />
        </Button>
      </div>
      <div className="right_side">
        <div className="right_side_logo">
          <img className="" src={images.logo} alt="logo" />
        </div>
      </div>
    </section>
  );
}
