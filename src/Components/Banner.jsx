import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  return (
    <div className="h-[600px] bg-cover  flex justify-center items-center bg-center bg-[url('https://images.pexels.com/photos/5940706/pexels-photo-5940706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div className="container mx-auto ">
        <h1 className="text-5xl text-black font-bold ">        
        <span style={{  fontWeight: "bold" }}>
            <Typewriter
              words={["Organize your work and life, finally."]}
              loop={100}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1100}
            />
          </span></h1>
        <br />
        <br />
        <p className="text-2xl text-black font-medium text-shadow-md">Become focused, organized, and calm with Todoist. <br /> The world’s #1 task manager and to-do list app.</p>
      <br />
      <br />
      <Link className="text-white bg-blue-600 text-xl px-5 py-2 rounded-md" to="/login">Let’s Explore</Link>
      </div>
    </div>
  );
};

export default Banner;
