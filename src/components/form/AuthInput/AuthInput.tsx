import "./authInput.css";

interface AuthInputProps {
	inputType: string;
	inputPlaceholder: string;
	inputId: string;
	nameField: any;
	formErrors: any;
	textError: string;
	onChange: (e: Event) => void;
    setLogoPath: React.Dispatch<React.SetStateAction<string>>
}

const AuthInput: React.FC<AuthInputProps> = ({
	inputType,
	inputPlaceholder,
	inputId,
	nameField,
	textError,
	onChange,
	formErrors,
    setLogoPath
}) => {
	return (
		<div className="input-container">
			{inputId === "password" ? (
				<input
					placeholder={inputPlaceholder}
					type={inputType}
					id={inputId}
					{...nameField}
					onChange={onChange}
                    onFocus={() => setLogoPath('./logo-close.png')}
                    onBlur={() => setLogoPath('./logo-open.png')}
				/>
			) : (
				<input
					placeholder={inputPlaceholder}
					type={inputType}
					id={inputId}
					{...nameField}
					onChange={onChange}
				/>
			)}
			{formErrors && <span className="input-error">{textError}</span>}
		</div>
	);
};

export default AuthInput;
