import TodoList from "./component/TodoList";
import Textfield from '@atlaskit/textfield'
import Button from "@atlaskit/button";
import { useState } from "react";
function App() {
  const [todolist, settodolist]=useState([]);
  const [textinput, settextinput]=useState('');
  return (
    <>
      <h3> danh sachs</h3>
      <Textfield name="add-tode" placeholder="Them viec lam"
        elemAfterInput={
          <Button isDisabled={true} appearance="primary" >Theem </Button>
        
        }
        style={{padding:"10px 20px 30px 50px"}}
      ></Textfield>
      <TodoList></TodoList>

    </>
     )
}

export default App;
