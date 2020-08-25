import React from 'react'

//components
import ListTodoItem from '../components/listtodoitem'
import EditForm from '../components/editform'
import AddForm from '../components/addform'

//containers
import FilterDropDown from './filterdropdown' 

//http services
import ListService from '../services/listservice'

//a class for displaying and controlling the todolist
//excepts a list for initialization
class ToDoList extends React.Component {

    constructor(props) {
      super(props);

      //class variable for setting filter
      this.filtOptions = ["All", "Completed", "Pending"];
      
      //empty item used to add new item
      const emptyNewItem = {content: '', 
        completed: false,
        edit: false
      }
    
      this.state = {
        list:[],//list of todo items
        newItem: emptyNewItem,//empty item for adding a new item
        currFilter: this.filtOptions[0]//set the current filter to all
      };

      ListService
      .getAll()
      .then( returnedList => {
        this.setState({list:returnedList})
      })
      .catch( error => {
        throw error.response.data
      })

      //listtodoitem button handlers
      this.handleEdit = this.handleEdit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);

      //listtodoitem complete item handler
      this.handleComplete = this.handleComplete.bind(this);

      //edit item handlers
      this.updateItem = this.updateItem.bind(this);
      this.handleItemChange = this.handleItemChange.bind(this);


      //new item handlers
      this.handleNewItemChange = this.handleNewItemChange.bind(this);
      this.addNewItem = this.addNewItem.bind(this);

      //filter handlers
      this.handleFilterChange = this.handleFilterChange.bind(this);
    }
  
    //list todoitem button handlers
    handleEdit = (editItem) =>{
      editItem.edit = true;
      this.setState({
        list:this.state.list.map( item => item.id===editItem.id ? editItem : item)
      });
    }
  
    handleDelete = (delItem) => {
      
      ListService
        .deleteItem(delItem.id)
        .then(response =>{
          this.setState({
            list: this.state.list.filter(item => item.id !== delItem.id)
          })
        })
        .catch(error =>{
          throw error.response.data;
        })

    }
  
    //listtodoitem item completion handler
    handleComplete = (comItem) =>{

      comItem.completed = !comItem.completed;
      ListService
        .update(comItem.id, comItem)
        .then(returnedItem =>{
          this.setState({
            list: this.state.list.map(item => item.id === comItem.id ? returnedItem : item),
          })
        })
    }
    
    //editform item handlers
    handleItemChange = (newItem) =>{

      this.setState({
        list: this.state.list.map(item => item.id === newItem.id ? newItem : item)
      })

    }

    updateItem(newItem){
      newItem.edit = false;

      ListService
        .update(newItem.id, newItem)
        .then(returnedItem =>{
          this.setState({
            list: this.state.list.map(item => item.id === newItem.id ? returnedItem : item),
          })
        })

    }
    
    //addform item handlers
    handleNewItemChange = (item) => {

      this.setState({newItem: item});
      
    }
    
    addNewItem = () => {

      const emptyItem = {
        content: '',
        completed: false,
        edit: false
      }
      
      ListService
        .create(this.state.newItem)
        .then(returnedItem => {
          this.setState({
            list: this.state.list.concat(returnedItem), 
            newItem: emptyItem
          })
        })
    
    }

    //filterdropdown filter handler
    handleFilterChange = (index) => {
      this.setState({currFilter: this.filtOptions[index]})
    }

    render () {
      
      //prefilter list
      const filterList = this.state.list.filter(item =>{
        if(this.state.currFilter==="All"){
          return (item)
        }
        else if(this.state.currFilter==="Completed"){
          return(item.completed)
        }
        else{
          return(!item.completed)
        }

      })

      return(
        <div>
          <AddForm
            item={this.state.newItem} 
            handleNewItemChange={this.handleNewItemChange}
            addNewItem={this.addNewItem}
          />
          <FilterDropDown 
            currFilter={this.state.currFilter}
            filtOptions={this.filtOptions}
            handleFilterChange={this.handleFilterChange}
          />
          <ol>
            
            {filterList.map( (item) =>(
              
              //only show edit form if flagged
              item.edit ?
    
                <EditForm 
                  key={item.id}
                  item={item} 
                  updateItem={this.updateItem}
                  handleItemChange={this.handleItemChange}
                />
    
              :
                <ListTodoItem 
                  key={item.id} 
                  item={item} 
                  handleEdit={this.handleEdit} 
                  handleDelete={this.handleDelete}
                  handleComplete={this.handleComplete}
                />
            ))}
    
          </ol>
        </div>
  
      )
    }
}

export default ToDoList