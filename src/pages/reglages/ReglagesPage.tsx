import { useContext } from "react";
import { Layout } from "../../components";
import { Button } from "../../components/UI";
import { AuthContext } from "../../context/AuthContext";
import { userService } from "../../services/userService";
import "./reglagesPage.css";

const ReglagesPage: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);

    const onClickLogout = () => {
        userService.logOut();
    };
    return (
        <Layout>
            <div className="settings-page">
                <div className="settings">
                    {state && state.user?.role === "admin" && (
                        <a href="/dashboard" target="_blank">
                            Aller vers le Tableau de bord
                        </a>
                    )}
                    <div>
                        <Button onClick={onClickLogout}>Se déconnecter</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ReglagesPage;
