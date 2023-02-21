import { FormEvent, useState } from "react";
import { Button, CloseButton, Form } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoList, setTodoList] = useState<string[]>(["test1", "test2"]);
  const [newTodo, setNewTodo] = useState<string>();
  const [editIndex, setEditIndex] = useState<number>();
  const [editedTodo, setEditedTodo] = useState<string>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodoList(todoList.concat(newTodo));
    setNewTodo(undefined);
  };

  return (
    <div className="Page">
      <div className="TodosContainer">
        {todoList.map((t, i) =>
          editIndex === i ? (
            <div key={i} className="TodoContainer">
              <Form.Control
                type="text"
                placeholder={t}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
              <div className="ButtonsContainer">
                <Button
                  onClick={() => {
                    if (!editedTodo) return;
                    setTodoList([
                      ...todoList.slice(0, i),
                      editedTodo,
                      ...todoList.slice(i + 1),
                    ]);
                    setEditIndex(undefined);
                    setEditedTodo(undefined);
                  }}
                  variant="outline-dark"
                >
                  Done
                </Button>
                <CloseButton onClick={() => setEditIndex(undefined)} />
              </div>
            </div>
          ) : (
            <div key={i} className="TodoContainer">
              <p>{t}</p>
              <div className="ButtonsContainer">
                <Button onClick={() => setEditIndex(i)} variant="outline-dark">
                  Edit
                </Button>
                <CloseButton
                  onClick={() =>
                    setTodoList(todoList.filter((_, idx) => i !== idx))
                  }
                />
              </div>
            </div>
          )
        )}
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formItem">
            <Form.Label>New item</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add a todo list item"
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
