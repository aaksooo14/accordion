import React, { useState } from 'react'

const Accordion = ({ data }) => {

    const [isVisibleId, setIsVisibleId] = useState(null)

    const toggle = (id) => {
        setIsVisibleId(isVisibleId === id ? null : id)
    }

    return (
        <div>
            <h1>Accordion</h1>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <button onClick={() => toggle(item.id)}>+</button>
                        <p>{item.title}</p>
                        {
                            (isVisibleId === item.id) &&
                            (
                                <p>{item.content}</p>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion
