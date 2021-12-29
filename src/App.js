import "./App.css";
import { useForm } from "react-hook-form";
import image from "./web.png";

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
      <div className="flex lg:flex-row flex-col">
        <div className=" lg:basis-9/12 ">
          <img
            className="object-cover bg-center h-40 w-full lg:h-screen"
            alt="login-agmo"
            src={image}
          />
        </div>
        <div className="basis-1/2 flex flex-col place-content-center text-left p-7 lg:p-32">
          <div className="font-sans font-bold text-2xl">
            <p>Hello,</p>
            <p>Welcome Back</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-10"
          >
            <input
              className=" p-2 border-2 border-gray-400 rounded-md"
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
              className=" mt-5 p-2 border-2 border-gray-400 rounded-md"
              {...register("password", { required: "This field is required!" })}
              placeholder="Password"
            />
            <p className="text-red-500">{errors.password?.message}</p>
            <div className="flex justify-between mt-5">
              <div>
                <input type="checkbox" className=" mr-2" />
                <label className="text-gray-500 text-sm">Remember Me</label>
              </div>
              <div>
                <p className="text-gray-500 font-semibold text-sm hover:cursor-pointer hover:text-blue-700 hover:underline">
                  Forgot Your Password?
                </p>
              </div>
            </div>

            <input
              type="submit"
              value="Log In"
              className="mt-10 bg-black text-white p-2 rounded-lg w-2/6 hover:bg-slate-600 hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
