document.addEventListener('DOMContentLoaded', () => {
    const stopButton = document.getElementById('stopButton');
    const nextButton = document.getElementById('nextButton');
    const title = document.getElementById('title');
    const message = document.getElementById('message');

    const messages = [
        { title: "", message: "" },
        { title: "", message: "I Wish All Your Hopes, Become True." },
        { title: "", message: "May God Make Your Life Better" },
        { title: "", message: "Your Finance, Your Career, Your Planning, And Your Relationship" },
        { title: "I WISH!", message: "You Found A Better Person." },
        { title: "I THOUGHT IT WAS ME", message: "" },
        { title: "BUT", message: "" },
        { title: "MAYBE I EXPECTED TOO MUCH", message: "" },
        { title: "", message: "Im Not Regret Anything About Our Meeting" },
        { title: "", message: "For Me, Our Meeting Is One Of The Best Accidental Im Grateful For, Cuz There Are So Many Lesson I Can Take From It" },
        { title: "", message: "One Thing My Regret Is, I Met You With Worst Version Of Me" },
        { title: "AND", message: "" },
        { title: "SORRY", message: "If I Put My Feeling Too Much On You" },
        { title: "Nahhhh", message: "That's Doesn't Matter Anyway" },
        { title: "", message: "You Deserve Better And The Best" },
        { title: "", message: "Wish You All The Best Pokoknyaaaaaaaaaa" },
    ];

    let currentIndex = 0;

    stopButton.addEventListener('touchstart', () => {
        if (!stopButton.classList.contains('active')) {
            stopButton.classList.add('moving');
            moveButtonRandomly(stopButton);
        }
    });

    stopButton.addEventListener('mouseover', () => {
        if (!stopButton.classList.contains('active')) {
            stopButton.classList.add('moving');
            moveButtonRandomly(stopButton);
        }
    });

    stopButton.addEventListener('click', () => {
        if (stopButton.classList.contains('active')) {
            alert('Kamu berhasil menghentikanku!');
            stopButton.classList.remove('moving');
        }
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= messages.length) {
            showErrorMessage();
        } else {
            title.textContent = messages[currentIndex].title;
            message.textContent = messages[currentIndex].message;
        }
    });

    createHearts();
});

function moveButtonRandomly(button) {
    const x = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function showErrorMessage() {
    const body = document.body;
    body.style.backgroundColor = '#000';
    body.style.color = '#f00';
    body.style.textAlign = 'center';
    body.innerHTML = `
        <h1></h1>
        <p>(If You Have Somethin To Say To Me)</p>
        <audio id="errorSound" src="lagu.mp3" controls></audio>
        <a href="https://wa.me/62895321393844" style="color: #f00; text-decoration: underline; display: block; margin-top: 20px;">!!!KLICK HERE!!!</a>
    `;

    const errorSound = document.getElementById('errorSound');

    // Periksa apakah audio dapat diputar
    errorSound.addEventListener('canplaythrough', () => {
        console.log('Audio can play through');
    });

    errorSound.addEventListener('play', () => {
        console.log('Audio is playing');
    });

    errorSound.addEventListener('ended', () => {
        body.innerHTML = `
            <h1></h1>
            <p>(If You Have Somethin To Say To Me)</p>
            <a href="https://wa.me/62895321393844" style="color: #f00; text-decoration: underline; display: block; margin-top: 20px;">!!!KLICK HERE!!!</a>
        `;
    });

    // Memastikan kontrol ditampilkan agar pengguna dapat memutar audio secara manual jika autoplay diblokir
    errorSound.controls = true;
}

function createHearts() {
    const background = document.querySelector('.background');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        background.appendChild(heart);
    }
}   
