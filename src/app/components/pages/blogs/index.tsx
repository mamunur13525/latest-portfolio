import TitleEffect from "../../TitleEffect";
import Image from "next/image";
import images from "@/app/Assets/ImagesUrls";

const tipsItems = [
  {
    id: 0,
    name: "Javascript",
    icon: images.js,
  },
  {
    id: 1,
    name: "Typescript",
    icon: images.ts,
  },
  {
    id: 2,
    name: "React",
    icon: images.react,
  },
  {
    id: 3,
    name: "CSS",
    icon: images.css,
  },
  {
    id: 4,
    name: "Redux",
    icon: images.redux,
  },
  {
    id: 5,
    name: "MongoDB",
    icon: images.mongodb,
  },
];

const Blogs = () => {
  return (
    <div className="home_page_main tips">
      <div className="home_main_text pt-24 w-full">
        {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
        <div className="flex">
          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title="Frontend"
          />
          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title="Tips"
          />
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-5">
          {tipsItems.map((tip) => (
            <div
              key={tip.id}
              className="flex gap-2.5 flex-col items-center justify-center text-[white] w-[150px] h-[170px] cursor-pointer rounded-sm bg-[rgba(85,85,85,0.297)] text-center m-0 group "
            >
              <div className="w-[100px] aspect-4/4 overflow-hidden">
                <Image
                  className="w-full h-full object-center"
                  src={tip.icon}
                  alt="js"
                />
              </div>
              <p>{tip.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
