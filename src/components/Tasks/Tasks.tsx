import TaskItem from './TaskItem';
const Tasks = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2>tasks component</h2>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default Tasks;
