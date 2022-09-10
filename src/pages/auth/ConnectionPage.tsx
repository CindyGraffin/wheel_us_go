import "./connectionPage.css";
import {FormFooter, FormLogo, InscriptionForm, LoginForm, Presentation} from '../../components/index'
import { RiNewspaperLine } from "../../icons/index";
import { useState } from "react";


const ConnectionPage: React.FC<unknown> = () => {
	
	const [logoPath, setLogoPath] = useState<string>("./logo-open.png");
	const [formType, setFormType] = useState<string>("connection");

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

	/**
	 * change le type de formulaire (formulaire de connexion ou d'inscription)
	 */
	const changeTypeOfForm = () => {
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
							onClick={changeTypeOfForm}
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
							onClick={changeTypeOfForm}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ConnectionPage;
