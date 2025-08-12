"use strict";

const number = prompt("Enter a number from 0 to 7 to check permission level");

switch (number) {
    case "0":
        console.log(
            `Number ${number} - your permission level is '---' (No permissions)`
        );
        break;
    case "1":
        console.log(
            `Number ${number} - your permission level is '--x' (Execute only)`
        );
        break;
    case "2":
        console.log(
            `Number ${number} - your permission level is '-w-' (Write only)`
        );
        break;
    case "3":
        console.log(
            `Number ${number} - your permission level is '-wx' (Write and execute)`
        );
        break;
    case "4":
        console.log(
            `Number ${number} - your permission level is 'r--' (Read only)`
        );
        break;
    case "5":
        console.log(
            `Number ${number} - your permission level is 'r-x' (Read and execute)`
        );
        break;
    case "6":
        console.log(
            `Number ${number} - your permission level is 'rw-' (Read and write)`
        );
        break;
    case "7":
        console.log(
            `Number ${number} - your permission level is 'rwx' (Read, write, and execute)`
        );
        break;

    default:
        console.log(`Incorrect value entered '${number}' - Access denied`);
}
