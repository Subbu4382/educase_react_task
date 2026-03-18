import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  email: z.email("Invalid Email"),
  password: z.string().min(6, "Password must be minimum 6 characters"),
  company: z.string().optional(),
  isAgency: z.enum(["yes", "no"], {
    errorMap: () => ({ message: "Select an option" }),
  }),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Marry Doe",
      phone: "9876543210",
      email: "MarryDoe@gmail.com",
      password: "123456",
      company: "Marry Doe",
      isAgency: "yes",
    },
  });

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/profile");
  };

  return (
    <div className="px-6 py-2">
      <h1 className="text-3xl font-bold mb-6">
        Create your <br />
        PopX account
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="border border-gray-300 rounded-lg px-3 pb-2">
          <legend className="text-sm text-[#6C25FF] px-1">
            Full Name <span className="text-orange-600">*</span>
          </legend>
          <input
            {...register("name")}
            className="w-full bg-gray-50 outline-none focus:outline-none focus:ring-0 border-none"
          />
          <p className="text-red-500 text-xs">{errors.name?.message}</p>
        </fieldset>

        <fieldset className="border border-gray-300  rounded-lg px-3 pb-2">
          <legend className="text-sm text-[#6C25FF] px-1">
            Phone number <span className="text-orange-600">*</span>
          </legend>
          <input
            {...register("phone")}
            className="w-full  bg-gray-50 outline-none focus:outline-none focus:ring-0 border-none"
          />
          <p className="text-red-500 text-xs">{errors.phone?.message}</p>
        </fieldset>

        <fieldset className="border border-gray-300 rounded-lg px-3 pb-2">
          <legend className="text-sm text-[#6C25FF] px-1">
            Email address <span className="text-orange-600">*</span>
          </legend>
          <input
            {...register("email")}
            className="w-full  bg-gray-50 outline-none focus:outline-none focus:ring-0 border-none"
          />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>
        </fieldset>

        <fieldset className="border border-gray-300 rounded-lg px-3 pb-2">
          <legend className="text-sm text-[#6C25FF] px-1">
            Password <span className="text-orange-600">*</span>
          </legend>
          <input
            {...register("password")}
            type="password"
            className="w-full  bg-gray-50 outline-none focus:outline-none focus:ring-0 border-none"
          />
          <p className="text-red-500 text-xs">{errors.password?.message}</p>
        </fieldset>

        <fieldset className="border border-gray-300 rounded-lg px-3 pb-2">
          <legend className="text-sm text-[#6C25FF] px-1">Company name</legend>
          <input
            {...register("company")}
            className="w-full  bg-gray-50 outline-none focus:outline-none focus:ring-0 border-none"
          />
          <p className="text-red-500 text-xs">{errors.company?.message}</p>
        </fieldset>

        <div>
          <p className="text-sm text-[#6C25FF] mb-2">
            Are you an Agency?<span className="text-orange-600">*</span>
          </p>

          <div className="flex gap-4">
            <label>
              <input type="radio" value="yes" {...register("isAgency")} /> Yes
            </label>

            <label>
              <input type="radio" {...register("isAgency")} value="no" /> No
            </label>
            <p className="text-red-500 text-xs">{errors.isAgency?.message}</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6C25FF] text-white py-3 rounded-lg mt-6"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
