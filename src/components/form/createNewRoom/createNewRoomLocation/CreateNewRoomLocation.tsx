import { GoLocation } from "../../../../icons/index";
import CreateNewRoomTitle from "../createNewRoomTitle/CreateNewRoomTitle";
import './createNewRoomLocation.css'

interface CreateNewRoomLocationProps {
    placeName: any;
    address: any;
	onChangePlaceName: (e: Event) => void;
	onChangeAddress: (e: Event) => void; 
}

const CreateNewRoomLocation: React.FC<CreateNewRoomLocationProps> = ({placeName, address, onChangeAddress, onChangePlaceName}) => {
    return (
        <div className="create-new-room-category">
            <CreateNewRoomTitle icon={<GoLocation className="category-icon"/>} titleName='Lieu:'/>
            <div className="category-infos location">
                <input
                    {...placeName}
                    placeholder="Nom du lieu"
                    type="text"
                    id="placeName"
                    onChange={onChangePlaceName}
                />
                <input
                    {...address}
                    placeholder="Adresse du lieu"
                    type="text"
                    name="address"
                    id="address"
                    onChange={onChangeAddress}
            />
            </div>
        </div>
    );
};

export default CreateNewRoomLocation;
