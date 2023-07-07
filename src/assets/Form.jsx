import "../App.css"
import {useState} from "react";

export default function Form({onSubmit}) {
    const [newItem, setNewItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='form-wrapper'>
                <label htmlFor="item"></label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id='item'
                />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}