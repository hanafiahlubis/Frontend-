import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <form
      className="h-screen flex flex-col justify-center bacg items-center gap-[18px]"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/profil");
      }}
    >
      <span className="absolute left-2 top-0 flex justify-center items-center gap-1 ">
        <IoIosArrowBack />
        Back
      </span>
      <label className="flex flex-col gap-[18px]">
        <h3 className="text-xl"> Login</h3>
        <TextField
          id="outlined-basic"
          label="Enter Username/Email"
          variant="outlined"
          className="placeholder-shown:text-white"
        />
        <TextField
          id="outlined-basic"
          label="Enter Password"
          variant="outlined"
          type="password"
        />
      </label>
      <Button variant="contained" className="warna" type="submit">
        Login
      </Button>
      <span>
        No account?{" "}
        <Link className="underline" to="/register">
          Register here
        </Link>
      </span>
    </form>
  );
}
