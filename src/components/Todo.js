import React,{ useState} from 'react'

function Todo() {
    const [todoWork, setTodoWork ] = useState("")
    const [workList, setWorkList ] = useState([])
    function addWork(){
        setWorkList([...workList, todoWork])
        setTodoWork("")
    }
    const workListContent = workList.map((work, index) => {
        return (
            <div className="display">
                <p>{work}</p>
                <button className="btn btn-primary" onClick={editTask.bind(this,index)}>Edit</button>
                <button className="btn btn-danger" onClick={deleteTask.bind(this,index)}>Delete</button>
            </div>
        )
    })
    function editTask(index){
        let contents = workList[index];
        let dummy = [...workList]
        dummy.splice(index,1);
        setWorkList(dummy);
        setTodoWork(contents)
    }
    function deleteTask(index){
        let dummy = [...workList]
        dummy.splice(index,1);
        // console.log(dummy)
        setWorkList(dummy);
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>Todo List</h1>
                    <input type="text" placeholder="Enter Work" className="form-control" 
                        onChange={(e) => setTodoWork(e.target.value)}
                        value={todoWork}
                    />
                    <button type="submit" className="btn btn-primary" onClick={addWork}>Add</button>
                    {workListContent}
                </div>
            </div>
        </div>
    )
}

export default Todo
