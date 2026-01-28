import Plus from "../plus/plus"

const App = () => {

    return (
        <Plus/> 
    )
}

export default App;


const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};