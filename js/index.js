let count = 0;
// first card
document.getElementById('btn-triangle').addEventListener('click', function(){
    count = count + 1;
    const nameTriangle = document.getElementById('name-triangle').innerText
    const triangleBase = document.getElementById('triangle-base').value;
    const triangleHeight = document.getElementById('triangle-height').value;
    const areaTriangle = parseInt(0.5 * triangleBase * triangleHeight);    
    console.log(areaTriangle);
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
    console.log(areaParallelogram);

    displayData(nameParallelogram, areaParallelogram);
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
