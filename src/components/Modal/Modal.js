import React from 'react';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from '../../context/ModalContext';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Modal = () =>
{
    const { modalState, closeModal } = useModal();

    if (!modalState.open) return null;

    return (
        <div className={`modal ${modalState.open ? 'modal open' : 'modal'}`}>
            <div className="modal_container">
                <div className="text_container">
                    <FontAwesomeIcon icon={faCircleXmark} onClick={closeModal} />
                    <p>{modalState.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
