const removeFromArray = function(array, itemToRemove) {
    const args = Array.from(arguments)
    args.shift()
    console.log('args =' + args)
    let newArray = [];

    label: for(let i=0; i<array.length ; i++) {
        analysedItem = array[i];
 
        for(let i=0; i<args.length; i++) {
            filterItem = args[i];
            console.log('analysedItem= ' + analysedItem, 'filterItem= ' +filterItem)
            if (analysedItem === filterItem) continue label
        }
        newArray.push(analysedItem);
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;