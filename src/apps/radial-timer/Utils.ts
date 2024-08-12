import { MutableRefObject } from 'react';

export const updateCanvas = (canvasRef: MutableRefObject<HTMLCanvasElement>, progress: number) => {
  const canvas = canvasRef.current;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const currentRadius = canvas.width / 2;
    const endAngle = (progress / 100) * 2 * Math.PI;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background circle
    ctx.beginPath();
    ctx.arc(currentRadius, currentRadius, currentRadius - 10, 0, 2 * Math.PI, false);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#C3D9E9';
    ctx.stroke();

    // Progress arc
    ctx.beginPath();
    ctx.arc(currentRadius, currentRadius, currentRadius - 10, 1.5 * Math.PI, endAngle - 0.5 * Math.PI, true);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#33658A';
    ctx.stroke();

    // Knob at the end of the progress arc
    const knobX = currentRadius + (currentRadius - 10) * Math.cos(endAngle - 0.5 * Math.PI);
    const knobY = currentRadius + (currentRadius - 10) * Math.sin(endAngle - 0.5 * Math.PI);

    ctx.beginPath();
    ctx.arc(knobX, knobY, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#C3D9E9'; // Knob color
    ctx.fill();
  }
};
