// import React, { useRef } from 'react'


// const NewTodo: React.FC = () => {
//     const textInputRef = useRef<HTMLInputElement>(null)
//     const onSubmitClicked = (event: React.FormEvent) => {
//         event.preventDefault()
//         const enteredText = textInputRef.current!.value
//         console.log(enteredText)
//     }
//     return <form onSubmit={onSubmitClicked}>
//         <div>
//             <label htmlFor="todo-text">TODO内容</label>
//             <input type="text" id="todo-text" ref={textInputRef} />
//         </div>
//         <button type='submit'>TODO追加</button>
//     </form>
// }

// export default NewTodo