

// import React from 'react';
// import './Modal.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useModal } from '../../context/ResultContext';
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

// const Modal = ({ result }) =>
// {
//     const { modalState, closeModal } = useModal();

//     if (!modalState.open) return null;

//     return (
//         <div className={`modal ${modalState.open ? 'modal open' : 'modal'}`}>
//             <div className="modal_container">
//                 <div className="text_container">
//                     <FontAwesomeIcon icon={faCircleXmark} onClick={closeModal} />
//                     <p>{modalState.text}</p>
//                     <span>¿Adquirirías este producto?</span>
//                     <select>
//                         <option value="si">Si</option>
//                         <option value="no">No</option>
//                     </select>
//                     <span>¿Por qué?</span>
//                     <textarea name="porque" id="porque"></textarea>
//                     <button>Enviar</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;

// import React from 'react';
// import './Modal.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useModal } from '../../context/ResultContext';
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

// const Modal = () =>
// {
//     const { modalState, closeModal } = useModal();

//     if (!modalState.open) return null;

//     return (
//         <div className={`modal ${modalState.open ? 'modal open' : 'modal'}`}>
//             <div className="modal_container">
//                 <div className="text_container">
//                     <FontAwesomeIcon icon={faCircleXmark} onClick={closeModal} />
//                     <p>{modalState.text}</p>
//                     <span>¿Adquirirías este producto?</span>
//                     <select>
//                         <option value="si">Si</option>
//                         <option value="no">No</option>
//                     </select>
//                     <span>¿Por qué?</span>
//                     <textarea name="porque" id="porque"></textarea>
//                     <button>Enviar</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;
