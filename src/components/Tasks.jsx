import ListTasks from "./ListTasks";

const Tasks = ({ tasks, onComplete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="w-full max-w-[736px] mx-auto mt-[90px] px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <p className="text-[#4ea8de] text-sm font-bold">Crear Tareas</p>
          <span className="bg-[#333] text-[#d9d9d9] py-[3px] px-[9px] rounded-full text-xs font-bold">
            {tasksQuantity}
          </span>
        </div>
        <div className="flex items-center gap-8">
          <p className="text-[#8284fa] text-sm font-bold">Tareas Completadas</p>
          <span className="bg-[#333] text-[#d9d9d9] py-[3px] px-[9px] rounded-full text-xs font-bold">
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <ListTasks key={task.id} task={task} onComplete={onComplete} />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
