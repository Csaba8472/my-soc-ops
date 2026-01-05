import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="relative p-6 rounded-3xl cork-texture shadow-[0_8px_16px_rgba(0,0,0,0.15),0_16px_32px_rgba(0,0,0,0.1)]">
      {/* Decorative pushpins */}
      <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-red-500 shadow-md border-2 border-red-600" />
      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-500 shadow-md border-2 border-blue-600" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-green-500 shadow-md border-2 border-green-600" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-yellow-500 shadow-md border-2 border-yellow-600" />
      
      {/* Sticker board */}
      <div className="grid grid-cols-5 gap-3 w-full max-w-md mx-auto">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
