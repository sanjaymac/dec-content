
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [content, setContent] = useState('');
    const [contentHash, setContentHash] = useState('');

    const reportContent = async () => {
        const hash = web3.utils.sha3(content); // Hash the content
        setContentHash(hash);
        await axios.post('http://localhost:3000/report', { contentHash: hash });
    };

    const moderateContent = async (id, isFlagged, isApproved) => {
        await axios.post('http://localhost:3000/moderate', { id, isFlagged, isApproved });
    };

    return (
        <div>
            <h1>AI-Powered Decentralized Content Moderation System</h1>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter content"></textarea>
            <button onClick={reportContent}>Report Content</button>
            <div>
                <h2>Moderation Actions</h2>
                <button onClick={() => moderateContent(1, true, false)}>Flag as Inappropriate</button>
                <button onClick={() => moderateContent(1, false, true)}>Approve Content</button>
            </div>
        </div>
    );
}

export default App;
