/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here
  if (sentences.length === 0) return 0;
  const loweredText = sentences.toLowerCase();
  const firstChar = loweredText[0];
  const restChar = loweredText.slice(1);
  const code = loweredText.charCodeAt(0);
  let consonant = 0;

  if (code >= 97 && code <= 122){
    if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'u' || firstChar === 'o'){
        consonant = 0;
    } else {
        consonant = 1;
    }
  }
  return consonant + consonantCounterRecursive(restChar);
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3