const counter=(state={value: 0, constans: 50}, action)=> {

    switch(action.type){
        case 'INCREMENT':
            return {value:state.value-5, constans:state.constans+22};
        case 'DECREMENT':
            return {value:state.value+5,  constans:state.constans-22};
        default:
            return state;

    }


}
const {createStore}=Redux;
const store=createStore(counter)

const Counter= ({
                    value,
                    onIncrement,
                    onDecrement
                })=> {
    return (<div>
        <h1>{value.value} </h1>
        <h1>{value.constans} </h1>

        <button className="btn btn-primary" onClick={onIncrement}>
            arttır (+)
        </button>
        <button className="btn btn-primary" onClick={onDecrement}>
            azalt (-)
        </button>
    </div>)
}


const render =()=> {
    ReactDOM.render(<Counter
        value={store.getState()}
        onIncrement={()=> store.dispatch({"type":"INCREMENT"})}
        onDecrement={()=> store.dispatch({"type":"DECREMENT"})}
    />, document.getElementById("root"))
    console.log(store.getState().value)
}

render();
store.subscribe(render)


function arttir(){

    store.dispatch({"type":'INCREMENT'})
}
function azalt(){

    store.dispatch({type:'DECREMENT'})
}
