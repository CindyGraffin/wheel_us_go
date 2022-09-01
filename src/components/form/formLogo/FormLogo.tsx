import './formLogo.css';

interface FormLogoProps {
    logoPath: string;
}

const FormLogo: React.FC<FormLogoProps> = ({ logoPath }) => {
    return (
        <div className="co-logo">
            <div className="logo">
                <img src={require(`${logoPath}`)} alt="" />
            </div>
        </div>
    );
};

export default FormLogo;
