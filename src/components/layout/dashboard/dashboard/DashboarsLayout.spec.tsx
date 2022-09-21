/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

describe("Test sur le composant DashBoardLayout", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <DashboardLayout>
                    <p>Test Content</p>
                </DashboardLayout>
            </BrowserRouter>
        );
    });
});
