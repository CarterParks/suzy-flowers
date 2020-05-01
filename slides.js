var i = 0;
var slides = [
"s1",
"s2",
"s3",
"s4",
];

document.getElementById(slides[0]).style.opacity = 1

setInterval(function(){
    
    var n = i% (slides.length)
    var im = slides[n] 
    var nn = (i + 1) % (slides.length)
    var imn = slides[nn]

    document.getElementById(im).style.opacity = 0
    document.getElementById(imn).style.opacity = 1

    i ++;
}, 4000);
