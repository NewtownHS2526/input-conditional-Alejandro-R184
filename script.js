// Do Now: Find the IDs - open the Dev Tool's console
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);


let score = 0;

const checkAnswer = () => {
  
  if(!outputBox.textContent.includes("Manhattan")){if(textBox.value.includes("Manhattan")){
    score += 1;
    outputBox.textContent = outputBox.textContent + score + ": " + textBox.value + ", ";
  }}

  if(!outputBox.textContent.includes("Brooklyn")){if(textBox.value.includes("Brooklyn")){
    score += 1;
    outputBox.textContent = outputBox.textContent + score + ": " + textBox.value + ", ";
  }}

  if(!outputBox.textContent.includes("Bronx")){if(textBox.value.includes("Bronx")){
    score += 1;
    outputBox.textContent = outputBox.textContent + score + ": " + textBox.value + ", ";
  }}

  if(!outputBox.textContent.includes("Queens")){if(textBox.value.includes("Queens")){
    score += 1;
    outputBox.textContent = outputBox.textContent + score + ": " + textBox.value + ", ";
  }}

  if(!outputBox.textContent.includes("Staten Island")){if(textBox.value.includes("Staten Island")){
    score += 1;
    outputBox.textContent = outputBox.textContent + score + ": " + textBox.value + ", ";
  }}

  // Retrieve inputted value

  // Match against boroughs; Add text to output and increment score
 if(score > 4 || outputBox.textContent.includes("5")){
  outputBox.textContent = "correct!"
 }
  //check if score = 5! (winner)

  // Reset the textBox
  statusBox.textContent = "";
  textBox.value = "";
  console.log(score);
};

textBox.addEventListener("change", checkAnswer);

// Manhattan Brooklyn Bronx Queens Staten Island

// Manhattan - `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`
// Brooklyn - `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`
// Bronx - `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`
// Queens - `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`
// Staten Island - `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`