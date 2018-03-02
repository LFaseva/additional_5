module.exports = function check(str, bracketsConfig){
    let res = null;
    let inputStr = str.split('');
    let i = 0;
    let bracketsConfigLength = bracketsConfig.length;
    if(str.length % 2 !== 0){
        res = false;
        return false;
    }
    while(inputStr.length >= 0){
        if(res !== null){
            break;
        }
        if(i === bracketsConfigLength){
            i = 0;
            checkbrackets(inputStr, bracketsConfig[i]);
        }else if(checkbrackets(inputStr, bracketsConfig[i])){
            i++;
            continue;
        }else{
            break;
        }

    }

    function checkbrackets(checkingStr, arrTemp){
        let posOpenBr;
        let posCloseBr;
        if(arrTemp[0] !== arrTemp[1]){
            posOpenBr = checkingStr.lastIndexOf(arrTemp[0]);
            posCloseBr = checkingStr.indexOf(arrTemp[1], posOpenBr + 1);
        }else{
            posOpenBr = checkingStr.indexOf(arrTemp[0]);
            posCloseBr = checkingStr.indexOf(arrTemp[0], posOpenBr + 1);
        }

        if(posOpenBr === -1 && posCloseBr === -1){
            return true;
        }else if((posOpenBr < posCloseBr) && (posOpenBr !== -1 && posCloseBr !== -1)){
            let tempStr = checkingStr.slice(posOpenBr, posCloseBr + 1);
            if(tempStr.length === 2){
                inputStr.splice(posOpenBr, 2);
                if(inputStr.length === 0){
                    res = true;
                    return;
                }else{
                    checkbrackets(inputStr, arrTemp);
                }
            }else{
                if(tempStr.length % 2 === 0){
                    inputStr.splice(posCloseBr, 1);
                    inputStr.splice(posOpenBr, 1);
                    return true;
                }else{
                    res = false;
                    return false;
                }
            }
        }else{
            res = false;
            return false;
        }
        return true;
    }

    return res;

};
