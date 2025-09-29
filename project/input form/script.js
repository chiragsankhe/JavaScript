function myFunction() {
    var form = document.getElementById("form1");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}


document.getElementById("age").addEventListener("input", function() {
    let age = Number(this.value);

    if (age > 18 || age < 5) {
        alert("age is not valid");
    }
});


