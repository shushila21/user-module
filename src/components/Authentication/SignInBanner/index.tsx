import Janakpur from "@Assets/janakpur.svg";

export default function SignInBanner() {
  return (
    <div className="naxatw-hidden naxatw-h-screen naxatw-w-full naxatw-overflow-hidden md:naxatw-block">
      <img
        src={Janakpur}
        className="naxatw-h-full naxatw-w-full naxatw-object-cover"
        alt="sidebar-banner"
      />
    </div>
  );
}
