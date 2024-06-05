import React, { useState, useEffect } from 'react';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

// Define type for code state
type CodeState = string;

// Define CodeEditor component
const CodeEditor = () => {
    // Initialize state for code and fetch initial value from localStorage
    const [code, setCode] = useState<CodeState>(() => {
        return localStorage.getItem('code') || '';
    });

    // Update localStorage whenever code changes
    useEffect(() => {
        localStorage.setItem('code', code);
    }, [code]);

    // Handle code change
    const handleChange = (newCode: string) => {
        setCode(newCode);
    };

    // Render the component
    return (
        <div className="code-editor" >
            {/* Code editor component */}
            <Editor
                value={code}
                onValueChange={handleChange}
                className="code-input"
                placeholder="Write your code here..."
                // Highlight code using Prism.js
                highlight={(code: string) => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                padding={10}
            />
        </div>
    );
};

export default CodeEditor;
