import { useState } from "react";
import ListTasks from "./ListTasks";

const styles = {
  span: `bg-[#333] text-[#d9d9d9] py-[3px] px-[9px] rounded-full text-xs font-bold`,
  p: `text-sm font-bold`,
};

const Tasks = ({ tasks, onComplete, onDelete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="w-full max-w-[736px] mx-auto mt-[90px] px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <p className={`${styles.p} text-[#4ea8de]`}>Crear Tareas</p>
          <span className={styles.span}>{tasksQuantity}</span>
        </div>
        <div className="flex items-center gap-8">
          <p className={`${styles.p} text-[#8284fa]`}>Tareas Completadas</p>
          <span className={styles.span}>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <ListTasks
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
