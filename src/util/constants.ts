
const constants = {
    PAGE_SIZE: 4,
    URL :'https://668a33b22c68eaf3211c303c.mockapi.io/api/v1',
}
export default constants;

export enum SIZES {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
}

export const CONTROL_SIZES = {
    [SIZES.XS]: 7,
    [SIZES.SM]: 9,
    [SIZES.MD]: 11,
    [SIZES.LG]: 14,
}

export const LAYOUT = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
    INLINE: 'inline',
}