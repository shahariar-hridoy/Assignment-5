const date = new Date();
const formattedDate = date.toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });
document.getElementById('new-date').innerHTML = formattedDate;

document.getElementById('btn-1').addEventListener('click', function (event) {

    const remainTask = getInnerTextByID('remain-task');
    const completeTask = getInnerTextByID('complete-task');

    const afterClickRM = remainTask - 1;
    setInnerTextByIDAndValue('remain-task', afterClickRM);
    const afterClickCM = completeTask + 1;
    setInnerTextByIDAndValue('complete-task', afterClickCM);
    document.getElementById('btn-1').disabled = true;

    const activityContainer = document.getElementById('activity-container');
    const div = document.createElement('div');
    const title = document.getElementById('card-title-1').innerText;
    div.innerHTML = `
    <p class= "bg-slate-100 p-4 items-center rounded-md mt-4">You have completed the task ${title} at 12:48:15 PM</p>
    `;
    activityContainer.appendChild(div);

    alert("Board updated Successfully");
    if (remainTask === 1) {
        alert("hefh")
    }
})
document.getElementById('btn-2').addEventListener('click', function (event) {
    const remainTask = getInnerTextByID('remain-task');
    const completeTask = getInnerTextByID('complete-task');

    const afterClickRM = remainTask - 1;
    setInnerTextByIDAndValue('remain-task', afterClickRM);
    const afterClickCM = completeTask + 1;
    setInnerTextByIDAndValue('complete-task', afterClickCM);
    document.getElementById('btn-2').disabled = true;

    const activityContainer = document.getElementById('activity-container');
    const div = document.createElement('div');
    const title = document.getElementById('card-title-2').innerText;
    div.innerHTML = `
    <p class= "bg-slate-100 p-4 items-center rounded-md mt-4">You have completed the task ${title} at 12:48:15 PM</p>
    `;
    activityContainer.appendChild(div);

    alert("Board updated Successfully");
    if (remainTask === 1) {
        alert("hefh")
    }
})
document.getElementById('btn-3').addEventListener('click', function (event) {
    const remainTask = getInnerTextByID('remain-task');
    const completeTask = getInnerTextByID('complete-task');

    const afterClickRM = remainTask - 1;
    setInnerTextByIDAndValue('remain-task', afterClickRM);
    const afterClickCM = completeTask + 1;
    setInnerTextByIDAndValue('complete-task', afterClickCM);
    document.getElementById('btn-3').disabled = true;

    const activityContainer = document.getElementById('activity-container');
    const div = document.createElement('div');
    const title = document.getElementById('card-title-3').innerText;
    div.innerHTML = `
    <p class= "bg-slate-100 p-4 items-center rounded-md mt-4">You have completed the task ${title} at 12:48:15 PM</p>
    `;
    activityContainer.appendChild(div);

    alert("Board updated Successfully");
    if (remainTask === 1) {
        alert("hefh")
    }
})
document.getElementById('btn-4').addEventListener('click', function (event) {
    const remainTask = getInnerTextByID('remain-task');
    const completeTask = getInnerTextByID('complete-task');

    const afterClickRM = remainTask - 1;
    setInnerTextByIDAndValue('remain-task', afterClickRM);
    const afterClickCM = completeTask + 1;
    setInnerTextByIDAndValue('complete-task', afterClickCM);
    document.getElementById('btn-4').disabled = true;

    const activityContainer = document.getElementById('activity-container');
    const div = document.createElement('div');
    const title = document.getElementById('card-title-4').innerText;
    div.innerHTML = `
    <p class= "bg-slate-100 p-4 items-center rounded-md mt-4">You have completed the task ${title} at 12:48:15 PM</p>
    `;
    activityContainer.appendChild(div);

    alert("Board updated Successfully");
    if (remainTask === 1) {
        alert("hefh")
    }
})
document.getElementById('btn-5').addEventListener('click', function (event) {
    const remainTask = getInnerTextByID('remain-task');
    const completeTask = getInnerTextByID('complete-task');

    const afterClickRM = remainTask - 1;
    setInnerTextByIDAndValue('remain-task', afterClickRM);
    const afterClickCM = completeTask + 1;
    setInnerTextByIDAndValue('complete-task', afterClickCM);
    document.getElementById('btn-5').disabled = true;

    const activityContainer = document.getElementById('activity-container');
    const div = document.createElement('div');
    const title = document.getElementById('card-title-5').innerText;
    div.innerHTML = `
    <p class= "bg-slate-100 p-4 items-center rounded-md mt-4">You have completed the task ${title} at 12:48:15 PM</p>
    `;
    activityContainer.appendChild(div);

    alert("Board updated Successfully");
    if (remainTask === 1) {
        alert("hefh")
    }
})
document.getElementById('btn-6').addEventListener('click', function (event) {
    const remainTask = getInnerTextByID('remain-task');
    const completeTask = getInnerTextByID('complete-task');

    const afterClickRM = remainTask - 1;
    setInnerTextByIDAndValue('remain-task', afterClickRM);
    const afterClickCM = completeTask + 1;
    setInnerTextByIDAndValue('complete-task', afterClickCM);
    document.getElementById('btn-6').disabled = true;

    const activityContainer = document.getElementById('activity-container');
    const div = document.createElement('div');
    const title = document.getElementById('card-title-6').innerText;
    div.innerHTML = `
    <p class= "bg-slate-100 p-4 items-center rounded-md mt-4">You have completed the task ${title} at 12:48:15 PM</p>
    `;
    activityContainer.appendChild(div);
    alert("Board updated Successfully");
    if (remainTask === 1) {
        alert("hefh")
    }
})
const remainTask = getInnerTextByID('remain-task');
console.log(remainTask);

document.getElementById('btn-history-clear').addEventListener('click', function () {
    const activityContainer = document.getElementById('activity-container');
    activityContainer.innerText = ''
    activityContainer.appendChild(div);
})


// blog 

document.getElementById('blogs-enter').addEventListener('click', function () {
    window.location.href = 'main.html';
})


document.getElementById('btn-theme').addEventListener('click', function () {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)} )
    `

    document.getElementById('body').style.backgroundColor = randomColor;
})