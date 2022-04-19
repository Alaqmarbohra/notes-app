function createnote(){

  document.getElementById("cnote_container").style.display="block";
}
function cancelnote(){
  let titlenote= document.getElementById("cnotetitle");
    titlenote.value="";
    let txtnote= document.getElementById("cnotetxt");
    txtnote.value="";
    document.getElementById("cnote_container").style.display="none";
}

function addnote(){
  let titlenote= document.getElementById("cnotetitle");
  let txtnote= document.getElementById("cnotetxt");
  if(titlenote.value == "" || txtnote.value == ""){
    return alert("Please enter title and text in note!!!");
  }
  let notes=localStorage.getItem("notes");
  let objnote;
  if(notes == null){
    objnote=[];
  }
  else{
    objnote=JSON.parse(notes);
  }
  let myobj={
    title:titlenote.value,
    txt:txtnote.value
  }
  objnote.push(myobj);
  localStorage.setItem("notes",JSON.stringify(objnote));
  titlenote.value="";
  txtnote.value="";

  shownote();
}

function shownote(){
  let notes=localStorage.getItem("notes");
  let objnote;
  if(notes == null){
    document.getElementById("notes").innerHTML="No Note Here Yet!";
  }
  else{
    objnote=JSON.parse(notes);
  }
  let lest="";
  objnote.forEach((element,index)=> {
    lest +=`
    <div class="note">
                <h3 class="note-title">${element.title}</h3>
                <p class="note-text">${element.txt}</p>
                <button id="${index}" class="note-btn delete-btn" onclick="deletenote(this.id)">Delete Note</button>
                <button id="${index}" class="note-btn edit-btn" onclick="editnote(this.id)">Edit Note</button>
            </div>
            `    
  });
  document.getElementById("notes").innerHTML=lest;

}
function deletenote(index){
  let notes=localStorage.getItem("notes");
  let objnote;
  if(notes == null){
    objnote=[];
  }
  else{
    objnote=JSON.parse(notes);
  }

  objnote.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(objnote));
  shownote();
}
var temptitle;
var temptxt;
function editnote(index){
  let notes=localStorage.getItem("notes");
  let titlenote= document.getElementById("editnotetitle");
  let txtnote= document.getElementById("editnotetxt");
  let objnote;
  if(notes == null){
    objnote=[];
  }
  else{
    objnote=JSON.parse(notes);
  }
  i=index;
  objnote.findIndex((element,index) => {
    
    if(i==index){
      titlenote.value = element.title;
      txtnote.value = element.txt;
      temptitle=element.title;
      temptxt=element.txt;
    }
  })
  editeopennote();
  objnote.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(objnote));
  shownote();
}
function editeopennote(){
  document.getElementById("editnote_container").style.display="block";
}
function editcancelnote(){
  let titlenote= document.getElementById("editnotetitle");
  let txtnote= document.getElementById("editnotetxt");
    titlenote.value="";
    txtnote.value="";
    let notes=localStorage.getItem("notes");
  let objnote;
  if(notes == null){
    objnote=[];
  }
  else{
    objnote=JSON.parse(notes);
  }
  let myobj={
    title:temptitle,
    txt:temptxt
  }
  objnote.push(myobj);
  localStorage.setItem("notes",JSON.stringify(objnote));

  shownote();
  document.getElementById("editnote_container").style.display="none";
}
function editaddnote(){
  let titlenote= document.getElementById("editnotetitle");
  let txtnote= document.getElementById("editnotetxt");
  if(titlenote.value == "" || txtnote.value == ""){
    return alert("Please enter title and text in note!!!");
  }
  let notes=localStorage.getItem("notes");
  let objnote;
  if(notes == null){
    objnote=[];
  }
  else{
    objnote=JSON.parse(notes);
  }
  let myobj={
    title:titlenote.value,
    txt:txtnote.value
  }
  objnote.push(myobj);
  localStorage.setItem("notes",JSON.stringify(objnote));
  titlenote.value="";
  txtnote.value="";
  shownote();
}

function deletelist(){
  if(confirm("Do you want clear all notes")){
  localStorage.clear();
  shownote();}
}
shownote();