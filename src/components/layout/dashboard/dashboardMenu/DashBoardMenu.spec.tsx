/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import fireEvent from "@testing-library/user-event";
import DashboardMenu from "./DashboardMenu";

describe("Test sur le composant DashBoardMenu", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("Le composant doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <DashboardMenu />
            </BrowserRouter>
        );
    });

    describe("Test sur les actions possibles", () => {
        test("Je ne clique pas sur la flèche le panneau doit resté caché", () => {
            render(
                <BrowserRouter>
                    <DashboardMenu />
                </BrowserRouter>
            );

            const panel = document.querySelector(".dashboard_nav");
            expect(panel).toHaveClass("hide__menu");
        });

        test("Je clique sur la flèche le panneau s'ouvre", () => {
            render(
                <BrowserRouter>
                    <DashboardMenu />
                </BrowserRouter>
            );
            const button = document.querySelector(".display__button");
            fireEvent.click(button!);
            const panel = document.querySelector(".dashboard_nav");
            expect(panel).toHaveClass("show__menu");
        });

        test("Je clique sur la flèche quand le panneau est ouvert, il doit se refermer", () => {
            render(
                <BrowserRouter>
                    <DashboardMenu />
                </BrowserRouter>
            );
            const button = document.querySelector(".display__button");
            fireEvent.click(button!);
            fireEvent.click(button!);
            const panel = document.querySelector(".dashboard_nav");
            expect(panel).toHaveClass("hide__menu");
        });
    });
});
