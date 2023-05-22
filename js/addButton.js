AFRAME.registerComponent("createbuttons", {
    init:function() {
        var button1 = document.createElement("button");
        button1.innerHTML = "ORDER NOW";
        button1.setAttribute("id", "oreder-button");
        button1.setAttribute("class","btn-danger ml-3 mr-3");



        var button2 = document.createElement("button");
        button2.innerHTML = "ORDER SUMMARY";
        button2.setAttribute("id", "order-sumary-button");
        button2.setAttribute("class", "btn-danger ml-3");


        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(button2);
        buttonDiv.appendChild(button1);
    }
});