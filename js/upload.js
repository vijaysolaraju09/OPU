window.addEventListener('load', () => {
    const input = document.getElementById("upload");
    const fileWraper = document.getElementById("total-doc");
    console.log(fileWraper)
    input.addEventListener('change' , (e) => {
        let fileName = e.target.files[0].name;
        let filetype = e.target.value.split('.').pop();

        fileShow(fileName,filetype)
    })

const fileShow = (fileName,filetype) => {
    const listElement = document.createElement("li");
    listElement.classList.add("file-wrapper","d-flex","align-items-center");

    const div1 = document.createElement("div");
    div1.classList.add("file-wrapper__filetype","d-flex","justify-content-center","align-items-center")
    const csv = document.createElement("span");
    csv.classList.add("file-wrapper__fileformat")
    csv.innerText = "CSV"
    div1.appendChild(csv)
  

    const div2 = document.createElement("div");
    div2.classList.add("content","w-100","d-flex","justify-content-between","align-items-center");

    const div3 = document.createElement("div");
    div3.classList.add("details","d-flex","flex-column");
    const filedata = document.createElement("span");
    filedata.classList.add("file-wrapper__filename");
    filedata.innerText=fileName;

    const fileSize = document.createElement("span");
    fileSize.classList.add("file-wrapper__filesize","align-self-start")
    fileSize.innerText="file size"
    div3.append(filedata,fileSize)
    

    const div4 = document.createElement("div");
    div4.classList.add("file-wrapper__cross-tick");
    const crossImg = document.createElement("img");
    crossImg.src = "./img/Dashboard/cross-icon.svg";
    const tickImg = document.createElement("img");
    tickImg.src = "./img/Dashboard/tick-icon.svg";
    div4.append(crossImg,tickImg);
    div2.append(div3,div4);
    listElement.append(div1,div2)
    fileWraper.appendChild(listElement)

    crossImg.addEventListener('click' , () => {
        fileWraper.removeChild(listElement)
    })
    
    console.log("dkjslkdask")
}
})