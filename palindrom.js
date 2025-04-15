function palindrome(string){
    let lowerCase = string.toLowerCase()
    let newString = lowerCase.split("").reverse()
    let join = newString.join("")
    if (lowerCase === join) {
        return true
        
    }else{
        return false
    }
    
    
    

    

    
    
    

    

}
console.log(palindrome("MOM"));

