export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
      id: i,
      isSelected: i === 29_999_998,
    };
  });  //we need to go through all the items and the items are 29_999_999 and in each iteration of map it returns return if isSelected is true or false until iteration index reaches to the last element 29_999_998 it is falase when it reaches the value it becomes true 
  