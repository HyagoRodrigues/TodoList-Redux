import { Provider } from 'react-redux';
import './App.css';
import store from './store'


import ToDoList from './ToDoList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ToDoList /> 
    </div>
    </Provider>
  );
}

export default App;
