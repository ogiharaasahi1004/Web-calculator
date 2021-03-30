  const box = document.getElementById('box');
  const buttonAdd = document.getElementById('button-add');
  const buttonSub = document.getElementById('button-sub');
  const buttonMul = document.getElementById('button-mul');
  const buttonDiv = document.getElementById('button-div');
  
 const getNum1 = () => {
  // num1の数値を戻り値としてreturnする処理を書いてください
  const getNum1 = document.getElementById('num1');
  return Number.parseFloat(getNum1.value);
};
const getNum2 = () => {
  // num2の数値を戻り値としてreturnする処理を書いてください
  const getNum2 = document.getElementById('num2');
  return Number.parseFloat(getNum2.value);
};
  const showResult = (result) => {
  // <div id="box">にnumを表示する処理を書いてください
  box.textContent = result;
  console.log(result);
};
 
buttonAdd.addEventListener('click', () => {
  const result = getNum1() + getNum2();
  showResult(result);
 });
buttonSub.addEventListener('click', () => {
  const result = getNum1() - getNum2();
  showResult(result);
 });
buttonMul.addEventListener('click', () => {
  const result = getNum1() * getNum2();
  showResult(result);
 });
buttonDiv.addEventListener('click', () => {
  const result = getNum1() / getNum2();
  showResult(result);
 });

 

 
 


 



























