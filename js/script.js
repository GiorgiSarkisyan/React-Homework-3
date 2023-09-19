const wrapper = document.getElementById("wrapper")
wrapper.style.maxWidth = "1440px"
wrapper.style.margin = "0 auto"


const mainPageContainer = document.createElement("div")
mainPageContainer.classList.add("main-page-container")
wrapper.appendChild(mainPageContainer)
mainPageContainer.style.backgroundColor = "#252B42"
mainPageContainer.style.display = "flex"
mainPageContainer.style.justifyContent = "center"
mainPageContainer.style.alignItems = "flex-end"

const mainPageGrid = document.createElement("div")
mainPageGrid.classList.add("main-page-grid")
mainPageContainer.appendChild(mainPageGrid)
mainPageGrid.style.display = "flex"
mainPageGrid.style.flexDirection = "column"
mainPageGrid.style.gap = "100px"
mainPageGrid.style.padding = "51px 0px 100px 0px"

const mainPageUpperPart = document.createElement("div")
mainPageUpperPart.classList.add("main-page-upper-part")
mainPageUpperPart.style.maxWidth = "1050px"

const UpperPartContent = document.createElement("div")
UpperPartContent.classList.add("upper-part-content")
mainPageUpperPart.appendChild(UpperPartContent)
UpperPartContent.style.display = "flex"
UpperPartContent.style.flexDirection = "column"
UpperPartContent.style.gap = "30px"


const upperPartWelcomeDiv = document.createElement("div")
upperPartWelcomeDiv.classList.add("upper-part-welcome-box")
UpperPartContent.appendChild(upperPartWelcomeDiv)
upperPartWelcomeDiv.style.display = "flex"
upperPartWelcomeDiv.style.justifyContent = "center"


const upperPartWelcomeTitle = document.createElement("h3")
upperPartWelcomeDiv.appendChild(upperPartWelcomeTitle)
upperPartWelcomeTitle.innerHTML = "Welcome"
upperPartWelcomeTitle.style.color = "#23A6F0"
upperPartWelcomeTitle.style.fontFamily = "Montserrat"
upperPartWelcomeTitle.style.fontWeight = "700"
upperPartWelcomeTitle.style.fontSize = "16px"
upperPartWelcomeTitle.style.lineHeight = "24px"


const upperPartTitleDiv = document.createElement("div")
upperPartTitleDiv.classList.add("upper-part-title-div")
UpperPartContent.appendChild(upperPartTitleDiv)
upperPartTitleDiv.style.textAlign = "center"

const upperPartTitle = document.createElement("h1")
upperPartTitleDiv.appendChild(upperPartTitle)
upperPartTitle.innerHTML = "Selling on the <br> internet like pro"
upperPartTitle.style.color = "white"
upperPartTitle.style.fontFamily = "Montserrat"
upperPartTitle.style.fontWeight = "700"
upperPartTitle.style.fontSize = "58px"
upperPartTitle.style.lineHeight = "80px"

const upperPartSecondTitleDiv = document.createElement("div")
upperPartSecondTitleDiv.classList.add("upper-part-second-title-div")
UpperPartContent.appendChild(upperPartSecondTitleDiv)
upperPartSecondTitleDiv.style.textAlign = "center"
upperPartSecondTitleDiv.style.display = "flex"
upperPartSecondTitleDiv.style.justifyContent = "center"


const upperPartSecondTitle = document.createElement("h2")
upperPartSecondTitleDiv.appendChild(upperPartSecondTitle)
upperPartSecondTitle.innerHTML = "We know how large objects will act, but things on a small scale just do not act that way."
upperPartSecondTitle.style.color = "white"
upperPartSecondTitle.style.fontFamily = "Montserrat"
upperPartSecondTitle.style.fontWeight = "400"
upperPartSecondTitle.style.fontSize = "20px"
upperPartSecondTitle.style.lineHeight = "30px"
upperPartSecondTitle.style.maxWidth = "550px"


const upperPartButtonsDiv = document.createElement("div")
UpperPartContent.appendChild(upperPartButtonsDiv)
upperPartButtonsDiv.classList.add("upper-part-buttons-box")
upperPartButtonsDiv.style.display = "flex"
upperPartButtonsDiv.style.justifyContent = "center"
upperPartButtonsDiv.style.gap = "10px"


const upperPartButton = document.createElement("a")
upperPartButtonsDiv.appendChild(upperPartButton)
upperPartButton.innerHTML = "Get Quote Now"

const upperPartAnotherButton = document.createElement("a")
upperPartButtonsDiv.appendChild(upperPartAnotherButton)
upperPartAnotherButton.innerHTML = "Learn More"

import { applyButtonStyles } from "./module.js";
applyButtonStyles(upperPartButton)
applyButtonStyles(upperPartAnotherButton)

import { ButtonHoverStyles } from "./module.js";
ButtonHoverStyles(upperPartButton)
ButtonHoverStyles(upperPartAnotherButton)


const mainPageBottomPart = document.createElement("div")
mainPageBottomPart.classList.add("main-page-bottom-part")
mainPageGrid.appendChild(mainPageBottomPart)
mainPageBottomPart.style.display = "flex"


const BottomPartContent = document.createElement("div")
BottomPartContent.classList.add("bottom-part-content")
mainPageBottomPart.appendChild(BottomPartContent)
BottomPartContent.style.display = "flex"
BottomPartContent.style.gap = "30px"


import { bottomPartDivStyles } from "./module.js"
import { bottomPartDivContentStyles } from "./module.js"
import { bottomPartDivLineStyles } from "./module.js"
import { BottomPartDivLogoStyles } from "./module.js"
import { bottomPartDivTitleStyles } from "./module.js"
import { bottomPartDivParagraphStyles } from "./module.js"


const bottomPartDiv = document.createElement("div")
bottomPartDiv.classList.add("bottom-part-div")
BottomPartContent.appendChild(bottomPartDiv)
bottomPartDivStyles(bottomPartDiv)


const bottomPartDivContent = document.createElement("div")
bottomPartDiv.appendChild(bottomPartDivContent)
bottomPartDivContentStyles(bottomPartDivContent)


const bottomPartDivLogoBox = document.createElement("div")
bottomPartDivLogoBox.style.backgroundColor = "#FFDCD1"
bottomPartDivContent.appendChild(bottomPartDivLogoBox)
BottomPartDivLogoStyles(bottomPartDivLogoBox)


const bottomPartDivLogo = document.createElement("img")
bottomPartDivLogo.setAttribute("src", "../img/coolicon.svg")
bottomPartDivLogoBox.appendChild(bottomPartDivLogo)


const bottomPartDivTitle = document.createElement("h3")
bottomPartDivContent.appendChild(bottomPartDivTitle)
bottomPartDivTitle.innerHTML = "Training Courses"
bottomPartDivTitleStyles(bottomPartDivTitle)


const bottomPartDivLine = document.createElement("div")
bottomPartDivContent.appendChild(bottomPartDivLine)
bottomPartDivLineStyles(bottomPartDivLine)


const bottomPartDivParagraph = document.createElement("p")
bottomPartDivContent.appendChild(bottomPartDivParagraph)
bottomPartDivParagraphStyles(bottomPartDivParagraph)
bottomPartDivParagraph.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour..."

const bottomPartSecondDiv = document.createElement("div")
bottomPartSecondDiv.classList.add("bottom-part-div")
BottomPartContent.appendChild(bottomPartSecondDiv)
bottomPartDivStyles(bottomPartSecondDiv)


const bottomPartSecondDivContent = document.createElement("div")
bottomPartSecondDivContent.classList.add("bottom-part-div")
bottomPartSecondDiv.appendChild(bottomPartSecondDivContent)
bottomPartDivContentStyles(bottomPartSecondDivContent)


const bottomPartSecondDivLogoBox = document.createElement("div")
bottomPartSecondDivContent.appendChild(bottomPartSecondDivLogoBox)
BottomPartDivLogoStyles(bottomPartSecondDivLogoBox)
bottomPartSecondDivLogoBox.style.backgroundColor = "#B9EAA8"


const bottomPartSecondDivLogo = document.createElement("img")
bottomPartSecondDivLogoBox.appendChild(bottomPartSecondDivLogo)
bottomPartSecondDivLogo.setAttribute("src", "../img/two-arrows.svg")


const bottomPartSecondDivTitle = document.createElement("h3")
bottomPartSecondDivContent.appendChild(bottomPartSecondDivTitle)
bottomPartDivTitleStyles(bottomPartSecondDivTitle)
bottomPartSecondDivTitle.innerHTML = "2,769 online courses"


const bottomPartSecondDivLine = document.createElement("div")
bottomPartSecondDivContent.appendChild(bottomPartSecondDivLine)
bottomPartDivLineStyles(bottomPartSecondDivLine)


const bottomPartSecondDivParagraph = document.createElement("p")
bottomPartSecondDivContent.appendChild(bottomPartSecondDivParagraph)
bottomPartDivParagraphStyles(bottomPartSecondDivParagraph)
bottomPartSecondDivParagraph.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour..."


const bottomPartThirdDiv = document.createElement("div")
bottomPartThirdDiv.classList.add("bottom-part-div")
BottomPartContent.appendChild(bottomPartThirdDiv)
bottomPartDivStyles(bottomPartThirdDiv)


const bottomPartThirdDivContent = document.createElement("div")
bottomPartThirdDiv.appendChild(bottomPartThirdDivContent)
bottomPartDivContentStyles(bottomPartThirdDivContent)


const bottomPartThirdDivLogoBox = document.createElement("div")
bottomPartThirdDivContent.appendChild(bottomPartThirdDivLogoBox)
BottomPartDivLogoStyles(bottomPartThirdDivLogoBox)
bottomPartThirdDivLogoBox.style.backgroundColor = "#C0C0C0"


const bottomPartThirdDivLogo = document.createElement("img")
bottomPartThirdDivLogoBox.appendChild(bottomPartThirdDivLogo)
bottomPartThirdDivLogo.setAttribute("src", "../img/mastercard.svg")


const bottomPartThirdDivTitle = document.createElement("h3")
bottomPartThirdDivContent.appendChild(bottomPartThirdDivTitle)
bottomPartThirdDivTitle.innerHTML = "Training Courses"
bottomPartDivTitleStyles(bottomPartThirdDivTitle)


const bottomPartThirdDivLine = document.createElement("div")
bottomPartThirdDivContent.appendChild(bottomPartThirdDivLine)
bottomPartDivLineStyles(bottomPartThirdDivLine)


const bottomPartThirdDivParagraph = document.createElement("p")
bottomPartThirdDivContent.appendChild(bottomPartThirdDivParagraph)
bottomPartThirdDivParagraph.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour..."
bottomPartDivParagraphStyles(bottomPartThirdDivParagraph)

function ChangeDivStyleOnHover(div, divLogo, divTitle, divLine, DivParagraph) {
    const defaultStyles = {
        backgroundColor: div.style.backgroundColor,
        logoBackgroundColor: divLogo.style.backgroundColor,
        titleColor: divTitle.style.color,
        lineBackgroundColor: divLine.style.backgroundColor,
        paragraphColor: DivParagraph.style.color
    };

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#23A6F0";
        divLogo.style.backgroundColor = "White";
        divTitle.style.color = "white";
        divLine.style.backgroundColor = "white";
        DivParagraph.style.color = "white";
    });

    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = defaultStyles.backgroundColor;
        divLogo.style.backgroundColor = defaultStyles.logoBackgroundColor;
        divTitle.style.color = defaultStyles.titleColor;
        divLine.style.backgroundColor = defaultStyles.lineBackgroundColor;
        DivParagraph.style.color = defaultStyles.paragraphColor;
    });
}
ChangeDivStyleOnHover(bottomPartDiv, bottomPartDivLogoBox, bottomPartDivTitle, bottomPartDivLine, bottomPartDivParagraph)
ChangeDivStyleOnHover(bottomPartSecondDiv, bottomPartSecondDivLogoBox, bottomPartSecondDivTitle, bottomPartSecondDivLine, bottomPartSecondDivParagraph)
ChangeDivStyleOnHover(bottomPartThirdDiv, bottomPartThirdDivLogoBox, bottomPartThirdDivTitle, bottomPartThirdDivLine, bottomPartThirdDivParagraph)

const footer = document.createElement("footer")
footer.classList.add("global-footer")
wrapper.appendChild(footer)
footer.style.display = "flex"
footer.style.justifyContent = "center"
footer.style.alignItems = "center"


const footerContent = document.createElement("div")
footer.appendChild(footerContent)
footerContent.style.display = "flex"
footerContent.style.flexDirection = "column"
footerContent.style.gap = "50px"
footerContent.style.padding = "100px 0px"


const footerUpperContent = document.createElement("div")
footerContent.appendChild(footerUpperContent)
footerUpperContent.style.display = "flex"
footerUpperContent.style.flexDirection = "column"
footerUpperContent.style.gap = "10px"


const footerTitle = document.createElement('h3')
footerUpperContent.appendChild(footerTitle)
footerTitle.innerHTML = "Practice Advice" 
footerTitle.style.color = "#23A6F0"
footerTitle.style.fontFamily = "Montserrat"
footerTitle.style.fontWeight = "700"
footerTitle.style.fontSize = "14px"
footerTitle.style.lineHeight = "24px"
footerTitle.style.textAlign = "center"

const footerMainTitle = document.createElement("h2")
footerUpperContent.appendChild(footerMainTitle)
footerMainTitle.innerHTML = "Featured Products"
footerMainTitle.style.color = "Black"
footerMainTitle.style.fontFamily = "Montserrat"
footerMainTitle.style.fontWeight = "700"
footerMainTitle.style.fontSize = "40px"
footerMainTitle.style.lineHeight = "50px"
footerMainTitle.style.textAlign = "Center"


const footerMainParagraph = document.createElement("div")
footerUpperContent.appendChild(footerMainParagraph)
footerMainParagraph.style.fontFamily = "Montserrat"
footerMainParagraph.style.fontWeight = "400"
footerMainParagraph.style.lineHeight = "20px"
footerMainParagraph.style.fontSize = "14px"
footerMainParagraph.style.width = "700px"
footerMainParagraph.style.display = "flex"
footerMainParagraph.style.justifyContent = "center"


const footerMainParagraphContent = document.createElement("p")
footerMainParagraphContent.innerHTML = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
footerMainParagraph.appendChild(footerMainParagraphContent)
footerMainParagraphContent.style.width = "450px"
footerMainParagraphContent.style.textAlign = "center"


const footerBottomContent = document.createElement("div")
footerContent.appendChild(footerBottomContent)


const footerInputBox = document.createElement("div")
footerBottomContent.appendChild(footerInputBox)
footerInputBox.style.Width = "680px"
footerInputBox.style.display = "flex"
footerInputBox.style.justifyContent = "center"


const footerInput = document.createElement("input")
footerInputBox.appendChild(footerInput)
footerInput.setAttribute("placeholder", "Your Email")
footerInput.style.width = "500px"
footerInput.style.height = "60px"
footerInput.style.fontFamily = "Montserrat"
footerInput.style.fontWeight = "400"
footerInput.style.fontSize = "14px"
footerInput.style.lineHeight = "28px"
footerInput.style.padding = "0px 20px"
footerInput.style.outline = "none"
footerInput.style.border = "none"


const footerSubscribeInput = document.createElement("a")
footerInputBox.appendChild(footerSubscribeInput)
footerSubscribeInput.style.backgroundColor = "#23A6F0"
footerSubscribeInput.style.width = "120px"
footerSubscribeInput.style.height = "60px"
footerSubscribeInput.style.display = "flex"
footerSubscribeInput.style.justifyContent = "center"
footerSubscribeInput.style.alignItems = "center"
footerSubscribeInput.innerHTML = "Subscribe"
footerSubscribeInput.style.color = "white"
footerSubscribeInput.style.fontFamily = "Montserrat"
footerSubscribeInput.style.fontWeight = "400"
footerSubscribeInput.style.fontSize = "14px"
footerSubscribeInput.style.lineHeight = "24px"
footerSubscribeInput.style.cursor = "pointer"
footerSubscribeInput.style.transition = "0.3s"

const SubscribeButtonHover = (button) => {
    const defaultStyles = {
        defaultColor: button.style.color,
        defaultBackgroundColor: button.style.backgroundColor,
        defaultBorder: button.style.border,
    }
    button.addEventListener("mouseover", () => {
        button.style.color = "#23A6F0"
        button.style.backgroundColor = "white"
        button.style.border = "1px solid #23A6F0"
    })
    button.addEventListener("mouseout", () => {
        button.style.color = defaultStyles.defaultColor
        button.style.backgroundColor = defaultStyles.defaultBackgroundColor
        button.style.border = defaultStyles.defaultBorder
    })
}
SubscribeButtonHover(footerSubscribeInput)


mainPageGrid.appendChild(mainPageUpperPart)
mainPageGrid.appendChild(mainPageBottomPart)
