import {RiShirtLine} from '../../../icons/index';

interface ViewRoomDresscodeProps {
    dresscodeDescription: string
}

const ViewRoomDresscode: React.FC<ViewRoomDresscodeProps> = ({dresscodeDescription}) => {
    return (
        <div>
            <RiShirtLine/>
            <p>Dresscode: {dresscodeDescription}</p>
        </div>
    );
};

export default ViewRoomDresscode;
