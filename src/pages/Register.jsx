import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../utils";
import Back from "../components/Back";
export default function Login() {
  const [regis, setRegis] = useState({});
  return (
    <form
      className="h-screen flex flex-col justify-center bacg items-center gap-[18px]"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("xxx");
        console.log(regis);
        // fetch(`https://techtest.youapp.ai/api/register`, {
        //   method: "POST",
        //   headers: {
        //     accept: " */*",
        //     "Content-Type": "application/json",
        //   },
        //   mode: "no-cors",
        //   body: regis,
        // })
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

        api
          .post("/register", regis)
          .then((res) => {
            console.log("xxx");
            console.log(res);
          })
          .catch((err) => {
            console.log("xxxxxx");
            console.log(err);
          });
      }}
    >
      <Back ke="/" />
      <label className="flex flex-col gap-[18px]">
        <h3 className="text-xl"> Register</h3>
        <TextField
          id="outlined-basic"
          label="Enter Username/Email"
          variant="outlined"
          className="placeholder:text-white"
          onChange={(e) => setRegis({ ...regis, email: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Create Username"
          variant="outlined"
          onChange={(e) => setRegis({ ...regis, username: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Create Password"
          variant="outlined"
          type="password"
          minRows={8}
          onChange={(e) => setRegis({ ...regis, password: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          minRows={8}
          type="password"
          onChange={(e) =>
            setRegis({ ...regis, ConfirmPassword: e.target.value })
          }
        />
      </label>
      <Button variant="contained" className="warna" type="submit">
        Login
      </Button>
      <span>
        Have an account?{" "}
        <Link className="underline" to="/">
          Login here{" "}
        </Link>
      </span>
    </form>
  );
}
