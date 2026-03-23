// exercise 15
const students = [
    {name: "joseph moha abdalle", age: 25, id: "c1221", brithdate: 2001},
    {name: "rithwann ali ibrahem", age: 30, id: "c1222", brithdate: 1996},
    {name: "zalma mohamett abdullahi", age: 20, id: "c1223", brithdate: 2006}
] 

    console.log("properties and values");

for(const student of students){
    console.log("-----")
    for(const key in student){
        console.log(key +":"+student[key])
    }
}




