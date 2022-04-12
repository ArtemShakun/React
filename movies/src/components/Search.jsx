import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };
    handleChange = (e) => {
        this.setState({ search: e.target.value });
    };
    handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };
    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="search"
                                placeholder="Search"
                                type="search"
                                className="validate"
                                value={this.state.search}
                                onChange={this.handleChange}
                                onKeyDown={this.handleKey}
                            />
                        </div>
                    </div>
                </form>
                <label className="labelRadioButton">
                    <input
                        className="with-gap"
                        name="group3"
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label className="labelRadioButton">
                    <input
                        className="with-gap"
                        name="group3"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label className="labelRadioButton">
                    <input
                        className="with-gap"
                        name="group3"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                    />
                    <span>Series only</span>
                </label>
            </div>
        );
    }
}

export default Search;
