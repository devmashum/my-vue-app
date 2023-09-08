// export default function Todo({ task, isDone }) {

//     return (
//         <li>Task: {task, isDone}</li>
//     )
// }

// Conditional rendering option:1

// export default function Todo({ task, isDone }) {

//     if (isDone === true) {
//         return <li>Finished:{task}</li>

//     } else {
//         return <li>Work on:{task}</li>
//     }
// }

// Conditional rendering option:2

// export default function Todo({ task, isDone }) {

//     if (isDone === true) {
//         return <li>Finished:{task}</li>

//     }
//     return <li>Work on:{task}</li>

// }

// Conditional rendering option:3 TERNARY Operator..


// export default function Todo({ task, isDone }) {

//     return (
//         <li> {isDone ? 'Done' : 'Work On'}: {task}</ li>

//     )

// }

// Conditional rendering option:4 &&


// export default function Todo({ task, isDone }) {

//     return (
//         <li> {isDone && 'DONE' || 'NOTE DONE'}: {task}</ li>

//     )

// }
// Conditional rendering option:5


export default function Todo({ task, isDone }) {

    let listItem;
    if (isDone) {
        listItem = <li>Finish: {task}</li>
    }
    else {
        listItem = <li>Work On: {task}</li>
    }
    return listItem;

}