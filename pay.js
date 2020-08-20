 function validate(){
     const regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
const month = document.getElementById("month")

const year = document.getElementById("year").value;
const cardNumber = document.getElementById("cardNumber")
const cvv=document.getElementById("cvv")
const  namecard=document.getElementById("namecard")
const month1 = new Date(month)
const date = new Date;
const monthcurrent = date.getMonth(month)
const yearcurrent = date.getFullYear(year);

console.log(date)
console.log(monthcurrent)
console.log(yearcurrent)



const usermonth = month.options[month.selectedIndex].value;




     if (name.value==="") {
        
     alert("Please enter your first name");
    return false;
}
if (lastName.value === "") {
    alert("Please enter your last name")
    return false;
}

if(namecard.value==""){
    alert("please enter your Full name")
    return false;

}

     if (!regEmail.test(email.value)) {

        

     alert("please include a valid Email address")

    return false 



}

if (month.selectedIndex === 0) {
    alert("please select the month")
    return false;
}

if (year.selectedIndex === 0) {
    alert("please select the year")

    return false;

}

if (yearcurrent == year && monthcurrent > usermonth) {

    alert("The expiry date is before today.please select a valid expiry date")
    return false;
}

if (cardNumber.value.length !== 16 || isNaN(cardNumber.value)) {

    alert("please enter 16 numbers for your credit card")
    return false;
}

if( cvv.value==""||cvv.value.length!==3){
    alert("please enter  the correct cvv number")
    return false;
}

alert("Thank you for your Order 🙂")
return true;
}