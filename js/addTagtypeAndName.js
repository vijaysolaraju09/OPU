
let addTagBtnEl=document.getElementById("addTagBtn")
let addTagContEl=document.getElementById("addTagCont")
let tagNameFeildsEl=document.getElementById("tagNameFeilds")

function addMoreTags() {
  addTagContEl.classList.remove('d-none')
  addTagBtnEl.classList.add("d-none")
}

function addTagNameFeilds() {
  console.log("hi");
  tagNameFeildsEl.innerHTML+=`
  <div class="row pb-2 pb-lg-4 mb-2 mb-lg-0">
  <div class="col-lg-11 ">
      <div class="row">
          <div class="col-lg-6 mb-2 mb-lg-0">
              <div class="w-100">
                  
                  <input placeholder="Enter Tag Type" class="create__input" />
              </div>
          </div>
          <div class="col-lg-6 mb-2 mb-lg-0">
              <div class="w-100 ">
                  
                  <div class="d-flex justify-content-between">
                      <input placeholder="Enter Description" class="create__input" />
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="col-lg-1 d-flex justify-content-end align-items-center">
      <img src="./img/Dashboard/cross-bg-grey-icon.svg" alt="cancel">
  </div>
</div>`
}