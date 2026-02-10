import './chromo.scss';
import Marker from '../marker/marker';
import Hronomer from '../hronomer/hronomer';

const Chromo = ({hronomer, marker, screen}) => {
    let showScreen = 'chromo ';
    showScreen += +screen ? 'green' : 'blue';
    const showHronomer = +hronomer ? <Hronomer/> : null;
    const showMarkers = +marker ? <Marker /> : null;

    return (
        <div className={showScreen}>
            {showMarkers}
            {showHronomer}
        </div>
    );
};

export default Chromo;
