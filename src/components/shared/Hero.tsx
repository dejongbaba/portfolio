import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/shared/theme-toggle';
import SoundToggle from '@/components/shared/sound-toggle';


const Hero: React.FC = () => {
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState({ temp: '29', icon: '☀️' });

  useEffect(() => {
    // 1. Live Clock
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Lagos'
      });
      setTime(formatted);
    };

    updateClock();
    const clockInterval = setInterval(updateClock, 1000 * 30); // update every 30s

    // 2. Weather Fetch (Open-Meteo)
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true'
        );
        const data = await res.json();
        if (data?.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          const code = data.current_weather.weathercode;
          
          // Map WMO codes to emojis
          let icon = '☀️';
          if (code >= 1 && code <= 3) icon = '⛅';
          else if (code >= 45 && code <= 48) icon = '🌫️';
          else if (code >= 51 && code <= 67) icon = '🌧️';
          else if (code >= 71 && code <= 77) icon = '🌨️';
          else if (code >= 80 && code <= 82) icon = '🌦️';
          else if (code >= 95) icon = '⛈️';
          
          setWeather({ temp: temp.toString(), icon });
        }
      } catch (err) {
        console.error('Weather fetch failed:', err);
      }
    };

    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 1000 * 60 * 30); // every 30 mins

    return () => {
      clearInterval(clockInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  return (
    <section className="px-6 pb-10 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-6"
      >
        {/* Name row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h1
              className="font-bold tracking-tight"
              style={{ fontSize: '2rem', lineHeight: 1.15, color: 'var(--text-primary)', transition: 'color 0.35s ease' }}
            >
              Adedeji Agunbiade
            </h1>
            <p
              className="text-sm font-medium"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.35s ease' }}
            >
              Senior Software Engineer · Fullstack · Lagos, NG
            </p>
            <div
              className="flex items-center gap-2 text-xs font-medium mt-0.5"
              style={{ color: 'var(--text-muted)', transition: 'color 0.35s ease' }}
            >
              <span>🇳🇬 Lagos, NG</span>
              <span>·</span>
              <span>{weather.icon} {weather.temp}°C</span>
              <span>·</span>
              <span>{time ? `${time} WAT` : '...'}</span>
            </div>
          </div>

          {/* Theme toggle — top-right of hero */}
          <div className="pt-1 shrink-0 flex items-center gap-1.5">
            <SoundToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Bio */}
        <p
          className="leading-[1.7] text-base tracking-tight max-w-[680px]"
          style={{ color: 'var(--text-secondary)', transition: 'color 0.35s ease' }}
        >
          I build backend systems and ship full-stack products. 6+ years delivering scalable REST
          APIs, distributed architectures, and cloud-native services — then wiring them up with
          clean React frontends and pushing to production. Not just code that works, but code that
          holds up at scale.
        </p>

        {/* Logo wall */}
        <div className="mt-8">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
            style={{ color: 'var(--text-muted)', transition: 'color 0.35s ease' }}
          >
            Shipped products at
          </p>
          <div
            className="flex flex-wrap items-center gap-x-10 gap-y-5 transition-all duration-700"
            style={{ opacity: 0.22, filter: 'grayscale(1)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '1';
              (e.currentTarget as HTMLElement).style.filter = 'grayscale(0)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '0.22';
              (e.currentTarget as HTMLElement).style.filter = 'grayscale(1)';
            }}
          >
            <span className="font-bold text-[15px] tracking-widest uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-primary)' }}>Sendbox</span>
            <span className="font-bold text-[15px] tracking-widest uppercase" style={{ letterSpacing: '0.08em', color: 'var(--text-primary)' }}>Kobo360</span>
            <span className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>Revent</span>
            <span className="font-bold text-[15px] tracking-widest uppercase" style={{ letterSpacing: '0.08em', color: 'var(--text-primary)' }}>Tm30</span>
            <span className="font-semibold text-[16px]" style={{ color: 'var(--text-primary)' }}>Payfasta</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
