import { Module } from "../core/module";
import { random } from "../utils";

export class AudioModule extends Module {
  #filters = [
    "lowpass",
    "bandpass",
    "peaking",
    "lowshelf",
    "highshelf",
    "allpass",
  ];

  #randomFloat(min, max) {
    let qValue = Math.random() * (max - min) + min;
    console.log(`qValue: `, qValue);
    return qValue;
  }

  // Функция для генерации звука
  generateSound(filters) {
    // Выбор случайного основного фильтра
    const filter = this.#getRandomFilter(filters, random);

    // Создание аудио контекста
    const audioCtx = new AudioContext();

    const oscillator = audioCtx.createOscillator();
    const source = audioCtx.createBufferSource();
    const delay = audioCtx.createDelay();
    const gainNode = audioCtx.createGain();
    const filterNode = audioCtx.createBiquadFilter();

    // Настройка фильтров
    oscillator.frequency.value = random(40, 17800);
    delay.delayTime.setValueAtTime(
      this.#randomFloat(0.01, 1),
      audioCtx.currentTime
    );
    filterNode.type = filter;
    filterNode.frequency.value = random(40, 17800);
    filterNode.Q.value = this.#randomFloat(0.1, 19.9);

    // Установка громкости
    gainNode.gain.value = 0.4;

    oscillator.connect(filterNode);
    source.connect(delay);
    source.connect(gainNode);
    delay.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    filterNode.connect(gainNode);

    // Запуск генерации звука
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3); // Остановка через 0.35 секунд
  }

  #getRandomFilter(filters, methodForRandom) {
    const filter = filters[methodForRandom(0, filters.length - 1)];
    return filter;
  }

  // Функция для воспроизведения звука
  trigger() {
    this.generateSound(this.#filters);
  }
}
