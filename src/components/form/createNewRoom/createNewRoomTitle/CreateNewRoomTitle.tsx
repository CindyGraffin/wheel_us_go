import './createNewRoomTitle.css'

interface CreateNewRoomTitleProps {
    icon: JSX.Element;
    titleName: string;
}

const CreateNewRoomTitle: React.FC<CreateNewRoomTitleProps> = ({icon, titleName}) => {
    return (
        <div className="category-title">
            {icon}
            <p>{titleName}</p>
        </div>
    );
};

export default CreateNewRoomTitle;
