import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

interface ModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    headerTitle?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    show,
    setShow,
    headerTitle,
    children,
}) =>
    show
        ? ReactDOM.createPortal(
              <>
                  <div className="modal_overlay">
                      <div className="modal_wrapper">
                          <div className="modal">
                              <div className="button__container">
                                  <button
                                      type="button"
                                      className="modal_close_button"
                                      onClick={() => setShow(!show)}
                                  >
                                      <span>&times;</span>
                                  </button>
                              </div>
                              {headerTitle && (
                                  <div className="modal_header">
                                      <h4>{headerTitle}</h4>
                                  </div>
                              )}

                              <div>{children}</div>
                          </div>
                      </div>
                  </div>
              </>,
              document.body
          )
        : null;

export default Modal;
