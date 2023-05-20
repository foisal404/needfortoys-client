import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/Authprovider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { GoogleUp, signUp, updateUser } = useContext(authContext);
  //form control
  const handlerBtn = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    if (!email) {
      setError("must have email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 character");
      return;
    }
    if (!name) {
      setError("must have display name");
      return;
    }
    if (!photo) {
      setError("must have display photo url");
      return;
    }
    signUp(email, password)
      .then((result) => {
        const loogedUser = result.user;
        updateUser(name, photo)
          .then(() => {
            console.log("profile update");
          })
          .catch((error) => {
            console.error(error.message);
            setError(error.message);
          });
        console.log(loogedUser);
      })
      .catch((error) => {
        const message=error.message.slice(22,42);
        console.error(message);
        setError(message);
      });
  };
  //google popup
  const handlerGoogle = () => {
    setError("");
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
        <div className="hero-content  flex-col lg:flex-row w-full justify-evenly">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold my-6">Please Sign Up</h1>
            <h2 className="text-red-600 text-center">{error && error}</h2>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handlerBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo"
                    name="photo"
                    className="input input-bordered"
                  />
                </div>
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    New Here? go <span className="text-orange-600">Login</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  btn-primary" type="submit">
                  Sign UP
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

export default SignUp;
