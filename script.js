function cantum() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let fullname = fname + ' ' + lname;
    document.getElementById('fullname').innerText = fullname;
}


function BMI() {
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var bmi = w / (h * h);
    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
}

const books = ["Science Fiction", "Thriller", "Horror", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < books.length; i++) {
  text += books[i] + "<br>";
}

document.getElementById("loop").innerHTML = text;