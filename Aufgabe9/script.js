window.addEventListener('load', function () {
    var liste = ["BWL", "EIA", "Audiotechnik"];
    document.querySelector("#items").innerHTML = liste.length + " in total";
    function drawList() {
        document.querySelector("#todo").innerHTML = "";
        for (var index = 0; index < liste.length; index++) {
            console.log(liste[index]);
            document.querySelector("#todo").innerHTML += "<p>" + "<input type='checkbox'>" + liste[index] + "<i class='fas fa-trash'></i>" + "</p>";
        }
    }
    document.querySelector("#newTodoButton").addEventListener("click", addnewElement);
    function addnewElement() {
        var neuerEintrag = document.querySelector("#eingabe").value;
        liste.push(neuerEintrag);
        drawList();
        document.querySelector("#eingabe").value = "";
        var span = document.createElement("SPAN");
        var mull = document.createElement("i");
        mull.className = "fas fa-trash";
        span.className = "close";
        span.appendChild(mull);
        list.appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            };
        }
    }
    drawList();
    var myNodelist = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var mull = document.createElement("i");
        mull.className = "fas fa-trash";
        span.className = "close";
        span.appendChild(mull);
        myNodelist[i].appendChild(span);
    }
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
    /*
   document.getElementById("trash").addEventListener("click", Elementtrash);
   
   
   
   function Elementtrash () {
       console.log("hi");
   }
   
   function removeToDo(element) {
       element.parentNode.parentNode.removeChild(element.parentNode);
       LIST[element.id].trash = true;
       id--;
       document.querySelector("#counter").innerHTML = ("Total: " + id);
   }
   list.addEventListener("click", function (event) {
       const element = event.target;
       const elementJob = element.attributes.job.value;
       if (elementJob == "complete") {
           completeToDo(element);
       }
       else if (elementJob == "delete") {
           removeToDo(element);
       }
   });
     */
});
//# sourceMappingURL=script.js.map