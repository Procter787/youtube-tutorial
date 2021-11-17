import './App.css';
import Projects from './components/projects'
import React, { Component } from 'react';
import AddProject from './components/AddProject';
import {v4 as uuidv4} from 'uuid';

class App extends Component{
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  getToDos(){

  }

  getProjects(){
    this.setState({projects: [
      {
        id:uuidv4(),
        title: "Buisness Website", 
        category: "Web Design"
      },  
      {
        id:uuidv4(),
        title: "Social App", 
        category: "Mobile Development"
      },  
      {
        id:uuidv4(),
        title: "Ecommerce Shopping Cart", 
        category: "Web Development"
      },  
    ]});
    this.getToDos();
  }

  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }

  componentDidMount(){
    this.getToDos();

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handelDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  
  render(){
return (
  <div className="Projects">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects} onDelete={this.handelDeleteProject.bind(this)} />
  </div>
);
}
}

export default App;
