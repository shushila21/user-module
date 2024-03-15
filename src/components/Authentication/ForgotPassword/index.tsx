import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { forgotPassword } from "../../../services/authentication";

const initialState = {
  email: "",
};
export default function ForgotPassword() {
  const navigate = useNavigate();

  const {
    data: successMessage,
    mutate,
    isSuccess,
  } = useMutation<any, any, any, unknown>({
    mutationFn: forgotPassword,
    onSuccess: () => {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    },
  });

  const { register, handleSubmit } = useForm({
    defaultValues: initialState,
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <div
      className="naxatw-h-screen naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center
        naxatw-bg-primary-50"
    >
      <div className="naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-font-semibold">
        {/* <Icon
          name="lock_reset"
          className="naxatw-rounded-[80px] naxatw-bg-primary-400 naxatw-px-4 naxatw-py-[15px] naxatw-text-white"
        /> */}
        <h1 className="naxatw-text-2xl naxatw-font-semibold naxatw-leading-10">
          Forgot Your Password?
        </h1>
        <p className="naxatw-items-center naxatw-justify-center naxatw-text-center naxatw-text-base">
          Enter the email address and we will send you a link to reset your
          password.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="naxatw-flex naxatw-w-[60%] naxatw-flex-col naxatw-gap-5 naxatw-pt-7"
      >
        {isSuccess && successMessage?.data?.Message}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="naxatw-flex naxatw-items-center naxatw-justify-between ">
          <button type="submit">Reset Password</button>

          <button
            className="naxatw-text-primary-500"
            onClick={() => {
              navigate("/login");
            }}
            type="button"
          >
            Back to Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
