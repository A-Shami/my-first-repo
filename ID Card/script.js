function idCard() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var age = parseInt(document.getElementById("age").value);

    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);

    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age: " + numberArray[i];
        } 
        else if (numberArray[i] >= 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + numberArray[i];
        }
    }

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;
}

