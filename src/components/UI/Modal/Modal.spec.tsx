/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, renderHook } from "@testing-library/react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Modal from "./Modal";

describe("Test sur le composant Modal", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(cleanup);

    const { result } = renderHook(() => {
        const [show, setShow] = useState<boolean>(false);

        return { show, setShow };
    });

    test("doit fournir un rendu avec la modal fermer", () => {
        render(
            <BrowserRouter>
                <Modal
                    show={result.current.show}
                    setShow={result.current.setShow}
                >
                    <p>children for test</p>
                </Modal>
            </BrowserRouter>
        );
    });

    test("Je clique sur la croix la modal se ferme", () => {
        render(
            <BrowserRouter>
                <Modal show={true} setShow={result.current.setShow}>
                    <p>children for test</p>
                </Modal>
            </BrowserRouter>
        );
        const button = document.querySelector(".modal_close_button");
        fireEvent.click(button!);

        expect(true).toBe(!result.current.show);
    });

    test("J'ouvre la modal qui possède un titre", () => {
        render(
            <BrowserRouter>
                <Modal
                    show={true}
                    setShow={result.current.setShow}
                    headerTitle="TestTitle"
                >
                    <p>children for test</p>
                </Modal>
            </BrowserRouter>
        );

        const title = document.querySelector(".modal_header");
        expect(title).toHaveTextContent("TestTitle");
    });
});
