// variable 
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");
const body = document.querySelector("#body");
const welcome = document.getElementById("welcome");
const text = document.getElementById("text");
const form = document.getElementById("login-page");
const str = document.querySelector(".btn_sc");
const d = new Date();
const person = document.getElementById("username").value;
const str_r = document.querySelector("#str");
const time = d.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'});
;
//  = document.getElementById(username);
// let name;


//console.log(now);
// speechRecognitition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// speech active
recognition.continuous = true;

// speech start function
recognition.onstart = function () {
    console.log("voice active");
}

// result
recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;


    console.log(transcript);
    transcript = transcript.toLowerCase();
    console.log(`Me  : ${transcript}`);
    // if(transcript.includes("activate now") || transcript.includes("wake up, daddy's home."))


    //     readOut("activation processing start");
    //     const myTimeout = setTimeout(myGreeting, 700);

    //     function myGreeting() {
    //         startBtn.style.borderRadius = "50%";
    //         body.style.backgroundColor = "black";
    //         body.style.backgroundImage = "url(bb723dab868fa44510e4882f15a0f63c.gif)";

    //         readOut("please wait");
    //         clearTimeout(myTimeout);
    //     }
    //     const myTimeout1 = setTimeout(myGreeting1, 5000);

    //     function myGreeting1() {
    //         body.style.backgroundColor = "black";
    //         body.style.backgroundImage = "url(5da04f8387ab1bea3f9f11296902c6d2.gif)";
    //         welcome.style.display = "block";
    //         readOut("welcome sir, i am on");
    //         readOut("its "+time);
    //         clearTimeout(myTimeout1);
    //     }
    //     const myTimeout2 = setTimeout(myGreeting2, 7000);

    //     function myGreeting2() {
    //         welcome.style.display = "none";
    //         clearTimeout(myTimeout2);
    //     }

    if (transcript.includes("hello mitali")) {
        text.innerHTML = "Hello, Mr.girish How are you ?";
        readOut("Hello, Mr.girish How are you ?");
    }
    if (transcript.includes("i am fine")) {
        text.innerHTML = "";
        text.innerHTML = "Good";

        readOut("Good");
    }
    if (transcript.includes("how are you") || transcript.includes("and how are you meetali")) {
        text.innerHTML = "";
        text.innerHTML = "i am also fine, thank you Girish sir";
        readOut("i am fine, thank you Girish sir");
    }
    if (transcript.includes("open youtube") || transcript.includes("hey meetali open youtube")) {
        window.open("https://www.youtube.com");
        text.innerHTML = "";
        text.innerHTML = "ok boss, opening youtube, Here you can watch any video and enjoy";
        readOut("sure boss, opening youtube, Here you can watch any video and enjoy");
    }
    if (transcript.includes("i am your admin what is my birth date") || transcript.includes("i'm your admin what is my birth date") || transcript.includes("i'm admin your what is my birthday")) {
        text.innerHTML = "";
        text.innerHTML = "27th September 2004";
        readOut("27th September 2004");
    }
    if (transcript.includes("thank you")) {
        text.innerHTML = "";
        text.innerHTML = "welcome sir";
        readOut("welcome sir");
    }
    if (transcript.includes("open google") || transcript.includes("hey meetali open google")) {
        window.open("https://www.google.com");
        text.innerHTML = "";
        text.innerHTML = "opening google sir";
        readOut("opening google sir");
    }
    if (transcript.includes("search for")) {
        text.innerHTML = "";
        text.innerHTML = "here's the result";
        readOut("here's the result");
        let input = transcript.split("");
        input.splice(0, 11);
        input = input.join("").split(" ").join("+");
        open("https://www.google.com/search?q=" + input);
        console.log(input);
    }
    if (transcript.includes("play")) {
        text.innerHTML = "";
        text.innerHTML = "here's the result";
        readOut("here's the result");
        let input = transcript.split("");
        input.splice(0, 5);
        input = input.join("").split(" ").join("+");
        open("https://www.youtube.com/results?search_query=" + input);
        console.log(input);
    }
    if (transcript.includes("open facebook") || transcript.includes("hey meetali open facebook") || transcript.includes("open fb")) {
        window.open("https://www.facebook.com");
        text.innerHTML = "";
        text.innerHTML = "yes boss, opening facebook, this is social networking site";
        readOut("yes boss, opening facebook, this is social networking site");
    }
    if (transcript.includes("open whatsapp") || transcript.includes("hey jarvis open whatsapp")) {
        window.open("https://www.whatsapp.com");
        text.innerHTML = "";
        text.innerHTML = "opening whatsapp sir";
        readOut("yes boss, opening whatsapp");
    }
    if (transcript.includes("open instagram") || transcript.includes("hey meetali open instagram") || transcript.includes("hey meetali open insta")) {
        window.open("https://www.instagram.com");
        text.innerHTML = "";
        text.innerHTML = "opening instagram boss";
        readOut("yes boss, opening instagram");
    }
    if (transcript.includes("open prompt")) {
        text.innerHTML = "";
        text.innerHTML = "ok sir";
        readOut("ok sir");
        var x = window.prompt();
        document.write(x);
    }

};

// voice deactivate

recognition.onend = function () {
    console.log("voice deactive");
}

// voice start
str_r.addEventListener('click', () => {

    recognition.start();

});

// voice stop button
//  stopBtn.addEventListener('click', ()=> {

//     recognition.stop();
// });


// jarvis 

function readOut(message) {
    console.log(`Jarvis : ${message}`);
    const allVoices = speechSynthesis.getVoices();
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.voice = allVoices[1];
    speech.volume = 8;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}


// speakBtn.addEventListener('click', ()=>{
//     readOut(`Hi Mr.Girish , welcome to this new world ${time}`);

// });
// 
//onload...fun()

window.onload = function () {
    readOut(" ");

}


function myFunction_g() {
    

        readOut(" Hi i am jaisa, the artificial inteligence made by gm ");
    
    const myTimeout = setTimeout(myGreeting, 700);

    function myGreeting() {
        startBtn.style.borderRadius = "50%";
        form.style.display = "none";
        body.style.backgroundColor = "black";
        body.style.backgroundImage = "url(bb723dab868fa44510e4882f15a0f63c.gif)";
        readOut("please wait");
        clearTimeout(myTimeout);
//        person = prompt("Please enter your name", "heloo");
    }
    const myTimeout1 = setTimeout(myGreeting1, 7000);

    function myGreeting1() {
        body.style.backgroundColor = "black";
        body.style.backgroundImage = "url(wp2.gif)";
        welcome.style.display = "block";
        body.style.backgroundSize = "cover";
        str.style.display = "block";

        readOut("system is onnline");

        const a = "12:00 PM";
        const b = "6:00 PM";
        const c = "9:00 PM";
        let v;
        if (time > a) {
            readOut("good afternoon sir");
            v = "good afternoon sir";
        } else if (time > b && time < c) {
            readOut("good evning sir");
            v = "good evning sir";
        } else {
            mo = readOut("good morning sir");
            v = "good morning sir";
        }

        readOut("its " + time);



        text.innerHTML = v + " I'ts " + time;
        clearTimeout(myTimeout1);
    }
    const myTimeout2 = setTimeout(myGreeting2, 7000);

    function myGreeting2() {
        welcome.style.display = "none";
        console.log(name);

        readOut("i am jarvis your virtual advance artificial intelligence,how can help you " + person);
        clearTimeout(myTimeout2);

    }


}


// time function
