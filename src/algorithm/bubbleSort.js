export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  bubbleSortHelper(array, animations);
  return animations;
}
export const bubbleSortHelper = (array,animations) => {
     
        for(var i = 0; i < array.length; i++){
            
          for(var j = 0; j < ( array.length - i -1 ); j++){
           
            if (array[j] > array[j + 1]) {
              animations.push([j,j+1,array[j], array[j+1]]);  
                  let temp = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = temp;
            }
          }
          
    }
    
}