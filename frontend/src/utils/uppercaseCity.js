export const upperCaseCity = (city) => {
if(city){
  const arr = city.trim().split(" ");
  let val = " ";
  for (let i = 0; i < arr.length; i++) {
    val +=
      arr[i][0].toUpperCase() +
      arr[i].slice(1, arr[i].length).toLowerCase() +
      " ";
  }
  return val.trim();
}
};
