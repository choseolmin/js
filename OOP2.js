class Song {
    constructor(title, artist,duration) {
      this.title = title;
      this.artist = artist;
      this.duration = duration;
    }

    play(){}

    pause(){}

    stop(){}
  
  }


  class Playlist {
    constructor() {
      this.songs = [];
    }

    addSong(){
      this.songs.push(song);

    }

    removeSong(){
      this.songs = this.songs.filter(song => song.title !== title);
    }

    Suffle(){
      this.songs.sort(() => Math.random() - 0.5);
    }
  }

  class MusicPlayer {
    constructor() {
      this.playlist = playlist;
    }

    startSong(){

    }

    stopSong(){

    }

    nextSong(){

    }

    previousSong(){

    }
  }

  class AdvancedMusicPlayer  extends MusicPlayer {
    constructor() {
      super(playlist);
      this.volume = 5;
    }

    volumUp(){
      this.volume++;

    }

    volumDown(){
      this.volume--;

    }
  }
