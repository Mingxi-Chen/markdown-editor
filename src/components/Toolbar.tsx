import React from 'react';
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image,
  Minus,
} from 'lucide-react';

interface ToolbarProps {
  onInsert: (syntax: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onInsert }) => {
  const toolbarItems = [
    {
      icon: Bold,
      title: 'Bold',
      syntax: '**bold text**',
      category: 'format',
    },
    {
      icon: Italic,
      title: 'Italic',
      syntax: '*italic text*',
      category: 'format',
    },
    {
      icon: Heading1,
      title: 'Heading 1',
      syntax: '\n# Heading 1\n',
      category: 'heading',
    },
    {
      icon: Heading2,
      title: 'Heading 2',
      syntax: '\n## Heading 2\n',
      category: 'heading',
    },
    {
      icon: Heading3,
      title: 'Heading 3',
      syntax: '\n### Heading 3\n',
      category: 'heading',
    },
    {
      icon: List,
      title: 'Unordered List',
      syntax: '\n- List item\n- List item\n',
      category: 'list',
    },
    {
      icon: ListOrdered,
      title: 'Ordered List',
      syntax: '\n1. List item\n2. List item\n',
      category: 'list',
    },
    {
      icon: Quote,
      title: 'Blockquote',
      syntax: '\n> Blockquote\n',
      category: 'block',
    },
    {
      icon: Code,
      title: 'Code Block',
      syntax: '\n```\ncode block\n```\n',
      category: 'block',
    },
    {
      icon: Link,
      title: 'Link',
      syntax: '[link text](https://example.com)',
      category: 'media',
    },
    {
      icon: Image,
      title: 'Image',
      syntax: '![alt text](https://example.com/image.jpg)',
      category: 'media',
    },
    {
      icon: Minus,
      title: 'Horizontal Rule',
      syntax: '\n---\n',
      category: 'block',
    },
  ];

  return (
    <div className="mt-4">
      {/* Desktop Layout */}
      <div className="hidden sm:flex flex-wrap gap-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
        {toolbarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onInsert(item.syntax)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
            title={item.title}
          >
            <item.icon size={18} />
          </button>
        ))}
      </div>

      {/* Mobile Layout - Scrollable */}
      <div className="sm:hidden">
        <div className="flex gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-x-auto">
          {toolbarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onInsert(item.syntax)}
              className="flex-shrink-0 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors touch-manipulation"
              title={item.title}
            >
              <item.icon size={20} />
            </button>
          ))}
        </div>
        
        {/* Mobile hint */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-2">
          滑动查看更多工具
        </div>
      </div>
    </div>
  );
};
