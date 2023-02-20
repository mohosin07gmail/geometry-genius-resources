let count = 0;
// first card
document.getElementById('btn-triangle').addEventListener('click', function(){
    count = count + 1;
    const nameTriangle = document.getElementById('name-triangle').innerText
    const triangleBase = document.getElementById('triangle-base').value;
    const triangleHeight = document.getElementById('triangle-height').value;
    const areaTriangle = parseInt(0.5 * triangleBase * triangleHeight);    
    
    displayData(nameTriangle, areaTriangle)       
});

// second card
document.getElementById('btn-rectangle').addEventListener('click', function(){
    count = count + 1;
    const nameRectangle = document.getElementById('name-rectangle').innerText;
    const rectangleWidth = document.getElementById('rectangle-width').value;
    const rectangleLength = document.getElementById('rectangle-length').value;
    const areaRectangle = parseInt(rectangleWidth * rectangleLength);
    console.log(areaRectangle);

    displayData(nameRectangle, areaRectangle);
})

// parallelogram card
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    count = count +1;
    const nameParallelogram = document.getElementById('name-parallelogram').innerText;
    const parallelogramBase = document.getElementById('parallelogram-base').value;
    const parallelogramHeight = document.getElementById('parallelogram-height').value;
    const areaParallelogram = parseInt(parallelogramBase * parallelogramHeight);
    
    displayData(nameParallelogram, areaParallelogram);
})

// rhombus card
document.getElementById('btn-rhombus').addEventListener('click', function(){
    count = count + 1;
    const nameRhombus = document.getElementById('name-rhombus').innerText;
    const rhombusd1 = document.getElementById('rhombus-d1').value;
    const rhombusd2 = document.getElementById('rhombus-d2').value;
    const areaRhombus = 0.5 * rhombusd1 * rhombusd2;

    displayData(nameRhombus, areaRhombus);
})

// pentagon card
document.getElementById('btn-pentagon').addEventListener('click', function(){
    count = count + 1;
    const namePentagon = document.getElementById('name-pentagon').innerText;
    const pentagonP = document.getElementById('pentagon-p').value;
    const pentagonB = document.getElementById('pentagon-b').value;
    const areaPentagon = parseInt(0.5 * pentagonP * pentagonB);
    console.log(namePentagon);

    displayData(namePentagon, areaPentagon);
});

// ellipse card
document.getElementById('btn-ellipse').addEventListener('click', function(){
    count = count + 1;
    const nameEllipse = document.getElementById('name-ellipse').innerText;
    const ellipseA = document.getElementById('ellipse-a').value;
    const ellipseB = document.getElementById('ellipse-b').value;
    const areaEllipse = parseInt( 3.14 * ellipseA * ellipseB);
    console.log(areaEllipse);

    displayData(nameEllipse, areaEllipse);
})


function displayData(nameTriangle, areaTriangle){
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${nameTriangle}</td>
    <td>${areaTriangle}</td>
    <td><button class="btn">convert</button></td>
    `;
    container.appendChild(tr);    
};
