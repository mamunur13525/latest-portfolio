import Link from "next/link";
import TitleEffect from "../TitleEffect";
import TagCanvas from "../ui/TagCanvas";

const Skills = () => {
  return (
    <div className="home_page_main skill">
      <div className="left_side">
        {/* <div className="body_tag top">
          <p className="body_text">&lt;html&gt;</p>

          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;body&gt;</p>
        </div> */}
        {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
        <div className="skill_title">
          <div className="flex">
            <TitleEffect
              h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
              title="Experiences"
            />
            <TitleEffect
              h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
              title="&"
            />
          </div>
          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title="Skills"
          />
        </div>

        <div className="about_text text-white font-popping">
          Expert in front-end development including technologies like
          <div className="mb-4 font-popping">
            <span className="skill_name">HTML5 ,</span>
            <span className="skill_name">CSS3 ,</span>
            <span className="skill_name">Javascript ,</span>
            <span className="skill_name">JQuery ,</span>
            <span className="skill_name">React ,</span>
            <span className="skill_name">TypeScript ,</span>
            <span className="skill_name">Angular ,</span>
            <span className="skill_name">Bootstarp ,</span>
            <span className="skill_name">Sass ,</span>
            <span className="skill_name">Git ,</span> etc.
          </div>
          <p className="about_text">
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts. I also have full-stack developer experience with popular
            open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
            others) .
          </p>
          <p className="mt-3">
            Visit my{" "}
            <Link
              className="hover:text-[#0a58ca] text-[#f1c40f] underline"
              href="https://www.linkedin.com/in/mamunahmed13525"
              target="_blank"
            >
              LinkedIn
            </Link>{" "}
            profile for more details or just contact me.
          </p>
        </div>
        {/* <div className="body_tag bottom">
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_text">&lt;/html&gt;</p>
        </div> */}
      </div>
      <div className="right_side">
        <div className="tag_canvus_">
          <TagCanvas />
        </div>
      </div>
    </div>
  );
};

export default Skills;
