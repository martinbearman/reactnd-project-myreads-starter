import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookCase extends Component {
  render() {

    const { books, shelves } = this.props

    return (

      <div>

        {shelves.map((shelf) => (
          <BookShelf key={shelf.id} shelfName={shelf.name} />
        ))}

      </div>

    )
  }
}

export default BookCase
