// javascript engine for the calculator
function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == "") {
        document.getElementById("message").innerHTML = "Choose a date";
        return false;
    } else {
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        document.getElementById("result").innerHTML = "Your age is: "+ age + " years";
   
    }
}