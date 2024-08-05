import React, { FC, memo, useCallback, useMemo, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo<FormData>(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    []
  );

  const [, setData] = useState<FormData>(defaultData);
  const [result, setResult] = useState<string>("");

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;
      setData(prevData => ({ ...prevData, [name]: value }));
    },
    []
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.currentTarget);

      formData.append("access_key", process.env.APP_API_KEY || "");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          if (event.currentTarget) {
            event.currentTarget.reset();
          }
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form", error);
        setResult("There was an error submitting the form.");
      }
    },
    []
  );

  const inputClasses = 'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="px-4 py-2 text-sm font-medium text-white border-2 border-orange-600 rounded-full shadow-md outline-none w-max bg-stone-900 hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
      >
        Send Message
      </button>
      {result && <p>{result}</p>}
    </form>
  );
});

export default ContactForm;
