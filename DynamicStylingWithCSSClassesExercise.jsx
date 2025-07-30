{/*
Dynamic Styling with CSS Classes
Your task is to enhance the demo app that's given to you such that clicking the "Yes" and "No" buttons changes the styling of the h1 heading element.

Whenever the "Yes" button is clicked, the "highlight-green" CSS class should be set on the h1 element. For the "No" button, it's the "highlight-red" class that must be applied.

If not button was clicked yet, no CSS class should be added to the h1 element.
*/}

import { useState } from 'react';

function App() {
    const [colorClass, setColorClass] = useState('')

    function handleClassChange (textClass) {
        setColorClass(textClass)
    }

    return (
        <div id="app">
            <h1 className={colorClass}>CSS is great!</h1>
            <menu>
                <li>
                    <button onClick={() => handleClassChange('highlight-green')}>Yes</button>
                </li>
                <li>
                    <button onClick={() => handleClassChange('highlight-red')}>No</button>
                </li>
            </menu>
        </div>
    );
}

export default App;
