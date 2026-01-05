<div align="center">

# 🎉 Soc Ops

### *Break the ice, make connections, have fun!*

**A modern social bingo game designed to transform awkward mixers into engaging experiences.**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with React](https://img.shields.io/badge/React-19-61dafb.svg)](https://reactjs.org/)
[![Powered by Vite](https://img.shields.io/badge/Vite-7-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com/)

[🎮 Play Live Demo](https://csaba8472.github.io/my-soc-ops/) • [📖 Lab Guide](.lab/GUIDE.md) • [🤝 Contributing](CONTRIBUTING.md)

</div>

---

## ✨ What is Soc Ops?

Soc Ops turns the classic Bingo game into a social ice-breaker experience. Instead of numbers, players hunt for people who match interesting characteristics and experiences. Perfect for:

- 🏢 **Team building events** - Get coworkers talking beyond work topics
- 🎓 **Conferences & workshops** - Help attendees network naturally
- 🎊 **Social gatherings** - Transform parties into interactive experiences
- 👥 **Community meetups** - Build connections through shared experiences

**The goal?** Find people matching the prompts on your board and get 5 in a row. The real win? The conversations you'll have along the way.

## 🚀 Features

- **📱 Mobile-first design** - Optimized for phones, perfect for mingling
- **🎨 Clean, modern UI** - Built with React 19 & Tailwind CSS v4
- **🎲 Randomized boards** - Every game is unique
- **⚡ Lightning fast** - Powered by Vite for instant loading
- **🎯 Easy customization** - Add your own questions in minutes
- **🌐 Deploy anywhere** - Static build, host on GitHub Pages or any CDN

## 🎮 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Run Locally

```bash
# Clone the repository
git clone https://github.com/Csaba8472/my-soc-ops.git
cd my-soc-ops

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will open at `http://localhost:5173` 🎉

### Build for Production

```bash
npm run build
```

Deploys automatically to GitHub Pages on push to `main` branch.

## 🎨 Customize Your Game

Want to personalize the questions? It's easy!

1. Open `src/data/questions.ts`
2. Edit the questions array with your own prompts
3. Save and watch it hot-reload instantly!

```typescript
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "plays an instrument",
  // Add your own questions here!
];
```

## 🛠️ Tech Stack

- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS v4 with custom theme
- **Build Tool:** Vite 7
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint with React Hooks plugin
- **Deployment:** GitHub Pages (automated)

## 📚 Project Structure

```
src/
├── components/     # React components (GameScreen, BingoModal, etc.)
├── hooks/          # Custom React hooks (useBingoGame)
├── data/           # Game data (questions.ts)
├── types/          # TypeScript type definitions
└── utils/          # Helper functions
```

## 🧪 Development

```bash
# Run tests
npm test

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## 🤝 Contributing

We love contributions! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 💡 Question suggestions

Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📖 Workshop Lab

This project is part of the VS Code Agent Lab workshop. Want to learn about AI-assisted development with GitHub Copilot? Check out the [Lab Guide](.lab/GUIDE.md) for a hands-on tutorial!

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 💬 Support

- 📫 [Open an issue](../../issues) for bug reports or feature requests
- 💡 Check [SUPPORT.md](SUPPORT.md) for additional help
- 🔒 Review [SECURITY.md](SECURITY.md) for security concerns

---

<div align="center">

**Made with ❤️ by [Harald Kirschner](https://github.com/digitarald)**

*Break the ice. Build connections. Have fun!*

⭐ Star this repo if you found it helpful!

</div>
