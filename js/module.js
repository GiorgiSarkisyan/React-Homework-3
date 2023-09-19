export const applyButtonStyles = (buttonElement) => {
    buttonElement.style.color = "#23A6F0";
    buttonElement.style.fontFamily = "Montserrat";
    buttonElement.style.fontWeight = "700";
    buttonElement.style.fontSize = "14px";
    buttonElement.style.lineHeight = "22px";
    buttonElement.style.padding = "15px 40px 15px 40px";
    buttonElement.style.border = "1px solid #23A6F0";
    buttonElement.style.display = "flex";
    buttonElement.style.justifyContent = "center";
    buttonElement.style.alignItems = "center";
    buttonElement.style.transition = "0.3s";
    buttonElement.style.cursor = "pointer";
  };


export const ButtonHoverStyles = (buttonElement) => {
    buttonElement.addEventListener("mouseover", () => {
        buttonElement.style.color = "white"
        buttonElement.style.backgroundColor = "#23A6F0"
    })
    buttonElement.addEventListener("mouseout", () => {
        buttonElement.style.color = "#23A6F0"
        buttonElement.style.backgroundColor = "#252B42"

    })
}


export const bottomPartDivStyles = (div) => {
    div.style.width = "335px"
    div.style.height = "300px"
    div.style.backgroundColor = "white"
    div.style.transition = "0.5s"
    div.style.display = "flex"
}


export const bottomPartDivContentStyles = (div) => {
    div.style.padding = "35px 40px 35px 40px"
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.gap = "20px"
    div.style.transition = "0.5s"
}


export const BottomPartDivLogoStyles = (div) => {
    div.style.width = "70px"
    div.style.height = "76px"
    div.style.display = "flex"
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    div.style.borderRadius = "10px"
    div.style.transition = "0.5s"
}


export const bottomPartDivTitleStyles = (div) => {
    div.style.fontFamily = "Montserrat"
    div.style.fontWeight = "700"
    div.style.fontSize = "16px"
    div.style.color = "#252B42"
    div.style.position = "relative"
    div.style.transition = "0.5s"
}


export const bottomPartDivLineStyles = (div) => {
    div.style.backgroundColor = "#E74040"
    div.style.display = "block"
    div.style.width = "50px"
    div.style.height = "2px"
    div.style.transition = "0.5s"
}


export const bottomPartDivParagraphStyles = (div) => {
    div.style.fontFamily = "Montserrat"
    div.style.fontWeight = "400"
    div.style.fontSize = "14px"
    div.style.lineHeight = "20px"
    div.style.transition = "0.5s"
}