import * as MODEL from "./model-module.js";

// import {updateView, fn} from "./model-module.js";

function initListeners(){
    $("nav a").click(function(e){
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        MODEL.updateView(contentID)
        console.log(MODEL.fn);
    });
}

$(document).ready(function (){ 
    initListeners();
    MODEL.updateView("toursContent");
});