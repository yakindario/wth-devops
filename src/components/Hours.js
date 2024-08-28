// Placeholder to host a component
import React from 'react';

const Hours = () => {
    const today = new Date();
    const day = today.getDay();
    
    let hours;

    if (day >= 1 && day <= 5) { // Lunes a Viernes
        hours = "10 a.m. to 4 p.m.";
    } else { // Sábado y Domingo
        hours = "9 a.m. to 8 p.m.";
    }
    
    return (
        <div>
            <h2>Today's Opening Hours</h2>
            <p>We are open from: {hours}</p>
        </div>
    );
}

export default Hours;

