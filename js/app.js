// const coffeeBtn = document.getElementById('coffee-btn');
// coffeeBtn.addEventListener('click', function() {
//     const allInfo = getCardInfo('coffee-title', 'coffee-price', 'coffee-quantity');
//     if(allInfo) {
//         setTableInfo(allInfo);
//         manageCartFinalTotal('final-total', 'total');
//         manageCardSerial ('total-products', 'serial');
//     }
// });


// const heartBtn = document.getElementById('heart-btn');
// heartBtn.addEventListener('click', function() {
//     const allInfo = getCardInfo('heart-title', 'heart-price', 'heart-quantity');
//     if(allInfo) {
//         setTableInfo(allInfo);
//         manageCartFinalTotal('final-total', 'total');
//         manageCardSerial ('total-products', 'serial');
//     }
// });


// const pandaBtn = document.getElementById('panda-btn');
// pandaBtn.addEventListener('click', function() {
//     const allInfo = getCardInfo('panda-title', 'panda-price', 'panda-quantity');
//     if(allInfo) {
//         setTableInfo(allInfo);
//         manageCartFinalTotal('final-total', 'total');
//         manageCardSerial ('total-products', 'serial');
//     }
// });


// const umbrellaBtn = document.getElementById('umbrella-btn');
// umbrellaBtn.addEventListener('click', function() {
//     const allInfo = getCardInfo('umbrella-title', 'umbrella-price', 'umbrella-quantity');
//     if(allInfo) {
//         setTableInfo(allInfo);
//         manageCartFinalTotal('final-total', 'total');
//         manageCardSerial ('total-products', 'serial');
//     }
// });


// const vueBtn = document.getElementById('vue-btn');
// vueBtn.addEventListener('click', function() {
//     const allInfo = getCardInfo('vue-title', 'vue-price', 'vue-quantity');
//     if(allInfo) {
//         setTableInfo(allInfo);
//         manageCartFinalTotal('final-total', 'total');
//         manageCardSerial ('total-products', 'serial');
//     }
// });


const allCard = document.getElementById('all-card');
allCard.addEventListener('click', function (event) {
    if (event.target.innerText === 'ADD TO CART') {
        const allInfo = getAllCardInfo(event.target);
        if (allInfo) {
            setTableInfo(allInfo);
            manageCartFinalTotal('final-total', 'total');
            manageCardSerial('total-products', 'serial');
        }
    }
});


const tableContainer = document.getElementById('table-container');
tableContainer.addEventListener('click', function (event) {
    if (event.target.innerText === 'DELETE') {
        event.target.parentNode.parentNode.remove();
        manageCartFinalTotal('final-total', 'total');
        manageCardSerial('total-products', 'serial');
    }
});