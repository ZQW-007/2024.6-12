// if...else...
// var age = 12
// if (age >= 18) {
//   console.log('成年人');
// }else{
//   console.log('未成年人');
// }

// 判断成绩的级别
var score = 60
if (score >= 90) {
  console.log('优秀');
} else if (score >= 80){
  console.log('良好');
} else if (score >= 60) {
  console.log('及格');
} else{
  console.log('不及格');
}

function exchange(num) {
  if (num && typeof num == 'number') {
    //typeof num=='number' && 0<num and num<=10
    if (num > 0 && num <= 10) {
      if (num == 1) {
        result = "壹";
      } else if (num == 2) {
        result = "贰";
      } else if (num == 3) {
        result = "叁";
      } else if (num == 4) {
        result = "肆";
      } else if (num == 5) {
        result = "伍";
      } else if (num == 6) {
        result = "陆";
      } else if (num == 7) {
        result = "柒";
      } else if (num == 8) {
        result = "捌";
      } else if (num == 9) {
        result = "玖";
      } else {
        result = "拾";
      }
    } else if (num > 10) {
      result = "请输入不大于10的数字";
    } else {
      result = "请输入不小于0的数字";
    }
  } else if (num == 0) {
    result = "零";
  } else {
    result = "请输入数字";
  }
  console.log(result);
}
exchange(0);
exchange(-120);
exchange(100);
exchange('as');
exchange();