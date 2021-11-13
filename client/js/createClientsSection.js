import { svgAddUser } from "./svg.js";

export const createClientsSection = () => {
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const container = document.createElement('div');
    const main = document.createElement('main');
    const sortingDisplay = document.createElement('thead');
    const theadTr = document.createElement('tr');
    const sortingDisplayId = document.createElement('td');
    const sortingDisplayName = document.createElement('td');
    const sortingDisplayCreate = document.createElement('td');
    const sortingDisplayEdit = document.createElement('td');
    const sortingDisplayContacts = document.createElement('td');
    const sortingDisplayActions = document.createElement('td');
    const sortingDisplaySpan = document.createElement('span');
    const addUserBtn = document.createElement('button');
    const addUserBtnSvg = document.createElement('span');
    const tableWrapper = document.createElement('div');
    const clientsTable = document.createElement('table');
    const tbody = document.createElement('tbody');
    const createSpan = document.createElement('span');
    const editSpan = document.createElement('span');

    section.classList.add('clients');
    tableWrapper.classList.add('clients__wrapper');
    h1.classList.add('clients__heading');
    tbody.classList.add('clients__tbody');
    sortingDisplay.classList.add('clients__display', 'display-info');
    sortingDisplayId.classList.add('display-info__item', 'display-info__item--id', 'sort-up');
    sortingDisplayName.classList.add('display-info__item', 'display-info__item--name', 'sort-down');
    sortingDisplayCreate.classList.add('display-info__item', 'display-info__item--create', 'sort-down');
    sortingDisplayEdit.classList.add('display-info__item', 'display-info__item--change', 'sort-down');
    sortingDisplayContacts.classList.add('display-info__item', 'display-info__item--contacts');
    sortingDisplayActions.classList.add('display-info__item', 'display-info__item--actions');
    sortingDisplaySpan.classList.add('display-info__sorting');
    addUserBtn.classList.add('clients__btn', 'btn-reset');
    addUserBtnSvg.classList.add('clients__svg');
    container.classList.add('container', 'clients__container');
    clientsTable.classList.add('clients__table');
    main.classList.add('main');
    createSpan.classList.add('create__span');
    editSpan.classList.add('change__span');

    h1.textContent = 'Клиенты';
    sortingDisplayId.textContent = 'id';
    sortingDisplayName.textContent = 'Фамилия Имя Отчество';
    sortingDisplaySpan.textContent = 'а-я';
    sortingDisplayCreate.textContent = 'Дата и время ';
    sortingDisplayEdit.textContent = 'Последние ';
    sortingDisplayContacts.textContent = 'Контакты ';
    sortingDisplayActions.textContent = 'Действия ';
    addUserBtn.textContent = 'Добавить клиента';
    addUserBtnSvg.innerHTML = svgAddUser;

    main.append(section);
    section.append(container);
    sortingDisplayName.appendChild(sortingDisplaySpan);
    sortingDisplayCreate.append(createSpan);
    sortingDisplayEdit.append(editSpan);
    theadTr.append(
        sortingDisplayId,
        sortingDisplayName,
        sortingDisplayCreate,
        sortingDisplayEdit,
        sortingDisplayContacts,
        sortingDisplayActions
    );
    sortingDisplay.append(theadTr);
    tableWrapper.append(clientsTable);
    clientsTable.append(sortingDisplay, tbody);
    addUserBtn.append(addUserBtnSvg);
    container.append(h1, tableWrapper, addUserBtn);

    return {
        main,
        clientsTable,
        tbody
    }
}