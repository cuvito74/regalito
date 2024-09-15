// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I know your eyes in the morning sun", time: 16 },
  { text: "I feel you touch me in the pouring rain", time: 20},
  { text: "And the moment that you wander far from me", time: 25},
  { text: "I wanna feel you in my arms again", time: 30},
  { text: "And you come to me on a summer breeze", time: 35},
  { text: "Keep me warm in your love, then you softly leave", time: 38},
  { text: "And it's me you need to show", time: 44},
  { text: "How deep is your love?", time: 46},
  { text: "How deep is your love?", time: 50 },
  { text: "I really mean to learn", time: 53 },
  { text: "'Cause we're living in a world of fools", time: 56 },
  { text: "Breaking us down ", time: 61 },
  { text: "When they all should let us be", time: 64 },
  { text: "We belong to you and me", time: 69 },
  { text: "I believe in you", time: 72 },
  { text: "You know the door to my very soul", time: 75 },
  { text: "You're the light in my deepest, darkest hour", time: 80 },
  { text: "You're my savior when I fall", time: 85 },
  { text: "And you may not think I care for you", time: 89 },
  { text: "When you know down inside that I really do", time: 94 },
  { text: "And it's me you need to show", time: 98 },
  { text: "How deep is your love?", time: 101 },
  { text: "How deep is your love?", time: 104 },
  { text: "I really mean to learn", time: 106 },
  { text: "'Cause we're living in a world of fools", time: 111 },
  { text: "Breaking us down", time: 116 },
  { text: "When they all should let us be", time: 118 },
  { text: "We belong to you and me.", time: 123 },
  { text: "How deep is your love Maite?", time: 126 },
  { text: "I love you", time: 128 },
  { text: "At a turtle's steps", time: 132 },
  { text: "to infinity", time: 136 },
  { text: "...", time: 140 },


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.04; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

