import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

// Colors for mini preview squares
const previewColors = [
  'bg-[--color-sticker-blue]', // blue
  'bg-[--color-sticker-pink]', // pink
  'bg-[--color-sticker-yellow]', // yellow
];

export function StartScreen({ onStart }: StartScreenProps) {
  // Select 3 sample questions for preview (using slice for robustness)
  const sampleQuestions = questions.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 sm:p-6 relative" style={{ backgroundColor: '#f9f5ed' }}>
      {/* Decorative pushpins at corners */}
      <div className="absolute top-4 left-4 text-2xl opacity-60">📌</div>
      <div className="absolute top-4 right-4 text-2xl opacity-60">📌</div>
      <div className="absolute bottom-4 left-4 text-2xl opacity-60">📌</div>
      <div className="absolute bottom-4 right-4 text-2xl opacity-60">📌</div>

      {/* Small emoji doodles */}
      <div className="absolute top-16 left-1/4 text-xl opacity-40">⭐</div>
      <div className="absolute bottom-20 right-1/4 text-xl opacity-40">✨</div>

      <div className="text-center max-w-md w-full space-y-8">
        {/* Hero Section */}
        <div className="space-y-3">
          <h1 
            className="text-5xl sm:text-6xl font-bold text-white px-8 py-4 rounded-2xl inline-block sticker-glossy -rotate-1 bg-[--color-sticker-blue]"
            style={{ 
              fontFamily: 'var(--font-fredoka)',
            }}
          >
            Soc Ops
          </h1>
          <p 
            className="text-2xl sm:text-3xl mt-4"
            style={{ fontFamily: 'var(--font-handwritten)' }}
          >
            Social Bingo ✨
          </p>
        </div>

        {/* Mini Preview - 3 sample squares */}
        <div className="flex justify-center gap-3 py-4">
          {sampleQuestions.map((question, index) => (
            <div
              key={index}
              className={`${previewColors[index]} text-gray-800 text-xs sm:text-sm font-medium px-3 py-3 rounded-lg sticker-glossy text-center leading-tight shadow-md`}
              style={{
                fontFamily: 'var(--font-fredoka)',
                transform: `rotate(${index === 0 ? -2 : index === 1 ? 1 : -1}deg)`,
                width: '90px',
                height: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {question}
            </div>
          ))}
        </div>

        {/* Single Consolidated Instructions Card */}
        <div 
          className="paper-texture rounded-lg p-6 rotate-1 mx-auto max-w-sm"
        >
          <h2 
            className="font-semibold text-gray-800 mb-4 text-lg"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            How to Play
          </h2>
          <ol className="text-left text-gray-700 space-y-3 text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
            <li className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">🎯</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">👥</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">✅</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ol>
        </div>

        {/* Prominent Start Button */}
        <button
          onClick={onStart}
          className="w-full max-w-xs mx-auto bg-[--color-sticker-blue] text-white font-semibold py-4 px-8 rounded-2xl text-xl sticker-glossy transition-transform hover:scale-105 active:scale-100 shadow-lg"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          Start Game 🎮
        </button>
      </div>
    </div>
  );
}
