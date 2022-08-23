import React from "react";

interface FormFooterProps {
    textQuestion: string;
    textContent: string;
    btnText: string;
}

const FormFooter: React.FC<FormFooterProps> = ({textQuestion, textContent, btnText}) => {
    return (
        <div className="form-footer">
            <p>{textQuestion}</p>
            <p>{textContent}</p>
            <button className="footer-btn">{btnText}</button>
        </div>
    );
};

export default FormFooter;
