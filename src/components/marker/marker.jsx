import { useState } from 'react';

import './marker.scss';

const Marker = () => {
    const [market, setMarker] = useState();

    

    return (
        <>
            <div className="marker-cross first"></div>
            <div className="marker-cross second"></div>
            <div className="marker-cross third"></div>
            <div className="marker-cross fourth"></div>
        </>
    )
}

export default Marker;