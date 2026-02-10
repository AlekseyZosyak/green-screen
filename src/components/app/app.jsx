import { useState, useEffect } from 'react';
import Chromo from '../chromo/chromo';
import Conecter from '../conectr/conectr';

import './app.scss';

const App = () => {
    const [play, setPlay] = useState(false);
    const [hronomer, setHronomer] = useState(1);
    const [marker, setMarker] = useState(1);
    const [screen, setScreen] = useState(1);

    const asa = (times) => {
        setHronomer(times);
        console.log(`times = ${hronomer}`);
    };

    const asa2 = (times) => {
        setMarker(times);
    };

    const asa3 = (times) => {
        setScreen(times);
    };

    useEffect(() => {
        const check = () => {
            if (!document.fullscreenElement) {
                setPlay(false);
            }
        };
        document.addEventListener('fullscreenchange', check);

        return () => {
            document.removeEventListener('fullscreenchange', check);
        };
    }, []);

    const onToggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement
                .requestFullscreen()
                .then(() => setPlay(true));
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <div className={play ? 'app' : 'app-ctatic'}>
            {play ? (
                <Chromo setPlay={setPlay} hronomer={hronomer} marker={marker} screen={screen}/>
            ) : (
                <Conecter
                    onToggleFullscreen={onToggleFullscreen}
                    asa={asa}
                    asa2={asa2}
                    asa3={asa3}
                    hronomer={hronomer}
                    marker={marker}
                    screen={screen}
                />
            )}
        </div>
    );
};

export default App;
