import Nav from "../nav/nav";
import Hero from "../hero/hero";

const TestPage = ({onToggleFullscreen}) => {
    return (
        <>
            <Hero onToggleFullscreen={onToggleFullscreen}/>
        </>
    )
}

export default TestPage;