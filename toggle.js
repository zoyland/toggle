function darkmode () {
    var element = document.body;
    element.classList.toggle("darkmode");
    
}
if (!darkmode == false) {
    
    var colour1 = document.getElementsByClassName('colour');
    var colour2 = document.getElementsByClassName('colour2');

    document.getElementsByClassName('colour').addClass('colour2');
    document.getElementsByClassName('colour').removeClass('colour');
}
