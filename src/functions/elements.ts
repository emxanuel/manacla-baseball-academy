
const toggleShowElement = (element: HTMLElement, styles: CSSModuleClasses) => {
    element.classList.remove(styles.notShow)
    if (!element.classList.toggle(styles.hidden)){
        element.style.display = 'flex'
    }
    else{
        setTimeout(() => {
            element.style.display ='none'
        }, 300)
    }

    // if (element.style.display === "flex"){
    //     element.style.display = "none"
    // }
    // else{
    //     element.style.display = "flex"
    // }
};

const selectedPage = () => {
    const anchor = document.querySelector(`li > a[href='${window.location.pathname}']`) as HTMLElement
    if (anchor === null){
        selectedPage()
    }
    else{
        anchor.style.fontWeight = '800';
    }

}

window.addEventListener('load', () => selectedPage())

export { toggleShowElement, selectedPage };
