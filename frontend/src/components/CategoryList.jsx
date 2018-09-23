import React, { Component } from 'react'
 class Category extends Component {
  
  render() {
    const {categories}= this.props
    
    return (
      <div className="category__container col-6 col-md-4 ">
      <div className="return__permission">
       <a href="" className="return"><i class="fas fa-angle-left"></i>Permissions</a>
      </div>
        { categories.map((category,index)=>(
            <div className="category" key={index} onClick={() => {this.props.onSelect(index)}}>
              <div className="category_title">
                  <h3>{category.name}</h3>
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