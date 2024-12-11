export default function playCurrentCardSound(number: number) {
  const audio = document.querySelector(`.sound-${number}`) as HTMLAudioElement;
  audio.play();
}
