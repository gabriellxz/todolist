import { ChangeEvent } from "react";

type propsInput = {
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className: string;
}

export default function Input({ type, value, placeholder, onChange, className }: propsInput) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
        />
    );
}