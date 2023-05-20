import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/Authprovider";

const Login = () => {
  const { GoogleUp,signIn } = useContext(authContext);
  const [error,setError]=useState("")
  //form control
  const handlerBtn = (event) => {
    event.preventDefault();
    setError("")
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if(!email){
      setError("must have email address")
      return
    }
    if(password.length<6){
      setError("Password must be 6 character")
      return;
    }
    console.log(email, password);
    signIn(email,password)
    .then(result=>{
      const loggeduser=result.user;
      console.log(loggeduser)
    })
    .catch(error=>{
      const message=error.message.slice(22,38);
      console.error(message);
      setError(message);
    })
  };
  //Google popup
  const handlerGoogle = () => {
    setError('')
    // console.log("google popup")
    GoogleUp()
      .then(() => {
        console.log("sign in success");
      })
      .catch((error) => {
        console.error(error.messgae);
      });
  };
  return (
    <div>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content  flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold my-6">Login now!</h1>
            <h2 className="text-red-600 text-center">{error&& error}</h2>
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
                  <Link to="/signup" className="label-text-alt link link-hover">
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
              <button className="btn btn-ghost " onClick={handlerGoogle}>
                G Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
