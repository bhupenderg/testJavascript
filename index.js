let val = document.getElementsByClassName('item');
let arr = Array.from(val);
arr.forEach((item, index) => {
    item.style.color = 'green';
    item.textContent = 'Woww';
    console.log(`${index} is ${item}`);
})    
console.log(val);
console.log("Hello");
console.log("Third Commit");