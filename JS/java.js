function  ar() {
    const element=document.getElementById("color").value;
    const body=document.getElementsByTagName("body")[0];
    const nav=document.querySelectorAll(".nav-link");
    const button=document.getElementsByTagName("button");
    const carousel=document.querySelectorAll(".carousel-caption");
    const input=document.getElementsByTagName("input");
    for (let index = 0; index < input.length; index++) {
       input[index].style.color=element;
        
    }
    for(i=0;i<carousel.length;i++)
    carousel[i].style.color=element;
    for(i=0;i<button.length;i++)
    button[i].style.color=element;
    body.style.color=element;  
    for(i=0;i<nav.length;i++)  
    nav[i].style.color=element;
    
}
function countdown2(d,h,m,s)
{
    document.getElementById("days").innerHTML=d+" days";
    document.getElementById("seconds").innerHTML=s+" seconds";
    document.getElementById("hours").innerHTML=h+" hours";
    document.getElementById("minutes").innerHTML=m+" minutes";
    if(s>0)
     {s--;
        setTimeout(countdown2,1000,d,h,m,s);
     }
     else{
         if(m>0)
         {
             m--;
             s=59;
             setTimeout(countdown2,1000,d,h,m,s);
         }
         else if(h>0){
             h--;
             m=59;
             s=59;
             setTimeout(countdown2,1000,d,h,m,s);

         }
         else if(d>0)
         {
             d--;
             h=23;
             m=59;
             s=59;
             setTimeout(countdown2,1000,d,h,m,s);
         }
         
     }

   
}


   
function countdown()
{
    var date1=document.getElementById("d1");
    var date2=document.getElementById("d2");
    var now=new Date(date1.value);
    var eventDate =new Date(date2.value);    
    var currentTime=now.getTime();
    var eventTime=eventDate.getTime();
    var remTime=eventTime-currentTime;
    var s=Math.floor(remTime/1000);
    var m=Math.floor(s/60);
    var h=Math.floor(m/60);
    var d=Math.floor(h/24);
    h%=24;
    s%=60;
    m%=60;
    if(h<10)
    {
        h="0"+h;
    }
    if(m<10)
    {
        m="0"+m;
    }
    if(s<10)
    {
        s="0"+s;
    }
    if(d<10)
    {
        d="0"+d;
    }
    countdown2(d,h,m,s);
  
   
    
   

}

