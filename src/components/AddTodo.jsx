import React, { useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../store/actions";

const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleOnChange = e =>{
      setValue(e.target.value);
    };

    const handleAdd = () =>{
        setValue('');
        addTodo(value);
    };


    return (
        <>
            <input type="text"  onChange={handleOnChange} value={value}  placeholder="You text here" />
            <button  onClick={handleAdd}>Add</button>
        </>
    )
};

const mapDispatchToProps = {
    addTodo
};
export default connect( null, mapDispatchToProps)(AddTodo);