import { useState } from 'react';
import { questions, FREE_SPACE } from '../data/questions';
import { PreviewBingoSquare } from './PreviewBingoSquare';

interface StartScreenProps {
  onStart: () => void;
}

// Color palette for squares (6 colors rotating)
const COLORS = [
  'bg-blue-400 text-white',
  'bg-pink-400 text-white',
  'bg-yellow-400 text-gray-900',
  'bg-green-400 text-white',
  'bg-purple-400 text-white',
  'bg-orange-400 text-white',
];

// Rotations for organic scatter
const ROTATIONS = [
  'rotate-1',
  '-rotate-2',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
  '-rotate-2',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
];

export function StartScreen({ onStart }: StartScreenProps) {
  // Get 8 random questions for the 3x3 grid (center is FREE SPACE)
  const [previewQuestions] = useState(() => {
    // Fisher-Yates shuffle
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 8);
  });

  // State for preview grid (9 squares: 8 questions + 1 free space)
  const [markedStates, setMarkedStates] = useState<boolean[]>(
    Array(9).fill(false)
  );

  const toggleSquare = (index: number) => {
    if (index === 4) return; // Center is free space, don't toggle
    const newStates = [...markedStates];
    newStates[index] = !newStates[index];
    setMarkedStates(newStates);
  };

  // Build the 3x3 grid data
  const gridData = Array.from({ length: 9 }, (_, i) => {
    if (i === 4) {
      return { text: FREE_SPACE, isFreeSpace: true };
    }
    const questionIndex = i < 4 ? i : i - 1;
    return { text: previewQuestions[questionIndex], isFreeSpace: false };
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 cork-texture overflow-auto">
      <div className="text-center max-w-md w-full">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="inline-block text-5xl font-bold text-blue-600 mb-3 sticker-glossy sticker-emboss rotate-1">
            Soc Ops
          </h1>
          <p className="text-xl text-gray-800 mt-4 font-handwritten">
            Tap squares to try it out! ✨
          </p>
        </div>

        {/* Brief Instructions */}
        <div className="mb-4 relative">
          <p className="text-base text-gray-800 font-handwritten text-lg">
            Mark squares as you meet people who match
          </p>
          {/* Decorative instruction stickers */}
          <div className="absolute -left-8 top-0 text-2xl rotate-12">⭐</div>
          <div className="absolute -right-8 top-0 text-2xl -rotate-12">✨</div>
        </div>

        {/* Interactive 3x3 Mini Bingo Grid */}
        <div className="relative mb-8 inline-block">
          {/* Pushpins on corners */}
          <div className="absolute -top-3 -left-3 text-2xl z-10">📌</div>
          <div className="absolute -top-3 -right-3 text-2xl z-10">📌</div>
          <div className="absolute -bottom-3 -left-3 text-2xl z-10">📌</div>
          <div className="absolute -bottom-3 -right-3 text-2xl z-10">📌</div>

          {/* Grid */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xl border-2 border-gray-300">
            <div className="grid grid-cols-3 gap-2">
              {gridData.map((square, index) => (
                <PreviewBingoSquare
                  key={index}
                  text={square.text}
                  isMarked={markedStates[index]}
                  isFreeSpace={square.isFreeSpace}
                  onClick={() => toggleSquare(index)}
                  colorClass={COLORS[index % COLORS.length]}
                  rotation={ROTATIONS[index]}
                />
              ))}
            </div>
          </div>

          {/* Decorative emoji doodles around grid */}
          <div className="absolute -bottom-8 left-1/4 text-2xl rotate-6">🎮</div>
          <div className="absolute -bottom-8 right-1/4 text-2xl -rotate-6">🎯</div>
        </div>

        {/* Clear Start Button */}
        <div className="mt-12">
          <button
            onClick={onStart}
            className="inline-block bg-blue-600 text-white text-xl font-bold py-4 px-8 sticker-glossy sticker-emboss hover:scale-105 active:scale-95 transition-transform"
          >
            Start Real Game 🎮
          </button>
        </div>
      </div>
    </div>
  );
}
