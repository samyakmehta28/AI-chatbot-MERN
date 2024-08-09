import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('html', html);

const CodeBlock = ({ text }: { text: string }) => {
  const detectedLanguage = hljs.highlightAuto(text).language;
  return (
    <SyntaxHighlighter language={detectedLanguage} style={darcula}>
      {text}
    </SyntaxHighlighter>
  );
};
export default CodeBlock;
