var cTab="";

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var pTab = cTab;
    if(cTab == ""){
        cTab = tabName;
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }else{
        closeTabs(event);
        if(pTab != tabName){
            openTab(event, tabName);
        }
    }
} 
    
function closeTabs(evt) {
    var i, tabcontent;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    cTab = "";
}
