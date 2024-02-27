
let runScripts = () =>
{

    let chart_bars = document.getElementById("chart-bars")
    console.log(chart_bars);

    let icons = document.getElementsByTagName("i");
    console.log(icons);

    let cards = document.getElementsByClassName("card");
    console.log(cards);
}

runScripts();

let modifyText = () =>
{

 let listOfP = document.getElementsByTagName("p");
 let elementP = listOfP[3];
 console.log(listOfP);
 elementP.innerHTML = "Dinero Actual";

 elementP = listOfP[5];
 console.log(elementP.innerHTML);
 elementP.innerHTML = "Usuarios Actuales";

 elementP = listOfP[7];
 console.log(elementP.innerHTML);
 elementP.innerHTML = "Nuevos Clientes";

 elementP = listOfP[9];
 console.log(elementP.innerHTML);
 elementP.innerHTML = "Ventas";

 

 let listOfH4 = document.getElementsByTagName("h4");
 console.log(listOfH4);
 let elementH4 = listOfH4[0];
 elementH4.innerHTML="$301k"

}
modifyText();