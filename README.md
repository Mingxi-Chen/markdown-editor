# Markdown Editor

A modern, feature-rich markdown editor built with React, Vite, and TypeScript. This editor provides real-time preview, syntax highlighting, export functionality, and a beautiful dark mode interface.

## Features

- **Real-time Preview**: See your markdown rendered in real-time as you type
- **Syntax Highlighting**: CodeMirror 6 integration with markdown syntax highlighting
- **Export Functionality**: Export your documents as HTML or PDF files
- **Toolbar**: Quick access to common markdown formatting options
- **Dark Mode**: Toggle between light and dark themes
- **Local Storage**: Automatically saves your work locally
- **Responsive Design**: Works great on desktop and mobile devices

## Examples
<img width="2048" height="1108" alt="example" src="https://github.com/user-attachments/assets/9d7eb70c-5f52-4c75-91b7-91a0c17cd51e" />
<img width="713" height="957" alt="响应式1" src="https://github.com/user-attachments/assets/bc603d96-2165-4f53-a205-350f18ca5e74" />


## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Editor**: CodeMirror 6
- **Markdown Parser**: markdown-it
- **PDF Export**: html2pdf.js
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd markdown-editor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Basic Editing
- Start typing markdown in the left panel
- See the real-time preview in the right panel
- Your content is automatically saved to local storage

### Toolbar Features
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Headings**: `# H1`, `## H2`, `### H3`
- **Lists**: Unordered (`-`) and ordered (`1.`)
- **Blockquotes**: `> quote`
- **Code blocks**: ` ```code``` `
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Horizontal rules**: `---`

### Export Options
- **HTML Export**: Downloads a styled HTML file
- **PDF Export**: Downloads a PDF version of your document

### Dark Mode
- Click the moon/sun icon in the header to toggle between themes
- Theme preference is saved locally

## Project Structure

```
src/
├── components/
│   ├── MarkdownEditor.tsx    # CodeMirror editor component
│   ├── MarkdownPreview.tsx   # Real-time preview component
│   ├── Toolbar.tsx           # Formatting toolbar
│   └── ExportButtons.tsx     # HTML/PDF export functionality
├── App.tsx                   # Main application component
├── index.css                 # Global styles with Tailwind
└── main.tsx                  # Application entry point
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [CodeMirror](https://codemirror.net/) for the excellent editor
- [markdown-it](https://github.com/markdown-it/markdown-it) for markdown parsing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
