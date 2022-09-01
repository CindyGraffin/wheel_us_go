import './presentation.css';

const Presentation: React.FC<unknown> = () => {
    return (
        <div className="pres__container">
            <div className="logo">
                <img src={require("./logo.png")} alt="" />
            </div>
        </div>
    );
};

export default Presentation;
