const screen = document.getElementById("outPutScreen");

const display =(num)=>{
    screen.value += num
}

function calculate (){
try{
    if(screen.value === "undefined"){
        document.location.reload();
    }
    else{
        screen.value = eval(screen.value);
        // console.log(screen.value)
        console.log(typeof(screen.value))
        
       
      const fun  = screen.value.includes("undefined")
    
        // console.log(fun)
        if(fun){
            document.location.reload();
       }
    }
    }
catch(err){
    screen.value="Syntax Error";
    document.location.reload()
}
}

function del(){
    screen.value = screen.value.slice(0,-1)
}

const refresh = ()=>{
   screen.value = ""
   
}