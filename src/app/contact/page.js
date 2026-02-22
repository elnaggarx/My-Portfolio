import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="h-screen mt-30 w-full flex justify-between items-center px-8">
        <div className="flex items-start justify-between gap-10">
          <div className="flex-1">
            <h1 className="font-[bomstad-bold] text-8xl">
              Ready to work together?
            </h1>
            <p className="font-[bomstad-regular] text-2xl mt-10">
              Tell us a bit about your company, your goals, and how we can help.
              I’ll take care of the rest.
            </p>
          </div>
          <div className="flex-1">
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-sm font-[bomstad-regular] text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f1a22] focus:border-transparent transition duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-[bomstad-regular] text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f1a22] focus:border-transparent transition duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-[bomstad-regular] text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f1a22] focus:border-transparent transition duration-200"
                  placeholder="Your phone number"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-[bomstad-regular] text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f1a22] focus:border-transparent transition duration-200"
                  placeholder="Your company"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-[bomstad-regular] text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f1a22] focus:border-transparent transition duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0f1a22] hover:bg-[#1a2a38] text-white font-[bomstad-bold] py-3 px-6 rounded-lg transition duration-200 mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
