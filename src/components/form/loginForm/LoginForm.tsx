import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";
import "./loginForm.css";
import {RiErrorWarningLine} from '../../../icons/index'

type LoginFormValues = {
	email: string;
	password: string;
};
interface ICredentials {
	email: undefined | string;
	password: undefined | string;
}
interface LoginFormProps {
	logoPath: string;
	setLogoPath: React.Dispatch<React.SetStateAction<string>>
}

const LoginForm: React.FC<LoginFormProps> = ({logoPath, setLogoPath}) => {

	const [credentials, setCredentials] = useState<ICredentials>({
		email: undefined,
		password: undefined,
	});
	const { state, dispatch } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormValues>({ mode: "onChange" });

	const emailField = register("email", { required: true });
	const passwordField = register("password", { required: true });


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCredentials((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const navigate = useNavigate();
	const baseUrl = process.env.REACT_APP_BASE_URL;

	const onSubmit = async (e: any) => {
		dispatch({ type: "LOGIN_START", payload: null });
		try {
			const response = await axios.post(
				`${baseUrl}auth/login`,
				credentials
			);
			dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
			navigate("/profile", { replace: true });
		} catch (error) {
			dispatch({ type: "LOGIN_FAILURE", payload: null });
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="co-form">
			<div className="input-container">
				<input
					placeholder="Votre adresse mail"
					type="email"
					id="email"
					{...emailField}
					onChange={(e) => {
						emailField.onChange(e);
						handleChange(e);
					}}
				/>
				{errors.email && <span className="input-error">Adresse mail requise</span>}
			</div>
			<div className="input-container">
				<input
					placeholder="Votre mot de passe"
					type="password"
					id="password"
					{...passwordField}
					onChange={(e) => {
						passwordField.onChange(e);
						handleChange(e);
					}}
					onFocus={() => setLogoPath('./logo-close.png')}
					onBlur={() => setLogoPath('./logo.png')}
				/>
				{errors.password && <span className="input-error">Mot de passe requis</span>}
			</div>
			<p className="forget-pw">Vous avez oublié votre mot de passe ?</p>
			{state.loading ? 
				<button className="loading">CHARGEMENT ...</button> 
				: 
				<button type="submit" className="connect-btn">SE CONNECTER</button> 
			}
			{state.error && 
				<div className="co-error">
					<RiErrorWarningLine className="co-error-icon"/>
					<p>Adresse mail introuvable ou mot de passe incorrect</p>
				</div>
			}
		</form>
	);
};

export default LoginForm;
