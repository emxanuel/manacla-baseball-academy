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

const isVisible = (element: Element) => {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.paused').forEach(element => {
            if (isVisible(element)){
                element.classList.remove('paused')
            }
        })
    })
})

scroll

export { toggleShowElement };
