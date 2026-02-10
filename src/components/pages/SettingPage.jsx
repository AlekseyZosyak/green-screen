import SettingChromo from "../setting-chromo/setting-chromo";

const SettingPage = (props) => {
    const {setTimeCode, asa, asa2, asa3, hronomer, marker, screen} = props;

    return (
        <div>
            <SettingChromo setTimeCode={setTimeCode} asa={asa} asa2={asa2} asa3={asa3} hronomer={hronomer} marker={marker} screen={screen}/>
        </div>
    )
    
}

export default SettingPage;