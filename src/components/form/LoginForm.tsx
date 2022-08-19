
import axios from "axios";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";

type LoginFormValues = {
    email: string;
    password: string;
}
interface ICredentials {
	email: undefined | string;
	password: undefined | string;
}

const LoginForm: React.FC<unknown> = () => {
	const [credentials, setCredentials] = useState<ICredentials>({
		email: undefined,
		password: undefined
	})
	const {state, dispatch} = useContext(AuthContext);
	const { register, handleSubmit, formState: {errors}, getValues} = useForm<LoginFormValues>({mode: "onChange"});
    const onSubmit: SubmitHandler<LoginFormValues> = data => console.log(data);

	const handleClick = async(e: any) => {
	
		dispatch({type: 'LOGIN_START', payload: null})
		try {
			const response = await axios.post('http://localhost:8800/api/auth/login', credentials)
			dispatch({type: 'LOGIN_SUCCESS', payload: response.data})
		} catch (error) {
			dispatch({type: 'LOGIN_FAILURE', payload: null})
		}
	}

	const emailField = register('email', {required: true})
	
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCredentials(prev => ({
			...prev,
			[e.target.id]: e.target.value
		}))
	}
	return (
		<form onSubmit={handleSubmit(handleClick)}>
			<input 
				placeholder="Votre adresse mail" 
				type="email" 
				id="email"
				{...emailField}
				onChange={(e)=> {
					emailField.onChange(e)
					handleChange(e)
				}}
				
				
			/>
			{errors.email && <span>Adresse mail requise</span>}
			<input 
				placeholder="Votre mot de passe" 
				type="password" 
				id="password"
				{...register("password", { required: true })} 
				onChange={(e) => {
					emailField.onChange(e)
					handleChange(e)
				}} />
			{errors.password && <span>Mot de passe requis</span>}
			<button type="submit">Se connecter</button> 
		</form>
	);
};

export default LoginForm;
