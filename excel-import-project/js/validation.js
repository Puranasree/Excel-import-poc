function validateRows(data){

let errors=[];

data.forEach((row,index)=>{

if(!row.Name){

errors.push(`Row ${index+2} : Name missing`);

}

if(isNaN(row.Age)){

errors.push(`Row ${index+2} : Age must be number`);

}

if(row.Marks<0 || row.Marks>100){

errors.push(`Row ${index+2} : Marks must be between 0-100`);

}

});

return errors;

}