

let output = document.getElementById("output")
let input =document.getElementById("input")
document.getElementById("input").oninput = copySecondArea
function copySecondArea() {
    let text = input.value
    output.innerText = text
}

function textTrough(elem){
    output.classList.remove('underline')
    output.classList.toggle('line-through')
    document.querySelectorAll('.text-decor').forEach((elemDec)=>{
        elemDec.classList.remove('active')
    })
    elem.classList.toggle('active')


}
function textUnderline(elem){
    output.classList.remove('line-through')
   output.classList.toggle('underline')
    document.querySelectorAll('.text-decor').forEach((elemDecor)=>{
      elemDecor.classList.remove('active')
    })
    elem.classList.toggle('active')
}



function textItalic (elem){
    output.classList.toggle('italic')
    elem.classList.toggle('active')
}
function fontWeigh (elem){
    output.classList.toggle('bold')
    elem.classList.toggle('active')
}

function textCenter(elem){
    output.style.textAlign= 'center '
    document.querySelectorAll('.align').forEach((btnAlign)=>{
     btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textRight(elem){
    output.style.textAlign= 'right'
    document.querySelectorAll('.align').forEach((btnAlign)=>{
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textLeft(elem){
    output.style.textAlign= 'left'
    document.querySelectorAll('.align').forEach((btnAlign)=>{
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}

function textRed (elem){
    let colors = ['text-primary', 'text-success']
    colors.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-danger')
    document.querySelectorAll('.color').forEach((btnColor)=>{
      if(elem !==  colors){
          btnColor.classList.remove('active')
      }
    })
    elem.classList.toggle('active')
}
function textGreen(elem){
    let colors = ['text-primary','text-danger' ]
    colors.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-success')
    document.querySelectorAll('.color').forEach((btnColor)=>{
        if(elem !==  colors){
            btnColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textBlue (elem){
    let colors = ['text-danger','text-success' ]
    colors.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-primary')
    document.querySelectorAll('.color').forEach((btnColor)=>{
        if(elem !==  colors){
            btnColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
