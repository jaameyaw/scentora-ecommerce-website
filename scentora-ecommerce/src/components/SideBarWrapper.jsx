import '../App.css'

export default function SideBarWrapper({isOpen, onClose, position, className, headerContent, children}) {
    return (
        <>
            <div 
                className={`sidebarOverlay ${isOpen ? 'visible' : ''}`} 
                onClick={onClose}
            ></div>

            <div className={`sidebarWrapper ${isOpen ? 'open' : ''} ${position}`}>
                <div className={className}>
                    <h2>{headerContent}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                {children}
            </div>
        </>
    )
}