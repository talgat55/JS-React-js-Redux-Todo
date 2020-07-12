import  React from 'react';
import {connect} from 'react-redux';
import {setFilter} from "../store/actions";
import {Filters} from "../store/types";
const VisibilityFilter = ({activeFilter, setFilter}) =>{
    return(
        Filters.map((filter,index) => (
            <button
                className={filter === activeFilter ? 'active' : ''}
                onClick={() => setFilter(filter)}
                key={`filter-${index}`}

            >
                {filter}
            </button>
        ))
    )
};

const mapStateToProps = state =>{
    return {
        activeFilter: state.visibilityFilter.activeFilter
    }
};
const mapDispatchToProps = {
    setFilter
};
export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);

