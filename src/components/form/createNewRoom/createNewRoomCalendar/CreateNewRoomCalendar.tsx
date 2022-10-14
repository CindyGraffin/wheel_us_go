import CreateNewRoomTitle from "../createNewRoomTitle/CreateNewRoomTitle";
import { IoCalendarOutline } from "../../../../icons/index";

interface CreateNewRoomCalendarProps {
    date: any;
    onChangeDate: (e: Event) => void;
}

const CreateNewRoomCalendar: React.FC<CreateNewRoomCalendarProps> = ({date, onChangeDate}) => {
    return (
        <div className="create-new-room-category">
            <CreateNewRoomTitle icon={<IoCalendarOutline className="category-icon"/>} titleName='Date et heure:'/>
            <div className="category-infos calendar">
                <input 
                    className="date-input"
                    type="datetime-local" 
                    {...date} 
                    id="date" 
                    onChange={onChangeDate} 
                />
            </div>
        </div>
    );
};

export default CreateNewRoomCalendar;


