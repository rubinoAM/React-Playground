import React from 'react';
import fetch from 'isomorphic-fetch';

class InfiniteScroll extends React.Component{
    state = {
        data:[],
        per:3,
        page:1,
        total_pages:null,
    };

    loadUser = () => {
        const { per, page, data } = this.state;
    }

    render(){
        return <div />;
    }
}

export default InfiniteScroll;