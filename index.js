const playMusic = function (music) {
    return "Playing some " + music;
  };
  playMusic("Jazz"); // "Playing some Jazz"
  const playMusic = (music) => {
    return "Playing some " + music;
  };
  playMusic("Jazz"); // "Playing some Jazz"
  const playMusic = (music) => {
    "Playing some " + music;
  };
  playMusic("Jazz"); // undefined
  const playMusic = (music) => "Playing some " + music;
  playMusic("Jazz"); // "Playing some Jazz"
  const playMusic = music => "Playing some " + music;
  playMusic("Jazz"); // "Playing some Jazz"
  const readBooks = (book1, book2) => {
    return `I read '${book1}' and '${book2}'`;
  };
  readBooks("The Old Man and the Sea", "1984"); // "I read 'The Old Man and the Sea' and '1984'"
  const readBooks = (book1, book2) => `I read '${book1}' and '${book2}'`;
  readBooks("The Old Man and the Sea", "1984"); // "I read 'The Old Man and the Sea' and '1984'"
  const readBooks = book1, book2 =>  `I read '${book1}' and '${book2}'` // Syntax Error