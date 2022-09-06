const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = `Семья состоит из: `;
    if(arr.length === 0 ){
        return "Семья пуста";
    }
    else {
    for (let key of arr){
            str += `${key} `;
    }}
     console.log(str);
    return str;
}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for( let key in arr){
        console.log(arr[key].toLocaleLowerCase());
    }
}
standardizeStrings(favoriteCities);

