// 성능 측정 함수
function timer(func, maxCount) {
  var start = new Date().getTime();
  maxCount = maxCount ? maxCount : 1;
  for (var n = 0; n < maxCount; n++) {
      func();
  }
  var elapsed = new Date().getTime() - start;
  return elapsed;
}

// 실행 지연 함수
function lazyExec(func, arr) {
  return () => func.call(null, arr);
}

// Reference Link!!!
// http://tech.javacafe.io/javascript/2018/01/22/Javascript_%EC%84%B1%EB%8A%A5%EB%B6%84%EC%84%9D_%EC%8B%A4%ED%96%89%EC%8B%9C%EA%B0%84%EC%B8%A1%EC%A0%95_feat_%ED%95%A8%EC%88%98%ED%98%95%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/