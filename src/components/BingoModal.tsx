interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-3xl p-8 max-w-xs w-full text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-[bounce_0.5s_ease-out] border-4 border-[#ffd93d]">
        {/* Confetti stickers scattered around */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#ff69b4] rounded-full shadow-lg rotate-12 sticker-glossy" />
        <div className="absolute -top-3 right-8 w-6 h-6 bg-[#5b9bd5] rounded-full shadow-lg -rotate-12 sticker-glossy" />
        <div className="absolute top-4 -right-4 w-7 h-7 bg-[#6bcf7f] rounded-full shadow-lg rotate-45 sticker-glossy" />
        <div className="absolute -bottom-3 left-12 w-6 h-6 bg-[#ff9a56] rounded-full shadow-lg -rotate-6 sticker-glossy" />
        <div className="absolute -bottom-4 -right-3 w-8 h-8 bg-[#b794f6] rounded-full shadow-lg rotate-12 sticker-glossy" />
        
        {/* Trophy sticker */}
        <div className="relative inline-block mb-4">
          <div className="text-7xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] rotate-3">🏆</div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl" />
        </div>
        
        {/* Glossy badge */}
        <div className="relative inline-block mb-2">
          <h2 className="text-4xl font-black text-[#ffd93d] drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)] sticker-glossy px-6 py-2 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl border-4 border-amber-300 shadow-[0_6px_12px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2)]" style={{ fontFamily: 'var(--font-handwritten)' }}>
            BINGO!
          </h2>
        </div>
        
        <p className="text-gray-700 mb-6 text-base font-semibold" style={{ fontFamily: 'var(--font-handwritten)' }}>
          You completed a line! ✨
        </p>
        
        {/* Tactile stitched button */}
        <button
          onClick={onDismiss}
          className="relative w-full bg-[#6bcf7f] text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all active:scale-95 shadow-[0_6px_12px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.1),inset_0_-3px_6px_rgba(0,0,0,0.2)] border-2 border-[#5ab36d] sticker-glossy"
        >
          <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Keep Playing! 🎉
          </span>
        </button>
      </div>
    </div>
  );
}
