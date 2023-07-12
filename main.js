const btn = document.querySelector("#btn");
const textContainer = document.querySelector("p");

let jokes = [
  "Feeling pretty proud of myself. The Sesame Street puzzle I bought said 3-5 years, but I finished it in 18 months.",
  "What did the calculator say to the student? You can count on me.",
  "Why didn't the number 4 get into the nightclub? Because he is 2 square.",
  "What is a tornado's favorite game to play? Twister!",
  "What do you call a group of killer whales playing instruments? An Orca-stra.",
  "Why did the melons plan a big wedding? Because they cantaloupe!",
  "Did you hear about the kidnapping at school? It's ok, he woke up.",
  "Want to hear a chimney joke? Got stacks of em! First one's on the house",
  "What did the beaver say to the tree? It's been nice gnawing you",
  'Someone asked me to name two structures that hold water. I said "Well dam"',
  "I tried to write a chemistry joke, but could never get a reaction.",
  "Why don’t seagulls fly over the bay? Because then they’d be bay-gulls!",
];



const displayJokes = () =>{
    let randomNumber = Math.floor(Math.random() * jokes.length);
    textContainer.innerText = jokes[randomNumber];
    console.log(textContainer)
    console.log(randomNumber)
}

btn.addEventListener('click',  displayJokes);

