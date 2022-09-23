import CreateNewRoomTitle from "../createNewRoomTitle/CreateNewRoomTitle";
import { IoCalendarOutline } from "../../../../icons/index";

interface CreateNewRoomCalendarProps {
    date: any;
    time: any
    onChangeDate: (e: Event) => void;
    onChangeTime: (e: Event) => void;
}

const CreateNewRoomCalendar: React.FC<CreateNewRoomCalendarProps> = ({date, time, onChangeDate, onChangeTime}) => {
    return (
        <div className="create-new-room-category">
            <CreateNewRoomTitle icon={<IoCalendarOutline className="category-icon"/>} titleName='Date et heure:'/>
            <div className="category-infos calendar">
                <input 
                    className="date-input"
                    type="date" 
                    {...date} 
                    id="date" 
                    onChange={onChangeDate} 
                />
                <input 
                    className="date-input"
                    type="time" 
                    {...time} 
                    id="time" 
                    onChange={onChangeTime}
                />
            </div>
        </div>
    );
};

export default CreateNewRoomCalendar;


