const searchwrapper=document.querySelector(".search-input");
const inputbox=document.querySelector("input");
const suggbox=document.querySelector(".autocom-box");
const icon=document.querySelector(".icon");
let linktag=searchwrapper.querySelector("a");
let weblink;

inputbox.onkeyup=(e)=>{
    let userdata=e.taget.value;
    let emptyarray=[];
    if (userdata){
        icon.onclick=()=>{
            weblink="https://www.sherwoodparkyards.com/"+userdata;
        linktag.log(weblink);
        linktag.click();
        }
        emptyarray=suggestion.filter((data)=>{
            data.tolocalowerCase().startsWith(userdata.tolocalowerCase());

        });


        emptyarray=emptyarray.map((data)=>{
            
        });
        searchwrapper.classList.add("active");
        showSuggestions(emptyarray);
        let alllist=suggbox.querySelectorAll("li");
        for (let i=0; i< alllist.length;i++){

    }
        
    }else  {
        searchwrapper.classList.remove("active");   
    }
    }
    function select(elements){
        let selectdata= elements.textContent;
        inputbox.value=selectdata;
        icon.onclick=()=>{
            weblink="https://sherwoodparkyards.com/"+selectdata;
            linktag.setAttribute("href" ,weblink);
            linktag.click();
        }
searchWrapper.classList.remove("active");


    }

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue=inputbox.value;
        listData='<li>' +userValue+ '<li>';
    }else{
        listData=list.join('');
    }
    suggbox.innerHTML =listData;
}