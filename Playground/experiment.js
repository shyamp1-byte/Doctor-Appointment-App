// print 1 to 24 numbers
// based on hour , we need to wish the user

let time =1;
for (time;time<=24;time++){
    if(time<12){
        console.log(time,"Good Morning...!");
    }else if(time<16){
        console.log(time,"Good Afternoon");
    }
    else{
        console.log(time,"Good Evening/Good Night");
    }
}