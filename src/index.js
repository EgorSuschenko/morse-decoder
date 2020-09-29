const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const letterCount = expr.length / 10;
    let decodedString = '';
    let letter = '';

    for (let i = 0; i < letterCount; i++){
      letter = expr.substring(0, 10);
      let morseLetter = '';
      if(letter === `**********`)
        decodedString += ' ';
      else{
        for (let j = 0; letter !== 0 || j < 5; j++){
          if (parseInt(letter) % 100 === 10)
            morseLetter += `.`;
          if (parseInt(letter) % 100 === 11)
            morseLetter += `-`;
            letter = parseInt(letter) / 100;
        }
        decodedString += MORSE_TABLE[morseLetter.split('').reverse().join('')];

      }
      expr = expr.substring(10);
    }
    return decodedString;
}

module.exports = {
    decode
}
