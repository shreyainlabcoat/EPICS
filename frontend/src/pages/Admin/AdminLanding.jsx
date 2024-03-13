// Version 3
import React, { useState } from "react";
import { Navbar } from '../../components/Navbar';
import '../../indexs.css';

function AdminLanding() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState("");

    const openModal = (button) => {
        setModalOpen(true);
        setSelectedButton(button);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleButtonClick = (action) => {
        // Handle the button click based on the selected action
        console.log(`Performing ${action} action for ${selectedButton}`);
        closeModal(); // Close the modal after performing the action
    };

    const getPopupTitle = () => {
        switch (selectedButton) {
            case "NGO":
                return "NGO Options";
            case "VOLUNTEER":
                return "Volunteer Options";
            default:
                return "";
        }
    };

    return (
        <div className="admin-landing-container">
            <Navbar />
            <h1 className="welcome-text">Welcome, Admin</h1>
            <div className="button-container">
                <button className="action-button" onClick={() => openModal("NGO")}>
                    NGO
                </button>
                <button className="action-button" onClick={() => handleButtonClick("View Case")}>
                    VIEW CASE
                </button>
                <button className="action-button" onClick={() => openModal("VOLUNTEER")}>
                    VOLUNTEER
                </button>
                <button className="action-button" onClick={() => handleButtonClick("View Counsellor")}>
                    VIEW COUNSELLOR
                </button>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="popup-title">{selectedButton} Options</div>
                        {selectedButton !== "View Case" && selectedButton !== "View Counsellor" && (
                            <>
                                <button onClick={() => handleButtonClick("add")}>Add</button>
                                <button onClick={() => handleButtonClick("update")}>Update</button>
                                <button onClick={() => handleButtonClick("delete")}>Delete</button>
                                <button onClick={() => handleButtonClick("view")}>View</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminLanding;
