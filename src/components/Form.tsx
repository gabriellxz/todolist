import Button from "./Button";
import Input from "./Input";
import plus from "../assets/plus.svg";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";

type propsForm = {
    addTodo: (text: string) => void;
}

export default function Form({ addTodo }: propsForm) {

    const [text, setText] = useState<string>("");

    const changeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const createTodo = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!text) {
            toast.error('Preencha o campo obrigatório!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            addTodo(text);

            toast.success('Tarefa criada com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        setText("");

    }

    return (
        <form className="absolute max-w-[700px] w-full top-[170px] flex gap-2" onSubmit={createTodo}>
            <Input
                className="w-full bg-grayTodo-200 p-[16px] rounded-md outline-none text-white"
                onChange={changeText}
                placeholder="Adicione uma nova tarefa"
                type="text"
                value={text}
            />
            <Button className="bg-blueTodo-100 px-5 flex items-center font-semibold text-white gap-2 rounded-md">
                Criar
                <img src={plus} alt="" />
            </Button>
        </form>
    );
}