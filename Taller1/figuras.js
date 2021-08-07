function MedidasSquare(lado){
    console.group("Square");
    console.log(`The square's side is
    ${lado}cm
    `)
    console.log(`The area of the square is ${lado**2}cm^2`);
    console.log(`The perimeter of the square is ${lado*4}^2`);
    console.groupEnd();
}


function MedidasCircle(radio){
    console.group("Circle");
    console.log(`The circles's radio is
    ${radio}cm`)
    console.log(`The area of the circle is ${Math.PI*(radio**2)}cm^2`);
    console.log(`The perimeter of the circle is ${2*Math.PI*radio}^2`);
    console.groupEnd();
}

function MedidasTriangle(base,lado2,lado3,altura){
    console.group("Triangle");
    console.log(`The triangle's sides are
    ${base}cm
    ${lado2}cm
    ${lado3}cm`)
    console.log(`The area of the triangle is ${(base*altura)/2}cm^2`);
    console.log(`The perimeter of the triangle is ${base+lado2+lado3}^2`);
    console.groupEnd();
}


MedidasSquare(8);
MedidasCircle(4);
MedidasTriangle(4,5,6,7);


// ----------------------------------------------------------------------
// Formulas for each figure (only the formulas)
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Formulas for square
// ----------------------------------------------------------------------

function FormulaSquareArea(side){
    return side**2
}

function FormulaSquarePerimeter(side){
    return side*4
}

// ----------------------------------------------------------------------
// Formulas for triangle
// ----------------------------------------------------------------------

function FormulaTriangleArea(base,height){
    return (base*height)/2
}

function FormulaTrianglePerimeter(base,side2,side3){
    return Number(base)+Number(side2)+Number(side3)
}

// ----------------------------------------------------------------------
// Formulas for circle
// ----------------------------------------------------------------------

function FormulaCircleArea(radius){
    return Math.PI*(radius**2)
}

function FormulaCirclePerimeter(radius){
    return 2*Math.PI*radius
}





// ----------------------------------------------------------------------
// Now, a function that does no the math work but the functional work
// for each figure, getting the results from the functions of perimeter 
// and area and setting them in the right place
// ----------------------------------------------------------------------


function CalculateSquare() {
    const input = document.getElementById("SquareSide");
    const result1 = document.getElementById("resultSquarePerimeter");
    const result2 = document.getElementById("resultSquareArea");

    const value = input.value;
    const perimeter =FormulaSquarePerimeter(value);
    const area = FormulaSquareArea(value);
    result1.innerHTML = `${perimeter}`;
    result2.innerHTML = `${area}`;
}



function CalculateTriangle() {
    const input1 = document.getElementById("TriangleBase");
    const input2 = document.getElementById("TriangleSide2");
    const input3 = document.getElementById("TriangleSide3");
    const input4 = document.getElementById("TriangleHeight");
    const result1 = document.getElementById("resultTrianglePerimeter");
    const result2 = document.getElementById("resultTriangleArea");

    const base = input1.value;
    const side2 = input2.value;
    const side3 = input3.value;
    const height = input4.value;

    const perimeter =FormulaTrianglePerimeter(base,side2,side3);
    const area = FormulaTriangleArea(base,height);
    result1.innerHTML = `${perimeter}`;
    result2.innerHTML = `${area}`;
}


function CalculateCircle() {
    const input = document.getElementById("CircleRadius");
    const result1 = document.getElementById("resultCirclePerimeter");
    const result2 = document.getElementById("resultCircleArea");

    const value = input.value;
    const perimeter =FormulaCirclePerimeter(value);
    const area = FormulaCircleArea(value);
    result1.innerHTML = `${Math.round(perimeter)}`;
    result2.innerHTML = `${Math.round(area)}`;
}