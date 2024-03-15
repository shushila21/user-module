import { Navigate, useLocation } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import SignInBanner from "./SignInBanner";

export default function AuthenticationPage() {
  const { pathname } = useLocation();

  const getContent = () => {
    switch (pathname) {
      case "/login":
        return <Login />;
      case "/forgot-password":
        return <ForgotPassword />;
      default:
        return <Login />;
    }
  };

  // redirect to '/' when already logged in
  if (localStorage.getItem("token")) return <Navigate to="/" />;

  return (
    <div className="naxatw-grid naxatw-h-screen naxatw-w-screen md:naxatw-grid-cols-5">
      <div className="naxatw-col-span-2">
        <SignInBanner />
      </div>
      <div className="naxatw-col-span-3">{getContent()}</div>
    </div>
  );
}
