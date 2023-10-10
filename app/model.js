var _homeContent = ` <h1>HOME</h1>`;
var _aboutContent = ` <h1>ABOUT</h1>`;
var _productsContent = "<h1>PRODUCTS</h1>";
var _contactContent = "<h1>CONTACT</h1>";

var _updateView = function(pageName){
    console.log("Model " + pageName);
    var pageContent = "_" + pageName;
    $("#app").html(eval(pageContent))

}


var MODEL = (function() {

    var _myName = "Adam";

    return {
        updateView: _updateView,
    }

})();