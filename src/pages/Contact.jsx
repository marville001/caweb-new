import React, { useState } from "react";

import { useForm } from "react-hook-form";
import parseError from "../utils/parseError"

import {FaSpinner} from "react-icons/fa"

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
  } = useForm();
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

    const handleContactSubmit = (data) => {
      console.log(data);
      setError("")
      setSuccess("")
      setLoading(true)
      
      try {
        
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(parseError(error))
        
      }
    };

    return (
        <div className="container px-1 sm:px-5 py-14">
            <h1 className="text-3xl md:text-4xl text-center text-dodge-blue font-bold">
                Contact Us
            </h1>
            <p className="py-10 max-w-lg text-center mx-auto">
                To receive an email response, please use the form below. Fill in
                any query you have about DEKUTCC or any feedback. You will get
                feedback within some few hours if not minutes.
            </p>

            <form
                onSubmit={handleSubmit(handleContactSubmit)}
                className="bg-white p-2 sm:p-4 md:p-8 max-w-3xl mx-auto"
            >
                <div className="md:flex md:gap-2">
                    <div className="form-group my-4 flex-1">
                        <label>Firstname</label>
                        <input
                            type="text"
                            className={`p-3 block border-slate-200 border-2 w-full mt-2 ${
                                errors.firstname &&
                                "border-red-300 placeholder:text-red-300"
                            }`}
                            placeholder="Firstname..."
                            {...register("firstname", {
                                required: {
                                    value: true,
                                    message: "Firstname is required",
                                },
                            })}
                        />
                        {errors?.firstname && (
                            <p className="text-red-300 text-sm mt-1 mb-4">
                                {errors?.firstname?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-group my-4 flex-1">
                        <label>Lastname</label>
                        <input
                            type="text"
                            className={`p-3 block border-slate-200 border-2 w-full mt-2 ${
                                errors.lastname &&
                                "border-red-300 placeholder:text-red-300"
                            }`}
                            placeholder="Lastname"
                            {...register("lastname", {
                                required: {
                                    value: true,
                                    message: "Lastname is required",
                                },
                            })}
                        />
                        {errors?.lastname && (
                            <p className="text-red-300 text-sm mt-1 mb-4">
                                {errors?.lastname?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="md:flex md:gap-2">
                    <div className="form-group my-2 flex-1">
                        <label>Email</label>
                        <input
                            type="email"
                            className={`p-3 block border-slate-200 border-2 w-full mt-2 ${
                                errors.email &&
                                "border-red-300 placeholder:text-red-300"
                            }`}
                            placeholder="Enter your email..."
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                            })}
                        />
                        {errors?.email && (
                            <p className="text-red-300 text-sm mt-1 mb-4">
                                {errors?.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-group my-2 flex-1">
                        <label>Subject</label>
                        <input
                            type="text"
                            className={`p-3 block border-slate-200 border-2 w-full mt-2 ${
                                errors.subject &&
                                "border-red-300 placeholder:text-red-300"
                            }`}
                            placeholder="Subject"
                            {...register("subject", {
                                required: {
                                    value: true,
                                    message: "Subject is required",
                                },
                            })}
                        />
                        {errors?.subject && (
                            <p className="text-red-300 text-sm mt-1 mb-4">
                                {errors?.subject?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="form-group my-2 flex-1">
                    <label>Message</label>
                    <textarea
                        type="text"
                        rows="5"
                        className={`p-3 block border-slate-200 border-2 w-full mt-2 ${
                            errors.message &&
                            "border-red-300 placeholder:text-red-300"
                        }`}
                        placeholder="Message"
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Message is required",
                            },
                        })}
                    ></textarea>
                    {errors?.message && (
                        <p className="text-red-300 text-sm mt-1 mb-4">
                            {errors?.message?.message}
                        </p>
                    )}
                </div>

                <button disabled={loading} className="w-full p-2 mt-5 text-white text-center text-lg uppercase flex justify-center bg-dodge-blue cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
                   {loading ? <FaSpinner className="animate-spin text-xl" /> : "SUBMIT"} 
                </button>
            </form>
        </div>
    );
};

export default Contact;
