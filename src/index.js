module.exports = function check(str, bracketsConfig) {
  let position  = [0, 0];
    let res;

    for(let i = 0; i < bracketsConfig.length; i++){
        let fBracket = bracketsConfig[i][0];
        let lBracket = bracketsConfig[i][1];
        if(fBracket === lBracket){
            res = searchModuleBrackets(str);
            if(res === false){
                break;
            }
        }else{
            res = bracketsPairs(fBracket, lBracket);
            if(res === false){
                break;
            }
        }

    }

    function bracketsPairs(firstBracket, lastBracket){
        let pos = str.lastIndexOf(firstBracket);
        let pairBracket = str.indexOf(lastBracket, pos+1);
        let strWithBrackets = str.slice(pos, pairBracket + 1);
        let bracketsWithModule = /\|/.test(strWithBrackets);
        if(bracketsWithModule){
            if(!searchModuleBrackets(strWithBrackets)){
                return false;
            }
        }
        if(pairBracket === -1){
            return false;
        }else if((pos <= position[0] && pairBracket <= position[0]) || (pos >= position[1] && pairBracket >= position[1])
            || (pos < position[0] && pairBracket > position[1])||(pos > position[0] && pairBracket < position[1])){
            position[0] = pos;
            position[1]  = pairBracket;
            return true;
        }else{
            return false;
        }
    }
    function searchModuleBrackets(string){
    let a = string.toString().match(/\|/g);
    if(a === null || a.length % 2 === 0){
       return true;
    }
    return false;
}
    return res;
}
