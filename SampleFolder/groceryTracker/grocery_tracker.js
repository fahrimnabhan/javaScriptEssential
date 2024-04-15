let g1;
let g2;
let g3;

function calculateAmount() {
    g1 = parseFloat(document.getElementById('Grocery-1').value);
    g2 = parseFloat(document.getElementById('Grocery-2').value);
    g3 = parseFloat(document.getElementById('Grocery-3').value);
   
   let total = g1 + g2 + g3;
   document.getElementById('result').innerText = `The total amount is: $${total}`;
}