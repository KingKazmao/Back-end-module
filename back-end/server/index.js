const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           "Thats a nice keyboard you got there.",
           "You have your mothers eyes.",
           "From what im seeing in your files, you got great taste :)."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  addEventListener.button('click', button)
})
});
// ok so im a little iffy on the placement of the fortune app.get idk if it was uspposed to be in the same curly bracket or if i had it in the right place. Let me know!
app.get("/api/fortune", (req, res) => {
  const fortunes = [ "with great power comes great responsibility",
  "Sometimes it really do be like that, just accept it",
  "You werent put on this earth to just be sad and eat hot cheetoh, cmon be happyand eat hot cheetoh",
  "True friends stab in the front",
  "A fortune a day keeps bad energy away"
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomCompliment);
  addEventListener.button('click', button) // i tried adding a event listeninfer 
})
});

app.get("/api/quote", (req,res) => {
  const quote = [
    "i came here to kick butt and chew bubble gum",
    "you. are. a. toy!!!",
    "Luke, i am your father"
  ];
  let randomIndex = math.floor(Math.random() * quote.length); // this segment was defintely my weak point and i will most likely be studying over the weekend for this. 
  let randomQuote = quote[randomIndex];
  
  res.status(200).send(randomQuote);
  addEventListener.button('click', button)
}

app.listen(4000, () => console.log("Server running on 4000")); // i for the love of me cannot get these buttons to react. maybe give me a brutal roasting lol


    // it keeps telling me my .onclick is null. not sure whats going on but i feel like im doing this more than right. I guess my only issues is connecting using Node. 
    // i click the buttons and nothing happens *face palm* and im assuming its because im not properly connected to the server?
    // i also tried adding another page link but couldnt finish in time
// i added as much as i could as well, Blue text links( which i couldnt finish in time, i tried getting to take you to another page..), buttons (which i cannot get to work im gonna lose it man), check marks, fill in the blanks. a subbmit button
//let me know what i can do to improve. im sorry if this is a little janky. I also understand that i didnt have a tgtindex or anything to match what its referring to. i wasnt able to add all the fixes in time
// i mostly have get functions it seems
// 

