const CarList = () => {
   return <section style={{display:"flex", flexDirection: "column", gap :"5px", width: "300px"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
            <span style={{color:"#666"}}>차량명</span>
            <span style={{color:"#000"}}>쏘렌토</span>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
            <span style={{color:"#666"}}>트림</span>
            <span style={{color:"#000"}}>가솔린터보</span>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
            <span style={{color:"#666"}}>차량번호</span>
            <span style={{color:"#000"}}>123가1234</span>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
            <span style={{color:"#666"}}>주행거리</span>
            <span style={{color:"#000"}}>123km</span>
        </div>
   </section>
}

export default CarList;