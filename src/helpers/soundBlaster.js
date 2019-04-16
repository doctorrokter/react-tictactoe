class SoundBlaster {
  play(frequency, time = 100) {
    if (!this.context) {
      this._initAudioContext();
    }

    this.oscillator.frequency.value = frequency;
    this.gainNode.gain.value = 1;

    return new Promise((resolve, reject) => {
      let t = setTimeout(() => {
        clearTimeout(t);
        this.stop();
        resolve();
      }, time);
    });
  }

  stop() {
    this.gainNode.gain.value = 0;
  }

  _initAudioContext() {
    this.context = new AudioContext();

    this.oscillator = this.context.createOscillator();
    this.oscillator.type = 'triangle';
    this.oscillator.start(0);

    this.gainNode = this.context.createGain();
    this.gainNode.gain.value = 0;

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
  }
}

export default new SoundBlaster();