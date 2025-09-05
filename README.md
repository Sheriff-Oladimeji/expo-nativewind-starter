# Expo NativeWind Starter

A minimal, modern Expo + Expo Router + NativeWind (Tailwind CSS for React Native) starter template.

---

## 🚀 What is this?

**Expo NativeWind Starter** is a clean, opinionated Expo project template built for rapid prototyping and modern app development. It contains:

* **Expo Router** for filesystem-based navigation
* **NativeWind** for Tailwind-style utility classes in React Native
* A minimal, production-ready folder structure
* Preconfigured for iOS, Android, and Web

---

## ✨ Features

* Expo Router (tabs, stack, deep linking)
* NativeWind (Tailwind utilities) ready to use
* TypeScript, ESLint, and Prettier configured
* Example assets (icons, splash) and a small UI kit

---

## 🛠️ Quickstart 

If you cloned this starter and want to push it to a **new GitHub repository** (so the project lives in its own repo):

```bash
# 1) Clone the starter
git clone https://github.com/Sheriff-Oladimeji/expo-nativewind-starter.git
cd expo-nativewind-starter

# 2) Point origin to your new repo (replace with your repo URL)
git remote set-url origin https://github.com/your-username/my-app.git

# 3) Ensure branch name is `main` and push
git branch -M main
git push -u origin main
```

This preserves the starter's commit history while making `your-username/my-app` the remote `origin` for your new project.

---

## 🧑‍💻 Run locally

Install dependencies (Node 18+ recommended):

```sh
npm install
# or
# yarn install
# or
# pnpm install
```

Run the app:

```sh
npm start
# or
# yarn start
# or
# pnpm start
```

Open Expo Dev Tools and run on simulator, emulator, or Expo Go.

---

## 🧩 Customize

* **Pages & Navigation:** Add screens in `app/(tabs)/` or `app/`. Expo Router maps files/folders to routes.
* **Styling:** Use NativeWind classes in components, and edit `tailwind.config.js` for custom tokens.
* **Assets:** Replace icons and splash images in `assets/images/`.
* **Config:** Update `app.json` / `app.config.js` and `package.json` (`name`, `slug`, bundle identifiers).

Checklist when creating a new project from this starter:

* Update `package.json` `name`
* Update `app.json` `expo.slug`, `name`, and platform identifiers
* Replace icons, splash images, and metadata
* Search & replace `expo-nativewind-starter` strings if needed

---

## 🤝 Contributing

PRs welcome. Keep changes focused and include a clear description of the problem and the fix.

---

## 📄 License

[MIT](./LICENSE)

---


> Made with ❤️ by Sheriff Oladimeji
