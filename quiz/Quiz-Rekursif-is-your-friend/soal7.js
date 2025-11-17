/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  const str = String(equation);
  if (str.length === 1) return str;

  const firstNum = Number(str[0]);
  const next = parseNumber(str.slice(1));
  let result = firstNum * (10 ** (str.length - 1));
  
  if (next === '0'){
    return result.toString();
  } else {
    return result + ' + ' + next;
  }
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3