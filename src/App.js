import { useState } from 'react';
import logo from './cupidon.png';
import './App.css';

function App() {
    const [isNoButton, setIsNoButton] = useState(false);
    const [isYesButton, setIsYesButton] = useState(false);
    const clickNoButton = () => {
        setIsNoButton(true);
    };
    const clickYesButton = () => {
        setIsYesButton(true);
    };
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>С Днём Святого Валентина!</p>
                <div>
                    {!isNoButton && <h3> Принимаешь поздравления?</h3>}
                    {isNoButton && !isYesButton && (
                        <>
                            <h3>Даю тебе ещё один шанс... :)</h3>
                            <h2>Принимаешь поздравления???</h2>
                        </>
                    )}
                    {!isYesButton && (
                        <div className='buttons-block'>
                            <button onClick={clickYesButton}>Да</button>
                            {!isNoButton && <button onClick={clickNoButton}>Нет</button>}
                        </div>
                    )}
                </div>
                {isYesButton && (
                    <p>
                        Поздравляю с днём святого Валентина. Желаю любить и быть любимыми, всегда
                        черпать в этом чувстве радость, силы и вдохновение. Пусть вся жизнь будет
                        наполнена самыми замечательными эмоциями и безграничным счастьем!
                    </p>
                )}
            </header>
        </div>
    );
}

export default App;
