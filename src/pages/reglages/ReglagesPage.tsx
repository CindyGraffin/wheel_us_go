import { useContext } from "react";
import { Layout } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import "./reglagesPage.css";

const ReglagesPage: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);
    return (
        <Layout>
            <div>
                {state && state.user?.role === "admin" && (
                    <a href="/dashboard" target="_blank">
                        Aller vers le Tableau de bord
                    </a>
                )}
            </div>
        </Layout>
    );
};

export default ReglagesPage;
