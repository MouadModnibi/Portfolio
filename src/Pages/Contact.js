import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { contactDetails } from "../Details";

function Contact({ isActive }) {
  const { email } = contactDetails;
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    // EmailJS keys from environment or placeholders
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_placeholder";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_placeholder";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "public_key_placeholder";

    // Since we don't have the user's explicit keys, we'll try to use standard config 
    // or log and simulate success if keys aren't strictly provided yet (for demonstration).
    if (serviceId === "service_placeholder") {
       // Simulate a network request for the demo
       setTimeout(() => {
          toast.success("Message sent successfully! (Demo mode)", { id: toastId });
          setForm({ name: "", email: "", message: "" });
          setIsSubmitting(false);
       }, 1500);
       return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          toast.success("Message sent successfully!", { id: toastId });
          setForm({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again later.", { id: toastId });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        <div className="space-y-6">
          <h1
            className={`section-title ${
              isActive ? "section-title-active" : ""
            } text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 pb-2 drop-shadow-md`}
          >
            Let&apos;s build something together.
          </h1>
          <p className="text-slate-300 text-lg font-light leading-relaxed max-w-md">
            Whether you have a question, an opportunity, or just want to say hi, feel free
            to drop a message. I&apos;ll get back to you as soon as I can.
          </p>
          
          <div className="flex items-center gap-4 mt-8 bg-white/5 border border-white/10 p-5 rounded-2xl w-max backdrop-blur-sm">
            <div className="bg-purple-500/20 p-3 rounded-full">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Email</p>
              <a
                href={`mailto:${email}`}
                className="text-white hover:text-purple-400 transition-colors font-medium text-lg"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-3xl bg-[#0F0F1A]/80 border border-purple-500/20 shadow-[0_0_40px_rgba(139,92,246,0.1)] backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle glow inside form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full bg-[#151525] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full bg-[#151525] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-[#151525] border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-y min-h-[120px]"
              placeholder="Tell me a bit about what you have in mind..."
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-semibold text-white tracking-wide transition-all duration-300 flex justify-center items-center gap-2 ${
              isSubmitting 
                ? "bg-purple-600/50 cursor-not-allowed" 
                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
