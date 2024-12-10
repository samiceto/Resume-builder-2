document.getElementById('temp2').addEventListener('click',function(){
    let theme= document.getElementById('firstpage')
    theme.classList.add('dispnone')
    let invsible=document.getElementById('invsible')
invsible.innerHTML=`  <div class="contaner2" id="pdf-resum2">
<div class="nameinfo2"><div class="name2"><p id="namet2" class="namet2" >SAMIULLAH MALIK</p><p id="t2" >FULL STACK WEB DEVELOPER</p></div></div>
<div class="holder2">

<div class="personalifo2">
   

    <div class="contact-container2">

    <div class="contect2"><h1 id="contect" class="prsnonalheading2 flex2" >CONTACT</h1>

    <div class="phon2 flex2"><p id="phont" class="" >+3122313716</p><img class="logosize2 logobg2" src="img/phon.png" alt=""></div>
    <div class="phon2 flex2"><p id="mailt" class=" mail2"  >samiullahmalik7474@gmial.com</p><img class="logosize2 logobg2" src="img/mail.png" alt=""></div>
    <div class="coco2"><div class="phon2 flex2"><p id="adresst2" class="cocop" >Your address</p><img class="logosize2 logobg2 cocoimg2" src="img/location.png" alt=""></div>
</div>
   <div id="web2" class="coco2"> <div class="phon2 flex2"><p id="websitet2" class=" cocop" >www.come.com</p><img class="logosize2 logobg2 cocoimg2" src="img/website.png" alt=""></div></div>
</div><hr class="">
    </div>


    <div id="ed" class="education2">
        
       
    </div>
    <div class="skill-container2">
        <hr class="opacity"> 
    <div class="skill-head2">
        <div class="skillheading ed-head2 "><p class="" >SKILLS</p></div>
        <div class="skill-logo"></div>
    </div>
    <div id="resume-skills" class="skill-body2">
       
       
    </div>
</div>
    
    
    
</div>
<div class="divider2"></div>
<div class="profassion2">
    <div class="fix2">
    <div class="profasional-profile2"><div ><h1  class="profasional-heading2">PROFESSIONAL PROFILE</h1></div> <p id="profassionalprofilet" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus dignissimos accusamus deserunt praesentium aut soluta dolorem laborum nostrum dicta repellendus inventore blanditiis, dolore aliquid, necessitatibus aliquam sequi labore quis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus dignissimos accusamus deserunt praesentium aut soluta dolorem laborum nostrum dicta repellendus inventore blanditiis, dolore aliquid, necessitatibus aliquam sequi labore quis!</p><hr class="hr-profassional2"></div>
    <div class="work-experience2">
    <div><h1   class="profasional-heading2">WORK EXPERIENCE</h1></div>
        <div id="excontainer">
   
</div> 
</div>
</div>
</div>

</div>
</div>
`
let boxfm=document.getElementById('boxfm');
boxfm.innerHTML=`   <div class="boxfm">
    <div id="nav" class="nav"> <h1 class="heading-fm">Build your perfect CV</h1>
 <div class="themelogopnav">
  <img class="cvlogo" src="img/cvlogo.png" alt="">
  <div>
 <p>resumeceto.com</p><p class="themelogop2nav">by samiceto.com</p></div></div>

     <div class="section">
          <p id="pnav">Profile</p>
                <p id="exnav">Name</p>
                <p id="ednav">Education</p>
                <p id="skillnav">Skills</p>
                <p id="cvnav">Experience</p>
                <p id="tpnav">CV</p>
     </div>
     </div>
 <div class="containerfm">
         <div class="leftfm2">
             <div id="profileimg" class="page"><div class="profilecontain">
                 <div class="inputcontrol1">
                 <div class="img">
                     <img class="profile" src="/img/marble.jpg" alt="">
                 </div>
             <input type="file"id="file-upload"><label class="label" class="prlable2" for="file-upload" class="custom-file-upload flex2"> <img class="profile-edit" src="img/photo-camera.png" alt=""><p class="profilep2">upload your profile picture</p>
                 </label><div class="error"></div></div>
             </div></div>
             
                 <!-- <div class="contectfm"> -->
                    <div id="contect" class="page">
                    <div class="center">
                   <img id="man" class="man" src="img/man.jpg" alt="">

                    <div class="inputcontrol">
                         <h1>Add Contect Details</h1>
                     <p class="congrag">You made a great template selection! Now let&apos;s add your details to it.</p>

                     <label class="label" for="phonefm">Phone</label><br><input type="number" class="no-arrows" maxlength="13" id="phonefm" ><div class="error"></div></div>
                    
                     <div class="inputcontrol">
                     <label class="label" for="mailfm">Email</label><br>
                     <input type="text" maxlength="40" id="mailfm" ><div class="error"></div></div>

                     <div class="inputcontrol">
                     <label class="label" for="locationfm">Address</label><br>
                     <input type="text" maxlength="160" id="locationfm" ><div class="error"></div></div>

                     <div class="inputcontrol">
                     <label class="label" for="wesitefm">Website/Social Media Link</label><br>
                     <input type="text" maxlength="100" id="websitefm" placeholder="Optional" ><div class="error"></div>
                     <div class="btndiv"><button type="button" id="themeback" class="backtotheme">Back</button>
                            <button type="button" id="cont" class="next">Next</button></div>

                 </div>
                 </div>
                 </div>
                     
                 <!-- </div> -->
                 <!-- <div class="educationfm"> -->
                     <div id="education" class="page">
                     <div class="center">
                      <img id="man" class="man" src="img/man.jpg" alt="">

                     <h1>Education</h1>
                         <div id="ed-container"><div class="ed-item">
                     <div class="inputcontrol">
                     <label class="label" for="year1fb">Year of Completion</label><br>
                     <select type="number" class="custom-select" name="ed-year" id="year1fm" >
                         <option value="">Select The Year</option>
                     </select><div class="error"></div></div>

                     <div class="inputcontrol">
                     <label class="label" for="degree1fm">Degree Name</label><br>
                     <input type="text" maxlength="30" id="degree1fm" ><div class="error"></div></div>

                     <div class="inputcontrol">
                     <label class="label" for="degrerdetail1fm">Universtiy/College/Institute</label><br>
                     <input type="text" maxlength="40" id="degrerdetail1fm" ><div class="error"></div></div>

                     
                     <div class="inputcontrol">
                         <label class="label" for="degrerdetail1fm">GPA</label><br>
                         <input type="text" maxlength="20" id="gpafm" ><div class="error"></div></div>
                     
                 </div>
             </div>
  <button type="button" id="add-ed-btn" class="addbtn">Add Education</button>
                    <br><br>
                    <div class="btndiv"><button type="button" id="contback" class="back">Back</button>
                    <button type="button" class="next" id="update-ed-btn">Next</button></div>
</div>
                     </div>
                     
                 <!-- </div> -->
                 <!-- <div class="skillsfm"> -->
                     <div id="skills" class="page">
                     <div class="center">
                    <img id="man" class="man" src="img/man.jpg" alt="">

                     <h1>Skills</h1>
                         <div class="skills-section">
                     
                     <label class="label" for="skil1fm">Skill 1</label><br>
                     <div id="skill-container">
                     <div class="skill-item">
                     <div class="inputcontrol">
                     <input type="text" maxlength="20" id="skil1fm" ><div class="error"></div></div>

                 </div>
                 </div>
                 </div>
                      <button type="button" class="addbtn" id="add-skill-btn" >Add Skill</button><br><br>
                              <div class="btndiv"><button type="button" id="contback1" class="back">Back</button>
                             <button type="button" class="next" id="update-resume-btn">Next</button><br><br></div>


                 </div>
                     
                 <!-- </div> -->
</div>
         </div>
         <div class="rightfm2">

                     <div id="name" class="page">
                     <div class="center">
                    <img id="man" class="man" src="img/man.jpg" alt="">

                     <div></div>
                     <div></div>
                     <div></div>
                     <div class="inputcontrol">
                         <h1>Name and profassion</h1>
                     <label class="label" for="namefm">Type your name</label><br>
                     <input type="text" maxlength="30" id="namefm" ><div class="error"></div></div>

                     <div class="inputcontrol">
                     <label class="label" for="profassionfm">Type your profassion</label><br>
                     <input type="text" maxlength="35" id="profassionfm" ><div class="error"></div></div>


                     
                     
                     <div class="inputcontrol">
                         <h1>PROFESSIONAL PROFILE</h1>
                     <label class="label" for="profassion-profilefb">Type your profassion</label><br>
                     <textarea name="profassion-profilefb" maxlength="300" id="profassion-profilefb"  rows="5"></textarea><div class="error"></div></div>
                     <div class="btndiv"><button type="button" id="contback1" class="back">Back</button>
                            <button type="button" id="profassionbtn" class="next">Next</button></div>
</div>
</div>
                     
                    
                     <div id="experience" class="page"> 
                     <div class="center">
                     <img id="man" class="man" src="img/man.jpg" alt="">

                         <h1>WORK EXPERIENCE</h1>
                         <div id="work-container"><div class="work-item">
                        <div class="yeardiv"> <div class="inputcontrol">
                            <label class="label" for="workyearstart1"></label><br>
                            <select id="workyearstart1" class="custom-select" name="workyearstart1">
                                <option value="">Select Starting Year</option>
                            </select><div class="error"></div></div>
                            
                            <div class="inputcontrol">
                            <label class="label" for="workyearend1"></label><br>
                            <select id="workyearend1" class="custom-select" name="workyearend1">
                                <option value="">Select Ending Year</option>
                            </select><div class="error"></div></div></div>


                     <div class="inputcontrol">
                     <label class="label" for="work-detialfm1">Your Position</label><br>
                     <input type="text" id="work-detialfm1"  maxlength="20"><div class="error"></div></div>
                     
                     <div class="inputcontrol">
                         <label class="label" for="work-detialfm2">Company Name</label><br>
                         <input type="text" id="work-detialfm2"  maxlength="20"><div class="error"></div></div>
                         
                         <div class="inputcontrol">
                             <label class="label" for="work-detialfm3">Location</label><br>
                             <input type="text" id="work-detialfm3"  maxlength="20"><div class="error"></div></div>
     
                     <div class="inputcontrol">
                     <label class="label" for="workexperiecefm1">Type your profassion</label><br>
                     <textarea name="workexperiecefm1" maxlength="250" id="workexperiecefm1"  rows="5"></textarea><div class="error"></div></div>
                 </div></div>
                <button type="button" class="addbtn" id="work-ex-btn">Add More Experience</button>
                                <br><br>
                        <div class="btndiv"><button type="button" id="contback1" class="back">Back</button>
                            <button type="button" class="next" id="update-ex-btn">Next</button></div>

      </div>
                       </div></div>
     </div>
     
     
</div> `




     document.getElementById('pnav').classList.add('sec1')


let image=document.querySelectorAll('.profile');
let input=document.querySelector('#file-upload')

input.addEventListener("change",()=>{
image[0].src=URL.createObjectURL(input.files[0])
image[1].src=URL.createObjectURL(input.files[0])


})








let btn2 = document.getElementById('submit2');

btn2.addEventListener("click", () => {

var element = document.getElementById('pdf-resum2'); // The element to convert to PDF

// Set options for html2pdf
var opt = {
margin: 0.5, // Add some margin (adjust based on your content)
filename: 'myfile.pdf', // Set the output filename
image: { type: 'jpeg', quality: 0.98 }, // Image quality settings
html2canvas: { scale: 2 }, // Higher scale for better quality
jsPDF: {
unit: 'in',           // Set units to inches
format: 'a4',         // Set format to A4 (8.27 x 11.69 inches)
orientation: 'portrait', // Set orientation to portrait
putOnlyUsedFonts: true, // Optimize font usage
}
};

// Convert the element to PDF and save
html2pdf().set(opt).from(element).save();

});




// document.getElementById('phonefm').value
let mail=document.getElementById('mailfm')
let address=document.getElementById('locationfm')
let website=document.getElementById('websitefm')
let year1=document.getElementById('year1fm')
let degree1=document.getElementById('degree1fm')
let degreedetail1=document.getElementById('degrerdetail1fm')
let gpa2=document.getElementById('gpafm')

let skill1= document.getElementById('skil1fm')

let name1=document.getElementById('namefm')
let profassion=document.getElementById('profassionfm')
let profassion_profile=document.getElementById('profassion-profilefb')
let yearstart1=document.getElementById('workyearstart1')
let yearend1=document.getElementById('workyearend1')
let wordetail1=document.getElementById('work-detialfm1')
let wordetail2=document.getElementById('work-detialfm2')
let wordetail3=document.getElementById('work-detialfm3')
let experiece1=document.getElementById('workexperiecefm1')
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



const pages = document.querySelectorAll('.page');

// Initialize by showing the personal info page by default
// document.addEventListener('DOMContentLoaded', () => {
//   navigate('contect');
// });
navigate('contect')
function navigate(pageId) {
// Hide all pages
pages.forEach(page => page.classList.remove('active'));

// Show the selected page
const activePage = document.getElementById(pageId);
if (activePage) {
activePage.classList.add('active');
}

// Update the browser history (this changes the URL without reloading the page)
history.pushState({ pageId: pageId }, '', `#${pageId}`);
}


function nextpage(){
let currentpageid= document.querySelector('.page.active').id;
let nextpageid;
switch(currentpageid){
    case 'contect':
        nextpageid='name'
        break

        case 'name':
        nextpageid='education'
        break

        case 'education':
        nextpageid='skills'
        break

        case 'skills':
        nextpageid='experience'
        break

        case 'experience':
        nextpageid='tp'
        break
}
navigate(nextpageid)
}
function backpage(){
    let currentpageid= document.querySelector('.page.active').id;
    let nextpageid;
    switch(currentpageid){
        case 'education':
        nextpageid='name'
        document.getElementById('ednav').classList.remove('sec1')
        document.getElementById('exnav').classList.add('sec1')
        break

        case 'skills':
        nextpageid='education'
        document.getElementById('skillnav').classList.remove('sec1')
        document.getElementById('ednav').classList.add('sec1')
        break

        case 'name':
        nextpageid='contect'
        document.getElementById('exnav').classList.remove('sec1')
        document.getElementById('pnav').classList.add('sec1')
        break

        case 'experience':
        nextpageid='skills'
        document.getElementById('cvnav').classList.remove('sec1')
        document.getElementById('skillnav').classList.add('sec1')
        break

        case 'tp':
        nextpageid='experience'
        document.getElementById('tpnav').classList.remove('sec1')
        document.getElementById('cvnav').classList.add('sec1')
        break


        
    }
    navigate(nextpageid)
}

const back=document.querySelectorAll('.back')
    back.forEach((back2)=>{
        back2.addEventListener('click',function(){
            backpage()
        })
    })


    document.getElementById('cont').addEventListener('click',function(){
        contectsucess()
        })
        document.getElementById('themeback').addEventListener('click',function(){
            theme.classList.remove('dispnone')
            document.getElementById('contect').classList.remove('active')
            document.getElementById('nav').classList.add('dispnone')
            
        })
function contectsucess(){

let con1=false
let con2=false
let con3=false
let con4=false
if(phone.value==""){
seterror(phone,'Please type valid phone number');
}

else{
success(phone);
document.getElementById("phont").innerText = phone.value;
con1=true
}

if(mail.value==""){
seterror(mail,'Please type valid Emial');
}else if(!isValidEmail(mail.value)){
seterror(mail,"this is not a valid Email")
}

else{
success(mail);
document.getElementById("mailt").innerText = mail.value
con2=true
}

if(address.value==""){
seterror(address,'Please type your address');
}

else{
success(address);
document.getElementById("adresst2").innerText = address.value
con3=true

}

if(website.value==""){
    // seterror(website,'Please type your address');
    let web= document.getElementById('web2')
            web.classList.add('dispnone2')
            con4=true
}

else{
    success(website);
    document.getElementById("websitet2").innerText = website.value   
    con4=true }
    if(con1 && con2 && con3 && con4){
        document.getElementById('pnav').classList.remove('sec1')
        document.getElementById('exnav').classList.add('sec1')
        nextpage()
    }

}


function edusuceess(){

    document.getElementById('ednav').classList.remove('sec1')
    document.getElementById('skillnav').classList.add('sec1')
    nextpage();
}


function skillsucess(){
document.getElementById('skillnav').classList.remove('sec1')
document.getElementById('cvnav').classList.add('sec1')
nextpage()
}

document.getElementById('profassionbtn').addEventListener('click', function(){
profassionsucess();
})

function profassionsucess(){
let con1=false
let con2=false
let con3=false
if(name1.value==""){
seterror(name1,"please type your name ")
}
else{
success(name1)    
document.getElementById("namet2").innerText = name1.value.toUpperCase();
con1=true}
if(profassion.value==""){
seterror(profassion,"please type your profassion ")
}
else{    
success(profassion)
document.getElementById("t2").innerText = profassion.value.toUpperCase();
con2=true}


if(profassion_profile.value==""){
    seterror(profassion_profile,"plase type profassion-profile")
}
else{
    success(profassion_profile)
        document.getElementById("profassionalprofilet").innerText = profassion_profile.value
    con3=true}
    if(con1 &&
        con2 &&
        con3){
            document.getElementById('exnav').classList.remove('sec1')
            document.getElementById('ednav').classList.add('sec1')
            nextpage()
        }
}


function workexpsucess(){

  document.getElementById('submitdiv').classList.remove('dispnone')
    document.getElementById('cvnav').classList.remove('sec1')
    document.getElementById('tpnav').classList.add('sec1')
nextpage();
}


let currentyear= new Date().getFullYear();

let startyearstart1= document.getElementById('workyearstart1');
let startyearend1= document.getElementById('workyearend1');


let ed_year= document.getElementById('year1fm');
let startyearend= document.getElementById('workyearend2');

for(let i=2000; i <=currentyear; i++){



let optionstart1=document.createElement('option')
optionstart1.value=i;
optionstart1.textContent=i;
startyearstart1.appendChild(optionstart1)

let optionend1=document.createElement('option')
optionend1.value=i;
optionend1.textContent=i;
startyearend1.appendChild(optionend1)

let option=document.createElement('option')
option.value=i;
option.textContent=i;
ed_year.appendChild(option)

}


// document.getElementById('add-skill-btn').addEventListener('click',function(){
//     let skillcontainer=document.getElementById('skill-container')
//     let newskill=document.createElement('div');
//     newskill.classList.add('skill-item')
//     newskill.innerHTML=`<div class="inputcontrol">
//   <input type="text" name="skills[]" >
//   <div class="error"></div>
// </div>
// <div class="inputcontrol">
//   <label class="label" for="inputbar">Expert level % --</label>
//   <input class="inputbar" name="expert-level[]" >
//   <div class="error"></div>
// </div>`
//     skillcontainer.appendChild(newskill)



// })

let skillcount=0;
let maxskill=3

document.getElementById('add-skill-btn').addEventListener('click', function() {
if (skillcount < maxskill){
let skillcontainer = document.getElementById('skill-container');
let newskill = document.createElement('div');
newskill.classList.add('skill-item');

newskill.innerHTML = `
<label class="label" for="skil1fm">Skill ${skillcount+2}</label><br>
<div class="inputcontrol">
    <input type="text" maxlength="20" name="skills[]" id="skills"  required>
    <div class="error"></div>
</div>
<button type="button" class="removebtn">Remove</button>
`;

// Append the new skill item to the container
skillcontainer.appendChild(newskill);
skillcount++

if(skillcount === maxskill){
document.getElementById('add-skill-btn').disabled=true
}
// Add remove button functionality
newskill.querySelector('.removebtn').addEventListener('click', function() {
skillcontainer.removeChild(newskill);
skillcount--;
if(skillcount < maxskill){
    document.getElementById('add-skill-btn').disabled=false
}
});
}
});

// Update Resume Button Click Handler
document.getElementById('update-resume-btn').addEventListener('click', function() {
    let resumeskill=document.getElementById('resume-skills')  ;
resumeskill.innerHTML=``;
if(skillcount==0){
    if(skill1.value==""){
        seterror(skill1,"please type your skill")
        }
        else{success(skill1) 
        let resumeskill=document.getElementById('resume-skills')  ;
        resumeskill.innerHTML=` <div id="skil1" class="skilname2" >${skill1.value.charAt(0).toUpperCase() + skill1.value.slice(1)}</div>` 
        // document.getElementById("skil1").innerText = skill1.value.charAt(0).toUpperCase() + skill1.value.slice(1);
        document.getElementById('skillnav').classList.remove('sec1')
        document.getElementById('cvnav').classList.add('sec1')
        nextpage()
        
        }
}else{
let resumeSkills = document.getElementById('resume-skills');
if(skill1.value==""){
    seterror(skill1,"please type your skill")
    }
    else{success(skill1) 
    let resumeskill=document.getElementById('resume-skills')  ;
    resumeskill.innerHTML=` <div id="skil1" class="skilname2" >${skill1.value.charAt(0).toUpperCase() + skill1.value.slice(1)}</div>` 
    // document.getElementById("skil1").innerText = skill1.value.charAt(0).toUpperCase() + skill1.value.slice(1);
    document.getElementById('skillnav').classList.remove('sec1')
    document.getElementById('cvnav').classList.add('sec1')   
    }

// Get all skill and expert level values
let skills = document.querySelectorAll('input[name="skills[]"]');
let levels = document.querySelectorAll('input[name="expert-level[]"]');
// Loop through each skill and level input
let validskill=true
skills.forEach((skillInput, index) => {
let skill = skillInput.value.trim().charAt(0).toUpperCase() + skillInput.value.slice(1);;

if(!skill){
    seterror(skillInput,"please type your skill")
    validskill=false;
}
else{success(skillInput)    

    let skillRow = document.createElement('div');
    skillRow.classList.add('skill-row');

    // Create skill name div
    let skillName = document.createElement('div');
    skillName.classList.add('skilname2');
    skillName.setAttribute('contenteditable', 'true');
    skillName.textContent = skill;


    // Append skill name and skill bar to the row
    skillRow.appendChild(skillName);

    // Append the new skill row to the resume section
    resumeSkills.appendChild(skillRow);
    
}
});
if(validskill){skillsucess()}else{}


}
});



let ed = 0;
let maxed = 2;  // Max education items allowed
let edcontainer = document.getElementById('ed-container');  // Container for education items

// Add Education Button Click Handler
document.getElementById('add-ed-btn').addEventListener('click', function() {
if (ed < maxed) {
let newed = document.createElement('div');
newed.classList.add('ed-item');
newed.innerHTML = `
    <div class="inputcontrol">
        <label class="label" for="year1fb">Year of Completion</label><br>
        <select type="number" class="custom-select" name="ed-year[]" id="year1fm" >
                        <option value="">Select The Year</option>
                    </select><div class="error"></div>
    </div>
    <div class="inputcontrol">
        <label class="label" for="degree1fm">Degree Name</label><br>
        <input type="text" maxlength="20" name="degree[]" ><div class="error"></div>
    </div>
    <div class="inputcontrol">
        <label class="label" for="degrerdetail1fm">Universtiy/College/Institute</label><br>
        <input type="text" maxlength="20" name="detail[]" ><div class="error"></div>
    </div>

    <div class="inputcontrol">
                        <label class="label" for="degrerdetail1fm">GPA</label><br>
                        <input type="text" maxlength="20" id="degrerdetail1fm" name="gpa[]" ><div class="error"></div></div>
    <button type="button" class="removebtn">Remove</button>
`;

// Append new education item to container
edcontainer.appendChild(newed);
ed++;



let currentyear= new Date().getFullYear();

let ed_years = document.querySelectorAll('[name="ed-year[]"]');

ed_years.forEach((ed)=>{ for(let i=2000; i <=currentyear; i++){

        let option=document.createElement('option')
        option.value=i;
        option.textContent=i;
        ed.appendChild(option)

    }})        
   

// Disable "Add Education" button if max limit is reached
if (ed === maxed) {
    document.getElementById('add-ed-btn').disabled = true;
}

// Add remove button functionality
newed.querySelector('.removebtn').addEventListener('click', function() {
    edcontainer.removeChild(newed);
    ed--;
    if (ed < maxed) {
        document.getElementById('add-ed-btn').disabled = false;
    }
});
}
});

// Update Resume Button Click Handler
document.getElementById('update-ed-btn').addEventListener('click', function() {
    let edcontainerResume = document.getElementById('ed');  
edcontainerResume.innerHTML=``;
if(ed ===0){let con1=false
    let con2=false
    let con3=false
    let con4=false
    
    if(year1.value==""){
    seterror( year1,'plese type your firtst year of degree')
    }
    else{
    success(year1);    
    con1=true}
    if( degree1.value==""){
        seterror(degree1,'plese type your first degree')
    }
    else{
    success(degree1);
    con2=true}
    if( degreedetail1.value==""){
        seterror(degreedetail1,'plese type first degree detail')
    }
    else{
    success(degreedetail1);
    con3=true}
    
    
    if( gpa2.value==""){
    seterror(gpa2,'plese type first degree detail')
    }
    else{
    success(gpa2);
    con4=true}
    
    if(con1 &&
    con2 &&
    con3 &&
    con4){
        let edcontain=document.getElementById('ed')
        edcontain.innerHTML=`<div class="ed-head2"><p class="" >EDUCATION</p></div>
            <div  class="ed-body2">
                <div class="year-body2"><div id="degree1t" class="degree2" >${degree1.value}</div><div id="degreedetai1" class="detail2 italic2" >${degreedetail1.value}</div><div id="gpa" class="detail2" >${gpa2.value}</div><div id="year1t" class="year2" >${year1.value}</div>
            </div>
            </div>`
        document.getElementById('ednav').classList.remove('sec1')
        document.getElementById('skillnav').classList.add('sec1')
        nextpage();
    }
}else{
// Get all the education input values
let years = document.querySelectorAll('[name="ed-year[]"]');
let degrees = document.querySelectorAll('input[name="degree[]"]');
let details = document.querySelectorAll('input[name="detail[]"]');
let gpas = document.querySelectorAll('input[name="gpa[]"]');

let edcontainerResume = document.getElementById('ed');  
let con1=false
let con2=false
let con3=false
let con4=false

if(year1.value==""){
seterror( year1,'plese type your firtst year of degree')
}
else{
success(year1);    
con1=true}
if( degree1.value==""){
    seterror(degree1,'plese type your first degree')
}
else{
success(degree1);
con2=true}
if( degreedetail1.value==""){
    seterror(degreedetail1,'plese type first degree detail')
}
else{
success(degreedetail1);
con3=true}


if( gpa2.value==""){
seterror(gpa2,'plese type first degree detail')
}
else{
success(gpa2);
con4=true}

if(con1 &&
con2 &&
con3 &&
con4){
    let edcontain=document.getElementById('ed')
    edcontain.innerHTML=`<div class="ed-head2"><p class="" >EDUCATION</p></div>
        <div  class="ed-body2">
            <div class="year-body2"><div id="degree1t" class="degree2" >${degree1.value}</div><div id="degreedetai1" class="detail2 italic2" >${degreedetail1.value}</div><div id="gpa" class="detail2" >${gpa2.value}</div><div id="year1t" class="year2" >${year1.value}</div>
        </div>
        </div>`
    document.getElementById('ednav').classList.remove('sec1')
    document.getElementById('skillnav').classList.add('sec1')
   
}
let allvalid=true;
// Loop through each input to get values and create resume content
years.forEach((yearInput, index) => {
let year = yearInput.value.trim();
let degree = degrees[index].value.trim();
let detail = details[index].value.trim();
let gpa = gpas[index].value.trim();

let edyear = document.createElement('div');
edyear.classList.add('year2');
edyear.setAttribute('contenteditable', 'true');
edyear.textContent = year;

let eddegree = document.createElement('div');
eddegree.classList.add('degree2');
eddegree.textContent = degree;

let eddetail = document.createElement('div');
eddetail.classList.add('detail2','italic2');
eddetail.textContent = detail;

let gpa1 = document.createElement('div');
gpa1.classList.add('detail2');
gpa1.textContent = gpa;

let body = document.createElement('div');
body.classList.add('year-body2');

let edbody= document.createElement('div')
    edbody.classList.add('ed-body2')

    

// Simple form validation


    if(!degree){seterror(degrees[index],"please fill the inputs") 
        allvalid = false;
    }
    else{
        success(degrees[index])
        body.appendChild(eddegree); }

        if(!detail){seterror(details[index],"please fill the inputs")
            allvalid = false;
         }
        else{
            success(details[index])
            body.appendChild(eddetail);}

            if(!gpa){seterror(gpas[index],"please fill the inputs")
                allvalid = false;
             }
            else{
                success(gpas[index])
                body.appendChild(gpa1);
                edbody.appendChild(body)};

                if(!year){seterror(yearInput,"please fill the inputs")
                  allvalid = false;
               }
              else{
                  success(yearInput)
                  body.appendChild(edyear);
                  

            
     
     
                edcontainerResume.appendChild(edbody)
               }


});
if (allvalid)
{
edusuceess()
}
else{
 }
}
});



let work = 1;
let maxwork = 3;  
document.getElementById('work-ex-btn').addEventListener('click',function(){
if(work < maxwork){
let workcontainer=document.getElementById('work-container')
let newwork=document.createElement('div');
newwork.classList.add('work-item')
newwork.innerHTML=` <div class="yeardiv"> <div class="inputcontrol">
                            <label class="label" for="workyearstart1[]"></label><br>
                            <select id="start-year-${work}" class="custom-select" name="workyearstart1[]" value="">
                                <option value="">Select Starting Year</option>
                            </select><div class="error"></div></div>
                            
                            <div class="inputcontrol">
                            <label class="label" for="workyearend1[]"></label><br>
                            <select id="end-year-${work}" class="custom-select" name="workyearend1[]" value="">
                                <option value="">Select Ending Year</option>
                            </select><div class="error"></div></div></div>


                <div class="inputcontrol">
                <label class="label" for="work-detialfm1[]">Your Position</label><br>
                <input type="text" id="position-${work}" maxlength="20" name="work-detialfm1[]" ><div class="error"></div></div>

               <div class="inputcontrol">
                    <label class="label" for="work-detialfm2[]">Company Name</label><br>
                    <input type="text" id="company-name-${work}" maxlength="20" name="work-detialfm2[]" ><div class="error"></div></div>
                    
                    <div class="inputcontrol">
                        <label class="label" for="work-detialfm3[]">Location</label><br>
                        <input type="text" id="location-${work}" maxlength="20" name="work-detialfm3[]" ><div class="error"></div></div>

                <div class="inputcontrol">
                <label class="label" for="workexperiecefm1[]">Type your profassion</label><br>
                <textarea name="workexperiecefm1[]" maxlength="250" id="experience-detail-${work}"  rows="5"></textarea><div class="error"></div></div>
           <button type="button" class="removebtn">Remove</button>
                `
workcontainer.appendChild(newwork)
work++
let currentyear= new Date().getFullYear();

let startyearstart1 = document.querySelectorAll('[name="workyearstart1[]"]');
let startyearend1 = document.querySelectorAll('[name="workyearend1[]"]');

startyearstart1.forEach((work)=>{

for(let i=2000; i <=currentyear; i++){

    let optionstart1=document.createElement('option')
    optionstart1.value=i;
    optionstart1.textContent=i;
    optionstart1.id=`workyearstart-${i}`
    work.appendChild(optionstart1)


}
})


startyearend1.forEach((work)=>{

for(let i=2000; i <=currentyear; i++){


    let optionend1=document.createElement('option')
    optionend1.value=i;
    optionend1.textContent=i;
    optionend1.id=`workyearend-${i}`
    work.appendChild(optionend1)

}
})




if(work===maxwork){
document.getElementById('work-ex-btn').disabled=true
}
newwork.querySelector('.removebtn').addEventListener('click',function(){
workcontainer.removeChild(newwork)
work--;
if(work < maxwork){
    document.getElementById('work-ex-btn').disabled=false;
}
})

}
});

document.getElementById('update-ex-btn').addEventListener('click', function() {
    let excontainer = document.getElementById('excontainer')
excontainer.innerHTML=``;
    if(work === 1){
    let con1=false
let con2=false
let con3=false
let con4=false
let con5=false
let con6=false
if(yearstart1.value==""){
seterror(yearstart1,"please type year education period currectly")
}
else{
success(yearstart1)
con1=true
}
if(yearend1.value=="" || yearend1.value < yearstart1.value){
seterror(yearend1,"please type year education period currectly")
}
else{
success(yearend1)
con2=true}
if(wordetail1.value==""){
seterror(wordetail1,"please type year education period currectly")
}
else{
success(wordetail1)
con3=true}

if(wordetail2.value==""){
seterror(wordetail2,"please type year education period currectly")
}
else{
success(wordetail2)
con4=true}

if(wordetail3.value==""){
seterror(wordetail3,"please type year education period currectly")
}
else{
success(wordetail3)
con5=true}

if(experiece1.value==""){
seterror(experiece1,"please type year education period currectly")
}
else{
success(experiece1)
con6=true}


 
if(con1 &&
con2 &&
con3 &&
con4 &&
con5 &&
con6 ){
    let excont=document.getElementById('excontainer');
    excont.innerHTML=` <div class="ed-body-two">
        <div  class="year-bodytow2"><div id="degreename1t" class="degree2" >${wordetail1.value}</div>
        <span class="span">&#160;,&#160;</span>
        <div id="company" class="ex-p2" >${wordetail2.value}</div><span class="span">&#160;,&#160;</span>
        <div id="location" class="ex-p2" >${wordetail3.value}</div><span class="span">&#160;|&#160;</span>
        <div id="startyear1t" class="year2" >${yearstart1.value}</div><span>_</span><div id="endyear1t"  class="year2" >${yearend1.value}</div>
    </div>
    </div>
    <p id="degreedetail1t" class="expdetail" >${experiece1.value}</p>`
  document.getElementById('submitdiv').classList.remove('dispnone')
    document.getElementById('cvnav').classList.remove('sec1')
    document.getElementById('tpnav').classList.add('sec1')
nextpage();
}
}else{

let excontainer = document.getElementById('excontainer')


let yearstarts = document.querySelectorAll('[name="workyearstart1[]"]');
let yearends = document.querySelectorAll('[name="workyearend1[]"]');
let positions = document.querySelectorAll('[name="work-detialfm1[]"]');
let companies = document.querySelectorAll('[name="work-detialfm2[]"]');
let locations = document.querySelectorAll('[name="work-detialfm3[]"]');
let experinces = document.querySelectorAll('[name="workexperiecefm1[]"]');




let con1=false
let con2=false
let con3=false
let con4=false
let con5=false
let con6=false
if(yearstart1.value==""){
seterror(yearstart1,"please type year education period currectly")
}
else{
success(yearstart1)
con1=true
}
if(yearend1.value=="" || yearend1.value < yearstart1.value){
seterror(yearend1,"please type year education period currectly")
}
else{
success(yearend1)
con2=true}
if(wordetail1.value==""){
seterror(wordetail1,"please type year education period currectly")
}
else{
success(wordetail1)
con3=true}

if(wordetail2.value==""){
seterror(wordetail2,"please type year education period currectly")
}
else{
success(wordetail2)
con4=true}

if(wordetail3.value==""){
seterror(wordetail3,"please type year education period currectly")
}
else{
success(wordetail3)
con5=true}

if(experiece1.value==""){
seterror(experiece1,"please type year education period currectly")
}
else{
success(experiece1)
con6=true}


 
if(con1 &&
con2 &&
con3 &&
con4 &&
con5 &&
con6 ){
    let excont=document.getElementById('excontainer');
    excont.innerHTML=` <div class="ed-body-two">
        <div  class="year-bodytow2"><div id="degreename1t" class="degree2" >${wordetail1.value}</div>
        <span class="span">&#160;,&#160;</span>
        <div id="company" class="ex-p2" >${wordetail2.value}</div><span class="span">&#160;,&#160;</span>
        <div id="location" class="ex-p2" >${wordetail3.value}</div><span class="span">&#160;|&#160;</span>
        <div id="startyear1t" class="year2" >${yearstart1.value}</div><span>_</span><div id="endyear1t"  class="year2" >${yearend1.value}</div>
    </div>
    </div>
    <p id="degreedetail1t" class="expdetail" >${experiece1.value}</p>`
  document.getElementById('submitdiv').classList.remove('dispnone')
    document.getElementById('cvnav').classList.remove('sec1')
    document.getElementById('tpnav').classList.add('sec1')

}

let expvalidation=true

yearstarts.forEach((yearex,index)=>{
let yearstart=yearex.value.trim();
let yearend=yearends[index].value.trim();
let position=positions[index].value.trim();
let companyname=companies[index].value.trim();
let locationname=locations[index].value.trim();
let expereincename=experinces[index].value.trim();
let con1=false
let con2=false
let con3=false
let con4=false
let con5=false
let con6=false
if(!yearstart){
seterror(yearex,'please fill all inputs')
expvalidation=false
}
else{
success(yearex)
con1=true
}

if(!yearend){
seterror(yearends[index],'please fill all inputs')
    expvalidation=false

}
else{
success(yearends[index])
con2=true
}

if(!position){
seterror(positions[index],'please fill all inputs')
    expvalidation=false

}
else{
success(positions[index])
con3=true
}

if(!companyname){
seterror(companies[index],'please fill all inputs')
    expvalidation=false

}
else{
success(companies[index])
con4=true
}

if(!locationname){
seterror(locations[index],'please fill all inputs')
    expvalidation=false

}
else{
success(locations[index])
con5=true
}

if(!expereincename){
seterror(experinces[index],'please fill all inputs')
    expvalidation=false

}
else{
success(experinces[index])
con6=true

}
if (con1 &&
con2 &&
con3 &&
con4 &&
con5 &&
con6){  const resumeItem = document.createElement('div');
resumeItem.classList.add('resume-item');
resumeItem.innerHTML = `
<div class="ed-body-two">
        <div  class="year-bodytow2"><div id="degreename1t" class="degree2" >${position}</div>
        <span class="span">&#160;,&#160;</span>
        <div id="company" class="ex-p2" >${companyname}</div><span class="span">&#160;,&#160;</span>
        <div id="location" class="ex-p2" >${locationname}</div><span class="span">&#160;|&#160;</span>
        <div id="startyear1t" class="year2" >${yearstart}</div><span>_</span><div id="endyear1t"  class="year2" >${yearend}</div>

    </div>
    </div>
    <p id="degreedetail1t" class="expdetail" >${expereincename}</p>

`
excontainer.appendChild(resumeItem);}

})
if(expvalidation){
workexpsucess()
}
}
});



})