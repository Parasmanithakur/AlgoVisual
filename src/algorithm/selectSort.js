export function getSelectSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    selectSortHelper(array, animations);
    return animations;
  }
  export const selectSortHelper = (array,animations) => {
       
    
  
    // One by one move boundary of
    // unsorted subarray 
      var n = array.length;
    for (var i = 0; i < n-1; i++) 
    { 
        
        // Find the minimum element in 
        // unsorted array 
        var min_idx = i; 
        for (var j = i+1; j < n; j++) 
        if (array[j] < array[min_idx]) 
            min_idx = j; 
  
        // Swap the found minimum element
        // with the first element 
        animations.push([min_idx,i,array[min_idx], array[i]]);  
       // swap(array[min_idx], array[i]); 
        let temp = array[min_idx];
        array[min_idx] =  array[i];
        array[i] = temp;

      } 
      
} 
            
    