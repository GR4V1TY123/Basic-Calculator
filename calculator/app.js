const button=document.querySelectorAll('.funcButton');
const screen = document.querySelector('#screen')


let query1=0;
let query2=0;
let answer='';
let restart = false;
let show=false;

for(let b of button){
    b.addEventListener('click',(e)=>{
        let func = b.className;
        if(func.includes('all-clear'))
        {
            allClear();
        }
        if(func.includes('num'))
        { 
            if(restart)
            {
                answer='';
                restart=false;
            }
            show=false;
            answer=answer + b.id;
        }   
        if(func.includes('opr') || func.includes('point'))
        {
            if(func.includes('add'))
                answer=answer + '+';
            if(func.includes('divide'))
                answer=answer + '/';
            if(func.includes('multiply'))
                answer=answer + '*';
            if(func.includes('minus'))
                answer=answer + '-';
            if(func.includes('point'))
                answer=answer + '.';
            restart = false;            
            show=false;
        }
        if(func.includes('negative'))
            answer=answer + '*-1';
        if(func.includes('percent'))
            answer=answer + '/100';
        
        if(func.includes('equal'))
            {
                restart = true;
                show=true;
                try{
                console.log(eval(answer));
                screen.innerText = eval(answer);
                answer = eval(answer);
                }
                catch(error)
                {
                    screen.innerText = 'ERROR';
                    console.log(error);
                }
            }
        if(!show)
        {
        screen.innerText = answer;
        show=true;
        }
    })
}
function allClear(){
    screen.innerText='0';
    answer='';
}


