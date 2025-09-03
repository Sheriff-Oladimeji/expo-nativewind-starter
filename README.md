# Expo NativeWind Starter

A minimal, modern Expo + Expo Router + NativeWind (Tailwind CSS for React Native) starter template.

---

## 🚀 What is this?

**Expo NativeWind Starter** is a clean, opinionated Expo project template built for rapid prototyping and modern app development. It replaces the default Expo boilerplate with:

- **Expo Router** for filesystem-based navigation
- **NativeWind** for Tailwind CSS utility classes in React Native
- Minimal, production-ready folder structure
- Preconfigured for iOS, Android, and Web
- No extra clutter—just the essentials to get building fast

---

## ✨ Features

- Expo Router navigation (tabs, stack, deep linking)
- NativeWind (Tailwind CSS) styling out of the box
- Ready for Expo Go, iOS, Android, and Web
- Preconfigured assets (icons, splash, etc.)
- TypeScript, ESLint, and Prettier
- Easy to extend and customize

---

## 🛠️ Getting Started

### 1. **Fork this repo**

> **Don’t clone directly if you want to push your changes!**
> Fork it to your own GitHub account first, then clone your fork.

- Click the **Fork** button (top right on GitHub)
- Go to your forked repo (under your username)

### 2. **Clone your fork**

```sh
git clone https://github.com/YOUR-USERNAME/expo-nativewind-starter.git
cd expo-nativewind-starter
```

### 3. **Install dependencies**

You need [Node.js](https://nodejs.org/) (18+) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/).

```sh
npm install
# or
yarn install
# or
pnpm install
```

### 4. **Run the app**

```sh
npm start
# or
yarn start
# or
pnpm start
```

This opens the Expo Dev Tools. You can now run the app on:

- iOS Simulator
- Android Emulator
- Web browser
- Or scan the QR code with Expo Go on your phone

---

## 🧑‍💻 How to Use & Customize

- **Pages & Navigation:**
  - Add new screens in `app/(tabs)/` or `app/`.
  - Edit navigation in the same folders; Expo Router uses the file system.
- **Styling:**
  - Use Tailwind classes with NativeWind: `<View className="bg-blue-500 p-4">`
  - Edit `tailwind.config.js` for custom themes.
- **Assets:**
  - Replace icons and splash screens in `assets/images/`.
- **Components:**
  - Place reusable components in `components/ui/`.
- **Configuration:**
  - Edit `app.json` and `package.json` as needed.

---

## 📝 How to Push to Your Own GitHub Repo

> **Don’t push to the original repo!**

If you already cloned this repo without forking, you can still fix it:

```sh
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Or, start fresh by forking and cloning as shown above.

---

## 🤝 Contributing

1. Fork this repo
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes
4. Commit: `git commit -m "feat: add my feature"`
5. Push: `git push origin my-feature`
6. Open a Pull Request

All contributions welcome! Please keep PRs focused and well-documented.

---

## 🙏 Credits & Inspiration

- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/docs)
- [NativeWind](https://www.nativewind.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📄 License

MIT

---

> Made with ❤️ for the Expo, React Native, and Tailwind CSS community.
