
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


let updateData = () =>
{
    
  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];  

  
  let [ users, clients, sales ] = data;

  
  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;


   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

  
 let listOfElements = document.getElementsByClassName('text-end pt-1');
 
 let [ , second, third, fourth ] = listOfElements;

 
 second.innerHTML = message_users;
 third.innerHTML = message_clients;
 fourth.innerHTML = message_sales;


}
updateData();