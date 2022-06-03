
//Module 1 JS
function setPopupVisibility(show){
  let popup = document.getElementById('popup');
  let name = document.getElementById('folderName');

  if(show == true){
    popup.style.visibility = 'visible';
    showStepTwoFirstModule();
    name.value= 'Untitled folder';
    name.focus();
    name.select();


  }
  else{
    popup.style.visibility = 'hidden';
  }
}

function makeAFolder(){
  const name = document.getElementById('folderName');
  let trimName = name.value;
  if(trimName.trim() === ''){
    name.value= 'Untitled folder';
    name.focus();
    name.select();
    alert('Please name the folder with letters or numbers');
  }
  else{
    alert(trimName + ' created');
    setPopupVisibility(false);
    showStepThreeFirstModule();
  }
  name.value = '';
}

function showStepTwoFirstModule() {
  var icon = document.getElementById('steptwo');
  if (icon.classList.contains('collapse')) {
    $('#steptwo').toggleClass('collapse');
  }
}

function showStepThreeFirstModule() {
  $('#stepthree').toggleClass('collapse');
}


//Module 2 JS

function uploadFileOrFolder(){


  showStepTwoSecondModule();

}

function showStepTwoSecondModule() {
  var stepTwo = document.getElementById('steptwo');
  if (stepTwo.classList.contains('collapse')) {
    $('#steptwo').toggleClass('collapse');
  }

}

function showStepThreeSecondModule() {
  alert('Your file has been uploaded.')
  var stepThree = document.getElementById('stepthree');
  if (stepThree.classList.contains('collapse')) {
    $('#stepthree').toggleClass('collapse');
  }
}


//Module 3 JS
function setPopupVisibilityThirdModule(show){
  let stepTwo = document.getElementById('stepTwo');
  let popup = document.getElementById('popup');

  if(show == true){

    stepTwo.style.visibility = 'visible';
    popup.style.visibility = 'visible';
    showStepTwoThirdModule();
  }
  else{
    stepTwo.style.visibility = 'hidden';
    popup.style.visibility = 'hidden';
  }
}

function setSharingVisibility(show){
  let sharing = document.getElementById('sharing');
  $('#popup').toggleClass('collapse');
  if(show == true){
    sharing.style.visibility = 'visible';
    showStepThreeThirdModule();
  }
  else{
    sharing.style.visibility = 'hidden';
  }
}


function showStepTwoThirdModule() {

  var stepTwo = document.getElementById('stepTwo');
  if (stepTwo.classList.contains('collapse')) {
    $('#stepTwo').toggleClass('collapse');
  }
}

function showStepThreeThirdModule() {
  var stepThree = document.getElementById('stepThree');
  if (stepThree.classList.contains('collapse')) {
    $('#stepThree').toggleClass('collapse');
  }
}


function mouseClick(ele, e) {
  if(e.type == 'click'){
    alert('That was the incorrect button click')
  }
  if(e.type == 'contextmenu'){
    e.preventDefault();
    createContextMenuPiece(ele);
  }
}

function addToList(){
  const list = document.getElementById('peopleList');
  const name = document.getElementById('sharePerson');
  let trimName = name.value;
  if(trimName.trim() === ''){
    name.value = '';
    name.focus();
    name.select();
    alert('Please name the folder with letters or numbers');
  }
  else{
    const listItem = document.createElement('li');
    listItem.classList= ['list-group-item'];
    listItem.innerHTML= '<div>' +
                        '<h6>'+ name.value + '</h6>'+
                        '<p class="mb-0">anotherUser@email.com</p>'+
                        '</div>';
    list.appendChild(listItem);
    name.value = '';
    name.focus();
  }
}

function createContextMenuPiece(ele){
  let name = ele.id;
  let inner = ele.innerHTML;
  let contextMenu = '';
  if(name.includes('Folder')){
    let edit = inner.replace('<i class="fas fa-folder-plus" aria-hidden="true"></i>', '');
    contextMenu = '<div class="card w-100 text-left">' +
    '<ul class="list-group list-group-flush">' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-arrows-alt"></i></i>Open with</a>' +
    '<hr class="m-0">' +
    '<a class="w-100 p-2" onclick="setSharingVisibility(true)" href="#/" style="color: #5f6368;"><i class="fas fa-user-plus"></i>Share</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-link" style="transform: rotate(45deg);"></i>Get link</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-share-square"></i>Add shortcut to Drive</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-people-carry"></i>Move to</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-star"></i>Add to Starred</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-edit"></i>Rename</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-palette"></i>Change color</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-search"></i>Search within ' + edit + '</a>' +
    '<hr class="m-0">' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-info-circle"></i>View details</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-download"></i>Download</a>' +
    '<hr class="m-0">' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-trash-alt"></i>Remove</a>' +
    '</ul>' +
    '</div>';
  }
  else{
    contextMenu = '<div class="card w-100 text-left">' +
    '<ul class="list-group list-group-flush">' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-eye"></i>Preview</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-arrows-alt"></i></i>Open with</a>' +
    '<hr class="m-0">' +
    '<a class="w-100 p-2" onclick="setSharingVisibility(true)" href="#/" style="color: #5f6368;"><i class="fas fa-user-plus"></i>Share</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-link" style="transform: rotate(45deg);"></i>Get link</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-share-square"></i>Add shortcut to Drive</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-people-carry"></i>Move to</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-star"></i>Add to Starred</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-check-circle"></i>Available offline</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-edit"></i>Rename</a>' +
    '<hr class="m-0">' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-info-circle"></i>View details</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-copy"></i>Make a copy</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-question-circle"></i>Report abuse</a>' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="fas fa-download"></i>Download</a>' +
    '<hr class="m-0">' +
    '<a class="w-100 p-2" onclick="userError()" href="#/" style="color: #5f6368;"><i class="far fa-trash-alt"></i>Remove</a>' +
    '</ul>' +
    '</div>';
  }
  const popup = document.getElementById('popup');
  popup.innerHTML = contextMenu;
  setPopupVisibilityThirdModule(true);

}

function checkForCompletion(){
  let list = document.getElementById('peopleList').innerHTML;
  console.log(list);
  let count = (list.match(/<li/g) || []).length;
  console.log(count);
  if(count <  3){
    alert('You did not share with enough people');
  }
  else{
    showCompletion();
  }
}

function showCompletion(){
  var stepFour = document.getElementById('stepFour');
  if (stepFour.classList.contains('collapse')) {
    $('#stepFour').toggleClass('collapse');
  }
}


//Module 4 JS

function showStepTwoFourthModule() {
  var icon = document.getElementById('stepTwo');
  if (icon.classList.contains('collapse')) {
    $('#steptwo').toggleClass('collapse');
    var firstDiv = document.getElementById('oldDragDiv');
    firstDiv.style.visibility = 'hidden';

  }

}

function showStepThreeFourthModule() {
  var icon = document.getElementById('stepThree');
  if (icon.classList.contains('collapse')) {
    $('#stepThree').toggleClass('collapse');
  }
}


function updateView(){
  let list = document.getElementById('list');
  list.innerHTML =  '<div id="dropDiv" ondrop="drop(event)" ondragover="allowDrop(event)" class="p-3" style="display: grid;">'+
                    '<h5>Google Drive > GenED Courses</h5>'+
                    '</div>'+
                    '<hr class="m-0">'+
                    '<a class="w-100 p-3" id="CS422Doc1"  href="#/" style="color: #5f6368;"><i class="fas fa-file-alt" style="color: rgb(17, 85, 204) !important;"></i>CS 422 Problem Statement</a>'+
                    '<hr class="m-0">'+
                    '<a class="w-100 p-3" id="CS474Doc1"  href="#/" style="color: #5f6368;"><i class="fas fa-file-alt" style="color: rgb(17, 85, 204) !important;"></i>CS 474 Project Proposal</a>';
  showStepThreeFourthModule();

}



//Universal JS

function userError(){
  alert('Please select the appropriate button');
}

function onCollapseMenu() {
  $('#video-div').toggleClass('collapse');
  var icon = document.getElementById('IconUpDown');
  if (icon.classList.contains('fa-chevron-down')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
      document.getElementById("VideoText").innerHTML = "Hide video";
  }
  else{
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      document.getElementById("VideoText").innerHTML = "Show video";

  }
}









function showStepTwo(show){
  let stepTwo = document.getElementById('stepTwo');

  $('#stepTwo').toggleClass('collapse');

  if(show == true){

    stepTwo.style.visibility = 'visible';
  }
  else{
    stepTwo.style.visibility = 'hidden';
  }
}


function t1() {

  let elem = document.getElementById('driveText');
  if (elem.style.visibility == 'visible') {
    elem.style.visibility = 'hidden';
  } else {
    elem.style.visibility = 'visible';
  }
}



function t2() {

  let elem = document.getElementById('gmailText');
  if (elem.style.visibility == 'visible') {
    elem.style.visibility = 'hidden';
  } else {
    elem.style.visibility = 'visible';
  }
}
