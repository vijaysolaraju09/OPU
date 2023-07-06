const adminInput = document.getElementById("admin");
const adminDetails = document.getElementById("admindetails");

const editorInput = document.getElementById("editor");
const editorDetails = document.getElementById("editordetails");

const teacherInput = document.getElementById("teacher");
const teacherDetails = document.getElementById("teacherdetails");

const activeButtons = document.getElementById("activebuttons");
const disableButtons = document.getElementById("disablebuttons");

const defaultCheck = document.getElementById("defaultcheck");
const showTick = document.getElementById("showtick");

const adminCheck = document.getElementById("admin-check");
const editorCheck = document.getElementById("editor-check");
const teacherCheck = document.getElementById("teacher-check");


function adminDisplay() {

    if (adminCheck.checked === true) {
        editorCheck.checked = false;
        teacherCheck.checked = false;
        adminInput.style.backgroundColor = "#FAFAFA";
        adminDetails.style.display = "block";
        editorInput.style.backgroundColor = "#ffffff";
        editorDetails.style.display = "none";
        teacherInput.style.backgroundColor = "#ffffff";
        teacherDetails.style.display = "none";
        activeButtons.style.display = "block";
        disableButtons.style.display = "none";


    }

}

function editorDisplay() {

    if (editorCheck.checked === true) {
        adminCheck.checked = false;
        teacherCheck.checked = false;
        adminInput.style.backgroundColor = "#FFFFFF";
        adminDetails.style.display = "none";
        editorInput.style.backgroundColor = "#FAFAFA";
        editorDetails.style.display = "block";
        teacherInput.style.backgroundColor = "#ffffff";
        teacherDetails.style.display = "none";
        activeButtons.style.display = "block";
        disableButtons.style.display = "none";

    }

}

function teacherDisplay() {

    if (teacherCheck.checked === true) {
        adminCheck.checked = false;
        editorCheck.checked = false;
        teacherInput.style.backgroundColor = "#FAFAFA";
        teacherDetails.style.display = "block";
        adminInput.style.backgroundColor = "#FFFFFF";
        adminDetails.style.display = "none";
        editorInput.style.backgroundColor = "#ffffff";
        editorDetails.style.display = "none";
        activeButtons.style.display = "block";
        disableButtons.style.display = "none";


    }

}


