window.onload = (function(){
    let form  = document.getElementById("myForm")
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let input = document.getElementById("num");
        if(input.value==""){
            throw console.error("require number");
        }
        
    })
    addCommas()
    
});

function addCommas(){
    const num = document.getElementById("num").value;
    console.log(num);
    const numFor=Intl.NumberFormat('en-US');
    const new_for =numFor.format(num)
  
    let div = document.getElementById('output');
    div.innerHTML +=`<p>${new_for}</p>`

}


