import Header from "./components/Header";
import logo from "./assets/Logo.svg";
import { todoType } from "./type/todo";
import Card from "./components/Card";
import Form from "./components/Form";
import { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";

export default function App() {

  const [todo, setTodo] = useState<todoType[]>(() => {
    const savedTodo = localStorage.getItem("todoList");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (text: string) => {
    const newArray = [
      ...todo,
      {
        id: Math.floor(Math.random() * 1000),
        text: text,
        isCompleted: false
      }
    ]

    setTodo(newArray);
  }

  const completeTodo = (id: number) => {
    const newArray = [...todo];
    newArray.filter((todo: todoType) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodo(newArray);
  }

  const removeTodo = (id: number) => {
    const newArray = [...todo];
    const filteredTodo = newArray.filter((todo: todoType) => todo.id != id ? id : null);
    setTodo(filteredTodo);
  }

  const totalTodo = todo.length;
  const todoConcluido = todo.filter((t: todoType) => t.isCompleted).length;

  return (
    <>
      <Header className="bg-blackTodo-100 flex justify-center h-[200px]">
        <img src={logo} alt="logo" className="max-w-[126px] w-full" />
      </Header>
      <div className="flex justify-center p-2">
        <Form addTodo={addTodo} />
        <div className="flex justify-between max-w-[700px] w-full text-white mt-[80px]">
          <p className="text-blueTodo-200 flex items-center font-semibold gap-2">
            Tarefas criadas
            <span className="bg-grayTodo-200 text-white rounded-full px-2">{totalTodo}</span>
          </p>
          <p className="text-purpleTodo-100 flex items-center font-semibold gap-2">
            Concluídas
            <span className="bg-grayTodo-200 text-white rounded-full px-2">{todoConcluido} de {totalTodo}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-[16px] items-center flex-col mt-2">
        {todo.map((t: todoType) => (
          <Card
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            className="flex items-start justify-between gap-[12px] bg-grayTodo-200 p-[16px] max-w-[700px] w-full rounded-md text-white"
            card={t}
            key={t.id}
          />
        ))}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}