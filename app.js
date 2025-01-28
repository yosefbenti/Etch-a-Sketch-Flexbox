const container = document.querySelector("#container");
const squareInput = document.querySelector("#squareInput");
const conSize = document.querySelector("#conSize");
const containerSize = document.querySelector("#containerSize");
const submit = document.querySelector("#submit");
const p = document.querySelector("#output");

let conS = 0;
let newElementv ;
let counter = 0;
containerSize.addEventListener("input", () => {
  conS = containerSize.value;

  container.style.display = "flex";
  container.style.border = "1px solid gray"; // Optional: add border for visibility
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "space-evenly";
  container.style.width = `${conS}px`;
  container.style.height = `${conS}px`;
});

squareInput.addEventListener("input", () => {
  container.textContent = "";

  let i;
  const inputValue = parseInt(squareInput.value);
  p.textContent = inputValue;
  const wid = `${conS / inputValue}`;
  const bor = (wid / inputValue) * 0.25;
  const finWid = parseFloat(wid - 2 * bor - 1.6);

  let colors = ['red','yellow','green','blue','pink','gray','balck','browen','orange','cyan']


  for (i = 1; i <= inputValue; i++) {
    for (let j = 1; j <= inputValue; j++) {
      newElementv = document.createElement("div");
      //newElementv.textContent = `${counter}`;
      newElementv.className = "grid-cell"; 
      newElementv.id = `${counter}`
      newElementv.style.width = `${finWid}px`;
      newElementv.style.height = `${finWid}px`;
      newElementv.style.border = `${bor}px solid black`;
      

      // Add event listener for hover (mouseenter) on each square
      newElementv.addEventListener("mouseover", (event) => {
        //const hoveredId = event.target.id;
        //console.log('Hovered over element with ID:', hoveredId);
        // Optionally, change the background color of the hovered element

          let randoms = parseInt(Math.random() * 10);
          event.target.style.backgroundColor = `${colors[randoms]}` ;
  
     
      });


      container.appendChild(newElementv);
      counter++;

      
    }
  }
           
});




 
   



