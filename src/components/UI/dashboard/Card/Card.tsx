import clsx from "clsx";
import React from "react";
import "./card.css";

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
    return <div className={clsx("card__container", className)}>{children}</div>;
};

export default Card;
