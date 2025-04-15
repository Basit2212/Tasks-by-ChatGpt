function reversedString(string){
  let word = string.split(" ")
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].split("").reverse().join("")
    
  }
  let newString = word.join(" ")
  console.log(newString);
  


}
reversedString("My Name is Basit")
