const HeartButton = () => {
    
    const happy = () => alert("행복함!");

    return <button onClick={happy} style={{backgroundColor:"#fc0000"}}>💛</button>
};

export default HeartButton;