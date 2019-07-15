import React from "react";

function Row({children}) {
    return( <div className="row" style={{display:'flex', flexWrap: 'wrap' }}>
        {children}
        </div>
    );
} 

export default Row;