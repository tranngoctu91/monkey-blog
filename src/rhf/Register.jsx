import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "./InputHook";
import RadioHook from "./RadioHook";
import CheckboxHook from "./CheckboxHook";
import DropdownHook from "./DropdownHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { generatePath } from "react-router";

const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email"),

  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5}$/,
      "Password must have at least 5 character both digit and alphabet"
    )
    .required(),
  gender: yup
    .string()
    .required("Please enter your gender")
    .oneOf(["male", "femail"], "You can only select male or female"),
  job: yup.string().required().oneOf(["teacher", "student"]),
  term: yup.boolean().required(),
});
const Register = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    control,
    setValue,
    getValues,
    reset,
    watch,
  } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });

  const watchGender = watch("gender");
  console.log(watchGender);
  const onSubmitHandle = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("hello");
        reset({
          username: "",
          password: "",
          email: "",
          job: "",
          term: false,
        });
      }, 1000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandle)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="username">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="enter your username"
          id="username"
          control={control}
          type="text"
        ></InputHook>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="email">
          Email
        </label>
        <InputHook
          name="email"
          placeholder="enter your email"
          id="email"
          control={control}
          type="email"
        ></InputHook>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="email">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="enter your password"
          id="password"
          control={control}
          type="password"
        ></InputHook>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="email">
          Gender
        </label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              value="male"
              name="gender"
              checked={watchGender === "male"}
              control={control}
            ></RadioHook>
            <span>Male</span>
          </div>

          <div className="flex items-center gap-x-3">
            <RadioHook
              value="female"
              name="gender"
              control={control}
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="email"></label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
        ></DropdownHook>
        {errors.job && (
          <p className="text-red-500 text-sm">{errors.job.message}</p>
        )}
      </div>

      <div className="mt-5">
        <CheckboxHook
          text="I accept the term and condition"
          name="term"
          control={control}
        ></CheckboxHook>
        {errors.term && (
          <p className="text-red-500 text-sm">{errors.term.message}</p>
        )}
      </div>

      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 rounded-full border-2 border-white border-t-2 border-t-transparent mx-auto animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default Register;
