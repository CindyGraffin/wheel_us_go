import { useContext, useState } from "react";
import FormFooter from "../../components/form/formFooter/FormFooter";
import FormLogo from "../../components/form/formLogo/FormLogo";
import Presentation from "../../components/auth/presentation/Presentation";
import LoginForm from "../../components/form/loginForm/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import "./connectionPage.css";
import InscriptionForm from "../../components/form/inscriptionForm/InscriptionForm";
import { RiNewspaperLine } from "../../icons/index";
import { useNavigate } from "react-router-dom";
const ConnectionPage: React.FC<unknown> = () => {
	const [logoPath, setLogoPath] = useState<string>("./logo-open.png");
	const [formType, setFormType] = useState<string>("connection");
	const { state } = useContext(AuthContext);
	const navigate = useNavigate();

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
	const handleClick = () => {
		formType === "connection"
			? setFormType("inscription")
			: setFormType("connection");
	};
	return (
		<div className="co-page">
			<div className="co-page__container">
				<Presentation />
				{formType === "connection" ? (
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
							onClick={handleClick}
						/>
					</div>
				) : (
					<div className="form__container">
						<div>
							<div className="inscription-title">
								<p>INSCRIPTION</p>
								<RiNewspaperLine />
							</div>
							<InscriptionForm />
						</div>
						<FormFooter
							textQuestion={formFooterInfosCon.textQuestion}
							textContent={formFooterInfosCon.textContent}
							btnText={formFooterInfosCon.btnText}
							onClick={handleClick}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ConnectionPage;
