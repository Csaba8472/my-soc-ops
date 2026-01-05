import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full paper-texture">
      {/* Scrapbook-style header with page curl effect */}
      <header className="relative flex items-center justify-between p-4 bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08)] border-b-4 border-[#5b9bd5]/20">
        {/* Physical back button with depth */}
        <button
          onClick={onReset}
          className="text-gray-700 text-sm px-4 py-2 rounded-xl font-semibold bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_3px_rgba(0,0,0,0.1)] border-2 border-gray-200 active:scale-95 transition-transform"
        >
          ← Back
        </button>
        
        {/* Embossed title */}
        <h1 className="font-black text-[#5b9bd5] text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" style={{ fontFamily: 'var(--font-handwritten)' }}>
          Soc Ops
        </h1>
        <div className="w-16"></div>
        
        {/* Decorative corner fold */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent to-gray-200/50 rotate-45 translate-x-4 -translate-y-4" />
      </header>

      {/* Instructions with sticker aesthetic */}
      <p className="text-center text-gray-700 text-sm py-3 px-4 font-medium" style={{ fontFamily: 'var(--font-handwritten)' }}>
        Tap a square when you find someone who matches! ✨
      </p>

      {/* Bingo celebration banner */}
      {hasBingo && (
        <div className="relative bg-gradient-to-r from-[#ffd93d] via-[#ffed4e] to-[#ffd93d] text-amber-900 text-center py-3 font-black text-base shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] border-y-2 border-amber-400" style={{ fontFamily: 'var(--font-handwritten)' }}>
          <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
            🎉 BINGO! You got a line! 🎉
          </span>
          {/* Sparkle decorations */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl animate-pulse">✨</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl animate-pulse">✨</span>
        </div>
      )}

      {/* Board with textured background */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
