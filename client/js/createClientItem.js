export const createClientItem = (data) => {
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
    
    clientId.textContent = data.id.substr(0, 6);
    clientName.textContent = data.name;
    clientSurname.textContent = data.surname;
    clientLastName.textContent = data.lastName;
    clientEdit.textContent = 'Изменить';
    clientDelete.textContent = 'Удалить';

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