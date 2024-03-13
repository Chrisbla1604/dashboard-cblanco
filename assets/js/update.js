
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


 let listOfH6 = document.getElementsByTagName("h6");
 console.log(listOfH6);
 listOfH6[5].innerHTML = "Visitas del Sitio Web";
 listOfH6[6].innerHTML = "Ventas Diarias";
 listOfH6[7].innerHTML = "Tarea Completada";

 listOfH6[16].innerHTML = "$2400, cambios de diseño";
 listOfH6[17].innerHTML = "Nuevo pedido #1832412";
 listOfH6[18].innerHTML = "Pagos del servidor de abril";
 listOfH6[19].innerHTML = "Nueva tarjeta agregada para el pedido #4395133";
 listOfH6[20].innerHTML = "Desbloquear paquetes para desarrollo";
 listOfH6[21].innerHTML = "Nuevo pedido #9583120";



 listOfP[11].innerHTML = "Rendimiento de Ultima Campaña";
 listOfP[12].innerHTML = "Campaña enviada hace 2 días";
 listOfP[14].innerHTML = "Actualizado hace 4 minutos";
 listOfP[15].innerHTML = "Rendimiento de Ultima Campaña";
 listOfP[16].innerHTML = "Recién actualizado";


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



 
 let cambios = [
    {
      valor_previo: 250,
      valor_actual: 301,
      mensaje_tiempo: 'que la semana anterior'
    },
    {
      valor_previo: 3510,
      valor_actual: 3200,
      mensaje_tiempo: 'que el mes anterior'
    },
    {
      valor_previo: 3920,
      valor_actual: 4215,
      mensaje_tiempo: 'que ayer'
    },
    {
      valor_previo: 110200,
      valor_actual: 121520,
      mensaje_tiempo: 'que ayer'
    }
  ]


  let divs = document.getElementsByClassName("card-footer p-3");
  console.log(divs);



  for(let i=0; i<cambios.length; i++)
  {
      let porcentaje= (cambios[i].valor_actual - cambios[i].valor_previo)*100/cambios[i].valor_previo;
      console.log(` Arreglo ${i} : ${porcentaje}% `);

      if (porcentaje>=0)
      {
        cambios[i].porcentaje_de_cambio= `+${parseInt(porcentaje)}% `;
        cambios[i].clase_cambio='text-success';
      }
       else
      {
        cambios[i].porcentaje_de_cambio=`${parseInt(porcentaje)}%`;
        cambios[i].clase_cambio='text-danger';
      }

    let pantilla_cambio =`<p class="mb-0"><span class="text-sm ${cambios[i].clase_cambio} font-weight-bolder"> ${cambios[i].porcentaje_de_cambio} </span> ${cambios[i].mensaje_tiempo} </p>`;
    divs[i].innerHTML = pantilla_cambio;
    
    console.log(pantilla_cambio);
  }


 console.log(cambios);

 
}
updateData();