import React, { Component } from 'react'
 class Category extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      categories: [
        {
          "categoryTitle": "Access right",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
        {  
          "categoryTitle": "Processing",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
        {
          
          "categoryTitle": "Consent",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
        {
          
          "categoryTitle": "Right of certfication",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
        {
          
          "categoryTitle": "Data protection",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
        {
          
          "categoryTitle": "Data protection",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
        {
          
          "categoryTitle": "Data protection",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
        {
          
          "categoryTitle": "Data protection",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia quis aliquid odit nesciunt quaerat obcae."
        },
      ]
  }
    
}
    
  componentDidMount(){

  }
  render() {
    const {categories}= this.state
    console.log(categories)
    
    return (
      <div className="category__container col-6 col-md-4 ">
        { categories.map((category,index)=>(
            <div className="category" key={index}>
              <div className="category_title">
                  <h3>{category.categoryTitle}</h3>
              </div>
              <div className="category_description">
                <p>{category.description}</p>
              </div>
              </div>

          ))}
      </div>
    )
  }
}
export default Category;