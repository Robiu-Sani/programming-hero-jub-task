import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-[400px] p-8 flex flex-col justify-center items-center gap-5"
    >
      <h1 className="text-4xl text-gradient2 font-bold text-center">Signup</h1>

      <div className="w-full">
        <label className="block w-full text-sm font-medium text-gradient">
          Mobile Number or Email
        </label>
        <input
          type="text"
          className="w-full px-4 text-gradient py-2 bg-[rgba(0,0,0,0)] mt-1 placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
          {...register("username", {
            required: "This field is required",
            pattern: {
              value: /^(?:\d{10}|\S+@\S+\.\S+)$/,
              message: "Must be a valid email or 10-digit mobile number",
            },
          })}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div className="w-full">
        <label className="block w-full text-sm font-medium text-gradient">
          Enter 5-Digit Pin
        </label>
        <input
          type="password"
          className="w-full text-gradient px-4 py-2 bg-[rgba(0,0,0,0)] mt-1 placeholder:text-[#cfb56b] border-0 outline-0 border-b border-[#fdc55d]"
          {...register("password", {
            required: "This field is required",
            pattern: {
              value: /^\d{5}$/,
              message: "Pin must be a 5-digit number",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="!w-full button !rounded-md bg-gradient-bg border-1 border-[#00f7ffa1]"
      >
        <span className="absolute text-gradient">Login</span>
      </button>
      <div className="w-full">
        <small className="text-gradient">
          I don`t have any account!{" "}
          <Link className="font-bold underline" to="/signup">
            Signup
          </Link>
        </small>
      </div>
    </form>
  );
}
