import { useAction } from "../hooks/useActions";



export function closePopupBySpaceClick({ event, closeState, closeStateArg }) {
    let test = document.getElementsByClassName('popup popup_active');

    if (event.target === test[0]) {
        closeState()
    }

}