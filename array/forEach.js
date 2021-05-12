const arr1 = [1,2,3]
arr1.forEach(item => {
  console.log(item);
  
  if(item===1){
    return true
  }
})