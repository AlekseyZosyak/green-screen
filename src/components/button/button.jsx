
const Button = ({onPlay}) => {
 

    // const onToggleFullscreen = () => {
    //     if (!document.fullscreenElement) {
    //         document.documentElement.requestFullscreen();
    //     } else {
    //         document.exitFullscreen();
    //     }
    // };

    return <button onClick={onPlay}> full screen</button>;
};


export default Button;