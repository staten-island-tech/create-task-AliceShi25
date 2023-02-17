const kitty = [
  {
    name: "Abyssinian",
    weight: "6-10 pounds",
    lifespan: "9-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Abyssinian_body_7.jpg?itok=Xleasaxh",
    funFact:
      "Some call Abys “Cats from the Blue Nile”, believing they are the sacred cat of Egyptian Pharaohs.",
  },
  {
    name: "American Bobtail",
    weight: "7-16 pounds",
    lifespan: "13-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanBobtail_body_6.jpg?itok=974XSSws",
    funFact:
      "No tail is exactly the same, but the average length is 1 to 4 inches.",
  },
  {
    name: "American Curl",
    weight: "5-10 pounds",
    lifespan: "13+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanCurlSHA_body_6.jpg?itok=wYcMRtpa",
    funFact:
      "American Curl kittens are born with straight ears that begin to curl backward after three to five days.",
  },
  {
    name: "American Shorthair",
    weight: "5-10 pounds",
    lifespan: "13+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanShorthair_body_6.jpg?itok=xarDHKyX",
    funFact:
      "American Curl kittens are born with straight ears that begin to curl backward after three to five days.",
  },
  {
    name: "American Wirehair",
    weight: "8-12 pounds",
    lifespan: "7-12 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanWirehair_body_6.jpg?itok=ZP9wYuPb",
    funFact:
      "The gene behind the wired coat and whiskers of the American Wirehair resulted from a spontaneous natural mutation.",
  },
  {
    name: "Balinese-Javanese",
    weight: "8-16 pounds",
    lifespan: "15+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Javanese_body_6.jpg?itok=8RYn4oT9",
    funFact:
      "Graceful dancers from the island of Bali inspired the name for this breed, which is also known for its elegant, graceful form.",
  },
  {
    name: "Bengal",
    weight: "6-18 pounds",
    lifespan: "12-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Bengal_body_6.jpg?itok=wPleMAcc",
    funFact:
      "Bengals are the only domestic cat with rosettes that resemble the markings on leopards, jaguars and ocelots.",
  },
  {
    name: "Birman",
    weight: "6-15 pounds",
    lifespan: "15+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Birman_body_6.jpg?itok=j8Gae9SN",
    funFact:
      "A cat of mystery and legend, the Birman was the sacred cat of Burma, believed to be the companions of the priests of the temple.",
  },
  {
    name: "Bombay",
    weight: "6-11 pounds",
    lifespan: "12-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Bombay_body_6.jpg?itok=82CXfifj",
    funFact:
      "Many Bombays are entirely black, including their paw pads, which is not a common trait in other black cats.",
  },
  {
    name: "British Shorthair",
    weight: "9-18 pounds",
    lifespan: "12-17 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/BritishShorthair_body_6.jpg?itok=3EB_YGC3",
    funFact:
      "British Shorthairs were the only pedigreed cats exhibited at some of the earliest cat shows.",
  },
  {
    name: "Burmese",
    weight: "6-12 pounds",
    lifespan: "10-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Burmese_body_6.jpg?itok=F_gH69Ud",
    funFact:
      "The Burmese cat resulted from a cross of the Siamese with the “copper cat” of Burma (present-day Myanmar).",
  },
  {
    name: "Chartreux",
    weight: "6-15 pounds",
    lifespan: "8-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Chartruese_body_6.jpg?itok=XzfOlYKR",
    funFact:
      "According to legend, Carthusian monks bred Chartreux at the Grande Chartreuse Monastery in southeast France.",
  },
  {
    name: "Cornish Rex",
    weight: "5-9 pounds",
    lifespan: "9-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/CornishRex_body_7.jpg?itok=7re__RVj",
    funFact:
      "They are considered very talkative cats, since they make many sounds to communicate and attract attention.",
  },
  {
    name: "Devon Rex",
    weight: "5-10 pounds",
    lifespan: "9-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/DevonRex_body_7.jpg?itok=8B8kD_q5",
    funFact:
      "Social and entertaining, Devon Rex cats are terrific therapy pets.",
  },
  {
    name: "Egyptian Mau",
    weight: "6-14 pounds",
    lifespan: "12-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/EgyptianMau_body_7.jpg?itok=8vI7AjuG",
    funFact:
      "The Egyptian Mau is the only naturally spotted domestic cat, meaning the unique markings were not created through human manipulation.",
  },
  {
    name: "European Burmese",
    weight: "7-14 pounds",
    lifespan: "9-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/EuropeanBurmese_body_7.jpg?itok=o6w8edWw",
    funFact:
      "According to legend, Burmese were temple cats and the pets of royalty long before the Siamese claimed the honor.",
  },
  {
    name: "Exotic Shorthair",
    weight: "7-14 pounds",
    lifespan: "15+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Exotic_body_6.jpg?itok=dPkmmFtW",
    funFact:
      "Originally the Exotic Shorthair was named Sterling due to the breed’s beautiful silver coat. They later were named Exotic Shorthair because silver wasn’t a color previously found in American Shorthairs, making it exotic.",
  },
  {
    name: "Havana Brown",
    weight: "6-10 pounds",
    lifespan: "8-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/HavanaBrown_body_6.jpg?itok=EHX285P_",
    funFact:
      "The Havana Brown was named for the similarity of their lovely burnished, mahogany-toned, glossy coat to the brown color of Havana cigars.",
  },
  {
    name: "Himalayan",
    weight: "7-14 pounds",
    lifespan: "9-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Himilayan_body_6.jpg?itok=c9k_RopN",
    funFact: "Himmies are the most popular pedigreed cat.",
  },
  {
    name: "Japanese Bobtail",
    weight: "7-10 pounds",
    lifespan: "9-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/JapaneseBobtailSHOddEyed_body_6.jpg?itok=17hjJqIN",
    funFact:
      "The maneki-neko ('beckoning cat' or 'inviting cat'), an image of a Japanese Bobtail seated with one paw raised, is considered a good-luck charm",
  },
  {
    name: "Korat",
    weight: "6-10 pounds",
    lifespan: "15+ years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Korat_body_6.jpg?itok=9kbMXETu",
    funFact:
      "Discovered in the Korat province of Thailand, the Korat has been cherished in their native Thailand for centuries as a symbol of good fortune.",
  },
  {
    name: "LaPerm",
    weight: "5-10 pounds",
    lifespan: "10-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/LaPerm_body_6.jpg?itok=9A-tx_K-",
    funFact:
      "The LaPerm coat ranges from wavy to ringlets to long corkscrew curls. Those with longhair have curly plumed tails and a full, curly ruff, and those with shorthair have more texture, no ruff and a bottle-brush type tail.",
  },
  {
    name: "Maine Coon",
    weight: "9-15 pounds",
    lifespan: "10-13 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/MaineCoon_body_7.jpg?itok=ZUDtmIsc",
    funFact: "The Maine Coon is not a cross between a cat and a raccoon.",
  },
  {
    name: "Manx",
    weight: "7-13 pounds",
    lifespan: "8-14 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/ManxSH_body_6.jpg?itok=pckG_ls2",
    funFact: "The Manx is the only cat bred to be tail-free.",
  },
  {
    name: "Munchkin",
    weight: "5-9 pounds",
    lifespan: "12-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Munchkin.jpg?itok=p5PAtYpE",
    funFact:
      "Munchkins like to hoard small, shiny objects and hide them away for later.",
  },
  {
    name: "Norweigan Forest",
    weight: "8-16 pounds",
    lifespan: "14-16 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/NorwegianForestCat_body_6.jpg?itok=RYEZJf7V",
    funFact:
      "The breed appears in a Norwegian fairy tale, which states the Norse goddess Freya’s chariot was pulled by these six giant cats.",
  },
  {
    name: "Ocicat",
    weight: "7-15 pounds",
    lifespan: "15-18 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Ocitcat_body_6.jpg?itok=g92qjUKM",
    funFact:
      "The Ocicat was created by accident in 1964 by a breeder trying to produce a Siamese type cat with the ticked point pattern of the Abyssinian.",
  },
  {
    name: "Oriental",
    weight: "7-10 pounds",
    lifespan: "8-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/OrientalSH_body_6.jpg?itok=JQ6kO_fa",
    funFact:
      "The Oriental Longhair actually has a medium-length coat and is considered rare.",
  },
  {
    name: "Persian",
    weight: "7-10 pounds",
    lifespan: "15-20 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/PersianSolid_body_6.jpg?itok=N5mSCMHh",
    funFact:
      "There was a push in the U.S. to make the Silver Persian its own breed called “Sterling”. This was rejected, however, and silver and goldens are considered within the Persian category at cat shows.",
  },
  {
    name: "Peterbald",
    weight: "6-10 pounds",
    lifespan: "12-15 years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Peterbald_body_6.jpg?itok=mov1ViYf",
    funFact:
      "Kittens usually are born with hair, but lose the coat as they mature, which can take up to two years.",
  },
  {
    name: "Pixiebob",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/PixieBob_body_6.jpg?itok=uT78XE22",
    funFact: "",
  },
  {
    name: "Ragamuffin",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/RagaMuffin_body_7.jpg?itok=H0WRLvC3",
    funFact: "",
  },
  {
    name: "Ragdoll",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Ragdoll_240x240%20%281%29.jpg?itok=Gkl4BB4i",
    funFact: "",
  },
  {
    name: "Russian Blue",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/RussianBlue_body_7.jpg?itok=M22dbAGd",
    funFact: "",
  },
  {
    name: "Savannah",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Savannah_body_7.jpg?itok=X0XiOA0y",
    funFact: "",
  },
  {
    name: "Scottish Fold",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/SchottishFoldLH_body_7.jpg?itok=9D_VXtm9",
    funFact: "",
  },
  {
    name: "Selkirk Rex",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/SelkirkRex_body_7.jpg?itok=STbvVR6c",
    funFact: "",
  },
  {
    name: "Siamese",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Siamese_body_7.jpg?itok=WW-Xx-Fx",
    funFact: "",
  },
  {
    name: "Siberian",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Siberian_body_6.jpg?itok=h2_b_qR4",
    funFact: "",
  },
  {
    name: "Singapura",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Singapura_body_7.jpg?itok=3gAE8gtk",
    funFact: "",
  },
  {
    name: "Somali",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Somali_body_7.jpg?itok=K1p0KuJ4",
    funFact: "",
  },
  {
    name: "Sphynx",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Sphynx_body_7.jpg?itok=7D82tscd",
    funFact: "",
  },
  {
    name: "Tonkinese",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Tonkinese_body_7.jpg?itok=jM8CIygD",
    funFact: "",
  },
  {
    name: "Toyger",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Toyger_body_7.jpg?itok=v_9StF0z",
    funFact: "",
  },
  {
    name: "Turksih Angora",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/TurkishAngora_body_7.jpg?itok=Cx8X4qRH",
    funFact: "",
  },
  {
    name: "Turkish Van",
    weight: "pounds",
    lifespan: "years",
    image:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/TurkishVan_body_7.jpg?itok=-JsVJtnt",
    funFact: "",
  },
];

const cats = [
  "Abyssinian",
  "American Bobtail",
  "American Curl",
  "American Shorthair",
  "American Wirehair",
  "Balinese-Javanese",
  "Bengal",
  "Birman",
  "Bombay",
  "British Shorthair",
  "Burmese",
  "Chartreux",
  "Cornish Rex",
  "Devon Rex",
  "Egyptian Mau",
  "European Burmese",
  "Exotic Shorthair",
  "Havana Brown",
  "Himalayan",
  "Japanese Bobtail",
  "Korat",
  "LaPerm",
  "Maine Coon",
  "Manx",
  "Munchkin",
  "Norweigan Forest",
  "Ocicat",
  "Oriental",
  "Persian",
  "Peterbald",
  "Pixiebob",
  "Ragamuffin",
  "Ragdoll",
  "Russian Blue",
  "Savannah",
  "Scottish Fold",
  "Selkirk Rex",
  "Siamese",
  "Siberian",
  "Singapura",
  "Somali",
  "Sphynx",
  "Tonkinese",
  "Toyger",
  "Turksih Angora",
  "Turkish Van",
];

const DOMSelectors = {
  parent: document.getElementById("parent"),
  tab1: document.getElementById("tab1"),
  tab2: document.getElementById("tab2"),
  name: document.getElementById("Name"),
  cName: document.getElementById("cName"),
  form: document.getElementById("form"),
  calcB: document.getElementById("calculate"),
  CB: document.getElementById("CompBox"),
  // RB: document.querySelectorAll("resultBox"),
  byeimage: document.getElementById("byeimage"),
  option: document.getElementById("option"),
};

export { kitty };

export { DOMSelectors };

export { cats };
