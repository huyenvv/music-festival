import React from 'react'
import PageManagerContext from './PageManagerContext'

class RightPanel extends React.Component {
  render() {
    let page = this.context.page;
    if (!page) {
      return null
    }

    return (
      <div className="card mb-3 col-6 offset-md-3 pt-3">
        <img src={`http://localhost:56312/${page.artistPhoto}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{page.name}</h5>
          <p className="card-text">{page.artistDescription}</p>
          <p className="card-text"><small className="text-muted">{page.stageName}</small></p>
          <p className="card-text"><small className="text-muted">{page.performanceStartTime} - {page.performanceEndTime}</small></p>
        </div>
      </div>
    );
  }
}

RightPanel.contextType = PageManagerContext;

export default RightPanel;
