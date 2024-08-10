import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };

        fetch("https://onion-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully   ",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });

              navigate(from, { replace: true });
            }
          });

        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center mb-2 ">
        <button>
          <div>
            <p className="text-center text-gray-400 py-1">OR</p>
            <div
              className="flex items-center space-x-3 justify-center rounded-lg w-full py-3 cursor-pointer"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="w-6 h-6" />
              <span className="poppins">Sign In With Google</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
