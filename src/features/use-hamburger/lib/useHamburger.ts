export const useHamburger = () => {
    const open = () => {
        console.log('open');
    }

    const close = () => {
        console.log('close');
    }

    const switchActive = () => {
        console.log('switch');
    }

    return {open, close, switchActive};
}