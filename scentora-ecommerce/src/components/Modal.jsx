import { useEffect, useState } from "react";
import "../App.css";

export default function Modal({ isOpen, onClose, position = "left", children }) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            // Delay to trigger animation
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            setTimeout(() => setShouldRender(false), 300); // match CSS duration
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <>
            <div className={`modal-overlay ${isVisible ? "visible" : ""}`} onClick={onClose}></div>
            <div className={`modal modal-${position} ${isVisible ? "slide-in" : "slide-out"}`}>
                <button className="close-button" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </>
    );
}
