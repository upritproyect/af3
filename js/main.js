
    const monophthongs = [
      { symbol: "i:", word: "see", word2: "Joel" },
      { symbol: "\u026a", word: "sit", word2: "Joel" },
      { symbol: "\u028a", word: "book", word2: "Joel" },
      { symbol: "u:", word: "shoe", word2: "Joel" },
      { symbol: "e", word: "pet", word2: "Joel" },
      { symbol: "\u0259", word: "the", word2: "Joel" },
      { symbol: "\u025c:", word: "turn", word2: "Joel" },
      { symbol: "\u0254:", word: "saw", word2: "Joel" },
      { symbol: "\u00e6", word: "flat", word2: "Joel" },
      { symbol: "\u028c", word: "but", word2: "Joel" },
      { symbol: "\u0251:", word: "card", word2: "Joel" },
      { symbol: "\u0252", word: "hot", word2: "Joel" }
    ];

    const diphthongs = [
      { symbol: "\u026a\u0259", word: "year", word2: "Joel" },
      { symbol: "e\u026a", word: "pray", word2: "Joel" },
      { symbol: "\u028a\u0259", word: "tour", word2: "Joel" },
      { symbol: "\u0254\u026a", word: "voice", word2: "Joel" },
      { symbol: "\u0259\u028a", word: "go", word2: "Joel" },
      { symbol: "e\u0259", word: "share", word2: "Joel" },
      { symbol: "a\u026a", word: "fly", word2: "Joel" },
      { symbol: "a\u028a", word: "out", word2: "Joel" }
    ];

    let currentAudio = null;

    function renderPhonemes(phonemes, containerId, offset = 0) {
      const container = document.getElementById(containerId);

      phonemes.forEach((item, index) => {
        const containerDiv = document.createElement("div");
        containerDiv.className = "button-container";

        const labelTop = document.createElement("div");
        labelTop.className = "label-top";
        labelTop.innerText = item.word2;

        const button = document.createElement("button");
        button.className = "phoneme-btn";
        button.innerText = item.symbol;
        button.addEventListener("click", () => {
          if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
          }
          const audio = new Audio(`audio/${offset + index + 1}.mp3`);
          currentAudio = audio;
          audio.play();
        });

        const label = document.createElement("div");
        label.className = "label";
        label.innerText = item.word;

        containerDiv.appendChild(labelTop);
        containerDiv.appendChild(button);
        containerDiv.appendChild(label);
        container.appendChild(containerDiv);
      });
    }

    renderPhonemes(monophthongs, "monophthongs", 0);
    renderPhonemes(diphthongs, "diphthongs", monophthongs.length);

    function addPhoneme(symbol, word, audioFileName, group = "monophthongs", word2 = "") {
      const container = document.getElementById(group);

      const containerDiv = document.createElement("div");
      containerDiv.className = "button-container";

      const labelTop = document.createElement("div");
      labelTop.className = "label-top";
      labelTop.innerText = word2;

      const button = document.createElement("button");
      button.className = "phoneme-btn";
      button.innerText = symbol;
      button.addEventListener("click", () => {
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        const audio = new Audio(`audio/${audioFileName}`);
        currentAudio = audio;
        audio.play();
      });

      const label = document.createElement("div");
      label.className = "label";
      label.innerText = word;

      containerDiv.appendChild(labelTop);
      containerDiv.appendChild(button);
      containerDiv.appendChild(label);
      container.appendChild(containerDiv);
    }