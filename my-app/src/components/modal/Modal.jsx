import "./Modal.css"
import { useState } from 'react'

const Modal = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }


    return (

    <>
    <button className="btn-modal" onClick={toggleModal}> 
        Open
    </button>
    {
        modal && <div className="modal">
        <div className="overlay" onClick={toggleModal}></div>
        <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
            Ruby Active Record Built-In Methods Beginner Guide
            It doesn't matter if you are a beginner or a seasoned developer. 
            From time to time, you need to look up certain programming language documentation 
            to help you navigate through specific information to build up your application which 
            then solves a definite task or problem.
            </p>
            <button className="close-modal" onClick={toggleModal}>CLOSE</button>
        </div>
    </div>
    }
    <p style={{ "padding": "50px 250px"}}>
    Ruby Active Record Built-In Methods Beginner Guide
    It doesn't matter if you are a beginner or a seasoned developer. 
    From time to time, you need to look up certain programming language documentation 
    to help you navigate through specific information to build up your application which 
    then solves a definite task or problem. However, 
    this skill is especially important for beginner developers since beginner developers, 
    like myself, don't have many experiences in using built-in methods nor understanding 
    how to implement the methods and the keywords to look for. For example, 
    some methods require certain numbers of parameters, 
    or even just simply land on the right page on the documentation.
    The purpose of this article is to assist and guide other beginner developers on where 
    to start when they read and refer to Ruby built-in methods in Ruby on Rails Guide. 
    This time I am going to focus on introducing the Models section 
    which is related to setting up your backend database from scratch.

    Before diving into the Models, let's take a look at what Active Record is first. 
    We know that Rails contains seven Ruby gems, which work harmoniously together, 
    and Active Record is one of them and taking care of all the database stuff, 
    also known as an “ORM”. ORM stands for Object-Relational-Mapping and 
    it means Active Record stores data in a database table kind of structure using rows and columns 
    and the data can be modified or retrieved by writing SQL statements. 
    Moreover, Active Record allows you to interact with that data as if it's a normal Ruby object.
    
    All About Active Record Migrations
    Now you understand Models section is related to setting up your backend database 
    but still where should you start looking? First thing first, 
    we need to define our schema so our apps know what type of data they are receiving and storing. 
    This is the time you can refer to the Active Record Migrations page to 
    review some migration definitions that are supported by the built-in change method, 
    as below: (To see a full list, you can visit here)

    After all, we are humans and we make mistakes, or after a while, 
    you need to change the database table, such as adding or removing columns, 
    based on the new business decision and your supervisor needs you to make the changes. 
    You may or may not remember how to make the change 
    so it's the place you can find the information you need.

    All About Active Record Associations
    Now after we have the ideas of how we would like to define the schema, 
    we also need to think about the relationship between each database table. 
    For example, we have a table to store all the books and another table contains all the book authors. 
    Should we use has_many and belongs_to types of association or has_and_belongs_to_many association? 
    Since there may be a case that one book has more than one author. 
    When you come across association-related questions that 
    you can search for the Active Record Associations page. 
    Below are the six types of association that are supported on Rails:
    </p>



    </>
    )
        
    

} 

export default Modal