import React, { Component } from 'react'

import Book from './Book.js'

class BookShelf extends Component {

  render() {

    const {shelfName} = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            <Book />
            
          </ol>
        </div>
      </div>
    )
  }

}

export default BookShelf
