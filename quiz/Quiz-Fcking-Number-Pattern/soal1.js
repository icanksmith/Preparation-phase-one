/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  //code here
  let num = [];
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++){
    let filteredNum = arr[i].filter(item => item !== ' ');
    for (let j = 0; j < filteredNum.length; j++){
        num.push(filteredNum[j]);
    }
  }
  
  let highest = num[0];
  let lowest = num[0];
  for (let i = 0; i < num.length; i++){
    if (highest < num[i]) highest = num[i];
    if (num[i] < lowest) lowest = num[i];
  }

  const generatedNum = [];
  for (let i = lowest; i <= highest; i++){
    generatedNum.push(i);
  }

  const result = [];
  for (let i = 0; i < generatedNum.length; i++){
    let same = false;
    for (let j = 0; j < num.length; j++){
        if (num[j] === generatedNum[i]){
            same = true;
            break;      
        }
    }
    if (!same){
        result.push(generatedNum[i]);
    }
  }
  return result;
//   console.log(num)
}


console.log(missingNum([
  [3, ' ', 5],
  [1, ' ', 7],
  [9, ' ', ' ']
])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
  [2, ' '],
  [' ', 5]
])) // [ 3, 4 ]
console.log(missingNum([
  [11, ' ', 13],
  [17, ' ', 19],
  [' ', 16, ' ']
])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
  [3, ' ', 5, 15],
  [1, ' ', 7, 13],
  [9, ' ', ' ', 12],
  [' ', 16, ' ', ' ']
])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []