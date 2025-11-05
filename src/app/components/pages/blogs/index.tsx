import TitleEffect from "../../TitleEffect";
import Image from "next/image";
import images from "@/app/Assets/ImagesUrls";

const blogsItems = [
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
    <div>
      <div className="home_main_text pt-24 w-full">
        {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
        <div className="flex">
          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title="Frontend"
          />
          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title="Blogs"
          />
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-5">
          {blogsItems.map((blog) => (
            <div
              key={blog.id}
              className="flex gap-2.5 flex-col items-center justify-center text-[white] w-[150px] h-[170px] cursor-pointer rounded-sm bg-[rgba(85,85,85,0.297)] text-center m-0 group"
            >
              <div className="w-[100px] aspect-4/4 overflow-hidden group-hover:scale-120 transition-all duration-300">
                <Image
                  className="w-full h-full object-center"
                  src={blog.icon}
                  alt="js"
                />
              </div>
              <p>{blog.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
