import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import Summary from './components/Summary/Summary';
import Input from './components/InputContainer';
import Tasks from './components/Tasks/Tasks';

export interface Task {
  name: string;
  done: boolean;
  id: string;
}
const initialTasks = [
  //initializing the tasks value with dummy data
  {
    name: '',
    done: false,
    id: uuidv4,
  },
  {
    name: '',
    done: false,
    id: uuidv4,
  },
];

function App() {
  const [tasks] = useState<Task[]>(initialTasks);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">App Component</h1>
      <Container title={'Container Title'}>
        <Summary tasks={tasks} />
        {/* <Summary tasks={'Tasks'} /> */}
      </Container>
      <Container title={'Container Title'}>
        <Input />
      </Container>
      <Container title={'Container Title'}>
        <Tasks />
      </Container>
    </div>
    //pass summary into container
    //pass input into container
    //pass tasks into container
  );
}

export default App;
