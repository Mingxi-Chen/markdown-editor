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
    },
    {
      icon: Italic,
      title: 'Italic',
      syntax: '*italic text*',
    },
    {
      icon: Heading1,
      title: 'Heading 1',
      syntax: '\n# Heading 1\n',
    },
    {
      icon: Heading2,
      title: 'Heading 2',
      syntax: '\n## Heading 2\n',
    },
    {
      icon: Heading3,
      title: 'Heading 3',
      syntax: '\n### Heading 3\n',
    },
    {
      icon: List,
      title: 'Unordered List',
      syntax: '\n- List item\n- List item\n',
    },
    {
      icon: ListOrdered,
      title: 'Ordered List',
      syntax: '\n1. List item\n2. List item\n',
    },
    {
      icon: Quote,
      title: 'Blockquote',
      syntax: '\n> Blockquote\n',
    },
    {
      icon: Code,
      title: 'Code Block',
      syntax: '\n```\ncode block\n```\n',
    },
    {
      icon: Link,
      title: 'Link',
      syntax: '[link text](https://example.com)',
    },
    {
      icon: Image,
      title: 'Image',
      syntax: '![alt text](https://example.com/image.jpg)',
    },
    {
      icon: Minus,
      title: 'Horizontal Rule',
      syntax: '\n---\n',
    },
  ];

  return (
    <div className="flex flex-wrap gap-1 mt-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
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
  );
};
