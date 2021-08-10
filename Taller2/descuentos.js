





function ApplyDiscount(price,discount) {
    const descuento = (price*discount)/100
    const final_price = price - descuento
    return final_price 
}


function ReturnFinalPrice() {
    const input1 = document.getElementById("OriginalPrice");
    const input2 = document.getElementById("ProductDiscount");
    const result = document.getElementById("ResultDiscount");
    const price = input1.value;
    const discount = input2.value;

    const final_price = ApplyDiscount(price,discount);
    result.innerHTML = `${final_price}`;
}