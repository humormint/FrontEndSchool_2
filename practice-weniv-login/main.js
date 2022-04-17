
//전역변수 설정

var 클릭 = 0;

// X 버튼 클릭시 로그인 모달창 닫기
$(".button-close").click(function () {
  $(".container-login-modal").fadeOut();
});

// 체크박스 클릭시 체크, 한번 더 클릭시 체크 해제

$(".checkbox").click(function () {
  클릭 += 1;
  if (클릭 % 2 == 1) {
    $(".checkbox").attr("src", "img/check2-box.png");
  } else {
    $(".checkbox").attr("src", "img/check-box.png");
  }
});

// 아이디 창 클릭시 아이디 입력 메시지 추가

$("#user-id").click(function () {
  $(".input-user-id").css("display", "block");
});

// 로그인 버튼 누르면 비밀번호 입력 경고창 추가

$(".button-original").click(function () {
  $(".warning-login").css("display", "block");
});
