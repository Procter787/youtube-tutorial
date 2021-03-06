import React, { Component } from "react";
import {v4 as uuidv4} from 'uuid';
class AddProject extends Component{
    constructor(){
        super();
        this.state ={
            newProject:{}
        }
    }


    static defaultProps ={
        categories: ['Web Design', 'Web Development', 'Mobile Develoment']
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title is required')
        }else {
            this.setState({newProject:{
                id:uuidv4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return (
    <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br />
            <imput type="submit" value="Submit" />
            <br />
        </form>
    </div>
        );
    }
}   

// AddProject.propTypes = {
//     categories: React.PropTypes.array,
//     addProject: React.PropTypes.func
// }

export default AddProject;