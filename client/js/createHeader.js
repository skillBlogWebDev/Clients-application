export const createClientsHeader = () => {
    const header = document.createElement('header');
    const logo = document.createElement('a');
    const logoImg = document.createElement('img');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const inner = document.createElement('div');
    const findList = document.createElement('ul');

    findList.classList.add('find-list', 'hide');
    header.classList.add('header');
    container.classList.add('container', 'header__container');
    logo.classList.add('logo', 'header__logo');
    logoImg.classList.add('logo__img');
    logoImg.src = 'img/logo.png';
    logoImg.alt = 'Logotype Clients';
    form.classList.add('header__form');
    input.classList.add('header__input');
    wrapper.classList.add('header__wrapper');
    inner.classList.add('header__inner');
    input.placeholder = 'Введите запрос';

    inner.append(input, findList);
    header.append(container);
    logo.append(logoImg);
    form.append(inner);
    container.append(logo, form);

    return header;
}