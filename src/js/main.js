ZeroClipboard.config( { swfPath: "../src/js/ZeroClipboard.swf" } );


var client = new ZeroClipboard( $(".button-copy") );
client.on( "copy", function (event) {
    var button = $(event.target);
    var parent = button.parent(".copy-box");
    var copyText = parent.find(".copy-text");

    var clipboard = event.clipboardData;
    clipboard.setData( "text/plain", copyText.html()  );

});

function getYPositionOfElement(domElement){
    var pos = 0;
    while (domElement != null){
        pos += domElement.offsetTop;
        domElement = domElement.offsetParent;
    }
    return pos;
}

/** Sticky menu **/
var floatMenu = document.getElementById('sidebar'),
    upperBound = document.getElementById('left'),
    lowerBound = document.getElementById('footer');
var upperBoundY = getYPositionOfElement(upperBound),
    lowerBoundY = getYPositionOfElement(lowerBound);

window.addEventListener('scroll', function(e){
    var view = document.body.scrollTop + document.documentElement.scrollTop;
    if(view + floatMenu.offsetHeight + 20 >= lowerBoundY){
        floatMenu.style.position = 'absolute';
        floatMenu.style.top = '' + (document.body.scrollHeight - (lowerBound.offsetHeight + floatMenu.offsetHeight + upperBoundY)) + 'px';
    }else if(view >= upperBoundY){
        floatMenu.style.position = 'fixed';
        floatMenu.style.top = '0px';
    } else {
        floatMenu.style.position = '';
        floatMenu.style.top = '';
    }
});

/** Responsive menu **/
$(document).ready(function(){
    $(window).scroll(function() {
        if (screen.width < 1024) {
            var scroll = $(window).scrollTop();
            var color2 = 67 - scroll;
            if(scroll < 67 && scroll > 0) {
                $("#left").css({"top": color2});
            }
            else if(scroll <= 0) {
                $("#left").css({"top": 67});
            }
            else if (scroll >= 67) {
                $("#left").css({"top": 0});
            }
        }
    });
});