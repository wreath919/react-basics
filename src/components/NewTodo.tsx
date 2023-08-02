import React, { useRef } from 'react'

import './NewTodo.css'

type addedTodo = {
    onAddedTodo: (text: string) => void
}

const NewTodo = (props: addedTodo) => {
    const textInputRef = useRef<HTMLInputElement>(null)
    const onSubmitClicked = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = textInputRef.current!.value
        props.onAddedTodo(enteredText)
    }
    return <form onSubmit={onSubmitClicked}>
        <div className="form-control">
            <label htmlFor="todo-text">TODO内容</label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type='submit'>TODO追加</button>
    </form>
}

export default NewTodo