const input=document.querySelector("input");
const sri=document.getElementById("sri");
const s=document.getElementById("s");
const c=document.getElementById("c");
const sepcial=document.getElementById("special");
const n=document.getElementById("n");

const btn=document.querySelector(".btn");
const small=document.querySelector(".small");
const cap=document.querySelector(".cap");
const num=document.querySelector(".num");
const sp=document.querySelector(".sp");
const reseht=document.querySelector(".reset");
const eight=document.querySelector(".eight");
btn.addEventListener("click",check);
reseht.addEventListener("click",reset);


function reset()
{
    input.value="";
    cap.style.color="black";
    small.style.color="black";
    num.style.color="black";
    sp.style.color="black";
    eight.style.color="black";
    n.checked=false;
    sri.checked=false;
    s.checked=false;
    c.checked=false;
    sepcial.checked=false;
}

function check()
{

    if(input.value)
    {
        if(input.value.length>=8)
        {
            eight.style.color="green";
            sri.checked=true;
        }
         for(var i=0;i<input.value.length;i++)
         {
            console.log(input.value[3]);
            if(input.value[i]>='A'&& input.value[i]<='Z')
            {
                
                
                cap.style.color="green";
                c.checked=true;


            }
            if(input.value[i]>='a'&& input.value<='z')
            {
               
                small.style.color="green";
                s.checked=true;
            }
            if(input.value[i]=='@' || input.value[i]=='#' || input.value[i]=='?'|| input.value[i]=='!'|| input.value[i]=='-'|| input.value[i]=='*' || input.value[i]=='&'|| input.value[i]=='$' )
            {
               
                sp.style.color="green";
                sepcial.checked=true;
            }
            if(input.value[i]>='0' && input.value[i]<='9' )
            {
               
                num.style.color="green";
                n.checked=true;
            }
           
           
         }
    }
    else
    {
        alert("input cannot be empty");
    }
}

