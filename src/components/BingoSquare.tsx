import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  // Sticker colors rotation
  const stickerColors = [
    'bg-[#5b9bd5]', // blue
    'bg-[#ff69b4]', // pink
    'bg-[#6bcf7f]', // green
    'bg-[#ff9a56]', // orange
    'bg-[#b794f6]', // purple
    'bg-[#ffd93d]', // yellow
  ];
  
  const stickerColor = stickerColors[square.id % stickerColors.length];
  
  // Organic rotation for natural sticker scatter
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
  const rotation = rotations[square.id % rotations.length];
  
  const baseClasses = `
    relative flex items-center justify-center p-2 text-center rounded-2xl
    transition-all duration-200 select-none min-h-[60px] text-xs leading-tight font-semibold
    cursor-pointer border-2 border-white/40
    ${rotation}
  `;

  // Sticker shadow and depth
  const shadowClasses = square.isMarked
    ? 'shadow-[0_1px_3px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)]'
    : 'shadow-[0_3px_6px_rgba(0,0,0,0.12),0_6px_12px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.05)]';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[#ffd93d] text-amber-900 scale-105'
      : `${stickerColor} text-white scale-100 opacity-90`
    : `${stickerColor} text-white hover:scale-105 active:scale-95`;

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-base scale-110' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${shadowClasses} ${freeSpaceClasses} sticker-glossy`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
        {square.text}
      </span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1.5 text-white text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-20">
          ✓
        </span>
      )}
      {/* Peel effect on marked stickers */}
      {square.isMarked && !square.isFreeSpace && (
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white/30 rounded-full blur-[2px]" />
      )}
    </button>
  );
}
