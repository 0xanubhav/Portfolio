"use client";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:bajpaianubhav560@gmail.com?subject= ${formData.subject} &body=Hi,my name is ${formData.name}:${formData.message} [${formData.email}]`);

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
     
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold font-sans text-center p-2">
          I have got what you need.
          <h4 className="text-orange-400">Let&apos;s talk</h4>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            {/* <PhoneIcon className="text-[#f7ab0a] w-7 h-7 animate-pulse" />
            <p>+91-6392787858</p> */}
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] w-7 h-7 animate-pulse" />
            <p>bajpaianubhav560@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] w-7 h-7 animate-pulse" />
            <p>Buddheshwar,Lucknow-226017</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#f7ab0a] text-black px-10 py-5 rounded-md font-sans font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
