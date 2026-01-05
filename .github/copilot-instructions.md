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
