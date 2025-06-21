import { ButtonTypes } from "@/types/type";
import './style.scss'
const Button = ({ type, name, onClick, icon }: ButtonTypes) => {
  return (
    <>
      <div className="btn flex justify-center items-center">
        <button type={type} onClick={onClick}>
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
