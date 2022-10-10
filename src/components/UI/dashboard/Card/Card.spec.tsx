/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("Test sur le composant Card", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("Le composant doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <Card>
                    <p className="test">test</p>
                </Card>
            </BrowserRouter>
        );
    });
});
