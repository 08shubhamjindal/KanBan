var currYear = (new Date()).getFullYear();
$(document).ready(function() {
  $(".datepicker").datepicker({
    defaultDate: new Date(currYear-5,1,31),
    maxDate: new Date(currYear-5,12,31),
    yearRange: [1928, currYear-5],
    format: "yyyy/mm/dd"
  });
});

window.onload = function() {
  previousData("divPlanned")
  previousData("divStarted")
  previousData("divDone")
};
var getid;
var select = document.getElementById("selectNumber");
var options = ["Dhruv Jain", "Shubham Jindal", "Gaurav Jain", "Aakash", "Vidhan"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

// Dynamic Grid
var grid = document.getElementById("check").innerHTML;
var gridCoulmanName = ["Planned" , "Started" , "Done"];
for(var i = 0; i < gridCoulmanName.length; i++) {
document.getElementById("check").innerHTML = document.getElementById("check").innerHTML + `<div class="col s4">
    <div>
      <h3>${gridCoulmanName[i]}</h3>
      <div id ="div${gridCoulmanName[i]}">
      </div>
      <a class="waves-effect waves-light btn" id ="${gridCoulmanName[i]}" onclick="openForm(this.id)">Add Jobs</a>
    </div>
  </div>`
}

function openForm(clicked_id) {
  getid = clicked_id;
  document.getElementById("myForm1").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm1").style.display = "none";
}

function getData(){
   var titlevalue = document.getElementById("title").value;
   var datevalue =  document.getElementById("date").value;
   var assigneevalue = document.getElementById("selectNumber").value;
   addJobs(titlevalue, datevalue, assigneevalue);
   closeForm();
}

function addJobs(titlevalue, datevalue, assigneevalue){
   if(getid ==="Planned"){
     displayData(titlevalue, datevalue, assigneevalue, "divPlanned");
   }else if(getid ==="Started") {
     displayData(titlevalue, datevalue, assigneevalue, "divStarted");
   }else if(getid === "Done") {
      displayData(titlevalue, datevalue, assigneevalue, "divDone");
   }
}

function displayData(titlevalue, datevalue, assigneevalue, division) {
  var test = [];
  if(localStorage.getItem(division)==null){
    var value = [titlevalue, datevalue, assigneevalue];
    localStorage.setItem(division, JSON.stringify(value))
    test = JSON.parse(localStorage.getItem(division));
  }else{
    console.log(JSON.parse(localStorage.getItem(division)));
    test = JSON.parse(localStorage.getItem(division));
    test.push(titlevalue);
    test.push(datevalue);
    test.push(assigneevalue);
    localStorage.setItem(division, JSON.stringify(test))
    test = JSON.parse(localStorage.getItem(division));
  }
   previousData(division);
}

function previousData(division){
  if(localStorage.getItem(division)!=null){
     test = JSON.parse(localStorage.getItem(division));
     document.getElementById(division).innerHTML = "";
     for(var i=0; i<test.length; i=i+3){
       document.getElementById(division).innerHTML = document.getElementById(division).innerHTML + `<div class="row">
         <div class="col s6 m6">
           <div class="card red darken-1">
             <div class="card-content white-text">
               <span class="card-title" contentEditable="true">${test[i]}</span>
               <p contentEditable="true">${test[i+1]}</p>
               <i class="material-icons">recent_actors</i>
               <p contentEditable="true">${test[i+2]}</p>
           </div>
         </div>
       </div>`
     }
  }
}
