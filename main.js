// 시스템바 불러오기
const help = document.querySelector("#help");
const store = document.querySelector("#store");
const auto = document.querySelector("#store+button");
const cash = document.querySelector("div label");
// 아웃풋 불러오기
const output = document.querySelector("div+label");
//프롬프트
const prompty = document.querySelector("input");
//환경 설정
let finding = false;
let server = false;
let buying = false;
let down = false;
let pass = false;
//기타 변수
let Cash = 0;
let buyCommend = "";
//function정의
    //시스템 function
function error() {
    alert("젠장, 에러!");
}
function Output(text) {
    output.innerText = text;
}
    //이벤트리스너 function
function helpAlert() {
    alert("help.(궁금한 명령어 이름)으로 해당 명령어의 정보를 알수 있습니다.");
    alert("명령어 : (다음 창)");
    alert("server, conect, addHack, crash, password, hack, down(25캐쉬), pass(100캐쉬), cash, get, start, end, script");
}
function buy() {
    //alert("아직 구현 안 함.");
    if(buying==true) {
        if(buyCommend=="down") {
            cash -= 25;
            down = true;
        }else{
            error();
        }
    }
}
function autoAlert() {
    //alert("아직 구현 안 함.");
    Output("start명령어로 자동화 스크립트 연다. 그리고 한 명령어씩 스크립트를 짠다. end명령어로 스크립트를 닫는다. 마지막으로 script명령어로 실행한다.");
}
function run(e){
    var code = e.code;
    if(code=="Enter") {
        //alert("아직 구현 안함.");
        //변수 선언
        var commend = prompty.value;
        if(!commend=="") {
            alert("아직 구현안 함.");
        }
    }
}
//이벤트리스너
help.addEventListener("click", helpAlert);
store.addEventListener("click", buy);
auto.addEventListener("click", autoAlert);
prompty.addEventListener("keydown", run);


