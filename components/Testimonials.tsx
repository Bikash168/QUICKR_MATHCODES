// components/Testimonials.tsx
import React from "react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 px-6 md:px-16 bg-black text-center text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[color:#e9c49a]">
        What Learners Say
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <p className="text-gray-300 italic">
            &quot;Before joining, I struggled with trigonometry. Now, I can solve complex problems in minutes!&quot;
          </p>
          <p className="mt-4 font-semibold text-[color:#e9c49a]">
            – Rohan, Class 11
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <p className="text-gray-300 italic">
            &quot;This app makes math interesting. I love how interactive the classes are.&quot;
          </p>
          <p className="mt-4 font-semibold text-[color:#e9c49a]">
            – Meera, Class 9
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-12">
        <a
          href="#"
          className="inline-block px-8 py-4 bg-[color:#e9c49a] text-black text-lg rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
          📲 Start Learning Today – Download the app now &amp; book your first free session!
        </a>
      </div>
    </section>
  );
}
