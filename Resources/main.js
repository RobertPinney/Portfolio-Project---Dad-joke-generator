const generator = (joke) => {
        let randomNum = Math.floor(Math.random() * joke.length)
        console.log(joke[randomNum]);
};

const dadJokes = ["What did the fish say when he swam into a concrete wall?...Dam", 
"Why did the security conscious engineer refuse to pay their dinner bill?...Because they could not verify the checksum.", 
"Why was the developer unhappy at their job?...They wanted arrays.", 
"What did the array say after it was extended?...Stop objectifying me.", 
"I'm afraid for the calendar. Its days are numbered.", 
"My wife said I should do lunges to stay in shape. That would be a big step forward.", 
"How do you follow Will Smith in the snow?...You follow the fresh prints.", 
"What did the ocean say to the beach?...Nothing, it just waved.", 
"I only know 25 letters of the alphabet. I don't know y.", 
"I asked my dog what's two minus two. He said nothing.", 
"I don't trust those trees. They seem kind of shady.", 
"Why don't eggs tell jokes? They'd crack each other up.", 
"I don't trust stairs. They're always up to something.", 
"This graveyard looks overcrowded. People must be dying to get in.", 
"What time did the man go to the dentist? Tooth hurt-y.", 
"I have a joke about chemistry, but I don't think it will get a reaction.", 
"Why did the math book look so sad? Because of all of its problems!", 
"I used to be addicted to soap, but I'm clean now.", 
"When two vegans get in an argument, is it still called a beef?", 
"I ordered a chicken and an egg from Amazon. I'll let you know..."];

generator(dadJokes);

