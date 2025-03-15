// KGP Bucket List Dares
const dares = [
    // 🏛️ Campus Shenanigans
    "Walk into a completely random department's class, sit for 5 minutes, and leave",
    "Take a selfie with a professor without any context",
    "Shout 'KGP ka tempo high hai' in Nalanda and run away",
    "Cycle around Scholar's Avenue backwards (facing the wrong way)",
    "Go to the gymkhana and challenge a stranger to an arm-wrestling match",
    "Pretend to be a fresher for a full day and see if anyone notices",
    "Put up a fake but believable notice on a hostel/campus board",
    "Walk into a mess you don't belong to, serve yourself food, and eat confidently",
    "High-five a security guard and say, 'Thank you for your service'",
    "Take a full round of the campus only using a cycle rickshaw",

    // 🍛 Food & Mess Dares
    "Order the weirdest food combination at Cheddis and eat it",
    "Drink 5 cups of tea back-to-back at Tech Market chai stalls",
    "Walk into Tikka Mess and loudly declare, 'Best food in the world!'",
    "Eat an entire plate of Eggies Maggi in under 2 minutes",
    "Swap your food plate with a stranger's and say, 'Let's try something new'",
    "Ask the mess worker, 'Bhaiya, aaj aloo kahan hai?' (Even if aloo is there)",
    "Try every single roll at Billoo's before you graduate",
    "Carry a fork and knife to eat in the mess",
    "Ask a canteen worker, 'Bhaiya, aaj complimentary dessert kahan hai?'",
    "Get one of everything from Dreamland and try it all in one sitting",

    // 🌙 Late-Night Madness
    "Walk alone in Scholars' Avenue at 3 AM for no reason",
    "Cycle around campus at top speed with no destination",
    "Find a spot on campus where no one is around and scream something random",
    "Sit on the roof of your hostel and watch the sunrise",
    "Crash a random group's night-out plan and make new friends",
    "Do a slow-motion run across Scholar's Avenue while someone records you",
    "Sit under a streetlight and have a fake deep conversation with a tree",
    "Play hide-and-seek inside Nalanda at night",
    "Run from one end of Tech Market to your hostel in under 5 minutes",
    "Take a cycle rickshaw and ask the driver to play your favorite song",

    // 🎭 Fest & Tradition Dares
    "Sneak into an event you have nothing to do with during Spring Fest",
    "Try to convince an SF performer that you're their biggest fan",
    "Get on stage during an event and dance for 10 seconds before running off",
    "Crash a random department's Illumination practice and pretend to belong",
    "Wear your convocation gown to a normal class and act normal",
    "Try to take a VIP seat at an Inter-IIT event (and see if you get caught)",
    "Get an autograph from a random Kshitij speaker (even if you don't know them)",
    "Collect as many free SF/Kshitij T-shirts as possible before leaving",
    "Pretend to be an official Spring Fest organizer for a day",
    "Take a completely random object and try to get it signed by SF performers",

    // 📚 Study-Related Dares
    "Walk into Nalanda, open a book, and pretend to study for 5 minutes before leaving dramatically",
    "Answer a question in class with 100% confidence, even if it's wrong",
    "Write an assignment in Comic Sans and submit it",
    "Stand up in a lecture and say, 'Sir, this topic is too easy. Can we move on?'",
    "Get 20 people to sign your notebook like a yearbook",
    "Wear sunglasses in class and refuse to take them off",
    "Leave an exam hall 5 minutes after it starts, looking completely calm",
    "Go to your department office and say, 'I want a PhD application form'",
    "Find a way to get inside the professor's podium in a lecture hall",
    "Read a book upside down in the library for 10 minutes and see if anyone notices",

    // 🎓 Graduation-Themed Dares
    "Walk up to a random junior and say, 'Back in my day, things were different…'",
    "Get a professor to say, 'Best of luck for your future' and record it",
    "Find an empty classroom and give yourself a fake farewell speech",
    "Ride a cycle around campus wearing your convocation gown",
    "Do a final hostel room photoshoot before you leave",
    "Write your name and batch year somewhere in the hostel (secretly)",
    "Convince a professor to take a funny selfie with you",
    "Try to get a security guard to smile for a selfie",
    "Make a fake '10 years later' video predicting what your batchmates will be doing",
    "Shout 'IIT KGP, I LOVE YOU!' at the main gate before you leave",

    // 😂 Just KGP Things
    "Ask someone for their cycle and ride away for 5 minutes before returning it",
    "Find the worst pothole in KGP and mark it with a 'caution' sign",
    "Place a random funny notice on a hostel/campus board",
    "Wear a completely absurd outfit to class one day",
    "Borrow a LAN cable and never return it",
    "Get lost in Nalanda on purpose",
    "Create a fake rumor about a 'secret KGP tradition' and spread it",
    "Try to fit the entire wing inside one cycle rickshaw",
    "Do a 'trust fall' experiment with random batchmates",
    "Make a fake but official-looking event poster and put it up",

    // 🏕️ Beyond Campus
    "Hitchhike to Kharagpur station just for the adventure",
    "Take a road trip to Mandarmani beach before graduating",
    "Explore an abandoned building in KGP",
    "Ride a bicycle from campus to Kolaghat (if you dare)",
    "Leave a secret message for future students in a hidden spot",
    "Visit the furthest chai shop from your hostel on foot",
    "Take a trip to Kolkata with only ₹500 and survive a whole day",
    "Get an auto driver to play your favorite song on the ride",
    "Have a meal at a random local's house (be polite, obviously)",
    "Send a postcard to your future self from the post office",

    // 💙 Bonus: No-Regrets List
    "Apologize to someone you wronged in KGP",
    "Confess your feelings to your crush before it's too late",
    "Dance like crazy at your farewell party",
    "Help a fresher with something you once struggled with",
    "Leave behind something symbolic in your hostel room",
    "Shout 'KGP ka tempo high hai' one last time",
    "Make a batch-wide inside joke go viral",
    "Make a ridiculous graduation promise you know you won't keep",
    "Recreate your first-ever photo in KGP"
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