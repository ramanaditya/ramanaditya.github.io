var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;
        if (contents.style.maxHeight) {
            contents.style.maxHeight = null;
        } else {
            contents.style.maxHeight = contents.scrollHeight + "px";
        }
    });
}