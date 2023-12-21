import { useForm } from "react-hook-form";

const SingUp = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            type="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="example@gmail.com"
            {...register("email", { required: true })}
                     required
          />
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
            {...register("password", { required: true })}
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
      </form>
    </div>
  );
};

export default SingUp;

// import { useForm } from "react-hook-form";

// const SignUp = () => {
//   const { handleSubmit, register, errors } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="max-w-lg mx-auto border-2 p-5 rounded-lg my-10"
//       >
//         <div className="mb-5">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your email*
//           </label>
//           <input
//             name="email"
//             type="email"
//             ref={register({ required: true })} // Register email field with required validation
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             placeholder="example@gmail.com"
//             required
//           />
//           {errors.email && <span>This field is required</span>}
//         </div>

//         {/* Add similar register function with validation for other fields */}

//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Register new account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
