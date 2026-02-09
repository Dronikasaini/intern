import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.placeholder.toLowerCase()]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://internback-vmca.onrender.com/post", form);
      console.log(res.data);
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-20">

        {/* ================= LEFT ================= */}
        <div className="md:w-[45%] text-black">
          <h2 className="abc font-medium text-[42px] leading-[58.8px]">
            Let’s Talk
          </h2>

          <p className="mt-4 abc text-[18px] leading-[25.2px] max-w-[480px]">
            Get in touch for collaborations, business inquiries, or project discussions.
            I’m always open to meaningful conversations that lead to impactful results.
          </p>

          <hr className="my-6 border-t-1 border-gray-300" />

          <div className="abc text-[18px]">
            <p>Email: yourname@example.com</p>
            <p>Phone: +91 99999 99999</p>
          </div>

          {/* Social */}
          <div className="mt-8">
            <p className="mb-3 font-bold text-[18px] abc">Social Links:</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer">
                <FaInstagram size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer">
                <FaLinkedinIn size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer">
                <FaTwitter size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="md:w-[45%] abc flex justify-center sm:sm:justify-end sm:ml-[50px]">
          <form
            className="w-full max-w-[507px] flex flex-col gap-3 p-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full h-[50px] p-[10px] bg-[#F2F2F2] text-[16px]"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full h-[50px] p-[10px] bg-[#F2F2F2] text-[16px]"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full h-[50px] p-[10px] bg-[#F2F2F2] text-[16px]"
              required
            />

            <textarea
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full h-[140px] p-[10px] bg-[#F2F2F2] resize-none text-[16px]"
              required
            />

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="w-[158px] h-[45px] abc bg-[#2200FF] text-white font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Form;
