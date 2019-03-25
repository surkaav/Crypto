let transposition = (myString, column, cb) => {

    createMatrix(myString, column, (err, matrix, row) => {
        let transposedMessage = '';
        let decryptMessage = '';

        if (err) {

        } else {
            for (let j=0; j<column; j++) {
                for (let i=0; i<row; i++) {
                    if (matrix[i][j] == null) {
                        decryptMessage += '$';
                    } else {
                        transposedMessage += matrix[i][j];
                        decryptMessage += matrix[i][j];
                    }
                }
            }
            return cb(null, transposedMessage, decryptMessage, row);
        }
    });
};

let createMatrix = (myString, column, cb) => {
    myString = myString.split('');
    let row,
        length = myString.length,
        tempRowF = length/column,
        tempRowR = parseInt(length/column),
        matrix = new Array();

    if (tempRowR == tempRowF) {
        row = tempRowR;
    } else {
        row = tempRowR + 1;
    }

    let index = 0;

    for (let i=0; i<row; i++) {
        matrix[i] = new Array();
    }

    for (let i=0; i<row; i++) {
        for (let j=0; j<column; j++) {
            if (myString[index] == ' ') {
                matrix[i][j] = '-';
            } else if (index >= length) {
                matrix[i][j] = null;
            } else {
                matrix[i][j] = myString[index];
            }
            index ++;
        }
    }

    return cb(null, matrix, row);
};

let decryptMessage = (encryptedMessage, column, cb) => {
    encryptedMessage = encryptedMessage.split('');
    let decryptMessage = '';
    let reservedMessage = '';
    let length = encryptedMessage.length - 1;
    let index = 0;
    for (let i=0; i<=length; i++) {
        if (encryptedMessage[index] == '$') {
            reservedMessage += encryptedMessage[index];
        } else {
            decryptMessage += encryptedMessage[index];
            reservedMessage += encryptedMessage[index];
        }

        index += column;

        if (index >= length) {
            index = index - length;
        }
    }
    cb(null, decryptMessage, reservedMessage);
};

// transposition(message, sector, (err, encryptMessage, reservedMessage, row) => {
//     console.log('MESSAGE: ' + message + '\n');

//     if (err) {

//     } else {
//         console.log('AFTER ENCRYPTION');
//         console.log('   Encrypted message: ' + encryptMessage);
//         console.log('   Reserved message:' + reservedMessage);
//         decryptMessage(reservedMessage, row, (err, decryptedMessage, reservedMessage) => {
//             if (err) {

//             } else {
//                 console.log('AFTER DECRYPTION');
//                 console.log('   Decryped message: ' + decryptedMessage);
//                 console.log('   Reserved message: ' + reservedMessage);
//             }
//         });
//     }
// });

module.exports={transposition,createMatrix,decryptMessage};