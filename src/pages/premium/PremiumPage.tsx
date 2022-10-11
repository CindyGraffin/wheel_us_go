import { Layout} from "../../components";
import "./premiumPage.css";
import {AiOutlineStar} from '../../icons/index'


const PremiumPage: React.FC<unknown> = () => {
    return (
        <Layout>
            <div className="premium-page">
                <div className="premium">
                    <AiOutlineStar className="star-icon"/>
                    <p>Les fonctionnalités Premium arrivent bientôt !</p>
                </div>
            </div>
        </Layout>
    );
};

export default PremiumPage;
