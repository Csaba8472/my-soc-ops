import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

const stickerColors = [
  'bg-[#5b9bd5]', // blue
  'bg-[#ff69b4]', // pink
  'bg-[#ffd93d]', // yellow
  'bg-[#6bcf7f]', // green
  'bg-[#ff9a56]', // orange
  'bg-[#b794f6]', // purple
];

const stickyColors = [
  'bg-[#ffd93d]', // yellow
  'bg-[#ff69b4]', // pink
  'bg-[#6bcf7f]', // green
  'bg-[#ff9a56]', // orange
];

const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-3'];

export function StartScreen({ onStart }: StartScreenProps) {
  // Get 6 sample questions for preview
  const sampleQuestions = questions.slice(0, 6);

  return (
    <div className="cork-texture min-h-full overflow-y-auto p-6 pb-12 relative">
      {/* Pushpins at corners */}
      <div className="pushpin bg-red-500 absolute top-4 left-4 z-10"></div>
      <div className="pushpin bg-blue-500 absolute top-4 right-4 z-10"></div>
      <div className="pushpin bg-green-500 absolute top-1/4 left-6 z-10"></div>
      <div className="pushpin bg-yellow-500 absolute top-1/3 right-8 z-10"></div>

      {/* Scattered emoji doodles */}
      <div className="absolute top-20 left-8 text-2xl rotate-12 opacity-70">⭐</div>
      <div className="absolute top-32 right-12 text-3xl -rotate-6 opacity-60">✨</div>
      <div className="absolute top-[45%] left-4 text-2xl rotate-45 opacity-50">🎮</div>
      <div className="absolute top-[60%] right-6 text-2xl -rotate-12 opacity-60">🎯</div>
      <div className="absolute bottom-32 left-10 text-3xl rotate-6 opacity-70">🎨</div>
      <div className="absolute bottom-24 right-20 text-2xl -rotate-45 opacity-50">✨</div>
      <div className="absolute top-1/2 right-12 text-xl rotate-12 opacity-40">⭐</div>

      <div className="max-w-4xl mx-auto space-y-8 relative">
        {/* Hero Section - Large scattered title stickers */}
        <div className="flex flex-col items-center gap-4 mb-8 mt-8">
          <div className="relative">
            <div className={`sticker-glossy ${stickerColors[0]} text-white text-5xl md:text-7xl font-bold px-8 py-4 rounded-2xl ${rotations[0]} shadow-2xl`} style={{ fontFamily: 'var(--font-sticker)' }}>
              Soc
            </div>
            <div className="absolute -top-2 -right-2 text-3xl rotate-12">🌟</div>
          </div>
          
          <div className={`sticker-glossy ${stickerColors[1]} text-white text-5xl md:text-7xl font-bold px-8 py-4 rounded-2xl ${rotations[1]} shadow-2xl -ml-8`} style={{ fontFamily: 'var(--font-sticker)' }}>
            Ops
          </div>

          <div className={`sticker-glossy ${stickerColors[2]} text-gray-800 text-2xl md:text-3xl px-6 py-3 rounded-xl ${rotations[2]} shadow-lg mt-2`} style={{ fontFamily: 'var(--font-handwritten)' }}>
            Social Bingo ✨
          </div>
        </div>

        {/* Sample Preview Grid - 4-6 bingo squares */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto mb-8">
          {sampleQuestions.map((question, index) => (
            <div
              key={index}
              className={`sticker-glossy ${stickerColors[index % stickerColors.length]} text-white p-4 rounded-lg ${rotations[index % rotations.length]} shadow-lg transform hover:scale-105 transition-transform`}
            >
              <div className="text-xs md:text-sm font-medium text-center" style={{ fontFamily: 'var(--font-sticker)' }}>
                {question}
              </div>
            </div>
          ))}
        </div>

        {/* Mini decorative stickers in background */}
        <div className="absolute top-16 right-4 md:right-16 sticker-glossy bg-[#b794f6] text-white text-xs px-2 py-1 rounded rotate-12 opacity-80">🎉</div>
        <div className="absolute top-40 left-2 md:left-12 sticker-glossy bg-[#ff9a56] text-white text-xs px-2 py-1 rounded -rotate-6 opacity-70">👥</div>
        <div className="absolute top-[55%] right-8 sticker-glossy bg-[#6bcf7f] text-white text-xs px-2 py-1 rounded rotate-45 opacity-75">✅</div>
        <div className="absolute bottom-48 left-6 sticker-glossy bg-[#5b9bd5] text-white text-xs px-2 py-1 rounded -rotate-12 opacity-80">🎯</div>
        <div className="absolute bottom-40 right-16 sticker-glossy bg-[#ff69b4] text-white text-xs px-2 py-1 rounded rotate-6 opacity-70">💡</div>

        {/* Instructions as Sticky Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          <div className={`sticky-note ${stickyColors[0]} text-gray-800 p-5 rounded-lg ${rotations[0]} shadow-md`}>
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm md:text-base font-medium" style={{ fontFamily: 'var(--font-handwritten)' }}>
              Find people who match the questions
            </p>
          </div>

          <div className={`sticky-note ${stickyColors[1]} text-gray-800 p-5 rounded-lg ${rotations[3]} shadow-md`}>
            <div className="text-3xl mb-2">👥</div>
            <p className="text-sm md:text-base font-medium" style={{ fontFamily: 'var(--font-handwritten)' }}>
              Tap a square when you find a match
            </p>
          </div>

          <div className={`sticky-note ${stickyColors[2]} text-gray-800 p-5 rounded-lg ${rotations[1]} shadow-md`}>
            <div className="text-3xl mb-2">✅</div>
            <p className="text-sm md:text-base font-medium" style={{ fontFamily: 'var(--font-handwritten)' }}>
              Get 5 in a row to win!
            </p>
          </div>
        </div>

        {/* Oversized Start Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={onStart}
            className={`sticker-glossy bg-[#ff9a56] text-white text-2xl md:text-3xl font-bold px-12 py-6 rounded-2xl shadow-2xl hover:scale-110 hover:rotate-1 active:scale-105 transition-all duration-200`}
            style={{ fontFamily: 'var(--font-sticker)' }}
          >
            Start Game 🎮
          </button>
        </div>
      </div>
    </div>
  );
}
