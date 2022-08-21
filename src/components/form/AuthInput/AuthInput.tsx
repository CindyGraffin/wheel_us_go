import './authInput.css';

interface AuthInputProps {
    inputType: string;
    inputPlaceholder: string;
    inputId: string;
    nameField: any;
    formErrors: any;
    textError: string;
    onChange: (e: any) => void
}

const AuthInput: React.FC<AuthInputProps> = ({inputType, inputPlaceholder, inputId, nameField, textError, onChange, formErrors}) => {
	return (
		<div className="input-container">
			<input
				placeholder={inputPlaceholder}
				type={inputType}
				id={inputId}
				{...nameField}
				onChange={onChange}
			/>
			{formErrors && (
				<span className="input-error">{textError}</span>
			)}
		</div>
	);
};

export default AuthInput;
