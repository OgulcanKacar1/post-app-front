import React, { useState, useEffect, use } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
function User(){
    const { userId } = useParams();
    
    return (
        <div>
            User ID: {userId}
        </div>
    )

}

export default User;