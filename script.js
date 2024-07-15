document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementsByName("Fname")[0].value;
    var lastName = document.getElementsByName("lname")[0].value;
    alert("Thank you, " + firstName + " " + lastName);
});