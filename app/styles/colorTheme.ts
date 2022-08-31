import { DefaultTheme } from "styled-components";

export const TEXT_COLORS = {
white: "#FFFFFF",
peach: "#FCBC98",
pale: "#C0CBEB",
sand: "#CBAE99",
gray: "#818181",
lavendar: "#A2A0EC",
lightGray: "#C9CACF"
}

const theme: DefaultTheme = (()=> {
    const text = {
        ...TEXT_COLORS
    }
    return {
        text: {text}
    }
})()

export default {theme}