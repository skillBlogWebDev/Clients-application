import { createClientsForm } from "./createModalForm.js";

export const editClientModal = (data) => {
    const editModal = document.createElement('div');
    const editModalContent = document.createElement('div');
    const createForm = createClientsForm();

    editModal.classList.add('modal-edit', 'site-modal', 'modal-active');
    editModalContent.classList.add('edit-modal__content', 'site-modal__content', 'modal-active');

    createForm.modalTitle.textContent = 'Изменить данные';
    createForm.cancelBtn.textContent = 'Удалить клиента';

    editModalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
    editModal.append(editModalContent);

    return {
        editModal,
        editModalContent
    }
} 