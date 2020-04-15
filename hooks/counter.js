// const [count, setCount] = React.useState(0);

// import { realpathSync } from "fs";


// setCount(count => count + 1)
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Hello',
      age: '18',
      rest: {}
    }
  }
}

function Demo(props) {
  const initialState = {
    name: 'Hello',
    age: '18',
    rest: {}
  }

  const [state, setState] = React.useState(initialState)
}