import {MutableRefObject} from 'react';

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

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
    ctx.strokeStyle = '#33658A';
    ctx.stroke();

    // Progress arc
    ctx.beginPath();
    ctx.arc(currentRadius, currentRadius, currentRadius - 10, 1.5 * Math.PI, endAngle - 0.5 * Math.PI, true);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#C3D9E9';
    ctx.stroke();
  }
};
