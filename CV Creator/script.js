function generateCV(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const linkedin=document.getElementById('linkedin').value;
    const num=document.getElementById('num').value;
    const address=document.getElementById('address').value;
    const education=document.getElementById('education').value;
    const exp=document.getElementById('exp').value;
    const skills=document.getElementById('skills').value;
    
    document.getElementById('cv-name').innerHTML = `<b>${name}</b>`;
    document.getElementById('cv-email').textContent=email;
    document.getElementById('cv-linkedin').textContent=`${linkedin}`;
    document.getElementById('cv-num').textContent=`+91 ${num}`;
    document.getElementById('cv-address').textContent=`${address}`;
    document.getElementById('cv-education').textContent=`${education}`;
    document.getElementById('cv-exp').textContent=`${exp}`;
    document.getElementById('cv-skills').textContent=`${skills}`
}