var num=document.getElementById("ADD");
var sor=document.getElementById("SORT");
var maxi=document.getElementById("MAXIMUM");
var min=document.getElementById("min");
var rev=document.getElementById("REVERSE");
var even=document.getElementById("EVEN");
var odd=document.getElementById("ODD");
var msg=document.getElementById("msg");
var message;
num.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",").map((n)=>parseInt(n))
    result = input.reduce((num,acc) =>(acc+num),0);
    message="result:"+result
    msg.style.display="inherit";
    msg.innerHTML=message;
}

even.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    const eve=input.filter((x)=>x%2==0)
    message="result:"+eve
    msg.style.display="inherit";
    msg.innerHTML=message;
}
odd.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    const odd=input.filter((x)=>x%2!=0)
    message="result:"+odd
    msg.style.display="inherit";
    msg.innerHTML=message;
}
min.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((num,acc)=>(num<acc?num:acc),result[0])
    message="result:"+res
    msg.style.display="inherit";
    msg.innerHTML=message;
}

rev.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    let result = input.reverse();
    message="result:"+result
    msg.style.display="inherit";
    msg.innerHTML=message;
}
sor.onclick=()=>{
    let text=document.getElementById("number").value;
    let input=text.split(",");
    for(let i=0;i<input.length;i++)
    {
        for(let j=i+1;j<input.length;j++)
        {
            if(input[j]<input[i]){
                temp=input[j];
            input[j]=input[i];
            input[i]=temp;
            }
        }
    }
    message="result:"+input
    msg.style.display="inherit";
    msg.innerHTML=message;
}
maxi.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((num,acc)=>(num>acc?num:acc),result[0])
    message="result:"+res
    msg.style.display="inherit";
    msg.innerHTML=message;
}
