import { createContactItemByType, formatDate, formatTime } from "./utils.js";

export const createClientItem = (data) => {
    console.log(data);
    const clientTr = document.createElement('tr');
    const clientId = document.createElement('span');
    const clientFullName = document.createElement('td');
    const clientName = document.createElement('span');
    const clientSurname = document.createElement('span');
    const clientLastName = document.createElement('span');
    const clientCreated = document.createElement('td');
    const createDate = document.createElement('span');
    const createdTime = document.createElement('span');
    const clientChanged = document.createElement('td');
    const changedDate = document.createElement('span');
    const changedTime = document.createElement('span');
    const clientContacts = document.createElement('td');
    const clientActions = document.createElement('td');
    const clientEdit = document.createElement('button');
    const clientDelete = document.createElement('button');

    clientTr.classList.add('clients__item');
    clientTr.id = data.id;
    clientId.classList.add('client__id');
    clientFullName.classList.add('clients__full-name');
    clientName.classList.add('clients__name');
    clientSurname.classList.add('clients__surname');
    clientLastName.classList.add('clients__lastname');
    clientCreated.classList.add('clients__created');
    createDate.classList.add('created__date');
    createdTime.classList.add('created__time');
    clientChanged.classList.add('clients__changed');
    changedDate.classList.add('changed__date');
    changedTime.classList.add('changed__time');
    clientContacts.classList.add('clients__contacts');
    clientActions.classList.add('clients__actions');
    clientContacts.classList.add('clients__contacts');
    clientDelete.classList.add('clients__delete', 'btn-reset');
    clientEdit.classList.add('clients__edit', 'btn-reset');

    for (const contact of data.contacts) {
        createContactItemByType(contact.type, contact.value, clientContacts);
    }
 
    clientId.textContent = data.id.substr(0, 6);
    clientName.textContent = data.name;
    clientSurname.textContent = data.surname;
    clientLastName.textContent = data.lastName;
    clientEdit.textContent = 'Изменить';
    clientDelete.textContent = 'Удалить';
    createDate.textContent = formatDate(data.createdAt);
    createdTime.textContent = formatTime(data.createdAt);
    changedDate.textContent = formatDate(data.updatedAt);
    changedTime.textContent = formatTime(data.updatedAt);

    clientFullName.append(clientName, clientSurname, clientLastName);
    clientCreated.append(createDate, createdTime);
    clientChanged.append(changedDate, changedTime);
    clientActions.append(clientEdit, clientDelete);
    clientTr.append(
        clientId,
        clientFullName,
        clientCreated,
        clientChanged,
        clientContacts,
        clientActions
    );

    return clientTr;
}