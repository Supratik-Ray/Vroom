import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Name</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-primary mt-4">Signup</button>

        <Link to="/auth/login" className="mt-4 text-sm text-blue-500">
          Already have an account? Please Login
        </Link>
      </fieldset>
    </div>
  );
};

export default Signup;
