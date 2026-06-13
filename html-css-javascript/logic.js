
        let button=document.getElementById("btn");
        let display=document.getElementById("display");
        let numBtn=document.querySelectorAll(".num");
        let opBtn=document.querySelectorAll(".op");
        let result=document.getElementById("result");
        let clear=document.getElementById("clear");
        let num1="";
        let num2="";
        let operation="";
        let choose2=false;
        numBtn.forEach(button=>{
            button.addEventListener("click",()=>{
                if(!choose2){
                    num1+=button.value;
                    display.value=num1;
                }
                else{
                    num2+=button.value;
                    display.value=num2;
                }
            })
        })
        opBtn.forEach(button=>{
            button.addEventListener("click",()=>{
                if(num1!==""){
                    operation=button.value;
                    choose2=true;
                }
            })
        })
        clear.addEventListener("click",()=>{
            num1="";
            num2="";
            operation="";
            choose2=false;
            display.value="";
            result.value="";
        })
         button.addEventListener("click",()=>{
                if(num1!==""&& num2!==""){
                    let v1=Number(num1);
                    let v2=Number(num2);
                    let ans=0;
                    if(operation==="plus"){
                        ans=v1+v2;
                    }
                    if(operation==="minus"){
                        ans=v1-v2;
                    }
                    if(operation==="multiply"){
                        ans=v1*v2;
                    }
                    if(operation==="divide"){
                        ans=v1/v2;
                    }
                    result.value=ans;
                }
        })