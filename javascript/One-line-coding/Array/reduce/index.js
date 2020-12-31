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