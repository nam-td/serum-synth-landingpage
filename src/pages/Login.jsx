import HeroCanvas from "../components/HeroCanvas";
export default function Login() {
  return (
    <div className="w-full max-w-[1920px] h-screen relative">
      <HeroCanvas />
      <div className="absolute top-0 left-0 w-full min-h-screen flex flex-row justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
          className="w-full sm:w-[500px] min-h-[calc(500px*2.25/2)] p-8 bg-neutral-900/20 rounded-xl flex flex-col items-center gap-y-6 shadow-sm shadow-neutral-100/50"
        >
          <h3 className="uppercase font-bold text-neutral-200 text-xl mb-12">
            Log in with your Xfer ID
          </h3>
          <div className="w-[80%] flex flex-col gap-y-2 items-start">
            <p className="text-neutral-500">Username or Email:</p>
            <input
              className="w-full h-[40px] rounded-sm text-neutral-800 px-2 bg-neutral-200 focus:outline-none focus:border-amber-500 border border-transparent"
              type="text"
              name="username or email"
              id="username"
              placeholder="Username or email"
            />
          </div>
          <div className="w-[80%] flex flex-col gap-y-2 items-start">
            <p className="text-neutral-500">Password:</p>
            <input
              className="w-full h-[40px] rounded-sm text-neutral-800 px-2 bg-neutral-200 focus:outline-none focus:border-amber-500 border border-transparent"
              type="password"
              name="username or email"
              id="password"
              placeholder="Password"
            />
          </div>
          <p className="text-sm text-neutral-400 underline cursor-pointer">
            Don&apos;t remember your password?
          </p>
          <input
            className="w-[80%] h-[50px] bg-neutral-900 rounded-sm cursor-pointer text-lg tracking-wider"
            type="submit"
            value="Login"
          />
          <p className="text-sm text-neutral-400 ">
            Don&apos;t have a Xfer ID?{" "}
            <span className="underline cursor-pointer">Sign Up Now</span>
          </p>
        </form>
      </div>
    </div>
  );
}
