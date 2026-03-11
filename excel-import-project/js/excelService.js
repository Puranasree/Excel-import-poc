function downloadTemplate(){

const data = [
["Name","Age","Marks"]
];

const ws = XLSX.utils.aoa_to_sheet(data);

const wb = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(wb, ws, "Students");

XLSX.writeFile(wb,"student_template.xlsx");

}


function readExcel(file){

return new Promise((resolve,reject)=>{

const reader = new FileReader();

reader.onload = function(e){

const data = new Uint8Array(e.target.result);

const workbook = XLSX.read(data,{type:'array'});

const sheetName = workbook.SheetNames[0];

const sheet = workbook.Sheets[sheetName];

const json = XLSX.utils.sheet_to_json(sheet);

resolve(json);

};

reader.onerror = reject;

reader.readAsArrayBuffer(file);

});

}