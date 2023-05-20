import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  console.error(status, statusText);
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-neutral text-neutral-content">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">{status}</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page {statusText}
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-neutral text-neutral-content border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default ErrorPage;