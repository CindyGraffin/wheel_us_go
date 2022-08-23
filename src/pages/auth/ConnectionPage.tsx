import { useState } from "react";
import FormLogo from "../../components/authPage/formLogo/FormLogo";
import Presentation from "../../components/authPage/presentation/Presentation";
import LoginForm from "../../components/form/loginForm/LoginForm";
import "./connectionPage.css";

const ConnectionPage: React.FC<unknown> = () => {
    const [logoPath, setLogoPath] = useState<string>("./logo-open.png");
    return (
        <div className="co-page">
            <div className="co-page__container">
                <Presentation/>
                <div className="form__container">
                    <div>
                        <FormLogo logoPath={logoPath}/>
                        <LoginForm
                            logoPath={logoPath}
                            setLogoPath={setLogoPath}
                        />
                    </div>
                    <div className="no-account">
                        <p>Pas encore inscrit ?</p>
                        <p>
                            Rejoins notre communauté de gourmands dès à présent
                            ! 🍗
                        </p>
                        <button className="connect-btn">INSCRIPTION</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectionPage;
