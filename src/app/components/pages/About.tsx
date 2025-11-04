import TitleEffect from "../TitleEffect";

const About = () => {
  return (
    <div className="w-full min-h-screen h-screen flex justify-evenly items-center bg-[#022c43] overflow-y-auto px-[5%] py-0 about">
      <div className="left_side">
        {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
        <TitleEffect
          h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
          title="About"
        />
        <div className="flex flex-col gap-3 mt-8 font-popping">
          <p className="about_text">
            I’m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p className="about_text">
            I&apos;m quietly confident, naturally curious, and perpetually
            working on improving my chops one design problem at a time.
          </p>
          <p className="about_text">
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
      </div>
      <div className="right_side">
        {/* <Particale />
        <BoxRotate /> */}
      </div>
    </div>
  );
};

export default About;
