import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  console.log(axiosPublic());
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="px-5 w-full">
      <button onClick={handleGoogleSignIn} className="btn w-full">
        <FaGoogle className="mr-2" />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
