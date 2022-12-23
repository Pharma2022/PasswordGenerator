let  characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbolsArray=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"];
const  numbersArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let passwordLength= 15;

/* event listeners*/
document.addEventListener("click",e=>{
    e.preventDefault()
    e.target.id === "numbers"?  toggleCharacter(document.getElementById("numbers"),"Numbers",numbersArray,1):
    e.target.id === "symbols"? toggleCharacter(document.getElementById("symbols"),"Symbols",symbolsArray,"?"):
    e.target.id === "generate-el"? generate("firstNewPass-el","secondNewPass-el"):""
  
    })

document.getElementById("firstNewPass-el").addEventListener("click", async ()=>await navigator.clipboard.writeText(document.getElementById("firstNewPass-el").innerText))
document.getElementById("secondNewPass-el").addEventListener("click", async ()=>await navigator.clipboard.writeText(document.getElementById("secondNewPass-el").innerText))

document.getElementById("passwordLength").addEventListener("change",()=>passwordLength=document.getElementById("passwordLength").value)

/* Toggle Characters*/ 
const  toggleCharacter= (characterel,numberSymbolHtml,myArray,arrayElement)=>{
let charactersToDeleteArr= new Set(myArray)   
   
characters = characters.includes(arrayElement)?
characters.filter((element)=> !charactersToDeleteArr.has(element))  :characters.concat(myArray)

characterel.innerText= characterel.innerText === "Add "+numberSymbolHtml?
     "Remove "+numberSymbolHtml :"Add "+numberSymbolHtml  }

const generate =  (firstId,secondId) =>{
document.getElementById(`${firstId}`).textContent=""
document.getElementById(`${secondId}`).textContent=""
    
    for (let i=0; i< passwordLength; i++)
    {document.getElementById(`${firstId}`).textContent+= characters[randomNumber(characters)]
    document.getElementById(`${secondId}`).textContent+= characters[randomNumber(characters)]
     }
  }
  
  const randomNumber =  myCharacters => Math.floor(Math.random()*myCharacters.length)


