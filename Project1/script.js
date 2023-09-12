// console.log("Helo world")



// const count =  () =>{
//     let date = Date.now();
//     let ms = date.getMilliseconds();
// }
// let currentUTCtimeMilliseconds = setInterval(count, 100)
// // console.log(currentUTCtimeMilliseconds)

// let displayCurrentUTCTime = document.getElementById("currentUTCTime")
// displayCurrentUTCTime.innerHTML = currentUTCtimeMilliseconds
// // console.log(currentUTCtime)

// let timeMillseconds = setInterval(function(){

//     let mDate = Date.now().toFixed(9)
    

// }, 100)

// const displayCurrentUTCTime = document.querySelector("#currentUTCTime")
// displayCurrentUTCTime.innerText= timeMillseconds


const weekDay = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
const currentDay = document.querySelector('#currentDayOfTheWeek');
const currentUtcTime = document.querySelector('#currentUTCTime');
        
            function getDay() {
                const now = new Date();
                const day = weekDay[now.getDay()];
                currentDay.textContent = `${day}`
            }
        

            function getTime() {
                const now = new Date();
                const time = now.getTime()
                currentUtcTime.textContent = time
            }

            getDay();            
           window.setInterval(getTime, 100);



