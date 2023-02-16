const coffeeBtn = document.getElementById('coffee-btn');
coffeeBtn.addEventListener('click', function() {
    const allInfo = getCardInfo('coffee-title', 'coffee-price', 'coffee-quantity');
    setTableInfo(allInfo);
    manageCardSerial ('total-products', 'serial');
});


const heartBtn = document.getElementById('heart-btn');
heartBtn.addEventListener('click', function() {
    const allInfo = getCardInfo('heart-title', 'heart-price', 'heart-quantity');
    setTableInfo(allInfo);
    manageCardSerial ('total-products', 'serial');
});


const pandaBtn = document.getElementById('panda-btn');
pandaBtn.addEventListener('click', function() {
    const allInfo = getCardInfo('panda-title', 'panda-price', 'panda-quantity');
    setTableInfo(allInfo);
    manageCardSerial ('total-products', 'serial');
});


const umbrellaBtn = document.getElementById('umbrella-btn');
umbrellaBtn.addEventListener('click', function() {
    const allInfo = getCardInfo('umbrella-title', 'umbrella-price', 'umbrella-quantity');
    setTableInfo(allInfo);
    manageCardSerial ('total-products', 'serial');
});


const vueBtn = document.getElementById('vue-btn');
vueBtn.addEventListener('click', function() {
    const allInfo = getCardInfoInput('vue-title', 'vue-price', 'vue-quantity');
    if(allInfo) {
        setTableInfo(allInfo);
        manageCardSerial ('total-products', 'serial');
    }
});


const tableContainer = document.getElementById('table-container');
tableContainer.addEventListener('click', function(event) {
    if(event.target.innerText === 'DELETE') {
        manageCart(event.target, 'final-total');
        manageCardSerial ('total-products', 'serial');
    }
});