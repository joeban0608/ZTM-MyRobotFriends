import React from 'react';
import Card from './Card';

const CardList = ({ robotsInfo }) => {
    // test throw error
    // if (true) {
    //     throw new Error('No..there is throw Error testing')
    // }
    return (
        <div>
            {
                robotsInfo.map((user,i) => {
                    return (
                        <Card 
                        key={robotsInfo[i].id} 
                        id={robotsInfo[i].id} 
                        name={robotsInfo[i].name} 
                        email={robotsInfo[i].email}  
                        />
                    )
                })
            }
        </div>  
    );
}

export default CardList;