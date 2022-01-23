export const contactTooltip = (type, value) => {
    const tooltip = document.createElement('div');
    const tooltipType = document.createElement('span');
    const tooltipValue = document.createElement('a');

    tooltip.classList.add('contact-tooltip', 'site-tooltip');
    tooltipType.classList.add('contact-tooltip__type');
    tooltipValue.classList.add('contact-tooltip__value');

    tooltipType.textContent = type + ': ';
    tooltipValue.textContent = value;

    tooltip.append(tooltipType, tooltipValue);

    return {
        tooltip,
        tooltipType,
        tooltipValue
    }
};