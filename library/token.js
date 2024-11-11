export function 토큰화(문장, 구분기호) {
    var i = 0;
    var toI = 문장.length;
    var token = "";
    var tokens = [];
    for(i = 0; i<toI; i++) {
        if(구분기호.includes(문장[i])){
            if(!token==""){
                tokens.push(token);
                token = "";
            }
        }else{
            token = token + 문장[i];
        }
    }
    if(!token==""){
        tokens.push(token);
        token = "";
    }
    return tokens;
}

export function 간략화(문장, 구분기호) {
    var i = 0;
    var toI = 문장.length;
    var token = "";
    var tokens = "";
    for(i = 0; i < toI; i++) {
        if(구분기호.includes(문장[i])) {
            if(token != "") {
                tokens = tokens + token + " ";
                token = "";
            }
        } else {
            token = token + 문장[i];
        }
    }
    if(token != "") {
        tokens = tokens + token;
    }

    // 양쪽 공백 제거
    return tokens.trim();
}