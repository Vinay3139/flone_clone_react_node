import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../../../lib/api";
import { SubmitButton } from "../../util/button/submitButton";
import { InputEmail } from "../../util/form/inputEmail";
import { InputPassword } from "../../util/form/inputPassword";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export const LoginForm = () => {
  const schema = yup
  .object()
  .shape({
userEmail: yup
  .string()
  .email("Invalid email format")
  .required("userEmail is required"),

userPassword: yup
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(32, "Password cannot exceed 32 characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
  .required("userPassword is required"),
  })
  .required();
const {
  register,
  formState: { errors },
  handleSubmit,
  reset,
} = useForm({
  resolver: yupResolver(schema),
});

const onSubmit = async (data) => {
  try {
    const response = await axiosInstance.post("/sign-in", {
      userEmail: data?.userEmail,
      userPassword: data?.userPassword,
    });
    if (response?.data) {
      toast.success(response?.data.message);
      reset();
    }
    console.log(response?.data, "response");
  } catch (error) {
    console.log(error);
    toast.error(error?.message);
  }
  console.log(data);
};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-3">
          <InputEmail
          register={register}
          errors={errors}
          name="userEmail"
            placeholder="userEmail"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="p-3">
          <InputPassword
          register={register}
          name="userPassword"
          errors={errors}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="p-3">
          <SubmitButton
            text="LOGIN"
            className="w-full py-2 mt-6 text-white bg-purple-500 rounded-md hover:bg-purple-600"
          />
        </div>
      </form>
    </>
  );
};
