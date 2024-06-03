import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';

const CodeEditor = () => {
    const [code, setCode] = useState(() => {
        return localStorage.getItem('code') || '';
    });

    const codeRef = useRef();

    useEffect(() => {
        Prism.highlightAllUnder(codeRef.current);
    }, [code]);

    const handleChange = (event) => {
        const newCode = event.target.value;
        setCode(newCode);
        localStorage.setItem('code', newCode);
    };

    return (
        <div className="code-editor">
            <textarea
                value={code}
                onChange={handleChange}
                spellCheck="false"
                className="code-input"
                placeholder="Write your code here..."
            />
            <pre className="code-output" ref={codeRef}>
                <code className="language-js">{code}</code>
            </pre>
        </div>
    );
};

export default CodeEditor;
