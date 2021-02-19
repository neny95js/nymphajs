export class MusicPlayer {
  tracks = new Map<string, HTMLAudioElement>();

  addTrack(name: string, url: string) {
    const audio = new Audio();
    audio.loop = true;
    audio.src = '/assets' + url;

    this.tracks.set(name, audio);
  }

  playTrack(name: string) {
    for (const audio of this.tracks.values()) {
      audio.pause();
    }

    const track = this.tracks.get(name);
    if (track) {
      track.play();
    }

    return track;
  }

  stopTrack() {
    const track = [...this.tracks.values()].find((track) => !track.paused);
    if (track) {
      track.pause();
    }
  }
}
