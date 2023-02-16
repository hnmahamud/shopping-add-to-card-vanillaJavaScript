function setTextFieldValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// function getCardInfo(cardTitle, cardPrice, cardQuantity) {
//     const title = document.getElementById(cardTitle).innerText;
//     const price = document.getElementById(cardPrice).innerText;
//     const quantity = document.getElementById(cardQuantity);
//     if(!isNaN(quantity.value) && quantity.value !== '' && quantity.value > 0) {
//         const allData = [title, price, quantity.value];
//         quantity.value = 1;
//         return allData;
//     }
//     else {
//         quantity.value = 1;
//         alert('Please input valid number!')
//         return false;
//     }
// }


function getAllCardInfo(btn) {
    const title = btn.parentNode.parentNode.children[0].innerText;
    const price = btn.parentNode.parentNode.children[2].children[0].innerText;
    const quantity = btn.parentNode.parentNode.children[3].children[0];
    if (!isNaN(quantity.value) && quantity.value !== '' && quantity.value > 0) {
        const allData = [title, price, quantity.value];
        quantity.value = 1;
        return allData;
    }
    else {
        quantity.value = 1;
        alert('Please input valid number!')
        return false;
    }
}


function setTableInfo(allInfo) {
    const title = allInfo[0];
    const price = parseFloat(allInfo[1]);
    const quantity = parseFloat(allInfo[2]);
    const total = price * quantity;
    const tableContainer = document.getElementById('table-container');
    const newTr = document.createElement('tr');
    newTr.innerHTML = `
    <th class="serial">0</th>
    <td>${title}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td class="total">${total}</td>
    <td><button class="btn btn-xs">Delete</button></td>
    `
    tableContainer.appendChild(newTr);
}


function manageCardSerial(totalItem, itemSerial) {
    const allItem = document.getElementById(totalItem);
    const allSerial = document.getElementsByClassName(itemSerial);
    let i;
    for (i = 0; i < allSerial.length; i++) {
        allSerial[i].innerText = i + 1;
    }
    allItem.innerText = i;
}


function manageCartFinalTotal(finalTotalId, allTotalClass) {
    const finalTotal = document.getElementById(finalTotalId);
    const allTotal = document.getElementsByClassName(allTotalClass);
    let allTotalSum = 0;
    for (let i = 0; i < allTotal.length; i++) {
        allTotalSum = allTotalSum + parseFloat(allTotal[i].innerText);
        console.log(allTotal[i].innerText);
    }
    finalTotal.innerText = allTotalSum;
}