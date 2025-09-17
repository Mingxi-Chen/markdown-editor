import React, { useMemo } from 'react';
import MarkdownIt from 'markdown-it';

interface MarkdownPreviewProps {
  markdown: string;
  isDarkMode: boolean;
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({
  markdown,
  isDarkMode
}) => {
  const md = useMemo(() => {
    return new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      breaks: true,
    });
  }, []);

  const htmlContent = useMemo(() => {
    return md.render(markdown);
  }, [md, markdown]);

  return (
    <div className="h-full overflow-auto bg-white dark:bg-gray-900">
      <div className="p-6">
        <div
          className="prose prose-gray dark:prose-invert max-w-none"
          style={{
            '--tw-prose-body': isDarkMode ? '#e5e7eb' : '#374151',
            '--tw-prose-headings': isDarkMode ? '#f9fafb' : '#111827',
            '--tw-prose-lead': isDarkMode ? '#d1d5db' : '#4b5563',
            '--tw-prose-links': isDarkMode ? '#60a5fa' : '#2563eb',
            '--tw-prose-bold': isDarkMode ? '#f9fafb' : '#111827',
            '--tw-prose-counters': isDarkMode ? '#9ca3af' : '#6b7280',
            '--tw-prose-bullets': isDarkMode ? '#4b5563' : '#d1d5db',
            '--tw-prose-hr': isDarkMode ? '#374151' : '#e5e7eb',
            '--tw-prose-quotes': isDarkMode ? '#f9fafb' : '#111827',
            '--tw-prose-quote-borders': isDarkMode ? '#374151' : '#e5e7eb',
            '--tw-prose-captions': isDarkMode ? '#9ca3af' : '#6b7280',
            '--tw-prose-code': isDarkMode ? '#fbbf24' : '#d97706',
            '--tw-prose-pre-code': isDarkMode ? '#e5e7eb' : '#374151',
            '--tw-prose-pre-bg': isDarkMode ? '#1f2937' : '#f9fafb',
            '--tw-prose-th-borders': isDarkMode ? '#4b5563' : '#d1d5db',
            '--tw-prose-td-borders': isDarkMode ? '#374151' : '#e5e7eb',
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
};
