import { TbTrash } from "react-icons/tb";
import { BsFillCircleFill } from "react-icons/bs";

const ListTasks = ({ task, onComplete }) => {
  return (
    <div className="w-full bg-[#262626] border border-[#333] border-solid p-4 rounded-lg flex items-center justify-between gap-3">
      <button
        className="w-4 h-4 bg-none border-none"
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <BsFillCircleFill />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-solid border-[#4ea8de]" />
        )}
      </button>
      <p className="flex-1">{task.title}</p>
      <button className="bg-none border-none text-[#808080]">
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default ListTasks;
