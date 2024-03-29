/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminProfile from "./AdminProfile";

describe("Test sur le composant DashBoardLayout", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    test("doit fournir un rendu", () => {
        const users = {
            _id: '1',
            firstname: "TestName",
            lastname: "TestLastName",
            email: "test@mail.com",
            role: "user",
            password: "1234",
            outingPart: 0,
            outingCre: 0,
            city: "lille",
        };
        render(
            <BrowserRouter>
                <AdminProfile user={users} />
            </BrowserRouter>
        );
    });
});
