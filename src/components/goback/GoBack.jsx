import {  useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import style from "./style.module.css"
const GoBack = () => {
  const navigate = useNavigate();

  return (
    <>
      <FaArrowLeft className={style.back} onClick={() => navigate(-1)} />
    </>
  );
}

export default GoBack;