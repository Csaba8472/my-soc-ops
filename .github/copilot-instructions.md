# Soc Ops Copilot Instructions

**MANDATORY CHECKLIST** before committing:
- [ ] `npm run lint` (ESLint)
- [ ] `npm run build` (Type check + build)
- [ ] `npm run test` (Vitest)

## Context & Architecture
**Social Bingo Game** (React 19, Vite, TS, Tailwind v4).
- **State**: `useBingoGame.ts` manages `gameState` ('start'|'playing'|'bingo') & `board` (5x5). Persists to `localStorage`.
- **Logic**: Pure functions in `src/utils/bingoLogic.ts`. Data in `src/data/questions.ts`.
- **Files**: `src/components` (UI), `src/hooks`, `src/utils`, `src/types`.

## Development
- **Start**: `npm run dev`
- **Tests**: `src/utils/*.test.ts` (Logic) & React Testing Library (Components).

## Coding Rules
- **React/TS**: Functional components, named exports, derived state > redundant state.
- **Tailwind**: Utility classes, mobile-first, `grid-cols-5` layout.
- **Pattern**: Logic in `utils/`, State in `hooks/`, UI in `components/`.
- **Persistence**: Validate JSON in `loadGameState` (no crashes).

## Design Guide: Skeuomorphic Stickers
**Aesthetic**: Playful, tactile sticker sheet on cork board with glossy effects and organic scatter.

### Colors
- **Palette**: Warm paper (`#f9f5ed`), cork (`#d4b896`)
- **Stickers**: Blue `#5b9bd5`, Pink `#ff69b4`, Yellow `#ffd93d`, Green `#6bcf7f`, Orange `#ff9a56`, Purple `#b794f6`
- **Rotate colors** by `square.id % 6` for variety

### Typography
- **Sticker text**: `Fredoka` (rounded, bold, playful)
- **Handwritten**: `Covered By Your Grace` for titles/accents
- **Import**: Google Fonts in `index.css`

### Effects
- **Glossy**: `.sticker-glossy` class adds shine gradient overlay (40% top fade)
- **Shadows**: Multi-layer `shadow-[...]` for depth (3-4 layers: close, mid, far)
- **Rotation**: `rotate-1`, `-rotate-1`, `rotate-2`, `-rotate-2` for organic scatter
- **Peel**: White blur circles on marked stickers (top-right corner)
- **Cork texture**: `.cork-texture` radial gradient dots
- **Paper texture**: `.paper-texture` repeating grid lines

### Components
- **BingoSquare**: Rounded-2xl, 2px white/40% border, scale on hover/active, rotation by ID
- **BingoBoard**: Cork background, decorative pushpins (corners), `gap-3` spacing
- **Buttons**: Embossed with inset shadow (`inset 0 -3px 6px`), active scale-95
- **Decorations**: Emoji doodles (⭐✨), positioned absolute with rotation
