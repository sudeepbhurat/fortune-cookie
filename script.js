// KGP Nostalgia Collection
const dares = [
    // 🏡 Hostel & Wing Memories
    "Sit in your wing's common area at 3 AM, doing nothing but talking about life",
    "Visit your first-year hostel room and leave a tiny note for future students",
    "Have one last Maggi party in the wing with all your friends",
    "Write a heartfelt message in your wing's common diary",
    "Take a final wing photo where it all started",
    "Pass down your 'legacy item' to a junior (that special kettle or LAN cable)",
    "Hug your wingmates awkwardly - you won't get many chances later",
    "Have a late-night corridor cricket match like old times",
    "Do one last LAN gaming session with your wing",
    "Leave a secret message behind your room's notice board",

    // 🍛 Food & Mess Nostalgia
    "Have a final meal at Tikka Mess and actually enjoy it this time",
    "Order your first-year favorite from Cheddis one last time",
    "Thank your mess workers with a cup of chai",
    "Have 2 AM Maggi at your favorite spot on campus",
    "Find your oldest food delivery receipt and order the same thing",
    "Do one final Tech Market chai round with your closest friends",
    "Try every item at Dreamland in one go with your friends",
    "Share a midnight snack at your wing's secret eating spot",
    "Have your last roll at Billoo's and make it extra special",
    "Buy chai for a random junior - pass on the tradition",

    // 🌙 Late-Night Memories
    "Take a final night walk through Scholars' Avenue with your best friend",
    "Sit on your hostel roof and watch one last KGP sunrise",
    "Have a deep life talk under the stars near Jnan Ghosh",
    "Do one last cycle ride around campus at 3 AM",
    "Recreate your craziest night-out memory (safely this time)",
    "Write a letter to your future self in Nalanda at midnight",
    "Have a final corridor gossip session till sunrise",
    "Watch the campus lights turn on from your favorite spot",
    "Take a rickshaw ride just to feel the night breeze",
    "Sing your hostel song in the wing one last time",

    // 🎭 Society & Club Memories
    "Visit your club room and leave a message for future members",
    "Wear all your event T-shirts at once for a photo",
    "Thank a senior who changed your KGP journey",
    "Have one last 'team meeting' that's just hanging out",
    "Write letters to your juniors with all your wisdom",
    "Create a new secret tradition for your club",
    "Take a photo at every spot where you made memories",
    "Record your society's signature chant or slogan",
    "Have a final practice session just for fun",
    "Leave your mark in your club's secret hideout",

    // 📚 Academic Nostalgia
    "Visit your first classroom and sit in your old seat",
    "Thank a professor who inspired you",
    "Find your oldest class notes and smile at them",
    "Take a final walk through your department",
    "Write a message in the library's last page",
    "Have one last study session in Nalanda",
    "Visit the lab where you spent countless hours",
    "Take a photo with your favorite department spot",
    "Leave an encouraging note for future students",
    "Say goodbye to the department office staff",

    // 🎓 Final Days
    "Write personal notes for all your close friends",
    "Create a time capsule with your wing",
    "Take photos at every special spot on campus",
    "Have a final heart-to-heart with your roommate",
    "Make a video message for your future self",
    "Thank everyone who made KGP special",
    "Create a playlist of songs that remind you of KGP",
    "Write down your favorite KGP memories",
    "Take a solo walk around campus just remembering everything",
    "Shout 'KGP ka tempo high hai' one last time at the main gate",

    // 💙 Pure KGP Things
    "Get one final LAN reset request (even if you don't need it)",
    "Visit Tech Market and thank your favorite vendors",
    "Take a picture with your go-to cycle rickshaw puller",
    "Find that one pothole you always complained about",
    "Visit every hostel you ever lived in",
    "Take a final walk through the entire academic complex",
    "Sit at your usual hangout spot and just take it all in",
    "Write 'Class of [your year]' somewhere secret",
    "Make one last inside joke with your batch",
    "Leave something behind for future KGPians to find",

    // 🌅 Last Goodbyes
    "Watch one final sunset from your favorite spot",
    "Take a solo morning walk when campus is quiet",
    "Write a thank you note to KGP itself",
    "Sit on the Main Building steps and reflect",
    "Visit every place that made you cry or laugh",
    "Take a photo at the exact spot where your KGP journey began",
    "Have one last chai at your thinking spot",
    "Write down promises to your KGP friends",
    "Create a map of your personal KGP landmarks",
    "Stand at the main gate and whisper 'Thank you for everything'",

    // 📽️ Farewell Video & Memory Collection
    "Record your morning walk from hostel to department with your favorite KGP song",
    "Film a timelapse of one final sunset from the Gymkhana ground",
    "Interview your wingmates about their funniest KGP memory with you",
    "Create a video montage of all your favorite KGP spots with your friends",
    "Record the sounds of KGP - from morning Azaan to night's cricket matches",
    "Make a 'Day in KGP Life' video showing your daily routine one last time",
    "Film your friends sharing their most embarrassing first-year stories",
    "Capture a slow-motion walk through Scholars' Avenue with your batch",
    "Record the chaos and laughter of your last midnight maggi party",
    "Make a thank-you video for your department, including all your favorite professors",
    "Film a 'Places That Made Me Cry in KGP' tour with funny commentary",
    "Create a hostel tour video showing all the secret spots and memories",
    "Record your last Tech Market visit, including all your favorite vendors",
    "Make a compilation of all your society/club performances over the years",
    "Film a 'Things I'll Miss About KGP' video at all your special places",
];

// Function to get a random dare
function getNewFortune() {
    const fortuneContainer = document.getElementById('fortuneContainer');
    const fortuneText = document.getElementById('fortune');
    
    // Hide the fortune container
    fortuneContainer.classList.remove('visible');
    
    // Wait for the fade out animation
    setTimeout(() => {
        // Get random dare
        const randomDare = dares[Math.floor(Math.random() * dares.length)];
        fortuneText.textContent = randomDare;
        
        // Show the fortune container
        fortuneContainer.classList.add('visible');
    }, 300);
}

// Initialize with hidden fortune container
window.onload = () => {
    const fortuneContainer = document.getElementById('fortuneContainer');
    fortuneContainer.classList.remove('visible');
}; 