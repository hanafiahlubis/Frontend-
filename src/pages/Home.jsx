import { useState } from "react";
import Back from "../components/Back.jsx";
import Kotak from "../components/Kotak.jsx";
import { AiOutlineEdit } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

export default function Home() {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className="bacg flex p-8 flex-col h-screen overflow-y-auto gap-3">
      <Back ke="/" />
      <Kotak style="h-[9rem] rounded-2xl relative bg-slate-500">
        <h1 className="absolute left-4 bottom-2">alihanafiah@gmail.com</h1>
      </Kotak>
      <Kotak style=" min-h-max rounded-2xl bg-black flex justify-around flex-col p-3">
        <div className="flex items-center justify-between">
          <h1>About</h1>
          <AiOutlineEdit onClick={() => setOpenEdit(!openEdit)} />
        </div>
        {openEdit && (
          <form className="flex gap-5 flex-col">
            <label className="flex justify-between">
              Display name :{" "}
              <TextField
                id="outlined-basic"
                label="Enter Username/Email"
                variant="outlined"
                className="placeholder:text-white border-white w-[100px] h-0"
              />
            </label>
            <label className="flex justify-between">
              Gender :
              <select className="text-white bg-black">
                <option value="" className="text-black">
                  Select Gender
                </option>
                <option value="" className="text-black">
                  Male
                </option>
                <option value="" className="text-black">
                  Female
                </option>
              </select>
            </label>{" "}
            <label className="flex justify-between">
              Birthday :{" "}
              <TextField
                id="outlined-basic"
                label="Birthday"
                variant="outlined"
                type="date"
                className="placeholder:text-white border-white w-[100px] h-0"
              />
            </label>{" "}
            <label className="flex justify-between">
              Horoscope :{" "}
              <TextField
                id="outlined-basic"
                label="Horoscope"
                variant="outlined"
                className="placeholder:text-white border-white w-[100px] h-0"
              />
            </label>
            <label className="flex justify-between">
              Zodiac :{" "}
              <TextField
                id="outlined-basic"
                label="Zodiac"
                variant="outlined"
                className="placeholder:text-white border-white w-[100px] h-0"
              />
            </label>
            <label className="flex justify-between">
              Height :{" "}
              <TextField
                id="outlined-basic"
                label="Add height"
                variant="outlined"
                type="number"
                className="placeholder:text-white border-white w-[100px] h-0"
              />
            </label>{" "}
            <label className="flex justify-between">
              Weight :{" "}
              <TextField
                id="outlined-basic"
                label="Add weight"
                variant="outlined"
                type="number"
                className="placeholder:text-white border-white w-[100px] h-0"
              />
            </label>
          </form>
        )}
        {!openEdit && <p>Add in your your to help others know you better </p>}
      </Kotak>
      <Kotak style="h-[9rem]  rounded-2xl  bg-black flex justify-around flex-col p-3">
        <div className="flex items-center justify-between">
          <h1>Interest</h1>
          <AiOutlineEdit />
        </div>
        <p>Add in your Interest to find a better match </p>
      </Kotak>
    </div>
  );
}
