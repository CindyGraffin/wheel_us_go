import React from "react";
import { Layout, RoomsTitle} from "../../components";
import "./userRooms.css";


const UserRooms: React.FC<unknown> = () => {
    return (
        <Layout>
            <div className="rooms__container">
                <RoomsTitle titleText="MES SALLES"/>
                
            </div>
        </Layout>
    );
};

export default UserRooms;