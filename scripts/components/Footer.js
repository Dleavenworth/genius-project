import React from 'react';

export default React.createClass({
  render() {
    return(
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col 16 s12">
              <h5 className="white-text">Footer content</h5>
              <p className="grey-text text-lighten-4">I don't even know where this text will appear</p>
            </div>
            <div className="col 14 offset-12 s12">
              <h5 className="white-text">Links place things yeah</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More links here!</a>
            </div>
          </div>
        </footer>
      )
  }
})
