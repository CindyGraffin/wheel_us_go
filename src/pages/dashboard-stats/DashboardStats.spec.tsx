import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DashboardStats from "./DashboardStats";

describe("Test sur la page DashboardState", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("Le composant doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <DashboardStats />
            </BrowserRouter>
        );
    });

});
