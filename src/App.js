import "./App.css";
import { useForm } from "react-hook-form";
import image from "./web.png";
import logo from "./agmo-logo.png";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="flex flex-col h-screen md:flex-row">
        <div className="relative basis-1/5 md:basis-9/12">
          <img
            className="absolute object-cover w-full h-full brightness-50 g-center h md:h-screen"
            alt="login-agmo"
            src={image}
          />
          <img className="absolute w-32 top-1/2 left-1/2" style={{transform: "translate(-50%, -50%)"}} alt="login-agmo" src={logo} />
        </div>
        <div className="flex flex-col my-auto text-left basis-1/2 place-content-center p-7 xl:p-32 ">
          <div className="font-sans text-2xl font-bold">
            <p>Hello,</p>
            <p>Welcome Back</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-10"
          >
            <input
              className="p-2 border-2 border-gray-400 rounded-md "
              {...register("email", {
                required: "This field is required!",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email Address"
            />
            <p className="text-red-500">{errors.email?.message}</p>

            <input
              type="password"
              className="p-2 mt-5 border-2 border-gray-400 rounded-md "
              {...register("password", { required: "This field is required!" })}
              placeholder="Password"
            />
            <p className="text-red-500">{errors.password?.message}</p>
            <div className="flex justify-between mt-5">
              <div>
                <input type="checkbox" className="mr-2 " />
                <label className="text-sm text-gray-500">Remember Me</label>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 hover:cursor-pointer hover:text-blue-700 hover:underline">
                  Forgot Your Password?
                </p>
              </div>
            </div>

            <input
              type="submit"
              value="Log In"
              className="w-2/6 p-2 mt-10 text-white bg-black rounded-lg hover:bg-slate-600 hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
