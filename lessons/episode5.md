# Episode-5

Why React? Good developer experience, optimizes apps

- React is fast in DOM manipulation. It keeps data layer and ui layer are consistent.(that is what all frameworks are trying to do efficiently)

- state variable is basically JS local variables
- Modify state var using a function (setState)
- This superpower of useState keeps data and ui layer in sync.
- Whenever a state var updates, react re-renders the component

## Reconciliation Algo / React Fiber

- For ex res container has 15 res card, draw it as tree in dom. To filter these cards to 5 cards,
- React creates a virtual dom (objects -> React.createElement("h1", {}))(not an actual dom) <div></div> are actual dom, virtual dom is representation of actual dom.

## Diff algo

- finds out difference between updated and previous virtual dom.
- React does not touch the actual dom much that is why it is fast.
- virtual dom updation is the core of react
- basically finding out diff between 2 objects is easier than html.

## why 2 state var ?

- const [listOfRes, setListofRes] = useState([]) can be written as const arr = useState([]) user = arr[0], setUser = arr[1]
- setListOfRes finds out the div and updates the UI
- why cant we modify directly because we need another var to trigger the diff algo
