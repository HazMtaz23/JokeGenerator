const jokes = [
    { setup: "Why don’t scientists trust atoms?", punchline: "Because they make up everything!" },
    { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
    { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
    { setup: "I would tell you a construction joke,", punchline: "but I’m still working on it." },
    { setup: "Why don’t skeletons fight each other?", punchline: "They don’t have the guts." },
    { setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese." },
    { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
    { setup: "What do you get when you cross a snowman and a vampire?", punchline: "Frostbite." },
    { setup: "Why was the math book sad?", punchline: "Because it had too many problems." },
    { setup: "How do you organize a space party?", punchline: "You planet." },
    { setup: "What do you call a fake noodle?", punchline: "An impasta." }
  ];
  
  const jokeBtn = document.getElementById('jokeBtn');
  const revealBtn = document.getElementById('revealBtn');
  const setupDiv = document.getElementById('setup');
  const punchlineDiv = document.getElementById('punchline');
  
  let currentJokeIndex = -1;
  
  function getRandomJokeIndex() {
    let index;
    do {
      index = Math.floor(Math.random() * jokes.length);
    } while (index === currentJokeIndex); // avoid repeating the same joke twice in a row
    return index;
  }
  
  jokeBtn.addEventListener('click', () => {
    currentJokeIndex = getRandomJokeIndex();
    const joke = jokes[currentJokeIndex];
    
    // Show setup, hide punchline
    setupDiv.textContent = joke.setup;
    punchlineDiv.style.display = 'none';
    punchlineDiv.textContent = '';
    
    revealBtn.style.display = 'inline-block';
  });
  
  revealBtn.addEventListener('click', () => {
    const joke = jokes[currentJokeIndex];
    if (punchlineDiv.style.display === 'none') {
      punchlineDiv.textContent = joke.punchline;
      punchlineDiv.style.display = 'block';
    } else {
      punchlineDiv.style.display = 'none';
    }
  });
  