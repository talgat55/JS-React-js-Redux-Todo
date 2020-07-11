import  React from 'react';

const VisibilityFilter = ({filter}) =>{
    return(
        filter.map((item,index) => <button key={`filter-${index}`}>{item}</button> )
    )
};
export default  VisibilityFilter;

