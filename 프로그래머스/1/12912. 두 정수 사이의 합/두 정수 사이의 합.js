function solution(a, b) {
    let answer = 0;
    if(a<=b){
        for(let i = a; i<=b; i++ ){
            answer = i + answer;
           
        }
    }else {
        for (let i = b; i<=a; i++){
            answer = i + answer;
             
        }
    }
    return answer;
}