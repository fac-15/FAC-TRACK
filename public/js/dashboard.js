"use strict";


// 1. get all circles
const circles = Array.from(document.querySelectorAll('.progress-circle'));

// 2. same for all circles: radius and circumference 
const radius = circles[0].r.baseVal.value;
const circumference = radius * 2 * Math.PI;

// 3. same for all circles: dasharray and offset
circles.map(circle => circle.style.strokeDasharray = `${circumference} ${circumference}`);
circles.map(circle => circle.style.strokeDashoffset = `${circumference}`);


// 4. get all percentages from classes on svg elements
// - this is an array of integers
const icons = Array.from(document.querySelectorAll('.dashboard-icon'));
const percentages = icons.map(icon => parseInt(icon.classList[1].split('_')[1]));

// 5. animate each icon on load
window.addEventListener("load", e => {
    // loop over each percentage
    percentages.map((pc, index) => {
        // value can only be between 0 and 100
        if (pc < 101 && pc > -1) {
            const offset = circumference - pc / 100 * circumference;
            circles[index].style.strokeDashoffset = offset;
        }
    })
})