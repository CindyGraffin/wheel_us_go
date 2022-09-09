import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { AiOutlineHome } from "react-icons/ai";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import MenuItem from "./MenuItem";

describe("Test sur le composant Menu Item", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <MenuItem
                    path="/home"
                    name="homepage"
                    icon={<AiOutlineHome />}
                />
            </BrowserRouter>
        );
    });

    test("doit fournir un rendu avec navigation", () => {
        // utiliser MemoryRouter a la place de BrowserRouter pour tester un changement d'état de navigation
        render(
            <MemoryRouter initialEntries={["/home"]}>
                <MenuItem
                    path="/home"
                    name="homepage"
                    icon={<AiOutlineHome />}
                />
            </MemoryRouter>
        );
    });
});
