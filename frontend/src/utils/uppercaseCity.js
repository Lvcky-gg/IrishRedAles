export const upperCaseCity = (city) => {
    const arr = city.split(' ')
    let val = " ";
    for(let i = 0; i < arr.length; i++){
       val += arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length).toLowerCase() + " "
    }
   return  val.trim()
}
