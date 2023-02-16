function setTextFieldValue (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getCardInfo(cardTitle, cardPrice, cardQuantity) {
    const title = document.getElementById(cardTitle).innerText;
    const price = document.getElementById(cardPrice).innerText;
    const quantity = document.getElementById(cardQuantity).innerText;
    const allData = [title, price, quantity];
    return allData;
}


function getCardInfoInput(cardTitle, cardPrice, cardQuantity) {
    const title = document.getElementById(cardTitle).innerText;
    const price = document.getElementById(cardPrice);
    const quantity = document.getElementById(cardQuantity);
    if(!isNaN(price.value) && !isNaN(quantity.value) && price.value !== '' && quantity.value !== '') {
        const allData = [title, price.value, quantity.value];
        price.value = '';
        quantity.value = '';
        return allData;
    }
    else {
        price.value = '';
        quantity.value = '';
        alert('Please input valid number!')
        return false;
    }
}


function setTableInfo (allInfo) {
    const title = allInfo[0];
    const price = parseFloat(allInfo[1]);
    const quantity = parseFloat(allInfo[2]);
    const total = price * quantity;
    finalTotal = finalTotal + total
    const tableContainer = document.getElementById('table-container');
    const newTr = document.createElement('tr');
    newTr.innerHTML = `
    <th class="serial">0</th>
    <td>${title}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${total}</td>
    <td><button class="btn btn-xs">Delete</button></td>
    `
    tableContainer.appendChild(newTr);
    setTextFieldValue('final-total', finalTotal);
}


function manageCardSerial (totalItem, itemSerial) {
    const allItem = document.getElementById(totalItem);
    const allSerial = document.getElementsByClassName(itemSerial);
    let i;
    for(i = 0; i < allSerial.length; i++) {
        allSerial[i].innerText = i + 1;
    }
    allItem.innerText = i;
}


let finalTotal = parseFloat(document.getElementById('final-total').innerText);
function manageCart (btn, finalTotalId) {
    const delTotalField = btn.parentNode.previousSibling.previousSibling;

    const mainTotalField = document.getElementById(finalTotalId);
    const newMainTotal = parseFloat(mainTotalField.innerText) - parseFloat(delTotalField.innerText);
    mainTotalField.innerText = newMainTotal;
    finalTotal = finalTotal - parseFloat(delTotalField.innerText);

    btn.parentNode.parentNode.remove();
}