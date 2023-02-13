const array = [
  {
    name: "Abyssinian",
    weight: "6-10 pounds",
    colors: ["red", "blue", "fawn"],
    lifespan: "9-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Abyssinian_body_7.jpg?itok=Xleasaxh",
    funFact:
      "Some call Abys “Cats from the Blue Nile”, believing they are the sacred cat of Egyptian Pharaohs.",
  },
  {
    name: "American Bobtail",
    weight: "7-16 pounds",
    colors: ["white", "black", "blue"],
    lifespan: "13-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanBobtail_body_6.jpg?itok=974XSSws",
    funFact:
      "No tail is exactly the same, but the average length is 1 to 4 inches.",
  },
  {
    name: "American Curl",
    weight: "5-10 pounds",
    colors: ["white", "black", "blue"],
    lifespan: "13+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanCurlSHA_body_6.jpg?itok=wYcMRtpa",
    funFact:
      "American Curl kittens are born with straight ears that begin to curl backward after three to five days.",
  },
  {
    name: "American Shorthair",
    weight: "5-10 pounds",
    colors: ["white", "black", "blue"],
    lifespan: "13+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanShorthair_body_6.jpg?itok=xarDHKyX",
    funFact:
      "American Curl kittens are born with straight ears that begin to curl backward after three to five days.",
  },
  {
    name: "American Wirehair",
    weight: "8-12 pounds",
    colors: ["white", "black", "blue"],
    lifespan: "7-12 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanWirehair_body_6.jpg?itok=ZP9wYuPb",
    funFact:
      "The gene behind the wired coat and whiskers of the American Wirehair resulted from a spontaneous natural mutation.",
  },
  {
    name: "Balinese-Javanese",
    weight: "8-16 pounds",
    colors: ["blue", "lilac", "cream"],
    lifespan: "15+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Javanese_body_6.jpg?itok=8RYn4oT9",
    funFact:
      "Graceful dancers from the island of Bali inspired the name for this breed, which is also known for its elegant, graceful form.",
  },
  {
    name: "Bengal",
    weight: "6-18 pounds",
    colors: ["orange", "light brown", "brown"],
    lifespan: "12-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Bengal_body_6.jpg?itok=wPleMAcc",
    funFact:
      "Bengals are the only domestic cat with rosettes that resemble the markings on leopards, jaguars and ocelots.",
  },
  {
    name: "Bengal",
    weight: "6-18 pounds",
    colors: ["orange", "light brown", "brown"],
    lifespan: "12-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Bengal_body_6.jpg?itok=wPleMAcc",
    funFact:
      "Bengals are the only domestic cat with rosettes that resemble the markings on leopards, jaguars and ocelots.",
  },
  {
    name: "Birman",
    weight: "6-15 pounds",
    colors: ["blue", "chocolate", "lilac"],
    lifespan: "15+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Birman_body_6.jpg?itok=j8Gae9SN",
    funFact:
      "A cat of mystery and legend, the Birman was the sacred cat of Burma, believed to be the companions of the priests of the temple.",
  },
  {
    name: "Bombay",
    weight: "6-11 pounds",
    colors: ["black"],
    lifespan: "12-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Bombay_body_6.jpg?itok=82CXfifj",
    funFact:
      "Many Bombays are entirely black, including their paw pads, which is not a common trait in other black cats.",
  },
  {
    name: "British Shorthair",
    weight: "9-18 pounds",
    colors: ["blue", "white", "black"],
    lifespan: "12-17 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/BritishShorthair_body_6.jpg?itok=3EB_YGC3",
    funFact:
      "British Shorthairs were the only pedigreed cats exhibited at some of the earliest cat shows.",
  },
  {
    name: "Burmese",
    weight: "6-12 pounds",
    colors: ["sable", "champagne", "blue"],
    lifespan: "10-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Burmese_body_6.jpg?itok=F_gH69Ud",
    funFact:
      "The Burmese cat resulted from a cross of the Siamese with the “copper cat” of Burma (present-day Myanmar).",
  },
  {
    name: "Chartreux",
    weight: "6-15 pounds",
    colors: ["blue", "ash", "slate"],
    lifespan: "8-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Chartruese_body_6.jpg?itok=XzfOlYKR",
    funFact:
      "According to legend, Carthusian monks bred Chartreux at the Grande Chartreuse Monastery in southeast France.",
  },
  {
    name: "Cornish Rex",
    weight: "5-9 pounds",
    colors: ["white", "black", "blue"],
    lifespan: "9-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/CornishRex_body_7.jpg?itok=7re__RVj",
    funFact:
      "They are considered very talkative cats, since they make many sounds to communicate and attract attention.",
  },
  {
    name: "Devon Rex",
    weight: "5-10 pounds",
    colors: ["white", "black", "blue"],
    lifespan: "9-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/DevonRex_body_7.jpg?itok=8B8kD_q5",
    funFact:
      "Social and entertaining, Devon Rex cats are terrific therapy pets.",
  },
  {
    name: "Egyptian Mau",
    weight: "6-14 pounds",
    colors: ["silver", "bronze", "smoke"],
    lifespan: "12-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/EgyptianMau_body_7.jpg?itok=8vI7AjuG",
    funFact:
      "The Egyptian Mau is the only naturally spotted domestic cat, meaning the unique markings were not created through human manipulation.",
  },
  {
    name: "European Burmese",
    weight: "7-14 pounds",
    colors: ["brown", "blue", "chocolate"],
    lifespan: "9-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/EuropeanBurmese_body_7.jpg?itok=o6w8edWw",
    funFact:
      "According to legend, Burmese were temple cats and the pets of royalty long before the Siamese claimed the honor.",
  },
  {
    name: "Exotic Shorthair",
    weight: "7-14 pounds",
    colors: ["white", "black", "blue"],
    lifespan: "15+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Exotic_body_6.jpg?itok=dPkmmFtW",
    funFact:
      "Originally the Exotic Shorthair was named Sterling due to the breed’s beautiful silver coat. They later were named Exotic Shorthair because silver wasn’t a color previously found in American Shorthairs, making it exotic.",
  },
];
