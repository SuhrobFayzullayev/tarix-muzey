const designPatterns = document.querySelectorAll(
    'input[name="designPatterns"]'
);
const headerAccessibility = document.querySelector(".header__accessibility");
const haDropdown = document.querySelector(".ha__dropdown");
const haBtns = document.querySelectorAll(".ha_btn");
const haAccessibilityIcon = document.querySelector("#haAccessibilityIcon");
const highlightMenu = document.querySelector("#highlightMenu");
const highlightMenuItems = document.querySelectorAll(".highlight-menu__item");

// const
const minFont = 12;
const maxFont = 18;
const defaultFont = 16;

// variables
let x = 0;
let y = 0;
let currentFont = defaultFont;
let selectedText = "";
let synth = null;
let voiceList = [];
let greetingSpeech = null;

// eventlisteners
window.addEventListener("mouseup", onMouseup);

if (highlightMenu) {
    highlightMenu.addEventListener("mousedown", handleHaMenuDown);
}

if (highlightMenuItems) {
    highlightMenuItems.forEach((haMenuItem) => {
        haMenuItem.addEventListener("mousedown", handleHaMenuItemDown);
    });
}

if (haAccessibilityIcon) {
    haAccessibilityIcon.addEventListener("click", () => {
        if (!haDropdown.classList.contains("active")) {
            showDropdown();
        } else {
            closeDropdown();
        }
    });
}

if (designPatterns) {
    designPatterns.forEach((dp) => {
        dp.addEventListener("click", (e) => {
            const value = e.target.value;
            if (value === "blackAndWhiteDesign") {
                document.documentElement.style.setProperty("--grayscale", "1");
            } else {
                document.documentElement.style.setProperty("--grayscale", "0");
            }
        });
    });
}

if (haBtns) {
    haBtns.forEach((haBtn) => {
        haBtn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("id");
            switch (id) {
                case "fontSizeMin":
                    {
                        if (currentFont > minFont) {
                            currentFont--;
                        }
                    }
                    break;

                case "fontSizeMax":
                    {
                        if (currentFont < maxFont) {
                            currentFont++;
                        }
                    }
                    break;

                default:
                    currentFont = defaultFont;
                    break;
            }

            document.documentElement.style.fontSize = `${currentFont}px`;
        });
    });
}

// functions
function handleHaMenuDown(e) {
    e.preventDefault();
}

function handleHaMenuItemDown(e) {
    e.preventDefault();
    const id = e.target.closest(".highlight-menu__item").getAttribute("id");
    switch (id) {
        case "highlight_textToSpeech":
            textToSpeech();
            break;

        case "highlight_resetTextToSpeech":
            resetTextToSpeech();
            break;

        default:
            break;
    }
}

function onMouseup(e) {
    const target = e.target;
    const selection = window.getSelection();
    const topElement = document.querySelector(".highlight-menu");
    if (topElement && topElement.contains(target)) return;
    if (!selection.toString().length || selectedText === selection.toString()) {
        hideTools();
        return;
    }
    const { width } = getCoordinates();
    if (!width) {
        hideTools();
        return;
    }
    showTools();
    window.addEventListener("resize", showTools);
}

function getCoordinates() {
    const selection = window.getSelection();
    const { x, y, width } = selection.getRangeAt(0).getBoundingClientRect();
    return { left: x, top: y, width, selection };
}

function showTools() {
    const { left, top, width, selection } = getCoordinates();

    if (!highlightMenu.classList.contains("active")) {
        highlightMenu.classList.add("active");
    }

    x = left + width / 2;
    y = top + window.scrollY - 10;
    selectedText = selection.toString();

    highlightMenu.style.left = `${x}px`;
    highlightMenu.style.top = `${y}px`;
}

function hideTools() {
    highlightMenu.classList.remove("active");
    selectedText = "";
    window.removeEventListener("resize", showTools);
}

function showDropdown() {
    haDropdown.classList.add("active");
    window.addEventListener("click", handleWindowClick);
}

function closeDropdown() {
    haDropdown.classList.remove("active");
    window.removeEventListener("click", handleWindowClick);
}

function handleWindowClick(e) {
    if (!headerAccessibility.contains(e.target)) {
        closeDropdown();
    }
}

function textToSpeech(text = selectedText) {
    synth = window.speechSynthesis;
    greetingSpeech = new window.SpeechSynthesisUtterance();
    voiceList = synth.getVoices();

    if (text && !synth.speaking) {
        greetingSpeech.text = text;
        synth.speak(greetingSpeech);
    }
}

function resetTextToSpeech() {
    if (synth && synth.speaking) {
        synth.cancel();
        greetingSpeech.text = "";
    }
}
