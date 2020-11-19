import React from 'react'
import PageTree from './PageTree'
import PageManagerContext from './PageManagerContext'

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expand: false }
  }

  toggleExpandPage() {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    const page = this.props.page;
    const isArtistDetailPage = page.contentType.some(m => m === 'ArtistDetailsPage');
    if (isArtistDetailPage) {
      return (
        <PageManagerContext.Consumer>
          {({ _, pageSelected }) => (
            <span
              className="artistPage"
              onClick={() => pageSelected(page)}>
              {page.name}
            </span>
          )}
        </PageManagerContext.Consumer>
      )
    }

    return (
      <span>
        <i className={this.state.expand ? "fa fa-minus" : "fa fa-plus"}
          onClick={() => this.toggleExpandPage()}
        >
        </i>
        <span>{page.name}</span>
        {this.state.expand ? <PageTree parentId={page.contentLink.id} /> : ""}
      </span>
    );
  }
}

export default Node;
