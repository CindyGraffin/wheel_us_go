/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, renderHook } from "@testing-library/react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardUserTable from "./DashboardUserTable";

describe("Test sur le composant DashBoardUserTable", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    const users = [
        {
            _id: '1',
            firstname: "TestName",
            lastname: "BTestLastName",
            email: "test@mail.com",
            role: "user",
            password: "1234",
            outingPart: 0,
            outingCre: 0,
            city: "lille",
        },
        {
            _id: '2',
            firstname: "TestName2",
            lastname: "BTestLastName",
            email: "test@mail.com",
            role: "user",
            password: "1234",
            outingPart: 0,
            outingCre: 0,
            city: "lille",
        },
        {
            _id: '3',
            firstname: "TestName",
            lastname: "ATestLastName",
            email: "test@mail.com",
            role: "user",
            password: "1234",
            outingPart: 0,
            outingCre: 0,
            city: "Lomme",
        },
    ];

    const { result } = renderHook(() => {
        const [showModal, setShowModal] = useState<boolean>(false);

        return { showModal, setShowModal };
    });

    test("doit fournir un rendu", () => {
        render(
            <BrowserRouter>
                <DashboardUserTable users={users} />
            </BrowserRouter>
        );

        const text = document.querySelector(".grid_header_name");
        expect(text).toHaveTextContent("Nom");
    });

    test("la modal doit s'ouvrir quand je clique su l'oeil", () => {
        render(
            <BrowserRouter>
                <DashboardUserTable users={users} />
            </BrowserRouter>
        );

        const button = document.querySelector(".see_more_button");
        fireEvent.click(button!);

        expect(true).toBe(!result.current.showModal);
    });
});
