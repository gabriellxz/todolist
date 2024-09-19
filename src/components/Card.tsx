import { todoType } from "../type/todo";
import check from "../assets/check.svg";
import trash from "../assets/trash.svg";
import layer from "../assets/Layer.svg";

type propsCard = {
    card: todoType;
    className: string;
    completeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

export default function Card({ card, className, completeTodo, removeTodo }: propsCard) {
    return (
        <div className={className}>
            <div className="flex gap-5">
                {card.isCompleted == false ? <img src={check} alt="check" onClick={() => completeTodo(card.id)} /> : <img src={layer} alt="layer" onClick={() => completeTodo(card.id)} />}
                <p className={card.isCompleted == true ? "line-through text-grayTodo-300" : "text-white"}>
                    {card.text}
                </p>
            </div>
            <img src={trash} alt="trash" onClick={() => removeTodo(card.id)}/>
        </div>
    );
}