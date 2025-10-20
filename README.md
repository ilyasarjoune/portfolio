# Portfolio - Iliass Aarjoune

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features bilingual support (French/English) and showcases professional experience, projects, and skills.

## 🌟 Features

- **Bilingual Support**: Switch between French and English
- **Responsive Design**: Works on all device sizes  
- **Project Gallery**: Interactive image galleries for projects
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Built with Tailwind CSS
- **Fast Loading**: Optimized with Vite

## 🚀 Live Demo

Visit the live portfolio: [https://ilyasarjoune.github.io/portfolio](https://ilyasarjoune.github.io/portfolio)

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite  
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ilyasarjoune/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment Steps

### 1. Install gh-pages package
```bash
npm install --save-dev gh-pages
```

### 2. Automatic Deployment (Recommended)
The project is set up with GitHub Actions for automatic deployment:
1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://ilyasarjoune.github.io/portfolio`

### 3. GitHub Pages Settings
1. Go to your repository settings on GitHub
2. Navigate to "Pages" section  
3. Set source to "GitHub Actions"
4. The workflow will handle deployment automatically

### 4. Manual Deployment (Alternative)
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   ├── data.jsx        # Portfolio data and translations
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── .github/
│   └── workflows/      # GitHub Actions workflows
└── package.json
```

## ⚙️ Configuration

### GitHub Repository Settings
- Repository name should be: `portfolio`
- Enable GitHub Pages in repository settings
- Set Pages source to "GitHub Actions"

### Customization
- Edit `src/data.jsx` to update personal information
- Add project images to `src/assets/projects images/`
- Modify colors in `src/index.css`

---

Built with ❤️ by [Iliass Aarjoune](https://github.com/ilyasarjoune)
