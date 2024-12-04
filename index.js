// let box = document.getElementById("box")
let input = document.getElementById("input")
let sendBtn = document.getElementById("send")
let addBtn = document.getElementById("add")
let item = document.getElementById("item")
let block = document.getElementById("block")
let input2 = document.getElementById("input2")





function openModal () {
    // alert(input.value)
    if (input.value < 5) {
        
    
    item.innerHTML =`Бештен кичине - ${input.value}`
    item.style.backgroundColor = "red"
    item.style.color = "white"
    item.style.fontSize = "18px"
    item.style.fontWeight = "bold"
    item.style.textAlign= "center"
    item.style.padding= "30px"
    item.style.borderRadius = "8px"
    item.style.display = "inline-block"
    item.style.marginLeft = "130px"
    item.style.height = "100px"
    item.style.marginTop = "20px"
    
 
    }else if (input.value < 10){
        
    item.innerHTML = `Ондон кичине - ${input.value}`
    item.style.backgroundColor = "blue"
    item.style.color = "white"
    item.style.fontSize = "18px"
    item.style.fontWeight = "bold"
    item.style.textAlign= "center"
    item.style.padding= "50px 0px"
    item.style.borderRadius = "50%"
    item.style.display = "inline-block"
    item.style.marginLeft = "150px"
    item.style.height = "150px"
    item.style.width = "150px"
    item.style.marginTop = "20px"
    }else if(input.value >=10){
            
    item.innerHTML = `Ондон чон-${input.value}`
    item.style.backgroundColor = "green"
    item.style.color = "white"
    item.style.fontSize = "18px"
    item.style.fontWeight = "bold"
    item.style.textAlign= "center"
    item.style.padding= "30px"
    item.style.borderRadius = "8px"
    item.style.display = "inline-block"
    item.style.marginLeft = "130px"
    item.style.height = "100px"
    item.style.width = "200px"
    item.style.marginTop = "20px"
    }
    input.value =``
}
document.addEventListener("keydown",
    function (event){
        if(event.keyCode === 13){
            openModal()
        }
    }
)
sendBtn.onclick = openModal













function check () {
   let text = input2.value
    if(text.trim() != ""){
    block.innerHTML = `Cалам  ${input2.value}`
    block.style.color = "green"
    block.style.marginLeft = "150px"
    block.style.fontSize = "18px"
    block.style.fontWeight = "bold"
    }else {
    block.innerHTML = "Cураныч атынызды жазыныз!"
    block.style.color = "red"
    block.style.marginLeft = "80px"
    block.style.fontSize = "18px"
    block.style.fontWeight = "bold"
    }
    input2.value =``
    
}
document.addEventListener("keydown",
    function (event){
        if(event.keyCode === 8){
            check()
        }
    }
)

addBtn.onclick = check