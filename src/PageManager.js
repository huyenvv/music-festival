import React from 'react'
import PageTree from './PageTree';
import Header from './Header';
import RightPanel from './RightPanel';
import PageManagerContext from './PageManagerContext';

class PageManager extends React.Component {
  constructor(props) {
    super(props);

    this.pageSelected = (page) => {
      this.setState(() => ({
        page: page
      }));
    };

    this.state = {
      page: null,
      pageSelected: this.pageSelected,
    };
  }

  render() {
    return (
      <PageManagerContext.Provider value={this.state}>
        <Header />
        <div className="container-fluid">
          <div className="row" id="left-menu">
            <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
              <div className="sidebar-sticky pt-3">
              <PageTree parentId="1" />
              </div>
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-3">
              <RightPanel />
            </main>
          </div>
        </div>
        </PageManagerContext.Provider>
    );
  }
}

export default PageManager;
