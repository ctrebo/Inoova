
var myVar;

// var x=window.scrollX;
// var y=window.scrollY;
// window.onscroll=function(){
//     if (y <= 22.66666603088379) {
//         window.scrollTo(x, y);
//         document.getElementById("svg2").style.visibility = "visible";
//         document.getElementById("Ebene_1-2").classList.add("rotateall");
//         document.getElementById("Gruppe_411").classList.add("animationlogo");
//         document.getElementById("Ellipse_55").classList.add("Ellipse_1");
//         document.getElementById("Ellipse_55-2").classList.add("Ellipse_2");
//         document.getElementById("Ellipse_55-3").classList.add("Ellipse_3");
//         document.getElementById("Ellipse_55-4").classList.add("Ellipse_4");

//         myVar = setTimeout(startScrolling, 1010);
//     } else  {
//         document.getElementById("svg2").style.visibility = "visible";
//         document.getElementById("Ellipse_55").style.visibility = "hidden";
//         document.getElementById("Ellipse_55-2").style.visibility = "hidden";
//         document.getElementById("Ellipse_55-3").style.visibility = "hidden";
//         document.getElementById("Ellipse_55-4").style.visibility = "hidden";
//     }
// };

// function startScrolling() {
//     window.onscroll = null;
// }



/////////////////////////////////////////////////////////////////////////////////////////////////



// var x=window.scrollX;
// var y=window.scrollY;
// window.onscroll=function(){
//     if (y <= 22.66666603088379) {
//         document.getElementById("body").setAttribute("style", "position: fixed; overflow-y: scroll; width: 100%;");
//                 document.getElementById("svg2").style.transform = "translateY(0%)"

//         document.getElementById("svg2").style.visibility = "visible";
//         document.getElementById("Ebene_1-2").classList.add("rotateall");
//         document.getElementById("Gruppe_411").classList.add("animationlogo");
//         document.getElementById("Ellipse_55").classList.add("Ellipse_1");
//         document.getElementById("Ellipse_55-2").classList.add("Ellipse_2");
//         document.getElementById("Ellipse_55-3").classList.add("Ellipse_3");
//         document.getElementById("Ellipse_55-4").classList.add("Ellipse_4");

//         myVar = setTimeout(startScrolling, 2010);
//     } else  {
//         document.getElementById("svg2").style.visibility = "visible";
//         document.getElementById("Ellipse_55").style.visibility = "hidden";
//         document.getElementById("Ellipse_55-2").style.visibility = "hidden";
//         document.getElementById("Ellipse_55-3").style.visibility = "hidden";
//         document.getElementById("Ellipse_55-4").style.visibility = "hidden";
//     }
// };

// function startScrolling() {
//     document.getElementById("body").removeAttribute("style");
//     window.onscroll = null;
// }
////////////////////////////////////////////////////



var x=window.scrollX;
var y=window.scrollY;

    $( document ).ready(function() {
    window.onscroll=function(){
        if (y == 0) {
            window.scrollTo(x, y);
            document.getElementById("body").setAttribute('scroll', "no")
            document.getElementById("body").setAttribute('style', "overflow: scroll;")
            

            document.getElementById("svg2").style.visibility = "visible";
            document.getElementById("Ebene_1-2").classList.add("rotateall");
            document.getElementById("Gruppe_411").classList.add("animationlogo");
            document.getElementById("Ellipse_55").classList.add("Ellipse_1");
            document.getElementById("Ellipse_55-2").classList.add("Ellipse_2");
            document.getElementById("Ellipse_55-3").classList.add("Ellipse_3");
            document.getElementById("Ellipse_55-4").classList.add("Ellipse_4");

            myVar = setTimeout(startScrolling, 1010);
        } else  {
            document.getElementById("svg2").style.visibility = "visible";
            document.getElementById("Ellipse_55").style.visibility = "hidden";
            document.getElementById("Ellipse_55-2").style.visibility = "hidden";
            document.getElementById("Ellipse_55-3").style.visibility = "hidden";
            document.getElementById("Ellipse_55-4").style.visibility = "hidden";
        }
    };

    function startScrolling() {
        document.getElementById("body").removeAttribute("scroll");
        document.getElementById("body").setAttribute('style', "")
        window.onscroll = null;
}

});


/////////////////////////////////////////////////////////////////////////////

