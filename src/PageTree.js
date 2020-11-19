import React from 'react'
import Node from './Node'

class PageTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pages: [] }
  }

  componentDidMount() {
    const options = {
      'headers': {'Accept-Language': 'en'}
    }

    fetch(`http://localhost:56312/api/episerver/v2.0/content/${this.props.parentId}/children`, options)
      .then(response => response.json())
      .then(data => this.setState({ pages: data }));
  }

  render() {
    if (this.state.pages.length === 0) {
      return null
    }

    return (
      <ul>
        {
          this.state.pages.map((page) => {
            return (
              <li key={page.contentLink.id}>
                <Node page={page} />
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default PageTree;
