//GMAIL JS

//Module 1 JS

function showStepGmailFirstModule(stepId){
    var step = document.getElementById(stepId);
    if (step.classList.contains('collapse')) {
      $('#' + stepId).toggleClass('collapse');
    }
    
    if(stepId =="steptwo"){
        let email = document.getElementById('toField1');
        email.focus();
    }
    else if(stepId =="stepthree"){
        let email1 = document.getElementById('toField1');
        let email2 = document.getElementById('toField2');
        let subject1 = document.getElementById('subjectField1');
        email1.disabled = true;
        email2.value = email1.value;
        subject1.focus();
    }
    else if(stepId =="stepfour"){
        let email2 = document.getElementById('toField2');
        let email3 = document.getElementById('toField3');
        let subject1 = document.getElementById('subjectField1');
        let subject2 = document.getElementById('subjectField2');
        let message = document.getElementById('messageField1');
        subject1.disabled = true;
        email2.disabled = true;
        email3.value = email2.value;
        subject2.value = subject1.value;
        message.focus();
    }
    else if(stepId =="stepfive"){
        let email3 = document.getElementById('toField3');
        let email4 = document.getElementById('toField4');
        let subject2 = document.getElementById('subjectField2');
        let subject3 = document.getElementById('subjectField3');
        let message1 = document.getElementById('messageField1');
        let message2 = document.getElementById('messageField2');
        subject2.disabled = true;
        email3.disabled = true;
        message1.disabled = true;
        email4.value = email3.value;
        subject3.value = subject2.value;
        message2.value = message1.value;
    }

}
  
  
  function onEmailAdded(){
    let email = document.getElementById('toField1');
    let text = email.value;
    let val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim())
  
    if(val == true){
      showStepGmailFirstModule('stepthree');
    }
    else{
      alert('That is not a valid email');
    }
  }
  
  function onSubjectAdded(){
      let subject = document.getElementById('subjectField1');
      let text = subject.value;
      let trimmedText = text.trim()
      if(trimmedText == ''){
        alert('Though you are not required to have a subject, we would like you to have one for this tutorial.');
      }
      else
      {
        showStepGmailFirstModule('stepfour');
      }
  }
  
  function onMessageAdded(){
    let message = document.getElementById('messageField1');
      let text = message.value;
      let trimmedText = text.trim()
      if(trimmedText != ''){
        showStepGmailFirstModule('stepfive');
      }
      else{
        alert('Please add a message to your email');
      }
      
  }
  
  function showSuccess(show){
    let stepSix = document.getElementById('stepsix');
  
    $('#stepsix').toggleClass('collapse');
  
    if(show == true){
  
      stepSix.style.visibility = 'visible';
    }
    else{
      stepSix.style.visibility = 'hidden';
    }
  }

  //Js for tutorial 3




function showSentMessages(){
    $('#steptwo').toggleClass('collapse');
    const inboxDiv = document.getElementById('inbox');

        inboxDiv.innerHTML = '<div class="row">'+
        '</div>'+
        '<div class="row">'+
        '<div class="col p-0">'+
        '<div class="card" style="border: none;">'+
        '<ul class="list-group list-group-flush">'+
        '<li class="list-group-item"><p>To: GWHELP</p></li>'
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>';

    const inboxList = document.getElementById('inboxList');
    inboxList.innerHTML =   '<a onclick="showNewInbox()"><li class="list-group-item borderEmail p-1 pl-4" style="color: black" ><i style="color: gray" class="fas fa-inbox"></i><strong>Inbox &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1</strong></li></a>'+
                            '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-star"></i></i>Starred</li>'+
                            '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-clock"></i>Snoozed</li>'+
                            '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-angle-double-right"></i>Important</li>'+
                            '<li class="list-group-item borderEmail p-1 pl-4 customTextGray"><i style="color: gray" class="fas fa-paper-plane"></i><strong>Sent</strong></li></a>'+
                            '<li class="list-group-item borderEmail p-1 pl-4"><i style="color: gray" class="fas fa-trash"></i>Trash</li>';

}

function showNewInbox(){
  $('#stepthree').toggleClass('collapse');
    const inboxDiv = document.getElementById('inbox');
    var d = new Date();
    var h =  d.getHours();
    var m =  d.getMinutes();
    var time = '';
    if(h == 12) {
      time = h + ':' + m +'pm';
    }
    else if(h == 0){
      time = (h+12) + ':' + m +'am';
    }
    else if(h > 12){
        time = (h-12) + ':' + m +'pm';
    }
    else{
        time = h + ':' + m + 'am';
    }
   


        inboxDiv.innerHTML =  inboxDiv.innerHTML = '<div class="row">'+
        '<div class="col-4 p-1 customTextRed">'+
        '<i  class="fas fa-inbox"></i><strong>Primary</strong>'+
        '</div>'+
        '<div class="col-4 p-1">'+
        '<i class="fas fa-users"></i></i><strong>Social</strong>'+
        '</div>'+
        '<div class="col-4 p-1">'+
        '<i class="fas fa-tag"></i><strong>Promotions</strong>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col p-0">'+
        '<div class="card" style="border: none;">'+
        '<ul class="list-group list-group-flush">'+
        '<a onclick="readEmail()"><li class="list-group-item"><strong>Joe &nbsp;&nbsp;Happy Thanksgiving&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ time +'</strong></li></a>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '</div>';

    const inboxList = document.getElementById('inboxList');
    inboxList.innerHTML =   '<a onclick="showNewInbox()"><li class="list-group-item borderEmail customTextRed p-1 pl-4"><i  class="fas fa-inbox"></i><strong>Inbox &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1</strong></li></a>'+
                            '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-star"></i></i>Starred</li>'+
                            '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-clock"></i>Snoozed</li>'+
                            '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-angle-double-right"></i>Important</li>'+
                            '<li class="list-group-item borderEmail p-1 pl-4 "><i style="color: gray" class="fas fa-paper-plane"></i>Sent</li></a>'+
                            '<li class="list-group-item borderEmail p-1 pl-4"><i style="color: gray" class="fas fa-trash"></i>Trash</li>';
}

function readEmail(){
  $('#stepfour').toggleClass('collapse');
    const inboxDiv = document.getElementById('inbox');

    inboxDiv.innerHTML =  inboxDiv.innerHTML = '<div class="row">'+
    '<div class="col-4 p-1 customTextRed">'+
    '<i  class="fas fa-inbox"></i><strong>Primary</strong>'+
    '</div>'+
    '<div class="col-4 p-1">'+
    '<i class="fas fa-users"></i></i><strong>Social</strong>'+
    '</div>'+
    '<div class="col-4 p-1">'+
    '<i class="fas fa-tag"></i><strong>Promotions</strong>'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col p-0">'+
    '<div class="card" style="border: none;">'+
    '<ul class="list-group list-group-flush">'+
    '<li class="list-group-item"><i title="archive" class="fas fa-archive"></i><a onclick="moveToTrash()" title="Delete"><i style="color: black float:right;" class="fas fa-trash"></i></a><i title="Mark as unread" class="fas fa-envelope-open-text"></i><i class="fas fa-clock"></i></li>'+
    '<li class="list-group-item">Joe &nbsp;&nbsp;Happy Thanksgiving&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>'+
    '<li class="list-group-item"><p class="mb-1">Happy Thanksgiving! I appreciate you so much for making our office a fun, fantastic, and encouraging place to work. Have a blessed weekend with your family, filled with good food and laughter! Although you\'re always thanking us for our work, it\'s our turn to say thank you and Happy Thanksgiving.</p></li>'+
    '</ul>'+
    '</div>'+
    '</div>'+
    '</div>';

const inboxList = document.getElementById('inboxList');
inboxList.innerHTML =   '<li class="list-group-item borderEmail customTextRed p-1 pl-4"><i  class="fas fa-inbox"></i><strong>Inbox</strong></li></a>'+
                        '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-star"></i></i>Starred</li>'+
                        '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-clock"></i>Snoozed</li>'+
                        '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-angle-double-right"></i>Important</li>'+
                        '<li class="list-group-item borderEmail p-1 pl-4 "><i style="color: gray" class="fas fa-paper-plane"></i>Sent</li>'+
                        '<li class="list-group-item borderEmail p-1 pl-4"><i style="color: gray" class="fas fa-trash"></i>Trash</li>';


}

function moveToTrash(){
  $('#stepfive').toggleClass('collapse');
    const inboxDiv = document.getElementById('inbox');
    inboxDiv.innerHTML =  inboxDiv.innerHTML = '<div class="row">'+
    '<div class="col-4 p-1 customTextRed">'+
    '<i  class="fas fa-inbox"></i><strong>Primary</strong>'+
    '</div>'+
    '<div class="col-4 p-1">'+
    '<i class="fas fa-users"></i></i><strong>Social</strong>'+
    '</div>'+
    '<div class="col-4 p-1">'+
    '<i class="fas fa-tag"></i><strong>Promotions</strong>'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col p-0">'+
    '<div class="card" style="border: none;">'+
    '<ul class="list-group list-group-flush">'+
    '<div class="p-4" style="text-align: center;">'+
    'No new messages'+
    '</div>'+
    '</ul>'+
    '</div>'+
    '</div>'+
    '</div>';

    const inboxList = document.getElementById('inboxList');
    inboxList.innerHTML ='<li class="list-group-item borderEmail customTextRed p-1 pl-4"><i  class="fas fa-inbox"></i><strong>Inbox</strong></li></a>'+
                        '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-star"></i></i>Starred</li>'+
                        '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-clock"></i>Snoozed</li>'+
                        '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-angle-double-right"></i>Important</li>'+
                        '<li class="list-group-item borderEmail p-1 pl-4 "><i style="color: gray" class="fas fa-paper-plane"></i>Sent</li>'+
                        '<a onclick="showTrash()"><li class="list-group-item borderEmail p-1 pl-4"><i style="color: gray" class="fas fa-trash"></i>Trash</li></a>';
}

function showTrash(){
  $('#stepsix').toggleClass('collapse');
  const inboxDiv = document.getElementById('inbox');
  var d = new Date();
  var h =  d.getHours();
  var m =  d.getMinutes();
  var time = '';
  if(h == 12) {
    time = h + ':' + m +'pm';
  }
  else if(h == 0){
    time = (h+12) + ':' + m +'am';
  }
  else if(h > 12){
      time = (h-12) + ':' + m +'pm';
  }
  else{
      time = h + ':' + m + 'am';
  }

  inboxDiv.innerHTML =  inboxDiv.innerHTML = '<div class="row">'+
  '</div>'+
  '<div class="row">'+
  '<div class="col p-0">'+
  '<div class="card" style="border: none;">'+
  '<ul class="list-group list-group-flush">'+
  '<li class="list-group-item">Joe &nbsp;&nbsp;Happy Thanksgiving&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + time +'</li>'+
  '</ul>'+
  '</div>'+
  '</div>'+
  '</div>';

const inboxList = document.getElementById('inboxList');
inboxList.innerHTML =   '<li class="list-group-item borderEmail p-1 pl-4"><i style="color: gray" class="fas fa-inbox"></i>Inbox</li></a>'+
                      '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-star"></i></i>Starred</li>'+
                      '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-clock"></i>Snoozed</li>'+
                      '<li class="list-group-item borderEmail p-1  pl-4"><i style="color: gray" class="fas fa-angle-double-right"></i>Important</li>'+
                      '<li class="list-group-item borderEmail p-1 pl-4 "><i style="color: gray" class="fas fa-paper-plane"></i>Sent</li>'+
                      '<li class="list-group-item borderEmail p-1 pl-4 customTextGray"><i style="color: gray" class="fas fa-trash"></i><strong>Trash</strong></li>';


}

function showSuccessT2(){
    let stepThree = document.getElementById('stepthree');
    $('#stepthree').toggleClass('collapse');
}

function showStepTwoT2() {
  $('#steptwo').toggleClass('collapse');
}