filterObjects("all");

function searchBar(){
    var str = document.getElementById("search-input").value;
    var lowerStr = str.toLowerCase();
    filterObjects(lowerStr);
}
function handleKeyPress(e){
    var key=e.keyCode || e.which;
     if (key==13){
        var str = document.getElementById("search-input").value;
        var lowerStr = str.toLowerCase();
        filterObjects(lowerStr);
     }
   }
function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("box");
    if(c == "all") c = "";
    for(i=0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1)
            addClass(x[i], "show");
    }
}
function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
