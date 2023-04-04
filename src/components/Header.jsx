import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import todoLogo from "../assets/todoLogo.svg";

const Header = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="bg-[#0d0d0d] flex items-center justify-center h-48 relative">
      <img src={todoLogo} alt="lagotipo" />
      <form
        onSubmit={handleSubmit}
        className="absolute h-14 -bottom-7 w-full max-w-[736px] flex gap-2 px-4"
      >
        <input
          type="text"
          placeholder="Agregar una nueva tarea"
          className="h-full flex-1 bg-[#262626] text-white border border-solid border-[#0d0d0d] px-4 placeholder:text-[#808080]"
          value={title}
          onChange={onChangeTitle}
        />
        <button className="h-full px-4 bg-[#1e6f9f] text-white border-none rounded-lg flex items-center gap-6 font-bold text-sm">
          Crear
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </div>
  );
};

export default Header;
