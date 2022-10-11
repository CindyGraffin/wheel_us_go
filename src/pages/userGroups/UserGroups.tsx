import { Layout } from "../../components";
import './userGroups.css'
import {HiOutlineUserGroup} from '../../icons'

const UserGroups: React.FC<unknown> = () => {
    return (
        <Layout>
            <div className="premium-page">
                <div className="premium">
                    <HiOutlineUserGroup className="star-icon"/>
                    <p>Les fonctionnalités de groupe arrivent bientôt !</p>
                </div>
            </div>
        </Layout>
    );
};

export default UserGroups;
