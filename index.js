let  characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const symbolsArray=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]
const  numbersArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let passwordLength= 15

const numberEl= document.getElementById("numbers")
const  symbolEl= document.getElementById("symbols")
const firstPass = document.getElementById("firstNewPass-el")
const secondPass = document.getElementById("secondNewPass-el")

/* event listeners*/
document.addEventListener("click",e=>{
    e.preventDefault()
    e.target.id === "numbers"?  toggleCharacter(numberEl,"Numbers",numbersArray):
    e.target.id === "symbols"? toggleCharacter(symbolEl,"Symbols",symbolsArray):
    e.target.id === "generate-el"? generate(firstPass,secondPass):""
  
    })

firstPass.addEventListener("click", async ()=>await navigator.clipboard.writeText(firstPass.innerText))
secondPass.addEventListener("click", async ()=>await navigator.clipboard.writeText(secondPass.innerText))

document.getElementById("passwordLength").addEventListener("change",()=>passwordLength=document.getElementById("passwordLength").value)

/* Toggle Characters*/ 
const  toggleCharacter= (characterel,numberSymbolHtml,myArray)=>{
    
let charactersToDeleteArr= new Set(myArray)   
   
characters = characters.includes(myArray[0])?
characters.filter(element=> !charactersToDeleteArr.has(element) )  :characters.concat(myArray)

characterel.innerText= characterel.innerText === "Add "+numberSymbolHtml?
     "Remove "+numberSymbolHtml :"Add "+numberSymbolHtml  }

const generate =  (firstId,secondId) =>{
firstId.textContent=""
secondId.textContent=""
    
    for (let i=0; i< passwordLength; i++)
    {firstId.textContent+= characters[randomNumber(characters)]
    secondId.textContent+= characters[randomNumber(characters)]
     }
  }
  
  const randomNumber =  myCharacters => Math.floor(Math.random()*myCharacters.length)
