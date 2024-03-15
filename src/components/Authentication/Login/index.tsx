import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signInUser } from "../../../services/authentication";

const initialState = {
  email: "",
  password: "",
  keepSignedIn: false,
};

export default function Login() {
  // const navigate = useNavigate();
  // const dispatch = useTypedDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<Record<string, any> | null>(null);
  const [showErrorToggle, setShowErrorToggle] = useState<boolean>(false);
  const handleShow = () => {
    return setShowPassword((prev) => !prev);
  };

  // const openCurtain = useTypedSelector(state => state.curtain.openCurtain);

  const { mutate, isError } = useMutation<any, any, any, unknown>({
    mutationFn: signInUser,
    onSuccess: (res: any) => {
      // dispatch(setUserState({ user: res.data }));
      localStorage.setItem("token", res.data.token);
      // navigate("/dashboard");
    },
    onError: (err) => setError(err),
  });

  const { register, handleSubmit } = useForm({
    defaultValues: initialState,
  });

  const onSubmit = (data: {
    email: string;
    password: string;
    keepSignedIn: boolean;
  }) => mutate(data);

  useEffect(() => {
    if (isError) {
      setShowErrorToggle(true);
    }
  }, [isError, error]);

  return (
    <>
      <div
        className="naxatw-h-screen naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center
        naxatw-bg-primary-50"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="naxatw-flex naxatw-w-[60%] naxatw-flex-col naxatw-gap-5 naxatw-pt-7"
        >
          {showErrorToggle && error?.response.data.message}

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="naxatw-relative">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="*******"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
            />
            <button
              name={showPassword ? "visibility" : "visibility_off"}
              className="naxatw-absolute naxatw-right-2 naxatw-top-9 naxatw-cursor-pointer
              naxatw-text-xl naxatw-text-grey-800"
              onClick={() => handleShow()}
            >
              Show Password{" "}
            </button>
          </div>

          <div className="naxatw-flex naxatw-items-center naxatw-justify-between">
            <div className="naxatw-flex naxatw-items-center naxatw-gap-2 naxatw-pl-3  ">
              <input type="checkbox" id="check" {...register("keepSignedIn")} />
              <label htmlFor="check">Keep me signed in</label>
            </div>
            <button
              className="naxatw-text-primary-500"
              // onClick={() => {
              //   navigate("/forgot-password");
              // }}
              type="button"
            >
              Forgot Your Password?
            </button>
          </div>

          <div className="naxatw-justify-center">
            <button className="naxatw-px-8" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
