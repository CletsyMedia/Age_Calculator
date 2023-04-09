const arrow = document.querySelector('.arrow');
const dys = document.getElementById('days');
const mthns = document.getElementById('months');
const yrs = document.getElementById('year');
const dayInput = document.getElementById('days');
const monthInput = document.getElementById('months');
const yearInput = document.getElementById('years');
const errDay = document.querySelector('.errDay');
const errMonth = document.querySelector('.errMonth');
const errYear = document.querySelector('.errYear');
const yearResult = document.querySelector('.yearResult');
const monthResult = document.querySelector('.monthResult');
const dayResult = document.querySelector('.dayResult');
const Canvas = document.querySelector('.can');

validateDays=()=>{
    let valueDay = dayInput.value.trim();
    if(valueDay === ""){
        errDay.style.display="flex";
        dayInput.style.border="1px solid hsl(0, 100%, 67%)";
        return false;
    }else if(valueDay < 1 || valueDay > 31){
        errDay.style.display="flex";
        dayInput.style.border="1px solid hsl(0, 100%, 67%)";
        errDay.innerHTML = "Day invalid!";
        return false;
    }else{
        dayInput.style.border="1px solid hsl(0, 0%, 86%)";
        errDay.style.display="none";
        return true;
    }
}

validateMonths=()=>{
    let valueMonth = monthInput.value.trim();
    if(valueMonth === ""){
        errMonth.style.display="flex";
        monthInput.style.border="1px solid hsl(0, 100%, 67%)";
        return false;
    }else if(valueMonth < 1 || valueMonth > 12){
        errMonth.style.display="flex";
        monthInput.style.border="1px solid hsl(0, 100%, 67%)";
        errMonth.innerHTML = "Month invalid!";
        return false;
    }else{
        monthInput.style.border="1px solid hsl(0, 0%, 86%)";
        errMonth.style.display="none";
        return true;
    }
}
validateYears=()=>{
    let valueYears = yearInput.value.trim();
    let currentYear = new Date().getFullYear();
    // console.log(currentYear);
    if(valueYears === ""){
        errYear.style.display="flex";
        yearInput.style.border="1px solid hsl(0, 100%, 67%)";
        return false;
    }else if(valueYears > currentYear){
        errYear.style.display="flex";
        yearInput.style.border="1px solid hsl(0, 100%, 67%)";
        errYear.innerHTML = "Year invalid!";
        return false;
    }else if(valueYears.length < 4){
        errYear.style.display="flex";
        yearInput.style.border="1px solid hsl(0, 100%, 67%)";
        errYear.innerHTML = "Must be 4 digits!";
        return false;
    }
    else{
        yearInput.style.border="1px solid hsl(0, 0%, 86%)";
        errYear.style.display="none";
        return true;
    }
}

// Calculate BirthDay
function calAge(birthday){
    var birthdate = new Date(birthday);
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();
 // If the birthdate month and day are after the current month and day,
  // subtract one year from the age

    if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
    months = 11;
    } else {
    months = 12 + months;
    }
    days = 30 + days;
    }

    yearResult.innerHTML = years;
    monthResult.innerHTML = months;
    dayResult.innerHTML = days;
}

arrow.onclick=(e)=>{
    e.preventDefault();
    let checkDay = validateDays();
    let checkMonth = validateMonths();
    let checkYear = validateYears();
    if(!checkDay || !checkMonth || !checkYear) return
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    calAge(birthday);
    Canvas.style.display = 'block';
    setTimeout(function () {
        Canvas.style.display = 'none';
    }, 8000);
}