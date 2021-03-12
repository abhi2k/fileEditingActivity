let fs=require("fs");
let path=require("path");

function isFileorNot(filePath) {
    return fs.lstatSync(filePath).isFile();
}
function removeBigLineBreak(filePath){
    let data = fs.readFileSync(filePath).toString();
data = data.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
console.log(data);
} 
function addLineNotoNonEmptyLines(filePath){
    var data=fs.readFileSync(filePath).toString();
    data=data.split("\n");
    let count=1;
    for(let idx=0;idx<data.length;idx++){
        if(data[idx].length>1){
        data[idx]=count+". "+data[idx];
        count=count+1;
        console.log(data[idx]);
    }
      else{
            console.log(data[idx]);
      }
    }
}  
 function addLineNotoAllLines(filePath){
    var data=fs.readFileSync(filePath).toString();
    data=data.split("\n");
    var count=1;
    for(let idx=0;idx<data.length;idx++){
        data[idx]=count+". "+data[idx];
        count=count+1;
        console.log(data[idx]);
    }
} 

// input argument
let input=process.argv.slice(2);
let filePath;
 if((input[0] == "-b" || input[0] == "-n" ||input[0]=="-s")&& input[1]!='-s' && input[1]!='-b'&& input[1]!='-n'){

         filePath = input[1];
         let isFile=isFileorNot(filePath);
    
         if(isFile==true){
         let cmd=input[0];
            switch(cmd){

                case '-s': 
                removeBigLineBreak(filePath);
                break;
                case '-b': 
                addLineNotoNonEmptyLines(filePath);
                break;
                case '-n': 
                addLineNotoAllLines(filePath);
                break;

                default: console.log("invalid input");
                break;
            }
        }
        else{
            console.log("error");
        }
}
 else if((input[0]=='-s'&& input[1]=='-b')||(input[1]=='-s'&& input[0]=='-b')){
   
    filePath = input[2];
    let isFile=isFileorNot(filePath);

    if(isFile==true){
        let data = fs.readFileSync(filePath).toString();
        data = data.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
        data=data.split("\n");
        var count=1;
        for(let idx=0;idx<data.length;idx++){
        if(data[idx].length>1){
        data[idx]=count+". "+data[idx];
        count=count+1;
        console.log(data[idx]);
}
    else{
        console.log(data[idx]);
  }
}
    }
    else{
        console.log("error");
    }
}
else if((input[0]=='-s'&& input[1]=='-n')||(input[1]=='-s'&& input[0]=='-n')){
    
    filePath = input[2];
    let isFile=isFileorNot(filePath);

    if(isFile==true){
        let data = fs.readFileSync(filePath).toString();
        data = data.replace(/(\r\n|\r|\n){2}/g, '$1').replace(/(\r\n|\r|\n){3,}/g, '$1\n');
        data=data.split("\n");
        let count=1;
    for(let idx=0;idx<data.length;idx++){
        data[idx]=count+". "+data[idx];
        count=count+1;
        console.log(data[idx]);
    }
    }
    else{
        console.log("error");
    }
} 
else if((input[0]=='-s'&& input[1]=='-n')||(input[1]=='-s'&& input[0]=='-n')){
    filePath=input[2];
    if(input[0]=='-b'){
        addLineNotoNonEmptyLines(filePath);
    }
    else if(input[0]=='-n'){
        addLineNotoAllLines(filePath);
    }
}
else
{
    filePath = input[0];

    let isFile=isFileorNot(filePath);
    
    if(isFile==true){
        
        for(let i=0;i<input.length;i++){
                let filePath=input[i];
                let data=fs.readFileSync(filePath);
                console.log(data.toString());
        }
     }
     else{
         console.log("Error");
     }
}
 