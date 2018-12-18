import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </header>
    </div>
)

export default App