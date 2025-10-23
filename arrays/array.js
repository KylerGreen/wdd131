const steps = ["one", "two", "three"];
function listTemplate(step){
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');


const grades = ['A', 'B', 'A'];
function convertToPoints(grade){
    let points = 0;
    if (grade === 'A'){
        points = 4;
    }
    else if (grade === 'B'){
        points = 3;
    }
    return points;
}


const points = grades.map(convertToPoints);
const newPoints = points.map(listTemplate);
document.querySelector("#myList").innerHTML += newPoints.join('');


const gpa = points.reduce((total, item) => total + item) / points.length;


const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});


const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);