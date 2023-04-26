p5.disableFriendlyErrors = true;


//~ Adapte l'écran à la page
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  viewportDisplayWidth = windowWidth
  viewportDisplayHeight = windowHeight
}


//~ Preload 
function preload() {

  //? Font
  pixelFont = loadFont("assets/fonts/pixelFont.ttf")
  classicFont = loadFont("assets/fonts/classicFont.ttf")

  //? Interfaces
  GUIParameters = loadImage("assets/GUI/popUpSettings.png"); //GUIParameters
  GUIForEscape = loadImage("assets/GUI/PauseGUI.png");
  GUIOfDeath = loadImage("assets/GUI/popUpDie.png"); 


  GameHeart = loadImage("assets/GUI/heart.png");
  GameHeartBlack = loadImage("assets/GUI/heartBlack.png");
  
  arrowTroc = loadImage("assets/GUI/arrowTroc.png");
  GUITroc = loadImage("assets/GUI/GUIForTroc.png");


  GUIStart = loadImage("assets/GUI/GUIStart.png")
  talkBackground = loadImage("assets/GUI/talkBackground.png");

  longButton = loadImage("assets/GUI/longButton.png");
  longButtonHover = loadImage("assets/GUI/longButtonHover.png");
  popUpButton = loadImage("assets/GUI/popUpButton.png");
  popUpButtonHover = loadImage("assets/GUI/popUpButtonHover.png");
  checkedLongButtonHover = loadImage("assets/GUI/checkedLongButtonHover.png");
  checkedLongButton = loadImage("assets/GUI/checkedLongbutton.png");

  //? Background
  backgroundImage = loadImage('assets/Background/bg_forest.png');
  backgroundImageDistant = loadImage('assets/Background/bg_forest_distant.png');
  backgroundImageClose = loadImage('assets/Background/bg_forest_close.png');


  //? Animation PNJ
  marjoTexture = loadImage("assets/entities/marjoSprite.png");
  charleTexture = loadImage("assets/entities/charleSprite.png");
  malade1Sprite = loadImage("assets/entities/malade1.png");
  malade2Sprite = loadImage("assets/entities/spritesheetgraveyard.png");


  //? Tileset
  tilesetItems = loadImage("assets/items/TileSetItems.png");
  tileSetTaverne = loadImage("assets/textures/Engine2.png");


  //? Textures
  tileSet = loadImage("assets/textures/TilesetKelna.png");
  backgroundImageTroc = loadImage("assets/textures/planches.png");
  slot = loadImage("assets/textures/slot.png");
  backgroundImageTalk = loadImage("assets/textures/popUp.png"); //backgroundImageTalk
  pointEnnemis = loadImage("assets/textures/pointEnnemis.png");


  //? Personnage
  characterTextures = loadImage("assets/entities/spritesheetYvo.png")
  


  //? JSON preload
  adminJSON = loadJSON("json/Admin.json");
  allDoors = loadJSON("json/Doors.json");
  ennemiesJSON = loadJSON("json/Ennemis.json");
  Houses = loadJSON("json/Houses.json");
  itemsJSON = loadJSON("json/Items.json");
  Maps = loadJSON("json/Maps.json");
  pnjJSON = loadJSON("json/PNJ.json");
  World = loadJSON("json/World.json");
  creditsJSON = loadJSON("json/Credits.json");
  
  init_pnjJSON = pnjJSON

  //? Cinématiques
  gameIntroductionVideo = createVideo("assets/cinematic/StartCinematic.mp4");


  //? Music
  SongBackground = loadSound("assets/audios/music/SongBackground.mp3")


  //? Songs
  VoiceStartSong = [loadSound("assets/audios/voices/START/start1.m4a"), loadSound("assets/audios/voices/START/start2.m4a")]
  VoicesDieSong = [loadSound("assets/audios/voices/END/end1.m4a"), loadSound("assets/audios/voices/END/end2.m4a")]
}


//~ Setup 
function setup() {
  initVariables()

  //? Viewport
  if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
    viewportDisplayWidth = windowWidth
    viewportDisplayHeight = windowHeight
  }

  //? Canvas
  createCanvas(viewportDisplayWidth, viewportDisplayHeight);

  frameRate(fpsLevel);

  //? Cinématiques
  gameIntroductionVideo.hide();
}


//~ Draw 
function draw() {

  noSmooth()

  //* Effet de tremblement de la caméra
  if (shakeDuration > 0 && cameraShakeEnabled) {
    translate(random(-shakeForce, shakeForce), random(-shakeForce, shakeForce));
    shakeDuration--;
  }
  
  if (startCinematicPlaying) {
    playStartCinematic()
  }else{
    //? Si le jeu joue
    if (gameIsPlaying) {
  
      //~ Si le jeu n'est pas en pause
      if (!gameIsPaused){
        if (engineOne) {
          statistiques.timeSpentInGame = Math.floor(millis() / 1000)
          statistiques.playerSpeed = getSpeed(statistiques.timeSpentInGame, statistiques.distanceWalked)
  
  
          //? Afficher le fond du jeu
          drawBackgroundImage(backgroundImage, backgroundImageDistant, backgroundImageClose)
          
          

          //? Afficher la map
          drawGrid()

          //? Afficher les entités
          doorsManager()
          itemsManager()
          PNJManager()
          MobManager()
          
          

          //? Afficher le joueur (le perso passe devant les entités)
          character()
          
          //? Afficher l'avant plan de la map
          drawGridForeground()
    
        }else{
          drawHouse(behindThisDoorHouse)
          doorsManager()
          PNJManager()
          characterView2()
          drawHouseForeground(behindThisDoorHouse)
        }
      }
    }
    setupUI()
  }

}