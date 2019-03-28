import React, { Component } from 'react';
import axios from 'axios';

import SearchResult from '../../components/SearchResult/SearchResult';
import PageButton from '../../components/PageButton/PageButton';
import './SearchPage.css';

class SearchPage extends Component {
    constructor() {
        super()
    this.state = {
        posts: [],
        searchInput: '',
        showItems: 4,
        currentPage: 1
    }
    }

    inputChangeHandler = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    searchHandler = () => {


        axios.get('https://www.googleapis.com/books/v1/volumes?q={' + this.state.searchInput  + '}')
        // axios.get('https://www.googleapis.com/books/v1/volumes?q={search terms}')
            .then(response => {
                let myStringArray = response.data.items;
                let arrayLength = myStringArray.length;
                for (let i = 0; i < arrayLength; i++) {
                // console.log(myStringArray[i]);
                this.setState({
                    posts: [...this.state.posts, myStringArray[i]]
                });
    }
                
                console.log(this.state.posts)
            });
    }

    pageOneHandler = () => {
        this.setState({
            currentPage: 1
        })
    }

    pageTwoHandler = () => {
        this.setState({
            currentPage: 2
        })
    }

    pageThreeHandler = () => {
        this.setState({
            currentPage: 3
        })
    }

    pageFourHandler = () => {
        this.setState({
            currentPage: 4
        })
    }

    render () {

        let posts = ''

        
        React.Children.map(this.props.children, (child,  i) => {
            React.cloneElement(child, { key:  i }) })
   

        if (this.state.searchInput !== '') {

            if (this.state.currentPage === 1) {
                posts = this.state.posts.slice(this.state.showItems - this.state.showItems, this.state.showItems).map(post => {
                    return <SearchResult 
                                title={post.volumeInfo.title}
                                author={post.volumeInfo.authors}
                                date={post.volumeInfo.publishedDate}
                                // description={post.volumeInfo.description}
                                publicationLink={post.volumeInfo.canonicalVolumeLink}
                            />
                })
            }

            if (this.state.currentPage === 2) {
                posts = this.state.posts.slice((this.state.showItems - this.state.showItems) + this.state.showItems, this.state.showItems+ this.state.showItems).map(post => {
                    return <SearchResult 
                                title={post.volumeInfo.title}
                                author={post.volumeInfo.authors}
                                date={post.volumeInfo.publishedDate}
                                // description={post.volumeInfo.description}
                                publicationLink={post.volumeInfo.canonicalVolumeLink}
                            />
                })
            }

            if (this.state.currentPage === 3) {
                posts = this.state.posts.slice((this.state.showItems - this.state.showItems) + this.state.showItems * this.state.currentPage - 1, this.state.showItems+ this.state.showItems * this.state.currentPage - 1).map(post => {
                    return <SearchResult 
                                title={post.volumeInfo.title}
                                author={post.volumeInfo.authors}
                                date={post.volumeInfo.publishedDate}
                                // description={post.volumeInfo.description}
                                publicationLink={post.volumeInfo.canonicalVolumeLink}
                            />
                })
            }

            if (this.state.currentPage === 4) {
                posts = this.state.posts.slice((this.state.showItems - this.state.showItems) + this.state.showItems * this.state.currentPage - 1, this.state.showItems+ this.state.showItems * this.state.currentPage - 1).map(post => {
                    return <SearchResult 
                                title={post.volumeInfo.title}
                                author={post.volumeInfo.authors}
                                date={post.volumeInfo.publishedDate}
                                // description={post.volumeInfo.description}
                                publicationLink={post.volumeInfo.canonicalVolumeLink}
                            />
                })
            }
            
    }
        return (
            <div>
                <div>
                <section>
                <div className="SearchPage">
                    <label>BookSearchEngine™</label>
                    <input type="text" value={this.state.searchInput} onChange={this.inputChangeHandler} />
                    <button onClick={this.searchHandler}>Find now</button>
                </div>
                </section>

                <section className="Posts">
                    {posts}
                </section>
                </div>
                <div className="PageButton">
                    <PageButton name="1" onClick={this.pageOneHandler}/>
                    <PageButton name="2" onClick={this.pageTwoHandler}/>
                    <PageButton name="3" onClick={this.pageThreeHandler}/>
                    <PageButton name="4" onClick={this.pageFourHandler}/>
                </div>
            </div>
        );
    }
}

export default SearchPage;