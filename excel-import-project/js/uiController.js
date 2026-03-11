async function handleUpload(){

const fileInput=document.getElementById("excelFile");

if(!fileInput.files.length){

alert("Please upload Excel file");

return;

}

const file=fileInput.files[0];

const data=await readExcel(file);

displayData(data);

const errors=validateRows(data);

showErrors(errors);

}



function displayData(data){

const table=document.querySelector("#studentTable tbody");

table.innerHTML="";

data.forEach(row=>{

let tr=document.createElement("tr");

tr.innerHTML=`
<td>${row.Name||""}</td>
<td>${row.Age||""}</td>
<td>${row.Marks||""}</td>
`;

table.appendChild(tr);

});

}



function showErrors(errors){

const list=document.getElementById("errorList");

list.innerHTML="";

if(errors.length===0){

list.innerHTML="<li>No validation errors</li>";

return;

}

errors.forEach(e=>{

let li=document.createElement("li");

li.innerText=e;

list.appendChild(li);

});

}