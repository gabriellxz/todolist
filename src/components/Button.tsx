type propsButton = {
    children: React.ReactNode;
    className: string;
}

export default function Button({children, className}: propsButton) {
    return (
        <button className={className}>{children}</button>
    );
}