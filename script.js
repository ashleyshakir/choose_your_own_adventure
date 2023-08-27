// grab the game grib, game choices and answer choices
const choicesDiv = document.querySelector('.choices')
const answerDiv = document.querySelector('.answer')
const gameGrid = document.querySelector("#game-grid")
let orginalState = gameGrid.innerHTML

/**
 * Update the story text with the new story text
 * @param {*} newStory The new story text
 */
function updateStory(newStory) {
    document.getElementById('story').innerHTML = newStory;
}
/**
 * Update the button choices and show the answer input field
 */
function updateResponseFields(){
    choicesDiv.innerHTML = ``
    answerDiv.innerHTML = `
    <input type="text" placeholder="enter your answer" id="answer-field"></input>
    <button id="submit-answer">Submit</button>`
}
/**
 * If the player chooses the red door they must answer the red riddle correctly before they can move on.
 * If they answer correctly they choose to open the yellow door or the purple door. 
 */
function redRiddle() {
    let riddle = "Red Riddle: If you have 6 fish and half of them die from drowning, how many fish do you have left?"
    updateStory(riddle)
    // Update choices
    updateResponseFields()
    const submitButton = document.querySelector("#submit-answer")
    const answerField = document.querySelector("#answer-field")
    submitButton.addEventListener("click", function(event){
        event.preventDefault()
        answer = answerField.value
        if (answer === "6" || answer === "six" || answer === "Six") {
            let newStory = "That is correct! You now see a yellow door and a purple door. Which one will you try to unlock?"
            updateStory(newStory)
            answerDiv.innerHTML = ``
            choicesDiv.innerHTML = `
            <button onclick="yellowRiddle()">Yellow Door </button>
            <button style="background-color: violet" onclick="purpleRiddle()">Purple Door</button>
          `
        } else {
            answerField.value = ""
            let wrongAnswer = "That is incorrect! Try again!"
            updateStory(wrongAnswer + "<br><br>" + riddle)
        }
    })

 }
/**
 * If the player chooses the blue door they must answer the blue riddle correctly before they can move on.
 * If they answer correctly they choose to open the orange or the pink door.
 */
function blueRiddle() {
        let riddle = "Blue Riddle: I travel all around the world, but never leave the corner. What am I?"
        updateStory(riddle)
        // Update choices
        updateResponseFields()
        const submitButton = document.querySelector("#submit-answer")
        const answerField = document.querySelector("#answer-field")
        submitButton.addEventListener("click", function(event){
            event.preventDefault()
            answer = answerField.value
            if(answer.toLowerCase() === "stamp"){
                let newStory = "That is correct! You open the blue door to find... more doors... an orange door and a pink door. Which will you try to unlock next?"
                updateStory(newStory)
                answerDiv.innerHTML = ``
                choicesDiv.innerHTML = `
                <button style="background-color: orange" onclick="orangeRiddle()">Orange Door</button>
                <button style="background-color: pink" onclick="pinkRiddle()">Pink Door</button>
                `
            } else {
                answerField.value = ""
                let wrongAnswer = "This one is tricky so I will give you a hint... it starts with an 's'"
                updateStory(wrongAnswer + "<br><br>" + riddle)

            }
        })
}
/**
 * If the player chooses the purple door or if they choose the looping door (yellow) they must answer the purple riddle correctly. 
 * If answered correctly they are taken to the final three doors.
 */
function purpleRiddle() {
        let riddle = "Purple Riddle: I am tall when I am young and short when I am old. What am I?"
        updateStory(riddle)
        // Update choices
        updateResponseFields()
        const submitButton = document.querySelector("#submit-answer")
        const answerField = document.querySelector("#answer-field")
        submitButton.addEventListener("click", function(event){
            event.preventDefault()
            answer = answerField.value
            if(answer.toLowerCase() === "candle"){
                let newStory = "That is correct! Amazing job! You have made it to the final three doors, but wait none of them are green! These doors are all white and show a different number. The first door shows number 4. The second shows number 5. The third shows number 6. Which door will you choose?"
                updateStory(newStory)
                finalThree()

            } else {
                answerField.value = ""
                let wrongAnswer = "This one is tricky so I will give you a hint... it starts with a 'c'"
                updateStory(wrongAnswer + "<br><br>" + riddle)
            }
        })
}
/**
 * If the player chooses the orange door they must answer the orange riddle correctly. 
 * If answered correctly they are taken to the final three doors.
 */
function orangeRiddle() {
        let riddle = "Orange Riddle: Where does today come before yesterday?"
        updateStory(riddle)
        // Update choices
        updateResponseFields()
        const submitButton = document.querySelector("#submit-answer")
        const answerField = document.querySelector("#answer-field")
        submitButton.addEventListener("click", function(event){
            event.preventDefault()
            answer = answerField.value
            if (answer.toLowerCase() === "dictionary"){
                let newStory = "That is correct! Amazing job, you have made it to the final three doors, but wait none of them are green! These doors are all white and show a different number. The first door shows number 4. The second shows number 5. The third shows number 6. Which door will you choose?"
                updateStory(newStory)
                finalThree()
            } else {
                answerField.value = ""
                let wrongAnswer = "This one is tricky so I will give you a hint... it starts with a 'd'"
                updateStory(wrongAnswer + "<br><br>" + riddle)
            }
        })
}
/**
 * If the player chooses the yellow door they must answer the yellow riddle correctly before they can move on. 
 * If they answer correctly they are told they found the looping door and must answer the purple riddle next.
 */
function yellowRiddle() {
        let riddle = "Yellow Riddle: When Jake was 8 years old, his little brother, Shawn, was half his age. If Jake is 20 years old today, how old is Shawn?"
        updateStory(riddle)
        // Update choices
        updateResponseFields()
        const submitButton = document.querySelector("#submit-answer")
        const answerField = document.querySelector("#answer-field")
        submitButton.addEventListener("click", function(event){
            event.preventDefault()
            answer = answerField.value
            if(answer === "16" || answer === "Sixteen" || answer === "sixteen"){
                let newStory = "That is correct! But wait... oh no! You found the looping door! When you walk through, you end up in the same room! Guess you'll have to unlock the purple door to get to the next room!"
                updateStory(newStory)
                answerDiv.innerHTML = ``
                choicesDiv.innerHTML = `  
                <button style="background-color: violet" onclick="purpleRiddle()">Purple Door</button>
                `
            } else {
                answerField.value = ""
                let wrongAnswer = "That is incorrect! But this one is tricky so I will give you a hint: 8 - 4 = ? years apart"
                updateStory(wrongAnswer + "<br><br>" + riddle)
            }
        })
}
/**
 * If the player chooses the pink door they are reset to the beginning where they must choose between the red and blue door!
 */
function pinkRiddle(){
    let newStory = "Uh oh! You chose the reset door! You are now back at the beginning!!"
    updateStory(newStory)
    // Update choices
    choicesDiv.innerHTML = `
    <button style="background-color: salmon" onclick="redRiddle()">Red Door </button>
    <button style="background-color: #5995DA" onclick="blueRiddle()">Blue Door</button>
    `
}

/**
 * After choosing to play the game, the player will see the first prompt asking them to choose between the red door or the blue door.
 */
function startGame(){
    const playButton = document.querySelector(".play-button")
    let newStory = "Awesome, I am so happy you choose to play! Let's begin... Red door or Blue door?"
    updateStory(newStory)
    playButton.remove()
    // Update choices
    choicesDiv.innerHTML = `
    <button style="background-color: salmon" onclick="redRiddle()">Red Door </button>
    <button style="background-color: #5995DA" onclick="blueRiddle()">Blue Door</button>
  `

}
/**
 * If the player answers either the purple or the orange riddle correctly they are taken to the final three doors.
 * They must choose between the doors and depending on their choice they are taken to the blue riddle (4), the yellow riddle (6), or the green exit (5)!
 */
function finalThree(){
    // Update choices
    updateResponseFields()
    const submitButton = document.querySelector("#submit-answer")
    const answerField = document.querySelector("#answer-field")
    submitButton.addEventListener("click", function(event){
        event.preventDefault()
        answer = answerField.value
        if(answer === "4"){
            let newStory = "Woah the door is changing colors! It seems to be turning blue! Guess you picked the wrong door."
            updateStory(newStory)
            answerDiv.innerHTML = ``
            choicesDiv.innerHTML = `
            <button style="background-color: #5995DA" onclick="blueRiddle()">Blue Door</button>
            `
        } else if(answer === "5"){
            let newStory = "Woah the door is changing colors! It is turning green! Quick exit the door to escape!"
            updateStory(newStory)
            answerDiv.innerHTML = ``
            choicesDiv.innerHTML = `
            <button style="background-color: green" onclick="escape()"> Escape! </button>
            `
        } else if(answer === "6"){
            let newStory = "Woah the door is changing colors! It seems to be turning yellow! Guess you picked the wrong door."
            updateStory(newStory)
            answerDiv.innerHTML = ``
            choicesDiv.innerHTML = `
            <button onclick="yellowRiddle()">Yellow Door </button>
            `
        } else {
            answerField.value = ""
            let invalidResponse = "That is not a valid answer."
            updateStory(invalidResponse)
        }
    })
}
/**
 * If they choose the correct door they have escaped the Riddle-culous adventure! 
 * They can choose to reset the game.
 */
function escape(){
    let escapedMessage = "Woohoo!! You did it! You escaped just in time!"
    updateStory(escapedMessage)
    choicesDiv.innerHTML = `<button onclick="resetGame()">Reset Game </button>`
    answerDiv.innerHTML = ``
}
/**
 * Resets the gameGrid to it's original html.
 */
function resetGame(){
    // reset game grid html
    gameGrid.innerHTML = orginalState
    choicesDiv.innerHTML = ``
}