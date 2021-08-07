var faculty ={
    name:'jhon',
    age:23,
    mobile :9353029559,
    adress:{
        state:'KA',
        city:'chikmaglur',
},
hobbies:['cricket','volley ball','writing',],
obtainhobbies:function(){
    for (i=0;i<=faculty.hobbies.length-1;i++){
        console.log(faculty.hobbies[i]);
    }
}
}
console.log(faculty.obtainhobbies())