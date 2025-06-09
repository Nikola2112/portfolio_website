'use client';
import { useEffect, useRef } from 'react';

export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let stars = Array.from({ length: 200 }, () => createStar());

        function createStar() {
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.8 + 0.7,
                speed: Math.random() * 0.5 + 0.3,
                alpha: Math.random() * 0.5 + 0.5
            };
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(0, 255, 255, ${star.alpha})`;
                ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
                ctx.shadowBlur = 6;
                ctx.fill();
                star.y += star.speed;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-80 dark:block hidden"
        />
    );
}