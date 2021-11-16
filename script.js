function cantum() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let fullname = fname + ' ' + lname;
    document.getElementById('fullname').innerText = fullname;
}