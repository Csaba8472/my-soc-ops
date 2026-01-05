interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 paper-texture">
      <div className="text-center max-w-sm">
        {/* Hand-drawn style title */}
        <h1 className="text-5xl font-bold text-[#5b9bd5] mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]" style={{ fontFamily: 'var(--font-handwritten)' }}>
          Soc Ops
        </h1>
        <p className="text-2xl text-gray-700 mb-8" style={{ fontFamily: 'var(--font-handwritten)' }}>
          Social Bingo ✨
        </p>
        
        {/* Paper card with torn edges */}
        <div className="relative bg-white rounded-2xl p-6 mb-8 shadow-[0_4px_8px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.08)] border-4 border-white">
          {/* Decorative doodles */}
          <div className="absolute -top-3 -right-3 text-4xl rotate-12">⭐</div>
          <div className="absolute -bottom-2 -left-3 text-3xl -rotate-12">✨</div>
          
          <h2 className="font-bold text-gray-800 mb-3 text-lg">How to play</h2>
          <ul className="text-left text-gray-700 text-sm space-y-2.5">
            <li className="flex items-start gap-2">
              <span className="text-[#ff69b4] text-lg">•</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5b9bd5] text-lg">•</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6bcf7f] text-lg">•</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Embossed sticker button */}
        <button
          onClick={onStart}
          className="relative w-full bg-[#5b9bd5] text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all active:scale-95 shadow-[0_6px_12px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.1),inset_0_-3px_6px_rgba(0,0,0,0.2)] border-2 border-[#4a8bc4] sticker-glossy"
        >
          <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Start Game 🎮
          </span>
        </button>
      </div>
    </div>
  );
}
