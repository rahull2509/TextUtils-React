# 📝 TextUtils - React Text Utility Application

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple?logo=bootstrap)
![License](https://img.shields.io/badge/license-MIT-green)

A powerful and intuitive React-based text utility application built with **TypeScript** that helps you analyze, manipulate, and transform your text efficiently. This project demonstrates modern React patterns with full TypeScript support for type-safe development.

## 🚀 Features

### Text Transformation
- **Case Conversions**
  - Convert to UPPERCASE
  - Convert to lowercase
  - Capitalize Each Word
  - Sentence case conversion
  - Title Case with smart word detection

### Text Manipulation
- **Remove Extra Spaces** - Clean up unnecessary whitespace
- **Find & Replace** - Search and replace text with interactive prompts
- **Copy to Clipboard** - Quick copy functionality
- **Clear Text** - Reset the text area

### Text Extraction
- **Extract Numbers** - Extract all numeric values from text
- **Extract Links** - Automatically detect and extract URLs
- **Text to Speech** - Listen to your text using browser's speech synthesis

### Advanced Features
- **Undo/Redo Functionality** - Full history management for all text operations
- **Live Text Analysis**
  - Word count
  - Character count
  - Estimated reading time
  - Real-time preview
- **Theme Switching** - Multiple color themes with dark mode support
- **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Language:** TypeScript 5.9.3
- **Styling:** Bootstrap 5.3.8 + Custom CSS
- **Routing:** React Router DOM 7.9.0
- **Icons:** React Icons 5.5.0
- **Testing:** React Testing Library + Jest

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

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

3. **Start the development server**
```bash
npm start
# or
yarn start
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
TextUtils-React/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with theme switcher
│   │   ├── TextForm.tsx        # Main text manipulation component
│   │   ├── Alert.tsx           # Alert notification component
│   │   └── Alert.css           # Alert styling
│   ├── App.tsx                 # Main application component
│   ├── index.tsx               # Application entry point
│   ├── index.css               # Global styles
│   └── setupTests.tsx          # Test configuration
├── package.json
├── tsconfig.json               # TypeScript configuration
└── README.md
```

## 🎨 TypeScript Implementation

This project is fully migrated to TypeScript with proper type definitions:

### Key Type Interfaces

```typescript
interface Theme {
  base: string;
  nav: string;
  mid: string;
  text: string;
}

interface TextFormProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  theme: Theme;
  heading: string;
  showAlert: (message: string, type: string) => void;
}

interface Alert {
  message: string;
  type: string;
}
```

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note:** This is a one-way operation. Once you eject, you can't go back!

## 🎨 Theme Customization

The application supports multiple theme modes with customizable colors:
- Light mode
- Dark mode
- Custom color schemes

Themes can be switched dynamically through the navigation bar.

## 🧪 Testing

The project includes Jest and React Testing Library setup:

```bash
npm test
```

## 📱 Responsive Design

Built with Bootstrap 5, the application is fully responsive and works perfectly on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktops

## 🔧 Configuration Files

- **`tsconfig.json`** - TypeScript compiler configuration
- **`package.json`** - Project dependencies and scripts
- **`.gitignore`** - Git ignore rules

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Rahul**
- GitHub: [@rahull2509](https://github.com/rahull2509)

## 🙏 Acknowledgments

- React team for the amazing framework
- Bootstrap for the UI components
- TypeScript for type safety
- All contributors and users of this application

## 📸 Screenshots

### Light Mode
Clean and professional interface for text manipulation.

### Dark Mode
Easy on the eyes with dark theme support.

## 🔮 Future Enhancements

- [ ] Export text to different file formats
- [ ] Text encryption/decryption
- [ ] Multi-language support
- [ ] More text analysis features
- [ ] Custom regex operations
- [ ] Text comparison tool

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact via GitHub profile

---

⭐ **Star this repository if you find it helpful!**

Made with ❤️ and TypeScript
