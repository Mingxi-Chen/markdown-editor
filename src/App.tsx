import React, { useState, useEffect, useCallback } from 'react';
import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreview } from './components/MarkdownPreview';
import { Toolbar } from './components/Toolbar';
import { ExportButtons } from './components/ExportButtons';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown Editor\n\nStart typing your markdown here...\n\n## Features\n\n- **Real-time preview**\n- Syntax highlighting\n- Export to HTML/PDF\n- Dark mode support\n- Local storage\n\n### Code Example\n\n```javascript\nconst hello = "Hello, World!";\nconsole.log(hello);\n```\n\n### List Example\n\n1. First item\n2. Second item\n   - Nested item\n   - Another nested item\n\n> This is a blockquote\n\n**Bold text** and *italic text*\n\n[Link to GitHub](https://github.com)');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('markdown-editor-content');
    const savedTheme = localStorage.getItem('markdown-editor-theme');
    
    if (savedContent) {
      setMarkdown(savedContent);
    }
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save content to localStorage with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('markdown-editor-content', markdown);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [markdown]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('markdown-editor-theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleMarkdownChange = useCallback((value: string) => {
    setMarkdown(value);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const insertMarkdown = (syntax: string) => {
    setMarkdown(prev => prev + syntax);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Markdown Editor
            </h1>
            <div className="flex items-center gap-4">
              <ExportButtons markdown={markdown} />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          <Toolbar onInsert={insertMarkdown} />
        </header>

        {/* Main Content */}
        <main className="flex h-[calc(100vh-120px)]">
          {/* Editor Panel */}
          <div className="flex-1 border-r border-gray-200 dark:border-gray-700">
            <MarkdownEditor
              value={markdown}
              onChange={handleMarkdownChange}
              isDarkMode={isDarkMode}
            />
          </div>

          {/* Preview Panel */}
          <div className="flex-1">
            <MarkdownPreview
              markdown={markdown}
              isDarkMode={isDarkMode}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;