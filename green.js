let allPants = ()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(allplants =>{
       
        let allBTN= document.getElementById("all-btn")
         activeRemove();
        allBTN.classList.add("active")
        displayAllPlants(allplants.plants)
    });
}
allPants();
let displayAllPlants=(alls)=>{
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML=" ";
    for (const all of alls) {
        let card = document.createElement("div");
     card .innerHTML=`
     <div class="bg-white rounded-2xl p-4">
        <img src=${all.image} alt="" class="rounded-2xl h-[300px] w-full">
        <h2 onclick="modal(${all.id})" class="font-semibold text-sm text-[#18181B] my-2"> ${all.name} </h2>
        <p class="text-[0.75rem] text-[#1F2937]">${all.description}</p>
        <div class=" flex justify-between my-3">
        <button class="btn rounded-4xl bg-[#DCFCE7] text-[#15803D]">${all.category}</button>
        <p class="font-semibold text-sm">৳<span>${all.price}</span></p>
        </div>
        <button class="btn bg-[#15803D] text-white rounded-4xl w-full font-medium">Add to Cart</button>
      </div>
     `
     cardContainer.append(card);
     
    };
    
}
let allCategories = ()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(categories => {
        displayCategories(categories.categories);
    }
);
}
allCategories();

let displayCategories=(id)=>{

    id.forEach(el => {
        let categoriesContainer = document.getElementById("categories-container");
    let categoriesDiv= document.createElement("div");
    categoriesDiv.innerHTML=`
    <button id="active-btn-${el.id}" onclick="categoryPlant(${el.id})" class=" remove-btn btn btn-soft w-full hover:bg-[#15803D] hover:text-white bg-[#F0FDF4] border-none ">${el.category_name}</button>
    `
    categoriesContainer.append(categoriesDiv);
    
    });
}

let activeRemove =()=>{
        let BtnRemove= document.querySelectorAll(".remove-btn")
        BtnRemove.forEach(rev => {
            rev.classList.remove("active");
        });  
}

let categoryPlant=(id)=>{
    let url=`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(plants =>{
        let Btn = document.getElementById(`active-btn-${id}`)
        activeRemove()
        Btn.classList.add("active");
        displayAllPlants(plants.plants)
    }); 
}

let modal = (id)=>{
    let url= `https://openapi.programming-hero.com/api/plant/${id}`;
     console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(modalplants =>displayModal(modalplants.plants));
   
}
let displayModal= (id)=>{
    let modalContainer= document.getElementById("modal-card");
     modalContainer.innerHTML=" "
    let modaldiv=document.createElement("div");
    modaldiv.innerHTML=`
    <div class="bg-white rounded-2xl ">
          <h2 class="font-semibold text-xl text-[#18181B] my-4"> ${id.name} </h2>

        <img src=${id.image} alt="" class="rounded-2xl h-[310px] w-full">

        <p class="font-semibold  my-2 text-[#1F2937]"><span class=" font-bold  text-black" >Category: </span>${id.category}</p>

        <p class="font-semibold  text-[#1F2937] "><span class=" font-bold  text-black" >৳ Price : </span>${id.price}</p>

        <p class="my-2 text-[#1F2937]"> <span class=" font-bold " >Description : </span>${id.description}</p>
      </div>
    `
    modalContainer.append(modaldiv);
     my_modal_5.showModal()
}
