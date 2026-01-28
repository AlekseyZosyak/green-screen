const Button = () => {

    const onToggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    return <button onClick={onToggleFullscreen}> full screen</button>;
};


export default Button;