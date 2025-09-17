import React, { useState, useEffect, useCallback } from 'react';
import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreview } from './components/MarkdownPreview';
import { Toolbar } from './components/Toolbar';
import { ExportButtons } from './components/ExportButtons';
import { Moon, Sun, Edit3, Eye } from 'lucide-react';

function App() {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown Editor\n\nStart typing your markdown here...\n\n## Features\n\n- **Real-time preview**\n- Syntax highlighting\n- Export to HTML/PDF\n- Dark mode support\n- Local storage\n- **Responsive design**\n- Mobile-friendly tabs\n\n### Code Example\n\n```javascript\nconst hello = "Hello, World!";\nconsole.log(hello);\n```\n\n### List Example\n\n1. First item\n2. Second item\n   - Nested item\n   - Another nested item\n\n> This is a blockquote\n\n**Bold text** and *italic text*\n\n[Link to GitHub](https://github.com)');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('markdown-editor-content');
    const savedTheme = localStorage.getItem('markdown-editor-theme');
    const savedTab = localStorage.getItem('markdown-editor-active-tab');
    
    if (savedContent) {
      setMarkdown(savedContent);
    }
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    
    if (savedTab && (savedTab === 'editor' || savedTab === 'preview')) {
      setActiveTab(savedTab);
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

  // Save active tab preference
  useEffect(() => {
    localStorage.setItem('markdown-editor-active-tab', activeTab);
  }, [activeTab]);

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
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Markdown Editor
            </h1>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden sm:block">
                <ExportButtons markdown={markdown} />
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Tab Navigation */}
          <div className="flex md:hidden mb-4">
            <div className="flex w-full bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('editor')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'editor'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Edit3 size={16} />
                编辑
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Eye size={16} />
                预览
              </button>
            </div>
          </div>

          {/* Mobile Export Buttons */}
          <div className="block sm:hidden mb-4">
            <ExportButtons markdown={markdown} />
          </div>

          {/* Toolbar - only show on editor tab for mobile */}
          <div className={`${activeTab === 'preview' ? 'hidden md:block' : ''}`}>
            <Toolbar onInsert={insertMarkdown} />
          </div>
        </header>

        {/* Main Content */}
        <main className="h-[calc(100vh-200px)] md:h-[calc(100vh-160px)]">
          {/* Desktop Layout - Side by Side */}
          <div className="hidden md:flex h-full">
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
          </div>

          {/* Mobile Layout - Tabbed */}
          <div className="md:hidden h-full">
            {activeTab === 'editor' ? (
              <MarkdownEditor
                value={markdown}
                onChange={handleMarkdownChange}
                isDarkMode={isDarkMode}
              />
            ) : (
              <MarkdownPreview
                markdown={markdown}
                isDarkMode={isDarkMode}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;