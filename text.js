// nested callbacks 

satTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');  
        }, 1000);
    }, 1000);
}, 1000);

btn.addEventListener('click', () =>{

});
const timer = setTimeout(() => {
    console.log("Hello");
}, 5000);

clearTimeout(timer);

// let interval = setInterval(()=> {
//     console.log("Hello");
// }, 1000);

// setTimeout(()=> {
//     clearInterval(interval); 
// }, 5000);

// let count = 0;
// let interval = setInterval(() => {
//     count++;

//     document.getElementById("count").textContent = count;

//     if(count === 10) {
//         clearInterval(interval);
//     }
// }, 1000);

// Promises
let p = new Promise((resolve, rejecct ) => {
    let a = 1 + 1
    if (a == 2) { 
        resolve('success')
    } else {
        rejecct('failed')
    }
});


p.then((message) => {
    console.log('This is in the then ' + message); 
}).catch((message) => {
    console.log('This is the catch ' + message);
});

const userLeft = false
const userWatchingCatMeme = true

function watchTutorialPromise() {
    return new Promise ((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'userLeft',
                message: ':('
            })
        }else if (userWatchingCatMeme) {
            reject({
                name: 'user Watching Cat Meme',
                message: 'webDev < Cat'
            }) 
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
    
});


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo, 
    recordVideoThree
]).then((messages) => {
    console.log(messages); 
});

const user = {
    name: "Jonn",
    age: 25,
    address: {
        city: "Lagos",
        country: "Nigeria"
    }
};

function displayUser(user){
    console.log(user.name);
    console.log(user.address.city);
};

// destructuring

function displayUser({
    name,
    age,
    address: {
        city,
        country
    }
}) {
    console.log(name);
    console.log(city);
}

displayUser(user); 

async function getData(){
    const response = await fetch("");
    const data = await response.json();
    console.log(data);
}

getData();


function sayHello() {
    console.log("Helllo");
}

function sayBye()  {
    console.log("Goodbye");  
}

function executefunction(fn) {
    fn();
}
executefunction(sayHello);
