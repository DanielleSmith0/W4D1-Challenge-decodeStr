// I'll take a string, have the first number turned into a number and use it's number to increase the string's letters by that index number. To do this, I must first make an array of the whole alphabet.
// const alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

//You were on the right track, but didn't finish.

//Answer Walkthrough:
function decoder(str) {
    let alphaArr = [ 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let num = +str.match(/^[0-9]+/)

    str = str.replace(str.match(/^[0-9]+/), '')

    let answer = ''
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let charIndex = alphaArr.indexOf(char)

        let newIndex = (charIndex + num) % 26

        answer += alphaArr[newIndex]
    }

    return answer
}

console.log(decoder('12534fcjjm'))