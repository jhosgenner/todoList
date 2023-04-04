import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

const styles = {
  complete: `flex-1 cursor-pointer line-through text-[#808080]`,
  container: `w-full bg-[#262626] border border-[#333] border-solid p-4 rounded-lg flex items-center justify-between gap-3`,
  checkContainer: `w-4 h-4 bg-none border-none`,
  checkbox: `w-full h-full rounded-full border-2 border-[#4ea8de]`,
  trashButton: `bg-none border-none text-[#808080]`,
  textComplete: `flex-1 line-through cursor-pointer`,
};

const ListTasks = ({ task, onComplete, onDelete }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <BsFillCheckCircleFill className="text-[#5e60ce]" />
        ) : (
          <div className={styles.checkbox} />
        )}
      </button>
      <p
        onClick={() => onComplete(task.id)}
        className={
          task.isCompleted ? styles.complete : "flex-1 cursor-pointer "
        }
      >
        {task.title}
      </p>
      <button className={styles.trashButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default ListTasks;
