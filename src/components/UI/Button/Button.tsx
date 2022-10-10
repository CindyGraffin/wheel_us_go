import React, { ReactElement } from "react";
import clsx from "clsx";
import "./button.css";

const COLORS = {
    brown: { basic: "brown_button_basic" },
    red: { basic: "red_button_basic" },
    purple: { basic: "purple_button_basic" },
} as const;

type ButtonVariant = "basic";
export type ButtonColor = keyof typeof COLORS;

export interface ButtonProps {
    children: ReactElement | string | number;
    color?: ButtonColor;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    variant?: ButtonVariant;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    onClick = () => {},
    color = "brown",
    variant = "basic",
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx("button_className", COLORS[color][variant])}
        >
            {children}
        </button>
    );
};

export default Button;
