import { useState } from "react";

const useModal: () => {
    show: boolean;
    toggle: () => void;
} = () => {
    const [show, setShow] = useState<boolean>(false);

    const toggle = () => {
        setShow(!show);
    };

    return {
        show,
        toggle,
    };
};

export default useModal;
