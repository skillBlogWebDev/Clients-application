import { svgPreloadMain } from "./svg.js";

export const createPreloader = () => {
    const preloaderBlock = document.createElement('div');
    const preloaderCircle = document.createElement('span');

    preloaderBlock.classList.add('preloader');
    preloaderCircle.id = 'loader';

    preloaderCircle.innerHTML = svgPreloadMain;

    preloaderBlock.append(preloaderCircle);

    return preloaderBlock;
};