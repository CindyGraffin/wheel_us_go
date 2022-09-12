import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DashboardUserInformationModal from "./DashboardUserInformationModal";

describe("Test sur la page DashboardUsersInformationModal", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    const user = {
        _id: '1234',
        firstname: "TestName",
        lastname: "BTestLastName",
        email: "test@mail.com",
        role: "user",
        password: "1234",
        outingPart: 0,
        outingCre: 0,
        city: "lille",
        birthday: new Date(),
        createdAt: new Date(),
    };

    test("Le composant doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <DashboardUserInformationModal />
            </BrowserRouter>
        );
    });

    test("Le composant doit fournir un rendu avec un user", () => {
        render(
            <BrowserRouter>
                <DashboardUserInformationModal user={user} />
            </BrowserRouter>
        );
    });
});
