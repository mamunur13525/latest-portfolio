import { Send } from "lucide-react";
import React, { useState } from "react";
import Button from "../../ui/Button";

type InputFieldProps =
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & { type: "textarea" })
  | (React.InputHTMLAttributes<HTMLInputElement> & { type: "text" | "email" | "input" });

const InputField: React.FC<InputFieldProps> = ({ type, ...rest }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const hasValue = value.trim().length > 0;

  return (
    <div
      className={`relative w-full pb-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-[#ffa500] after:transition-all after:duration-300 ${
        focused || hasValue ? "after:w-full" : "after:w-0"
      }`}
    >
      {type === "textarea" ? (
        <textarea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full h-36 bg-transparent outline-none border-none resize-none input_form ${rest.className || ""}`}
        />
      ) : (
        <input
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent outline-none border-none input_form ${rest.className || ""}`}
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3 mt-5">
      <div className="flex items-center gap-3">
        <div className="w-full">
          <InputField
            type="text"
            placeholder="Name"
            name="to_name"
            id="nameField"
            required
          />
        </div>
        <div className="w-full">
          <InputField
            type="email"
            placeholder="Email"
            name="from_name"
            id="emailField"
            required
          />
        </div>
      </div>

      <div className="w-full">
        <InputField
          type="text"
          name="subject"
          placeholder="Subject"
          id="subjectField"
          required
        />
      </div>

      <div className="span_input">
        <InputField
          type="textarea"
          placeholder="Message"
          name="message"
          id="textarea"
          required
        />
      </div>

      <div className="flex justify-center ">
        <Button>
          <span className="text">Send</span> <Send className="btn_icon" />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
