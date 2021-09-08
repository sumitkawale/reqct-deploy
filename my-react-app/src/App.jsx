import React from 'react'
import Card from './Card'
import cardData from './CardList'
import './index.css'
function App() {
    return (<>
        <div className="card-container">
            {cardData.map((value, index) => {
                return (<>
                    <Card
                        key={"card" + index}
                        color={value.color}
                        header={value.header}
                        title={value.title}
                        description={value.description}
                        link={value.link}
                    />
                </>)
            })}
        </div>
    </>)
}
export default App