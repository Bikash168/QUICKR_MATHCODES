// ContactSection.tsx
"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
  id="contact"
  className="w-full py-24 px-6 md:px-16 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 text-white"
>

      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Contact Us
      </h2>
      <p className="text-center mb-12 text-gray-200 max-w-2xl mx-auto">
        Have questions or want to work with us? Fill out the form or visit our office.
        We’d love to hear from you!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info + Form */}
        <div className="flex flex-col justify-between bg-emerald-800 bg-opacity-30 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-lime-400" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-300">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-lime-400" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-300">contact@yourdomain.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-lime-400" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm text-gray-300">123 Green Street, Bhubaneswar, Odisha</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 h-32 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1466901744744!2d85.8317!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d5f95e7d7f%3A0x9ff282b49b8b6cf6!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1617366233071!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
