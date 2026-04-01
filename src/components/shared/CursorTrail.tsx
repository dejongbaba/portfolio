import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;   // 1 → 0
  size: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const lastPos = useRef({ x: -1, y: -1 });
  const rafRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      if (lastPos.current.x === -1) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        return;
      }

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed < 2) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        return;
      }

      const angle = Math.atan2(dy, dx);
      const count = Math.min(Math.ceil(speed * 0.35), 6);

      for (let i = 0; i < count; i++) {
        const spread = (Math.random() - 0.5) * 0.9;
        const vel = (Math.random() * 0.7 + 0.3) * Math.min(speed * 0.07, 2.2);

        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 3,
          y: e.clientY + (Math.random() - 0.5) * 3,
          vx: Math.cos(angle + spread) * vel,
          vy: Math.sin(angle + spread) * vel,
          life: 1,
          size: Math.random() * 2.2 + 1.4,
        });
      }

      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = document.documentElement.classList.contains('dark');
      const headColor = dark ? '#00DB6D' : '#00AA55';
      const tailColorStart = dark ? 'rgba(0,219,109,' : 'rgba(0,160,80,';

      particles.current = particles.current.filter(p => p.life > 0.02);

      for (const p of particles.current) {
        // Physics
        p.life -= 0.028;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.93;
        p.vy *= 0.93;
        p.vy += 0.045; // gentle gravity

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const angle = Math.atan2(p.vy, p.vx);
        const headR = p.size * p.life;
        const tailLen = headR * (2.5 + speed * 4);

        ctx.save();

        // Blend mode: screen pops on dark; source-over with alpha on light
        ctx.globalCompositeOperation = dark ? 'screen' : 'source-over';
        ctx.globalAlpha = p.life * (dark ? 0.85 : 0.55);

        // Rotate to face velocity direction, tail trails behind
        ctx.translate(p.x, p.y);
        ctx.rotate(angle + Math.PI);

        // Tail — gradient from head color to transparent
        const grad = ctx.createLinearGradient(0, 0, tailLen, 0);
        grad.addColorStop(0, `${tailColorStart}${(p.life * (dark ? 0.8 : 0.6)).toFixed(2)})`);
        grad.addColorStop(1, `${tailColorStart}0)`);

        // Teardrop path: flat at head, tapers to a point
        ctx.beginPath();
        ctx.arc(0, 0, headR, Math.PI * 0.5, -Math.PI * 0.5, true); // right half of head circle
        ctx.quadraticCurveTo(tailLen * 0.45, headR * 0.35, tailLen, 0);
        ctx.quadraticCurveTo(tailLen * 0.45, -headR * 0.35, 0, headR);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();

        // Head dot — solid, sits on top
        ctx.beginPath();
        ctx.arc(0, 0, headR, 0, Math.PI * 2);
        ctx.globalAlpha = p.life * (dark ? 0.95 : 0.7);
        ctx.fillStyle = headColor;
        ctx.fill();

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9990 }}
    />
  );
};

export default CursorTrail;
