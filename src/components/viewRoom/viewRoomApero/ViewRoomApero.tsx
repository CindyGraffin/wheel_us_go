import { useState } from 'react';
import {BiBeer} from '../../../icons/index';
import IUser from '../../../types/IUser';
import RoomButton from '../../UI/CommonButton/CommonButton';
import './viewRoomApero.css';

interface ViewRoomAperoProps {
    roomParts: [IUser];
}

const ViewRoomApero: React.FC<ViewRoomAperoProps> = ({roomParts}) => {
    const [wheel, setWheel] = useState<boolean>(false)
    const [launchWheel, setLaunchWheel] = useState<boolean>(false)
    const [wheelResults, setWheelResults] = useState<boolean>(false)
    const [partApero, setPartApero] = useState<IUser | undefined>(undefined)
    
    const onLaunchWheel = () => {
        setWheel(true)
        setLaunchWheel(true)
        const randomNumber = Math.floor(Math.random()*(roomParts.length))
        const randomPart = roomParts[randomNumber]
        setPartApero(randomPart)
        setTimeout(() => {
            setLaunchWheel(false)
            setWheelResults(true)
        },3000)
    }

    return (
        <div className="view-room-item">
            <div className="view-room-section">
                <BiBeer className='view-room-icon'/>
                <span>Qui paye l'apéro ?</span>
            </div>
            {!wheel && (
                <div className='wheel-btn'>
                    <RoomButton buttonText='Lancer la roue' handleClick={onLaunchWheel}/>
                </div>
            )}
            {wheel === true && launchWheel === true && (
                <div>
                    <img src={require("./wheel.png")} alt="" className='wheel-img'/>
                </div>
            )}
            {wheelResults && (
                <div>
                    <p>Et le gagnant est ... <span className='apero-winner'>{partApero?.firstname} {partApero?.lastname}</span> !</p>
                    <p>Félicitations petit(e) poulet(te) 👏</p>
                </div>
            )}
            
        </div>

    );
};

export default ViewRoomApero;
