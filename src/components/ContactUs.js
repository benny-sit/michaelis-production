import { CONTACT_US_TITLE } from "@/content";
import React from "react";

function ContactUs() {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData);
  }

  return (
    <section
      aria-labelledby=""
      className="bg-m-blue w-full text-m-white font-bold"
      id="contact-us"
    >
      <div className="mx-auto px-4 max-w-container w-full my-24">
        <h4 className="text-[40px] tracking-wider relative mb-8">
          {CONTACT_US_TITLE}
          <span className="absolute h-[2px] w-[217px] bg-m-turquoise left-0 -bottom-1"></span>
        </h4>
        <form
          className="flex flex-col gap-5"
          target="_blank"
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_TO_SEND_FORM}`}
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/thankyou`}
          />
          <div className="flex gap-5 lg:flex-row flex-col">
            <div className="lg:basis-1/2">
              <h5 className="opacity-50">Personal Information</h5>
              <div className="grid sm:grid-cols-2 gap-3 px-5 py-7 bg-m-lightBlue rounded-xl">
                <input
                  type="text"
                  name="first-name"
                  className="input-default"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="last-name"
                  className="input-default"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="input-default"
                  placeholder="Email"
                  required
                />
                <input
                  type="tel"
                  name="phone-number"
                  className="input-default"
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="text"
                  name="country"
                  className="input-default"
                  placeholder="Country"
                  required
                />
              </div>
            </div>
            <div className="lg:basis-1/2">
              <h5 className="opacity-50">Film Details</h5>
              <div className="grid sm:grid-cols-2 gap-3 px-5 py-7 bg-m-lightBlue rounded-xl">
                <div className="relative w-full">
                  <input
                    type="number"
                    name="budget"
                    className="input-default w-full pr-5"
                    placeholder="Budget"
                    min={1}
                    required
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 right-3 text-white/40">
                    $
                  </span>
                </div>
                <div className="w-full relative">
                  <label
                    htmlFor="deadline"
                    className="absolute top-0 -translate-y-1/2 text-xs text-white/50 left-2"
                  >
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    className="input-default w-full"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <textarea
                  name="description"
                  className="input-default"
                  placeholder="Description"
                  rows={5}
                  required
                ></textarea>
                <textarea
                  name="screenplay"
                  className="input-default"
                  placeholder="Screenplay"
                  rows={5}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full max-w-[220px] py-3 bg-m-turquoise text-m-white rounded-lg uppercase text-xl self-end active:bg-[#4CACB4] active:text-white hover:outline hover:outline-m-lightBlue"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
