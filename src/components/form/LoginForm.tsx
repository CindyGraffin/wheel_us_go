
import { useContext, useEffect, useState } from "react";
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

	useEffect(() => {
		console.log(state.user);
	}, [state.user])
	useEffect(() => {
		console.log(credentials);
	}, [credentials])
	useEffect(() => {
		console.log(credentials);
	}, [credentials])
	const emailField = register('email', {required: true})
	
	const handleChange = () => {
		setCredentials({
			email: getValues('email'),
			password: getValues('password')
		})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input 
				placeholder="Votre adresse mail" 
				type="email" 
				{...emailField}
				onChange={(e) => {
					emailField.onChange(e)
					handleChange()
				}}
				
				
			/>
			{errors.email && <span>Adresse mail requise</span>}
			<input 
				placeholder="Votre mot de passe" type="password" {...register("password", { required: true })} onChange={(e) => {
					emailField.onChange(e)
					handleChange()
				}} />
			{errors.password && <span>Mot de passe requis</span>}
			<button type="submit">Se connecter</button> 
		</form>
	);
};

export default LoginForm;
