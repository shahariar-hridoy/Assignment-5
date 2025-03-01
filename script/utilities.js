function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}
function setInnerTextByIDAndValue(id,value){
    document.getElementById(id).innerText = value;
}