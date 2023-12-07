let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterPressEl = document.getElementById("afterPress");
const dobButtonEl = document.getElementById("dobButton");
const DOBinputEl = document.getElementById("DOBinput");

const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
  console.log("Toggle", isDOBOpen);
};

const setDOBHandler = () => {
  dateOfBirth = DOBinputEl.value;
  if (dateOfBirth) {
    initialTextEl.classList.add("hide");
    afterPressEl.classList.remove("hide");
  } else {
    afterPressEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
  }
};

setDOBHandler();
settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);
