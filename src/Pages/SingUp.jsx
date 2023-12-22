import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { UploadImg } from "../Utils/UploadImage";
import axios from "axios";

const SingUp = () => {
  const [show, setShow] = useState(false);
  const [singUpError, setSingUpError] = useState("");
  const { createUser, updateUserProfile, googlePopUp, githubPopUp } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSingUp = () => {
    googlePopUp()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setSingUpError(error.message);
      });
  };
  const handleGithubSingUp = () => {
    githubPopUp()
      .then()
      .catch((error) => {
        setSingUpError(error.message);
      });
  };
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const image = data?.photo;
    console.log(image);
    console.log("object");
    setSingUpError("");

    const passwordTest = /^(?=.*[A-Z])(?=.*[\W_]).*[A-Za-z0-9].*$/;
    if (data.password.length < 6) {
      setSingUpError(" Password should be at least 6 characters");
      return;
    } else if (!passwordTest.test(data.password)) {
      setSingUpError(
        "Your password should have at least one upper case characters, a special character ."
      );
      return;
    }
    createUser(data?.email, data?.password)
      .then(async (result) => {
        console.log(result);

        const userImg = await UploadImg(image);
        const photo = userImg.data.display_url;
        console.log(photo);

        
        await updateUserProfile(name, photo)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            setSingUpError(error.message);
          });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setSingUpError(error.message);
      });
  };
  console.log(errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto border-2 p-5 rounded-lg my-10"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email*
          </label>
          <input
            name="email"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="example@gmail.com"
            {...register("email")}
          />
          <span>{errors?.email && <span>This field is required</span>}</span>
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name*
          </label>
          <input
            name="name"
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password*
          </label>
          <input
            name="password"
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[\W_]).*[A-Za-z0-9].*$/,
                message:
                  "Your password should have at least one upper case characters, a special character ",
              },
            })}
            type="password"
            placeholder="********"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          {errors?.name && <span>This field is required</span>}
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <input
            name="photo"
            {...register("photo", { required: true })}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            accept="image/*"
            required
          />
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            Select your profile picture
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
        <p>Have an account please <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
      </form>
    </div>
  );
};

export default SingUp;

