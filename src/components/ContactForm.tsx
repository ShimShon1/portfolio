import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="text-2xl">Thank you for your time!</div>
        <div className="text-xl">I will reply shortly 😀 </div>
      </div>
    );
  }

  return (
    <form
      className="space-y-4  p-4 text-lg  "
      action={
        "https://public.herotofu.com/v1/0590e270-d48a-11ed-a62e-917cebf1b719"
      }
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="space-y-4  ">
        <div className="">
          <input
            className="h-10 w-full rounded-sm border border-sky-800 indent-2 focus:outline-none"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div className="">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="h-10 w-full rounded-sm border border-sky-800 indent-2 focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="">
        <textarea
          placeholder="Your message"
          name="message"
          rows={6}
          className="w-full rounded-md border border-sky-800 indent-2 focus:outline-none"
          required
        />
      </div>
      <div className="">
        <button
          className="rounded-md bg-sky-700 px-3 py-1.5 text-gray-50 hover:bg-sky-800 active:bg-sky-400"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
}
