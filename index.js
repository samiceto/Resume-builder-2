let image=document.querySelector('.img img');
let input=document.querySelector('#file-upload')

input.addEventListener("change",()=>{
    image.src=URL.createObjectURL(input.files[0])
})
 let bar=document.querySelector('.skill-bar');
let inputbar=document.getElementById('inputbar');
// let value="inputbar.value"
inputbar.addEventListener('change',()=>{
    bar.style.width=inputbar.value +"%"; 
})
let bar2=document.querySelector('.skill-bar2');
let inputbar2=document.getElementById('inputbar2');
// let value="inputbar.value"
inputbar2.addEventListener('change',()=>{
    bar2.style.width=inputbar2.value +"%"; 
})

let bar3=document.querySelector('.skill-bar3');
let inputbar3=document.getElementById('inputbar3');
// let value="inputbar.value"
inputbar3.addEventListener('change',()=>{
    bar3.style.width=inputbar3.value +"%"; 
})

let bar4=document.querySelector('.skill-bar4');
let inputbar4=document.getElementById('inputbar4');
// let value="inputbar.value"
inputbar4.addEventListener('change',()=>{
    bar4.style.width=inputbar4.value +"%"; 
})


// let click=document.getElementById('click');

// click.addEventListener('dblclick',()=>{
   
// })


function generatepdf(){
    var element = document.getElementById('pdf-resum');
html2pdf(element);

}

// form



function generate(){
// contect
    document.getElementById("phont").innerText = document.getElementById('phonefm').value;
    document.getElementById("mailt").innerText = document.getElementById('mailfm').value
    document.getElementById("adresst").innerText = document.getElementById('locationfm').value
    document.getElementById("websitet").innerText = document.getElementById('websitefm').value

// education
    document.getElementById("year1t").innerText = document.getElementById('year1fm').value
    document.getElementById("degree1t").innerText = document.getElementById('degree1fm').value
    document.getElementById("degreedetai1").innerText = document.getElementById('degrerdetail1fm').value
    document.getElementById("year2t").innerText = document.getElementById('year2fm').value
    document.getElementById("degree2t").innerText = document.getElementById('degree2fm').value
    document.getElementById("degreedetai2").innerText = document.getElementById('degrerdetail2fm').value
    document.getElementById("year3t").innerText = document.getElementById('year3fm').value
    document.getElementById("degree3t").innerText = document.getElementById('degree3fm').value
    document.getElementById("degreedetai3").innerText = document.getElementById('degrerdetail3fm').value

    
    



// skills


    document.getElementById("skil1").innerText = document.getElementById('skil1fm').value
    document.getElementById("skil2").innerText = document.getElementById('skil2fm').value
    document.getElementById("skil3").innerText = document.getElementById('skil3fm').value
    document.getElementById("skil4").innerText = document.getElementById('skil4fm').value


// name and profassion

    document.getElementById("namet").innerText = document.getElementById('namefm').value
    document.getElementById("t").innerText = document.getElementById('profassionfm').value

   
// personal profile
    document.getElementById("profassionalprofilet").innerText = document.getElementById('profassion-profilefb').value


// work experiece

document.getElementById("startyear1t").innerText = document.getElementById('workyearstart1').value
document.getElementById("endyear1t").innerText = document.getElementById('workyearend1').value
document.getElementById("degreename1t").innerText = document.getElementById('work-detialfm1').value
document.getElementById("degreedetail1t").innerText = document.getElementById('workexperiecefm1').value


document.getElementById("startyear2t").innerText = document.getElementById('workyearstart2').value
document.getElementById("endyear2t").innerText = document.getElementById('workyearend2').value
document.getElementById("degreename2t").innerText = document.getElementById('work-detialfm2').value
document.getElementById("degreedetail2t").innerText = document.getElementById('workexperiecefm2').value


}



