const TaskItem = () => {
  return (
    <div className="flex justify-between bg-white p-1 px-7">
      <h2>Task Item</h2>
      <div className="flex gap-2 items-center">
        <input type="checkbox" />
        Task name
      </div>
      <button className="bg-green-200 hover:bg-green-300 round-lg p-10 px-3">Delete</button>
    </div>
  );
};

export default TaskItem;
