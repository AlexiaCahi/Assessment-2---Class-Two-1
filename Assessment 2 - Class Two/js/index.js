let serviceCleaning = document.getElementById ("cleaningOut")

addCar = () => {
    let make = document.getElementById("make").value
    let model = document.getElementById("model").value

}

selectService = () =>{

    let serviceTotal = 0;

    let service = document.getElementById("service").value;

    if(service === "Exterior Clean"){
        serviceTotal = serviceTotal + 50;
    } else if(service === "Interior Clean"){
        serviceTotal = serviceTotal + 60;
    } else if(service === "Interior Detail"){
        serviceTotal = serviceTotal + 45;
    }else if(service === "Engine Degrease "){
        serviceTotal = serviceTotal + 30;
    }else if(service === "Mag & Rim Polish"){
        serviceTotal = serviceTotal + 20;
    }else if(service === "Upholstery Deep Clean"){
        serviceTotal = serviceTotal + 70;
    }

    let serviceOptions = document.getElementsByName("service");
    let topArray = [];
    for(let i = 0; i < serviceOptions.length; i++){
        if(serviceOptions[i].checked){
            topArray.push(serviceOptions[i].value);
            serviceTotal = serviceTotal + +serviceOptions[i].dataset.cost
        }
    }

    serviceOrder.push({
        carMake: carMake,
        carModel: carModel,
        selectService: topArray,
        servicePrice: serviceTotal
    });

    document.getElementById("serviceForm").reset();

}

realTimeCost = () => {

    let realTimePrice = 0;
    
    let service = document.getElementById("service").value;
    
    if(service === "Exterior Clean"){
        serviceTotal = serviceTotal + 50;
    } else if(service === "Interior Clean"){
        serviceTotal = serviceTotal + 60;
    } else if(service === "Interior Detail"){
        serviceTotal = serviceTotal + 45;
    }else if(service === "Engine Degrease "){
        serviceTotal = serviceTotal + 30;
    }else if(service === "Mag & Rim Polish"){
        serviceTotal = serviceTotal + 20;
    }else if(service === "Upholstery Deep Clean"){
        serviceTotal = serviceTotal + 70;
    }
}

let serviceOptions = document.getElementsByName("options");
for(let i = 0; i < serviceOptions.length; i++){
    if(serviceOptions[i].checked){
        realTimePrice = realTimePrice + + serviceOptions[i]+ dataset.cost
    }
}

document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + + ".00";

displayService = () => {

    let area = document.getElementById("cleaningServices");
    let cost = document.getElementById("totalCost");

    let overallTotal = 0;

    for(let i = 0; i < serviceOrder.length; i++){

        let make = serviceOrder[i].serviceMake;
        let model = serviceOrder[i].serviceModel;
        let select = serviceOrder[i].serviceSelect;
        let price = serviceOrder[i].servicePrice;

        overallTotal += price;

        cost.innerHTML = "R" + overallTotal + ".00";

        area,innerHTML += `
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${make}</h5>
          <p class="card-text"><strong>${model}:</strong> Value</p>
          <p class="card-text"><strong>${select.join(", ")}:</strong> Value</p>
          <p class="card-text"><strong>${price}:</strong> Value</p>
        </div>
      </div>`
        
      total.innerHTML = "R" + overallTotal + ".00"
    }
}

console.log(serviceOptions)

addToSchedule = () => {
    let data = JSON.stringify(selectService)
    localStorage.setItem('service',data)
}