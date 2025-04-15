function characterFrequency(string) {
    let object = {}
    let newString = string.toLowerCase()
    let inputString = newString.split('')
    for (let i = 0; i < inputString.length; i++) {
          if (object[inputString[i]]) {
            object[inputString[i]]++
            
          }
          else{
            object[inputString[i]] = 1
          }
        
        
        
    }
    return object
}
console.log(characterFrequency('My name is Basit'));
