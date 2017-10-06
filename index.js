const XlsxPopulate = require('xlsx-populate');
var rowCounter = 1;
const fileName = 'hailstone_spreadsheet.xlsx';
const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// load existing workbook

// new book
XlsxPopulate.fromFileAsync().then(workbook => {

});

// input inside nextStep
// for each result, create a new cell in the sheet
//

function createSheet(arr){
    for (let i = 0; i < arr.length; i++){
        var currentCell = alphabet[i] + rowCounter;
        // inside value should be nextStep
        workbook.sheet('Hailstone').cell(currentCell).value();
    }

}

function nextStep(num, arr, cb){
    if (typeof num === 'number'){
        var next;
        var sequence = arr || [];
        sequence.push(num);
        if (num % 2 === 0){
            next = num / 2
        } else if (num % 2 === 1){
            next = 3 * num + 1;
        }
        sequence.push(next);
        if (next != 1){
            nextStep(next, sequence);
        } else {
            console.log(sequence);
            cb(sequence);
            // return sequence;
        }
    }
    return null;
}
