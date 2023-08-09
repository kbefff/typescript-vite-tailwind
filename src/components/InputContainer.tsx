import { useState } from 'react';
//display components

// the state necessary to control the Input component only needs to be accessed there, so it can be
// local to this component.

const Input = () => {
  const [newTask, setNewTask] = useState(''); // Initialize newTask and setNewTask
  const inputId = 'newTaskInput';
  return (
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col">
        {/* <label className="text">Enter your next task:</label> */}{' '}
        {/* this threw an error: control.eslintjsx-a11y/label-has-associated-control  */}
        <label htmlFor={inputId} className="text">
          Enter your next task:
        </label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={newTask} //set the input value to the new task
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <button type="button" className="bg-green-100 rounded-lg hover:bg-green-200 p-1">
        Add task
      </button>
    </form>
  );
};

export default Input;
