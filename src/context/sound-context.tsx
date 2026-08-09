import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

type ThemeDirection = 'dark' | 'light';

interface SoundContextValue {
  isSoundOn: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextValue>({
  isSoundOn: false,
  toggleSound: () => {},
});

const makeNoiseBuffer = (ctx: AudioContext) => {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.45;
  }

  return buffer;
};

const playPanTone = (
  ctx: AudioContext,
  destination: AudioNode,
  frequency: number,
  startAt: number,
  volume = 0.11,
  duration = 1.1,
) => {
  const main = ctx.createOscillator();
  const shimmer = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  main.type = 'sine';
  shimmer.type = 'triangle';
  main.frequency.setValueAtTime(frequency, startAt);
  shimmer.frequency.setValueAtTime(frequency * 2.01, startAt);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(2200, startAt);
  filter.Q.setValueAtTime(0.8, startAt);

  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

  main.connect(filter);
  shimmer.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  main.start(startAt);
  shimmer.start(startAt);
  main.stop(startAt + duration + 0.05);
  shimmer.stop(startAt + duration + 0.05);
};

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const oceanRef = useRef<AudioBufferSourceNode | null>(null);
  const loopRef = useRef<number | null>(null);

  const getAudio = useCallback(async () => {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!ctxRef.current) {
      const ctx = new AudioCtor();
      const master = ctx.createGain();
      master.gain.value = 0.28;
      master.connect(ctx.destination);
      ctxRef.current = ctx;
      masterRef.current = master;
    }

    if (ctxRef.current.state === 'suspended') {
      await ctxRef.current.resume();
    }

    if (!masterRef.current) {
      throw new Error('Audio master node was not initialized');
    }

    return { ctx: ctxRef.current, master: masterRef.current };
  }, []);

  const scheduleIslandLoop = useCallback((ctx: AudioContext, master: GainNode) => {
    const chords = [
      [523.25, 659.25, 783.99],
      [493.88, 622.25, 739.99],
      [440, 554.37, 659.25],
      [392, 493.88, 587.33],
    ];
    let chordIndex = 0;

    const schedule = () => {
      const start = ctx.currentTime + 0.08;
      const chord = chords[chordIndex % chords.length];
      chord.forEach((frequency, index) => {
        playPanTone(ctx, master, frequency, start + index * 0.34, 0.075, 1.45);
      });
      playPanTone(ctx, master, chord[1] * 1.5, start + 1.36, 0.04, 1.3);
      chordIndex += 1;
    };

    schedule();
    loopRef.current = window.setInterval(schedule, 2800);
  }, []);

  const startSound = useCallback(async () => {
    const { ctx, master } = await getAudio();
    const oceanGain = ctx.createGain();
    const oceanFilter = ctx.createBiquadFilter();
    const ocean = ctx.createBufferSource();

    ocean.buffer = makeNoiseBuffer(ctx);
    ocean.loop = true;
    oceanFilter.type = 'lowpass';
    oceanFilter.frequency.value = 560;
    oceanGain.gain.value = 0.035;
    ocean.connect(oceanFilter);
    oceanFilter.connect(oceanGain);
    oceanGain.connect(master);
    ocean.start();
    oceanRef.current = ocean;

    scheduleIslandLoop(ctx, master);
    setIsSoundOn(true);
  }, [getAudio, scheduleIslandLoop]);

  const stopSound = useCallback(() => {
    if (loopRef.current) {
      window.clearInterval(loopRef.current);
      loopRef.current = null;
    }

    oceanRef.current?.stop();
    oceanRef.current = null;
    setIsSoundOn(false);
  }, []);

  const toggleSound = useCallback(() => {
    if (isSoundOn) {
      stopSound();
      return;
    }

    void startSound();
  }, [isSoundOn, startSound, stopSound]);

  useEffect(() => {
    const playThemeCue = (event: Event) => {
      if (!isSoundOn || !ctxRef.current || !masterRef.current) return;

      const detail = (event as CustomEvent<{ to: ThemeDirection }>).detail;
      const start = ctxRef.current.currentTime + 0.02;
      const frequencies = detail?.to === 'dark' ? [698.46, 587.33, 440] : [440, 587.33, 698.46];

      frequencies.forEach((frequency, index) => {
        playPanTone(ctxRef.current!, masterRef.current!, frequency, start + index * 0.085, 0.065, 0.65);
      });
    };

    window.addEventListener('portfolio-theme-transition', playThemeCue);
    return () => window.removeEventListener('portfolio-theme-transition', playThemeCue);
  }, [isSoundOn]);

  useEffect(() => stopSound, [stopSound]);

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
