import { createContactItem } from "./createContact.js";
import { svgContactDefault, svgContactHover, svgSpinner } from "./svg.js";
import { validateClientForm } from "./validateForm.js";

export const createClientsForm = () => {
    const modalTitle = document.createElement('h2');
    const modalClose = document.createElement('button');
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const labelName = document.createElement('label');
    const inputSurname = document.createElement('input');
    const labelSurname = document.createElement('label');
    const inputLastName = document.createElement('input');
    const labelLastName = document.createElement('label');
    const requiredName = document.createElement('span');
    const requiredSurname = document.createElement('span');
    const addContactBtn = document.createElement('button');
    const contactBtnSvgDefault = document.createElement('span');
    const contactBtnSvgHover = document.createElement('span');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const contactsBlock = document.createElement('div');
    const formFloatingName = document.createElement('div');
    const formFloatingSurname = document.createElement('div');
    const formFloatingLastName = document.createElement('div');
    const saveSpinner = document.createElement('span');

    const errorBlock = document.createElement('p');
    const unacceptableLetter = document.createElement('span');
    const writeName = document.createElement('span');
    const writeSurname = document.createElement('span');
    const writeLastName = document.createElement('span');
    const requiredValue = document.createElement('span');
    const requiredContacts = document.createElement('span');

    saveSpinner.classList.add('modal__spinner');
    modalTitle.classList.add('modal__title');
    modalClose.classList.add('modal__close', 'btn-reset');
    form.classList.add('modal__form');
    formFloatingName.classList.add('form-floating');
    formFloatingSurname.classList.add('form-floating');
    formFloatingLastName.classList.add('form-floating');
    inputName.classList.add('modal__input');
    inputSurname.classList.add('modal__input');
    inputLastName.classList.add('modal__input');
    labelName.classList.add('modal__label');
    labelSurname.classList.add('modal__label');
    labelLastName.classList.add('modal__label');
    requiredName.classList.add('modal__label');
    requiredSurname.classList.add('modal__label');
    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');
    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
    cancelBtn.classList.add('modal__btn-back', 'btn-reset');
    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');
    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover');
    contactsBlock.classList.add('modal__contact');
    labelName.for = 'floatingName';
    labelSurname.for = 'floatingSurname';
    labelLastName.for = 'floatingLastName';
    inputName.id = 'floatingName';
    inputSurname.id = 'floatingSurname';
    inputLastName.id = 'floatingLastName';
    inputName.type = 'text';
    inputSurname.type = 'text';
    inputLastName.type = 'text';
    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputLastName.placeholder = 'Отчество';

    errorBlock.classList.add('modal__error');
    unacceptableLetter.id = 'unacceptableLetter';
    writeName.id = 'writeName';
    writeSurname.id = 'writeSurname';
    writeLastName.id = 'writeLastName';
    requiredValue.id = 'requiredValue';
    requiredContacts.id = 'requiredContacts';

    saveSpinner.innerHTML = svgSpinner;
    modalTitle.textContent = 'Новый клиент';
    labelName.textContent = 'Имя';
    labelSurname.textContent = 'Фамилия';
    labelLastName.textContent = 'Отчество';
    addContactBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = 'Отмена';
    requiredName.textContent = '*';
    requiredSurname.textContent = '*';
    contactBtnSvgDefault.innerHTML = svgContactDefault;
    contactBtnSvgHover.innerHTML = svgContactHover;

    labelName.append(requiredName);
    saveBtn.append(saveSpinner);
    labelSurname.append(requiredSurname);
    formFloatingName.append(inputName, labelName);
    formFloatingSurname.append(inputSurname, labelSurname);
    formFloatingLastName.append(inputLastName, labelLastName);
    contactsBlock.append(addContactBtn);
    errorBlock.append(writeName, writeSurname, writeLastName, requiredValue, unacceptableLetter, requiredContacts)
    form.append(
        formFloatingName,
        formFloatingSurname,
        formFloatingLastName,
        contactsBlock,
        errorBlock,
        saveBtn,
        cancelBtn
    );

    addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);

    addContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactsItems = document.getElementsByClassName('contact');

        if (contactsItems.length < 9) {
            const contactItem = createContactItem();
            contactsBlock.prepend(contactItem.contact);
            contactsBlock.style.backgroundColor = 'var(--color-athens-gray)';
            if (contactsItems.length >= 5) {
                document.querySelector('.site-modal__content').style.top = '70%';
            } else {
                document.querySelector('.site-modal__content').style.top = '50%';
            }
        } else {
            const contactItem = createContactItem();
            contactsBlock.prepend(contactItem.contact);
            addContactBtn.classList.remove('modal__btn-contact--active');
        }
    });

    addContactBtn.addEventListener('mousemove', () => {
        contactBtnSvgDefault.classList.remove('btn-contact__svg--active');
        contactBtnSvgHover.classList.add('btn-contact__svg--active');
    });

    addContactBtn.addEventListener('mouseleave', () => {
        contactBtnSvgDefault.classList.add('btn-contact__svg--active');
        contactBtnSvgHover.classList.remove('btn-contact__svg--active');
    });

    return {
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputName,
        inputSurname,
        inputLastName,
        labelName,
        labelSurname,
        labelLastName,
        contactsBlock,
        addContactBtn
    };
}

