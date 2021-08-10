
const colombia = [];

const colombia_people = ['Carlos','Ferney','Andrés','Clodomiro','Rick','Morty']
const colombia_salaries = [8000,1500,2800,1200,5200,4500]

for(i=0;i<colombia_people.length;i++){
    colombia.push(new person(colombia_people[i],colombia_salaries[i]))
}

// This is a constructure function, It's like a template to create objects more fast and easy
// automatic

function person (name,salary) {
    this.name = name;
    this.salary = salary;
}

function Median(colombia_salaries){
    colombia_salaries.sort(function(a,b){return a-b})
    const long = colombia_salaries.length
    if (long % 2 == 0) {
        return (colombia_salaries[parseInt(long/2)]+colombia_salaries[parseInt(long/2) + 1])/2
    } 
    else {
        return colombia_salaries[parseInt(long/2)]
    }
}