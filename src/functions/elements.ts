import navbarStyles from "../css/navbar.module.css";
const toggleShowElement = (element: HTMLElement, styles: CSSModuleClasses) => {
    element.classList.remove(styles.notShow);
    if (!element.classList.toggle(styles.hidden)) {
        element.style.display = "flex";
    } else {
        setTimeout(() => {
            element.style.display = "none";
        }, 300);
    }

    // if (element.style.display === "flex"){
    //     element.style.display = "none"
    // }
    // else{
    //     element.style.display = "flex"
    // }
};

const selectedPage = () => {
    const anchor = document.querySelector(
        `li > a[href='${window.location.pathname}']`
    ) as HTMLElement;
    if (anchor === null) {
        setTimeout(() => {
            selectedPage();
        }, 500);
    } else {
        anchor.style.fontWeight = "800";
    }
};

const makeSticky = () => {
    const navbar = document.querySelector("#navbar") as HTMLElement;
    if (navbar !== null) {
        if (window.scrollY > navbar.offsetTop + 60) {
            navbar.classList.add(navbarStyles.sticky);
        } else {
            navbar.classList.remove(navbarStyles.sticky);
        }
    }
};

const scrollZero = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

const hide = (element: HTMLElement, styles: CSSModuleClasses) => {
    element.classList.add(styles.hidden);
};

window.onscroll = makeSticky;

window.addEventListener("load", () => selectedPage());

export { toggleShowElement, selectedPage, scrollZero, hide };
