function addExtraCost(idname,value){
    const elementId=document.getElementById(idname+'-cost');
    elementId.innerText=value;
}
function getExtraPrice(item){
    const itemPrice = document.getElementById(item+'-cost');
    const itemCostAmoount=parseInt(itemPrice.innerText);
    return itemCostAmoount;
}
function calculation(){
    const bestCost = getExtraPrice('best');
    const memoryCost =getExtraPrice('memory');
    const storageCost=getExtraPrice('storage');
    const delivery =getExtraPrice('delivery');
    const total=bestCost+memoryCost+storageCost+delivery;
    document.getElementById('total-price').innerText=total;
    const totalPrice2=document.getElementById('total-price2');
    totalPrice2.innerText=total;
}
// for-memory
document.getElementById('initial-memory').addEventListener('click',function(){
    addExtraCost('memory',0);
    calculation();
})
document.getElementById('cost-memory-up').addEventListener('click',function(){
    addExtraCost('memory',180);
    calculation();
})
// for-Storage
document.getElementById('initial-storage').addEventListener('click',function(){
    addExtraCost('storage',0);
    calculation();
})
document.getElementById('cost-storage-mid').addEventListener('click',function(){
    addExtraCost('storage',100);
    calculation();
})
document.getElementById('cost-storage-final').addEventListener('click',function(){
    addExtraCost('storage',180);
    calculation();
})
// for-delivery
document.getElementById('free-delivery-button').addEventListener('click',function(){
    addExtraCost('delivery',0);
    calculation();
})
document.getElementById('paid-delivery-button').addEventListener('click',function(){
    addExtraCost('delivery',20);
    calculation();
})
// copon-code
document.getElementById('promo-button').addEventListener('click',function(){
    const bestCost = getExtraPrice('best');
    const memoryCost =getExtraPrice('memory');
    const storageCost=getExtraPrice('storage');
    const delivery =getExtraPrice('delivery');
    const total=bestCost+memoryCost+storageCost+delivery;
    document.getElementById('total-price').innerText=total;
    const promoInput =document.getElementById('promo-input');
    const promoInputField =promoInput.value;
    if(promoInputField.toLowerCase() =='stevekaku'){
        const totalPrice2 = document.getElementById('total-price2');
        totalPrice2.innerText=total-total*20/100;
    }
    else{
        totalPrice2.innerText=total;
    }
    promoInput.value='';
   
})