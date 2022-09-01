import './formFooter.css';

interface FormFooterProps {
    textQuestion: string;
    textContent: string;
    btnText: string;
    onClick: () => void;
}

const FormFooter: React.FC<FormFooterProps> = ({textQuestion, textContent, btnText, onClick}) => {
    return (
        <div className="form-footer">
            <p>{textQuestion}</p>
            <p>{textContent}</p>
            <button className="footer-btn" onClick={onClick}>{btnText}</button>
        </div>
    );
};

export default FormFooter;
