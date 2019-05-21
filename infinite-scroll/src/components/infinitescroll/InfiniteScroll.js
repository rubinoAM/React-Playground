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
        const url = `https://reqres.in/api/users?per_page=${per}&page=${page}`;

        fetch(url)
            .then(resp => resp.json())
            .then(json => {    
                this.setState({
                    data:json.data,
                    scrolling:false,
                    total_pages: json.total_pages
                });
            });
    }

    loadMore = () => {
        this.setState(
            prevState => ({
                page:prevState.page + 1,
                scrolling:true
            }),
            this.loadUser
        );
    }

    componentDidMount(){
        this.loadUser();
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.data.map(data => (
                        <li key={data.id}>
                            <div>
                                <div>
                                    <img src={data.avatar} alt={data.id}/>
                                </div>
                                <div>{data.first_name}</div>
                                <div>{data.last_name}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={ e => {this.loadMore();} }>
                    Load More
                </button>
            </div>
        );
    }
}

export default InfiniteScroll;