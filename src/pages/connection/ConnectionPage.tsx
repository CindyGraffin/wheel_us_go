import { useState } from "react";
import LoginForm from "../../components/form/loginForm/LoginForm";
import './connectionPage.css';

const ConnectionPage: React.FC<unknown> = () => {
	const [logoPath, setLogoPath] = useState<string>('./logo.png')
	return (
		<div className="co-page">
			<div className="co-page__container">
				<div> hey</div>
				<div className="form__container">
                    <div>
                        <div className="co-logo">
                            <div className="logo">
                                <img src={require(`${logoPath}`)} alt="" />
                            </div>
                        </div>
                        <LoginForm logoPath={logoPath} setLogoPath={setLogoPath}/>
                    </div>
                    <div className="no-account">
                        <p>Pas encore inscrit ?</p>
                        <p>Rejoins notre communauté de gourmands dès à présent !</p>
                        <button className="connect-btn">INSCRIPTION</button>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default ConnectionPage;
