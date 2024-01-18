"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

interface IForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initForm: IForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Contact = () => {
  const router = useRouter();
  const [form, setForm] = React.useState<IForm>(initForm);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, email, phone, message } = form;
    if (name && email && phone && message) {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.status === 200) {
        toast.success("Message sent successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setForm(initForm);
        await delay(1500);
        router.push("/");
      } else {
        toast.error("Something went wrong! Please try again later", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Please fill all the fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div
      id="contact"
      className="bg-[#121212] bg-[url('/assets/red_network.png')] bg-blend-lighten bg-no-repeat bg-center bg-cover"
    >
      <div className="h-full bg-gradient-to-b from-[#000_0%] via-[rgba(0,0,0,0)_51.35%] to-[#000_100%]">
        <div className="py-20 flex flex-col">
          <div className="flex flex-col gap-3 items-center justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
              Connect with us
            </span>
            <div className="w-3/4 lg:w-[20%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
          </div>
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 pt-20 px-6">
            <div className="flex flex-col items-center lg:items-end justify-start gap-9 h-full">
              <textarea
                rows={1}
                className="w-full md:w-3/4 xl:w-1/2 text-lg bg-transparent resize-none border-[#ff2d34] text-white py-2 px-3 border-2 border-gradient-b-primary"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <textarea
                rows={1}
                className="w-full md:w-3/4 xl:w-1/2 text-lg bg-transparent border-[#ff2d34] resize-none text-white py-2 px-3 border-2 border-gradient-b-primary"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                rows={1}
                className="w-full md:w-3/4 xl:w-1/2 text-lg bg-transparent border-[#ff2d34] resize-none text-white py-2 px-3 border-2 border-gradient-b-primary"
                placeholder="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mt-0 h-full flex flex-col items-center lg:items-start">
              <textarea
                rows={7}
                className="text-lg bg-transparent text-white pt-3 border-[#ff2d34] px-5 resize-none w-full md:w-3/4 xl:w-1/2 border-2 border-gradient-b-primary"
                value={form.message}
                placeholder="Message"
                name="message"
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="text-lg bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34] uppercase w-1/2 md:w-1/4 lg:w-1/6 xl:w-[10%] self-center py-2 mt-20 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
