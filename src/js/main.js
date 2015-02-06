ZeroClipboard.config( { swfPath: "../src/js/ZeroClipboard.swf" } );


var client = new ZeroClipboard( $(".button-copy") );
client.on( "copy", function (event) {
    var button = $(event.target);
    var parent = button.parent(".copy-box");
    var copyText = parent.find(".copy-text");

    var clipboard = event.clipboardData;
    clipboard.setData( "text/plain", copyText.html()  );

});