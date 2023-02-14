// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the full form of GST?",
    a: [{ text: "Goods and Services Tax", isCorrect: true },
        { text: "Goods and Sales Tax", isCorrect: false },
        { text: "God and Serve Tax", isCorrect: false },
        { text: "None of these", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What kind of tax is GST?",
    a: [{ text: "Value Added Tax", isCorrect: false, isSelected: false },
        { text: "Indirect Tax", isCorrect: true },
        { text: "Direct Tax", isCorrect: false },
        { text: "Income Tax", isCorrect: false }
    ]

},
{
    id: 2,
    q: "In which year GST implemented in India?",
    a: [{ text: "2019", isCorrect: false },
        { text: "2018", isCorrect: false },
        { text: "2017", isCorrect: true },
        { text: "2016", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Which was the first state in India to pass the GST bill?",
    a: [{ text: "Assam", isCorrect: true },
        { text: "Delhi", isCorrect: false },
        { text: "Gujarat", isCorrect: false },
        { text: "Mizoram", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What duties are taxes on intra-State supplies?",
    a: [{ text: "CGST", isCorrect: false},
        { text: "SGST", isCorrect: false },
        { text: "CGST and SGST", isCorrect: true },
        { text: "IGST", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Which of the below import duties would be imposed?",
    a: [{ text: "CGST", isCorrect: false},
        { text: "SGST", isCorrect: false },
        { text: "CGST and SGST", isCorrect: false },
        { text: "IGST", isCorrect: true }
    ]

},
{
    id: 6,
    q: "Which one of the below will not be added to supply value?",
    a: [{ text: "GST", isCorrect: true},
        { text: "Interest", isCorrect: false },
        { text: "Late Fee", isCorrect: false },
        { text: "Commission", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Registration under GST is not compulsory to____",
    a: [{ text: "Casual Taxable person", isCorrect: false},
        { text: "Input service distributor", isCorrect: false },
        { text: "Non-resident taxable person", isCorrect: false },
        { text: "None of the above", isCorrect: true }
    ]

},
{
    id: 8,
    q: "GST is a ____ based tax on consumption of goods and services.",
    a: [{ text: "destination", isCorrect: true},
        { text: "duration", isCorrect: false },
        { text: "destiny", isCorrect: false },
        { text: "development", isCorrect: false }
    ]

},
{
    id: 9,
    q: "Taxes paid on",
    a: [{ text: "transaction value", isCorrect: true},
        { text: "manufacturing cost", isCorrect: false },
        { text: "Both a & b", isCorrect: false },
        { text: "neither a nor b", isCorrect: false }
    ]

},
{
    id: 10,
    q: "What does “I” stand for in IGST?",
    a: [{ text: "Internal", isCorrect: false},
        { text: "Intra", isCorrect: false },
        { text: "International", isCorrect: false },
        { text: "Integrated", isCorrect: true }
    ]

},

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
}

})
