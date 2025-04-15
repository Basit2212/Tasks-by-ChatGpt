    function removeDuplicate(array){
        let remove =  new Set(array)
        let newSet = [...remove]
        return newSet

    }
    console.log(removeDuplicate([1, 2, 2, 3, 4, 5]));
