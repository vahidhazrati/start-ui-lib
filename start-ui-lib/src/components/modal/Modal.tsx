import React from 'react';
type ModalProps = {
    isOpen: boolean,
    onClose: () => void; // Optional close handler
};
const Modal: React.FC<ModalProps> = ({isOpen,onClose}) => {
    if (!isOpen) return null; // Don't render anything if the modal is not open

    // Modal content
   return( <>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">This is a simple modal component.</p>
            <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Close
            </button>
        </div>
    </div>
    </>
    );
};
export default Modal;