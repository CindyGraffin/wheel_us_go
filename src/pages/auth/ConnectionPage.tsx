import { useContext, useState } from "react";
import FormFooter from "../../components/auth/formFooter/FormFooter";
import FormLogo from "../../components/auth/formLogo/FormLogo";
import Presentation from "../../components/auth/presentation/Presentation";
import LoginForm from "../../components/form/loginForm/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import "./connectionPage.css";

const ConnectionPage: React.FC<unknown> = () => {
    const [logoPath, setLogoPath] = useState<string>("./logo-open.png");
	const {state, dispatch} = useContext(AuthContext);
    const formFooterInfosInsc = {
        textQuestion: "Pas encore inscrit ?",
        textContent: "Rejoins notre communauté de gourmands dès à présent ! 🍗",
        btnText: "INSCRIPTION",
    };
    const formFooterInfosCon = {
        textQuestion: "Déjà inscrit ?",
        textContent: "Connecte toi dès à présent ! 🍗",
        btnText: "CONNEXION",
    };

    return (
        <div className="co-page">
            <div className="co-page__container">
                <Presentation />
                <div className="form__container">
                    <div>
                        <FormLogo logoPath={logoPath} />
                        <LoginForm
                            logoPath={logoPath}
                            setLogoPath={setLogoPath}
                        />
                    </div>
                    <FormFooter
                        textQuestion={formFooterInfosInsc.textQuestion}
                        textContent={formFooterInfosInsc.textContent}
                        btnText={formFooterInfosInsc.btnText}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConnectionPage;
