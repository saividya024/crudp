function addTask(){
    let inputData=document.getElementById("enterData")
    let inputDatavalue=inputData.value.trim()
    let allTasksContainer=document.querySelector("#tasks")
    let litag=document.createElement("li");
    litag.innerHTML +=
    `
    ${inputDatavalue}
    <button class="edit">Edit</button><img src="https://th.bing.com/th/id/OIP.JAsXHrSJ04O5zYQDPiV2OwHaE8?w=297&h=198&c=7&r=0&o=5&pid=1.7" >
    <button class="delete">Delete</button>
    `
    litag.style.listStyleType="none"
  allTasksContainer.appendChild(litag)
    let editbtn=litag.querySelector(".edit")
    editbtn.style.backgroundColor="blue"
     let deletebtn=litag.querySelector(".delete")
    deletebtn.style.backgroundColor="red"



// document.body.appendChild(litag)
inputData.value=""

deletebtn.addEventListener("click",()=>{
    deletetask(litag)
    console.log("df is called");
    
  } 
)

}
function deletetask(litag){
    let a=confirm(" are you sure you wanna delete this?")
    if(a){
         litag.remove()
    }
}