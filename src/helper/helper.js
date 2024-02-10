export const checkCommonElement= (arr1, arr2) =>{
    console.log(arr1)
    console.log(arr2)
    if(arr1.length == 0){
        console.log(true)
        return true;
    }
    else{
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            // if (arr1[i] == arr2[j]) {
        if (arr2[j].includes(arr1[i])) {
        console.log(true)
                return true; // If any common element found, return true
            }
        }
    }
    
    console.log(false)
    return false; }// No common elements found, return false
}