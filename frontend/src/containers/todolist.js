import React from 'react'
import nextId from 'react-id-generator'

import ListTodoItem from '../components/listtodoitem'
import EditForm from '../components/editform'
import AddForm from '../components/addform'

import FilterDropDown from './filterdropdown' 

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
        id:nextId()}

      this.state = {
        list:props.list,//list of todo items
        editFlag: new Array(props.list.length).fill(false), //flag to edit item
        newItem: emptyNewItem,//empty item for adding a new item
        currFilter: this.filtOptions[0]//set the current filter to all
      };
      
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
    handleEdit = (id) =>{
      const index = this.state.list.findIndex(item =>(item.id ===id));

      let tempEditFlag = this.state.editFlag;
      tempEditFlag[index] = true;
      this.setState({editFlag:tempEditFlag});
    }
  
    handleDelete = (id) => {
      const index = this.state.list.findIndex(item =>(item.id ===id));

      let tempEditFlag = this.state.editFlag;
      let tempList = this.state.list;
  
      tempEditFlag.splice(index,1);
      tempList.splice(index,1);
  
      this.setState({list:tempList,
        editFlag:tempEditFlag});
    }
  
    //listtodoitem item completion handler
    handleComplete = (id) =>{
      const index = this.state.list.findIndex(item =>(item.id ===id));

      let tempList = this.state.list;
      tempList[index].completed = !tempList[index].completed;

      this.setState({list:tempList})
    }
    
    //editform item handlers
    handleItemChange = (content, id) =>{

      const index = this.state.list.findIndex(item =>(item.id ===id));
  
      let tempList = this.state.list;
      tempList[index].content = content;
  
      this.setState({list:tempList})
    }

    updateItem(id){
      const index = this.state.list.findIndex(item =>(item.id ===id));
  
      let tempEditFlag = this.state.editFlag;
      tempEditFlag[index]= false;
  
      this.setState({editFlag:tempEditFlag});
    }
    
    //addform item handlers
    handleNewItemChange = (value) => {
      let tempNewItem = this.state.newItem;
      tempNewItem.content =value;

      this.setState({newItem: tempNewItem});
      
    }
    
    addNewItem = () => {
      let tempList = this.state.list;
      let tempNewItem = this.state.newItem;

      tempList.push(tempNewItem);
      tempNewItem = {
        content: '',
        completed: false,
        id:nextId()
        }

      this.setState({
        list: tempList, 
        newItem: tempNewItem})
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
            
            {filterList.map( (item, index) =>(
              
              //only show edit form if flagged
              this.state.editFlag[index] ?
    
                <EditForm 
                  key={item.id}
                  item={item} 
                  updateItem={this.updateItem}
                  handleItemChange={this.handleItemChange}
                />
    
              :
                <ListTodoItem 
                  key={index} 
                  index={index} 
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