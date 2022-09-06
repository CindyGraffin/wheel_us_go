import React from "react";
interface RoomButtonProps {
    buttonText: string;
    onClick: () => void;
}

const RoomButton: React.FC<RoomButtonProps> = ({buttonText, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default RoomButton;
