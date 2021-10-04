// Area function


 let area_circle = function (r) {
    let a = 3.14*r*r ;
    console.log('Area of the circle is ' + a )
};


 let area_rectangle = function (length, breadth) {
    let a = length * breadth;
    console.log('Area of the rectangle is ' + a + ' square unit');
};


 let area_cylinder = function (r, h) {
    let a = (2*3.14*r*h)+(2*3.14*r*r);
    console.log('Area of the cylinder is ' + a );
};

export {
    area_circle,
    area_rectangle,
    area_cylinder
}


