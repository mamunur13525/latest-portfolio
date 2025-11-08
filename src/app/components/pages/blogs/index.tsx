import TitleEffect from "../../TitleEffect";
import Image from "next/image";
import blogs from "@/app/data/blogs";
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <div className="home_main_text pt-24 w-full">
        <div className="flex flex-wrap items-baseline gap-3">
          <TitleEffect h1={<span className="body_text ml-3">&lt;/h1&gt;</span>} title="Frontend" />
          <TitleEffect h1={<span className="body_text ml-3">&lt;/h1&gt;</span>} title="Blogs" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
              <div className="flex gap-2.5 flex-col items-center justify-center text-[white] w-full h-[170px] cursor-pointer rounded-md bg-[rgba(85,85,85,0.14)] text-center p-4 transition-transform hover:-translate-y-1">
                <div className="w-[80px] h-[80px] overflow-hidden rounded-md">
                  <Image className="w-full h-full object-contain" src={blog.icon} alt={blog.name} />
                </div>
                <p className="mt-2">{blog.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
