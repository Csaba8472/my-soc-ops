interface PreviewBingoSquareProps {
  text: string;
  isMarked: boolean;
  isFreeSpace: boolean;
  onClick: () => void;
  colorClass: string;
  rotation: string;
}

export function PreviewBingoSquare({
  text,
  isMarked,
  isFreeSpace,
  onClick,
  colorClass,
  rotation,
}: PreviewBingoSquareProps) {
  const baseClasses = `
    relative flex items-center justify-center p-2 text-center
    border-2 rounded-lg transition-all duration-200 select-none
    min-h-[70px] min-w-[70px] text-xs leading-tight
    ${rotation}
  `;

  const stateClasses = isMarked
    ? `${colorClass} peel-effect border-current shadow-lg`
    : 'bg-white text-gray-700 border-gray-300 hover:scale-105 active:scale-95';

  const freeSpaceClasses = isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={isMarked}
      aria-label={isFreeSpace ? 'Free space' : text}
    >
      <span className="break-words hyphens-auto">{text}</span>
      {isMarked && !isFreeSpace && (
        <span className="absolute top-1 right-1 text-lg">✓</span>
      )}
    </button>
  );
}
