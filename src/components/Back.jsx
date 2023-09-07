import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Back({ ke }) {
  const navigate = useNavigate();
  return (
    <span
      className="absolute left-2 top-0 flex justify-center items-center gap-1 "
      onClick={() => navigate(...ke)}
    >
      <IoIosArrowBack />
      Back
    </span>
  );
}
