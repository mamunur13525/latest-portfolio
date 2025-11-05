"use client";

import TitleEffect from "../../TitleEffect";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="contact ">
      <div className="flex gap-4">
        <TitleEffect className="mb-2" h1="" title="Contact" />
        <TitleEffect className="mb-2" h1="" title="Me" />
      </div>
      <p className="text-white font-popping">
        I am interested in freelance opportunities – especially ambitious or
        large projects. However, if you have other request or question, don’t
        hesitate to contact me using below form either.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
