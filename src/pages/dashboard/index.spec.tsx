import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from ".";

describe("Test sur la page Dashboard", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("Le composant doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );
    });

    //TODO: Ajouter test Pour vérifier le loader
});
