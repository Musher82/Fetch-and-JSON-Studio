// TODO: add code here

//add event listener on load
window.addEventListener("load", function(){
  //add fetch request
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    //add response request and THEN handler
    response.json().then(function(json){
      //bonus astronaut count
      let container = document.getElementById("container");
      let astronautCount = json.length;
      container.innerHTML = `<h3>Astronaut Count:${astronautCount}</h3>`

   //add for loop with JSON element
   for (let i=0; i < json.length; i++){
     //add container element & template literal for calling JSON objects
     
     container.innerHTML += `
     <div class = "astronaut">
     <div class = "bio">
     <h3>${json[i].firstName} ${json[i].lastName}</h3>
     <ul>
     <li>Hours in space: ${json[i].hoursInSpace}</li>
     <li>Active:${json[i].active}</li>
     <li>Skills:${json[i].skills}</li>
     </ul>
     </div>
     <img class="avatar" src="${json[i].picture}">
     </div>
     `;
   };
    });
  });
});