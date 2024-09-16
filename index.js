let image=document.querySelectorAll('.profile');
let input=document.querySelector('#file-upload')

input.addEventListener("change",()=>{
   image[0].src=URL.createObjectURL(input.files[0])
   image[1].src=URL.createObjectURL(input.files[0])
   
    
})

 let bar=document.querySelector('.skill-bar');
let inputbar=document.getElementById('inputbar');
// let value="inputbar.value"
inputbar.addEventListener('change',()=>{

    bar.style.width= inputbar.value +"px"; 
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




let btn2=document.getElementById('submit2')
 
btn2.addEventListener("click",()=>{
var element = document.getElementById('pdf-resum');
var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};


html2pdf().set(opt).from(element).save();

  
})


// document.getElementById('phonefm').value
let mail=document.getElementById('mailfm')
let address=document.getElementById('locationfm')
let website=document.getElementById('websitefm')
let year1=document.getElementById('year1fm')
let degree1=document.getElementById('degree1fm')
let degreedetail1=document.getElementById('degrerdetail1fm')
let year2=document.getElementById('year2fm')
let degree2=document.getElementById('degree2fm')
let degreedetial2=document.getElementById('degrerdetail2fm')
let year3=document.getElementById('year3fm')
let degree3=document.getElementById('degree3fm')
let degreedetial3=document.getElementById('degrerdetail3fm')
let skill1= document.getElementById('skil1fm')
let skill2= document.getElementById('skil2fm')
let skill3= document.getElementById('skil3fm')
let skill4= document.getElementById('skil4fm')
let name1=document.getElementById('namefm')
let profassion=document.getElementById('profassionfm')
let profassion_profile=document.getElementById('profassion-profilefb')
let yearstart1=document.getElementById('workyearstart1')
let yearend1=document.getElementById('workyearend1')
let wordetail1=document.getElementById('work-detialfm1')
let experiece1=document.getElementById('workexperiecefm1')
let yearstart2=document.getElementById('workyearstart2')
let yearend2=document.getElementById('workyearend2')
let worddetail2=document.getElementById('work-detialfm2')
let experiece2=document.getElementById('workexperiecefm2')
let phone=document.getElementById('phonefm')
function seterror(elemetn,masseg){
    let inputcontrol=elemetn.parentElement;
    let errordisplay=inputcontrol.querySelector('.error')
    
    errordisplay.innerText=masseg;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success')
}

function success(element){

    let inputcontrol=element.parentElement;
    let errordisplay=inputcontrol.querySelector('.error')

    errordisplay.innerText="";
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error')
    
}

const isValidEmail = mail => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}
function generate(){
    if(phone.value==""){
        seterror(phone,'Please type valid phone number');
    }

    else{
        success(phone);
        document.getElementById("phont").innerText = phone.value;
    }

    if(mail.value==""){
        seterror(mail,'Please type valid Emial');
    }else if(!isValidEmail(mail.value)){
        seterror(mail,"this is not a valid Email")
    }

    else{
        success(mail);
        document.getElementById("mailt").innerText = mail.value
    }

    if(address.value==""){
        seterror(address,'Please type your address');
    }

    else{
        success(address);
        document.getElementById("adresst").innerText = address.value

    }

    if(website.value==""){
        seterror(website,'Please type your address');
    }

    else{
        success(website);
        document.getElementById("websitet").innerText = website.value    }


        if(year1.value==""){
            seterror( year1,'plese type your firtst year of degree')
        }
        else{
        success(year1);    
        document.getElementById("year1t").innerText = year1
            .value}
            if( degree1.value==""){
                seterror(degree1,'plese type your first degree')
            }
            else{
            success(degree1);
            document.getElementById("degree1t").innerText = degree1.value}
            if( degreedetail1.value==""){
                seterror(degreedetail1,'plese type first degree detail')
            }
            else{
            success(degreedetail1);
            document.getElementById("degreedetai1").innerText = degreedetail1.value}
            if(year2.value==""){
                seterror(year2,'plese type second year')
            }
            else{
            success(year2);
            document.getElementById("year2t").innerText = year2.value}
            if(degree2.value==""){
                seterror(degree2,'plese type second degree')
            }
            else{
            success(degree2);
            document.getElementById("degree2t").innerText = degree2.value}
            if(degreedetial2.value==""){
                seterror(degreedetial2,'plese type second degree detail')
            }
            else{
            success(degreedetial2);
            document.getElementById("degreedetai2").innerText = degreedetial2.value}
            if(year3.value==""){
                seterror(year3,'plese type third year')
            }
            else{
            success(year3);
            document.getElementById("year3t").innerText = year3.value}
            if(degree3.value==""){
                seterror(degree3,'plese type third degree')
            }
            else{
            success(degree3);
            document.getElementById("degree3t").innerText = degree3.value}
            if(degreedetial3.value==""){
                seterror(degreedetial3,'plese type your degree detail ')
            }
            else{
            success(degreedetial3);
            document.getElementById("degreedetai3").innerText = degreedetial3.value}    



            
if(skill1.value==""){
    seterror(skill1,"please type your skill")
}
else{success(skill1)    
document.getElementById("skil1").innerText = skill1.value}
if(skill2.value=="")    {
    seterror(skill2,"please type your skill")
}
else{success(skill2)
    document.getElementById("skil2").innerText = skill2.value}
    if(skill3.value==""){
        seterror(skill3,"please type your skill")
    }
    else{success(skill3)
    document.getElementById("skil3").innerText = skill3.value}
    if(skill4.value==""){
        seterror(skill4,"please type your skill")
    }
    else{success(skill4)
    document.getElementById("skil4").innerText = skill4.value}



    
if(name1.value==""){
    seterror(name1,"please type your name ")
}
else{
success(name1)    
document.getElementById("namet").innerText = name1.value}
if(profassion.value==""){
    seterror(profassion,"please type your profassion ")
}
else{    
success(profassion)
    document.getElementById("t").innerText = profassion.value}


    if(profassion_profile.value==""){
        seterror(profassion_profile,"plase type profassion-profile")
    }
    else{
        success(profassion_profile)
            document.getElementById("profassionalprofilet").innerText = profassion_profile.value}


            if(yearstart1.value==""){
                seterror(yearstart1,"please type year education period currectly")
            }
            else{
            success(yearstart1)
            document.getElementById("startyear1t").innerText = yearstart1.value}
            if(yearend1.value==""){
                seterror(yearend1,"please type year education period currectly")
            }
            else{
            success(yearend1)
            document.getElementById("endyear1t").innerText = yearend1.value}
            if(wordetail1.value==""){
                seterror(wordetail1,"please type year education period currectly")
            }
            else{
            success(wordetail1)
            document.getElementById("degreename1t").innerText = wordetail1.value}
            if(experiece1.value==""){
                seterror(experiece1,"please type year education period currectly")
            }
            else{
            success(experiece1)
            document.getElementById("degreedetail1t").innerText = experiece1.value}
            
            
            if(yearstart2.value==""){
                seterror(yearstart2,"please type year education period currectly")
            }
            else{
            success(yearstart2)
            document.getElementById("startyear2t").innerText = yearstart2.value}
            if(yearend2.value==""){
                seterror(yearend2,"please type year education period currectly")
            }
            else{
            success(yearend2)
            document.getElementById("endyear2t").innerText = yearend2.value}
            if(worddetail2.value==""){
                seterror(worddetail2,"please type year education period currectly")
            }
            else{
            success(worddetail2)
            document.getElementById("degreename2t").innerText = worddetail2.value}
            if(experiece2.value==""){
                seterror(experiece2,"please type year education period currectly")
            }
            else{
            success(experiece2)
            document.getElementById("degreedetail2t").innerText = experiece2.value
        }        
}

