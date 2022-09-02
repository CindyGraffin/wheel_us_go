import React from "react";
interface UserRoomsButtonProps {
    buttonText: string;
    onClick: () => void;
}

const UserRoomsButton: React.FC<UserRoomsButtonProps> = ({buttonText, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default UserRoomsButton;
