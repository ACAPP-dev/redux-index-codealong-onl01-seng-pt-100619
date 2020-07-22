import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends React.Component {

    render() {
        return(
            <div>
                {console.log(this.props.todos)}
                <ul>
                    {this.props.todos.map((todo, id) => {
                        return (<Todo key={id} text={todo} />)
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)