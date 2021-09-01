import React from 'react';


// // more cleaner 
const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-green dib br-100 pa5 ma3 grow bw2 shadow-5">
            <img alt="robot-friend" src={`https://robohash.org/${id}?200x200`} />
            <div >
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;