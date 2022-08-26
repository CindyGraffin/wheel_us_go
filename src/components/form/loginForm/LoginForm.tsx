import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";
import "./loginForm.css";
import {RiErrorWarningLine} from '../../../icons/index'
import AuthInput from "../authInput/AuthInput";


type LoginFormValues = {
	email: string;
	password: string;
}

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

	const onChangeEmail = (e: any) => {
		emailField.onChange(e);
		handleChange(e);
	}
	const onChangePassword = (e: any) => {
		passwordField.onChange(e);
		handleChange(e);
	}

	const authInputs = [
		{
			inputPlaceholder: 'Votre addresse mail',
			inputType: 'email',
			inputId: 'email',
			nameField: emailField,
			formErrors: errors.email,
			textError: 'Addresse mail requise',
			onChange: onChangeEmail
		},
		{
			inputPlaceholder: 'Votre mot de passe',
			inputType: 'password',
			inputId: 'password',
			nameField: passwordField,
			formErrors: errors.password,
			textError: 'Mot de passe requis',
			onChange: onChangePassword
		}
	]

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
			{authInputs.map((authInput) => (
				<AuthInput 
					key={authInput.inputId}
					inputPlaceholder={authInput.inputPlaceholder} 
					inputType={authInput.inputType} 
					inputId={authInput.inputId} 
					nameField={authInput.nameField} 
					formErrors={authInput.formErrors} 
					textError={authInput.textError} 
					onChange={authInput.onChange}
					setLogoPath={setLogoPath}
				/>
			))}
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
