export const slideUp = {
    initial: {
        x: "-100%",
    },
    open: (i) => ({
        x: "0%",
        transition: {duration: 0.5, delay: 0.02 * i}
    }),
    closed:(i) => ({
        x: "-100%",
        transition: {duration: 0.5}
    }),
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