function solution(absolutes, signs) {
    var answer = 0;
    var z = [];

    for (var i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
        answer += absolutes[i];
    } 
    else answer -= absolutes[i];
    }
    return answer;
}
