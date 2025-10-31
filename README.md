# 📝 TextUtils - React Text Utility Application

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![React Router](https://img.shields.io/badge/React_Router-7.9.0-red?logo=react-router)
![License](https://img.shields.io/badge/license-MIT-green)

A powerful and intuitive **React-based text utility application** built with **TypeScript** that helps you analyze, manipulate, and transform text efficiently. This project demonstrates modern React development practices with hooks, routing, and comprehensive state management.

---

## ✨ Features

### 🔤 Text Transformation
- **Uppercase Conversion** - Convert entire text to UPPERCASE
- **Lowercase Conversion** - Convert entire text to lowercase
- **Capitalize Each Word** - Capitalize first letter of each word
- **Sentence Case** - Proper sentence case formatting
- **Title Case** - Smart title case with article handling (ignores words like "a", "an", "the", "and", "or", "of", "in", "on")

### ✂️ Text Manipulation
- **Remove Extra Spaces** - Clean up unnecessary whitespace and normalize spacing
- **Find & Replace** - Interactive text search and replace with regex support
- **Copy to Clipboard** - One-click copy functionality with visual feedback
- **Clear Text** - Instant text area reset

### 🔍 Text Extraction & Analysis
- **Extract Numbers** - Extract all numeric values from mixed content
- **Extract Links** - Automatically detect and extract URLs (http, https, www, and domain formats)
- **Text to Speech** - Browser-based text-to-speech functionality
- **Word Counter** - Real-time word count with accurate splitting
- **Character Counter** - Total character count including spaces
- **Reading Time Estimator** - Calculate estimated reading time (0.008 minutes per word)

### ⚡ Advanced Features
- **Undo/Redo Functionality** - Complete history management with separate undo and redo stacks
- **Real-time Preview** - Live preview of text changes
- **Multiple Theme Support** - 7 pre-configured color themes including dark mode
- **Custom Theme Engine** - Dynamic color interpolation for mid-tones
- **Responsive Design** - Mobile-first Bootstrap 5 design
- **Smart Validation** - Input validation with user-friendly alerts
- **Routing** - Multi-page application with React Router

---

## 🏗️ Architecture & Code Structure

### Component Hierarchy
```
App.tsx (Root)
├── Navbar.tsx (Navigation & Theme Switcher)
├── Alert.tsx (Notification System)
└── Routes
    ├── TextForm.tsx (Main Text Editor - Home Route)
    └── About.tsx (About Page)
```

### State Management
The application uses **React Hooks** for state management:

```typescript
// Global State (App.tsx)
- alert: AlertType | null          // Alert notifications
- isDarkMode: boolean              // Dark mode toggle
- text: string                     // Main text content
- theme: ThemeType                 // Current theme configuration

// Local State (TextForm.tsx)
- history: string[]                // Undo stack
- redoStack: string[]              // Redo stack
```

### TypeScript Interfaces

```typescript
interface AlertType {
  msg: string;
  type: string;  // 'success' | 'warning' | 'danger'
}

interface ThemeType {
  base: string;    // Background color
  nav: string;     // Navbar color
  mid: string;     // Intermediate color
  text: string;    // Text color
}

interface TextFormProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  theme: Theme;
  heading: string;
  showAlert: (message: string, type: string) => void;
}
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | Core UI framework |
| **TypeScript** | 5.9.3 | Type-safe JavaScript |
| **React Router DOM** | 7.9.0 | Client-side routing |
| **React Icons** | 5.5.0 | Icon library |
| **Bootstrap** | 5.x | CSS framework |
| **React Testing Library** | 16.3.0 | Component testing |
| **Jest** | (via react-scripts) | Test runner |
| **Web Vitals** | 2.1.4 | Performance metrics |

### Language Composition
- **TypeScript**: 90.9%
- **HTML**: 4.8%
- **CSS**: 4.3%

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/rahull2509/TextUtils-React.git
cd TextUtils-React
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm start
# or
yarn start
```

4. **Access the application**
```
http://localhost:3000
```

---

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs app in development mode at http://localhost:3000 |
| `npm test` | Launches test runner in interactive watch mode |
| `npm run build` | Builds optimized production bundle to `build/` folder |
| `npm run eject` | Ejects from Create React App (⚠️ one-way operation) |

---

## 📁 Project Structure

```
TextUtils-React/
├── public/
│   ├── index.html              # HTML template
│   ├── favicon.ico             # App icon
│   └── manifest.json           # PWA manifest
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with theme switcher (235 lines)
│   │   ├── TextForm.tsx        # Main text editor component (340 lines)
│   │   ├── Alert.tsx           # Alert notification system
│   │   ├── Alert.css           # Alert styling
│   │   └── About.tsx           # About page component
│   ├── App.tsx                 # Root component with routing (84 lines)
│   ├── App.css                 # Global app styles
│   ├── index.tsx               # Application entry point
│   ├── index.css               # Base CSS
│   ├── types.d.ts              # TypeScript type declarations
│   ├── setupTests.tsx          # Jest configuration
│   └── reportWebVitals.ts      # Performance monitoring
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Documentation
```

---

## 🎨 Theme System

### Available Themes
The application includes **7 pre-configured themes**:

1. **Blue Theme** (`#2896f0ff`) - Cool and professional
2. **Green Theme** (`#0a9f11ff`) - Fresh and vibrant
3. **Red Theme** (`#e62323ff`) - Bold and energetic
4. **Purple Theme** (`#8541d8ff`) - Creative and elegant
5. **Gray Theme** (`#adb5bd`) - Neutral and minimal
6. **Dark Theme** (`#212529`) - Easy on the eyes
7. **Light Theme** (`#ffffff`) - Clean and bright

### Theme Implementation
The theme system uses a custom color interpolation algorithm (`getMidColor`) that calculates intermediate colors by averaging RGB values between base and navigation colors.

```typescript
const getMidColor = (color1: string, color2: string): string => {
  // Converts hex to RGB, averages values, converts back to hex
}
```

---

## 🔧 Key Functions & Features

### Text Operations (TextForm.tsx)

| Function | Description | Validation |
|----------|-------------|------------|
| `handleUpClick()` | Convert to uppercase | ✅ Empty check |
| `handleLoClick()` | Convert to lowercase | ✅ Empty check |
| `handleCapitalizeClick()` | Capitalize each word | ✅ Empty check |
| `handleSentenceClick()` | Sentence case with regex | ✅ Empty check |
| `handleTitleCase()` | Smart title case | ✅ Empty check |
| `handleRemoveExtraSpaces()` | Remove extra whitespace | ✅ Empty check |
| `handleExtractNumbers()` | Extract numbers with regex | ✅ Empty + Result check |
| `handleExtractLinks()` | Extract URLs with regex | ✅ Empty + Result check |
| `handleSpeak()` | Text-to-speech API | ✅ Empty check |
| `handleChangeText()` | Find and replace | ✅ Empty + Match check |
| `handleCopyText()` | Copy to clipboard | ✅ Empty check |
| `handleClearClick()` | Clear text area | ✅ Empty check |
| `handleUndo()` | Undo last action | ✅ History check |
| `handleRedo()` | Redo last undone action | ✅ Redo stack check |

### History Management
Uses **dual-stack architecture** for undo/redo:
- `history[]` - Stores previous states for undo
- `redoStack[]` - Stores undone states for redo
- `saveToHistory()` - Updates both stacks on changes

---

## 🧪 Testing

The project includes testing setup with:
- **React Testing Library** - Component testing
- **Jest** - Test runner
- **@testing-library/user-event** - User interaction simulation

```bash
npm test
```

---

## 📱 Responsive Design

Built with **Bootstrap 5** for mobile-first responsive design:
- ✅ Mobile phones (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)
- ✅ Large screens (1440px+)

---

## 🚀 Performance

- **Optimized rendering** with React 19.1.1
- **Lazy loading** with React Router code splitting
- **Web Vitals** monitoring integrated
- **Production build** optimization with minification

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Write clean, readable TypeScript code
- Add proper type annotations
- Include comments for complex logic
- Test your changes before submitting
- Follow the existing code structure

---

## 🔮 Future Enhancements

- [ ] **Export Functionality** - Export text to TXT, PDF, DOCX formats
- [ ] **Text Encryption** - Basic encryption/decryption features
- [ ] **Multi-language Support** - i18n implementation
- [ ] **Advanced Text Analysis** - Sentiment analysis, keyword extraction
- [ ] **Custom Regex Operations** - User-defined regex patterns
- [ ] **Text Comparison** - Diff viewer for comparing texts
- [ ] **Local Storage** - Persist text and settings
- [ ] **Keyboard Shortcuts** - Ctrl+Z for undo, etc.
- [ ] **Text Statistics** - Sentence count, paragraph count, unique words
- [ ] **Dark Mode Toggle** - Enhanced dark mode with system preference detection

---

## 📝 License

This project is **open source** and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Rahul**
- GitHub: [@rahull2509](https://github.com/rahull2509)
- Repository: [TextUtils-React](https://github.com/rahull2509/TextUtils-React)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **TypeScript Team** - For type-safe JavaScript
- **Bootstrap** - For responsive UI components
- **React Router** - For seamless navigation
- **Create React App** - For project scaffolding

---

## 📞 Support

Found a bug or have a feature request?
- 🐛 [Open an Issue](https://github.com/rahull2509/TextUtils-React/issues)
- 💡 [Start a Discussion](https://github.com/rahull2509/TextUtils-React/discussions)

---

## 📊 Repository Stats

![Repo Size](https://img.shields.io/github/repo-size/rahull2509/TextUtils-React)
![Last Commit](https://img.shields.io/github/last-commit/rahull2509/TextUtils-React)
![Issues](https://img.shields.io/github/issues/rahull2509/TextUtils-React)
![Stars](https://img.shields.io/github/stars/rahull2509/TextUtils-React)

---

⭐ **If you find this project helpful, please consider giving it a star!**

**Made with ❤️ and TypeScript by Rahul**
