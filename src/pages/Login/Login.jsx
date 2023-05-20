import { Link } from "react-router-dom";

const Login = () => {
    const handlerBtn=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
    }
  return (
    <div>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content  flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-6">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handlerBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to='/signup' className="label-text-alt link link-hover">
                    New Here? go <span className="text-orange-600">SignUp</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="flex flex-col  card-body pt-0">
              <div className="divider">or</div>
              <button className="btn btn-ghost ">G Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;