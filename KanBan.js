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
  document.getElementById(division).innerHTML = document.getElementById(division).innerHTML + `<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title" contentEditable="true">${titlevalue}</span>
          <p contentEditable="true">${datevalue}</p>
          <p contentEditable="true">${assigneevalue}</p>
      </div>
    </div>
  </div>`
}
