// 시스템바 불러오기
const help = document.querySelector("#help");
const store = document.querySelector("#store");
const auto = document.querySelector("#store+button");
const cash = document.querySelector("div label");
// 아웃풋 불러오기
const output = document.querySelector("div+label");
//프롬프트
const prompt = document.querySelector("input");
//환경 설정
let finding = false;
let server = false;
//기타 변수
let commend = "";
let Cash = 0;
//function정의
function error() {
    alert("젠장, 에러!");
}
function helpAlert() {
    alert("help.(궁금한 명령어 이름)으로 해당 명령어의 정보를 알수 있습니다.");
    alert("명령어 : (다음 창)");
    alert("server, conect, addHack, crash, password, hack, down(25캐쉬), pass(100캐쉬), cash, get");
}

//이벤트리스너
help.addEventListener("click", helpAlert);
store.addEventListener("click", buy);
auto.addEventListener("click", autoAlert);


