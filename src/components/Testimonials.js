import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <div className="p-10">
          <h1 className="text-3xl font-bold mb-5">Testimonials</h1>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 bg-white rounded shadow">
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-xl font-semibold">{testimonial.name}</p>
                    <p className="text-gray-700">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
