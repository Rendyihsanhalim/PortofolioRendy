export const slideUp = {
    initial: {
        y: "100%",
    },
    open: {
        y: "0%",
        transition: {duration: 0.8, delay: 0.05}
    },
    closed:{
        y: "100%",
        transition: {duration: 0.8,delay:0.05 }
    },
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}
