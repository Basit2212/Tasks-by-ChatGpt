function isPalindrome(string) {
    let lowerCase = string.toLowerCase()
    let splited = lowerCase.split('')
    let reversed = splited.reverse()
    let newString = reversed.join("")
    if (lowerCase === newString) {
        console.log(`this ${string} is a Palindrome`);
        
        
    }
    else{
        console.log(`This ${string} is not a Palindrome`);
        
    }
 
    
    

    
    
    
    
    
    
}
isPalindrome("Basit")
isPalindrome("Racecar")
isPalindrome("Mom")
isPalindrome("DAD")