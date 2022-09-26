import React from "react";

const Tree = React.lazy(() => import('./Tree'));

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    const { data } = this.props;
    const { name, children } = data;
    return (
      <>
      <p
        onClick={() => {
          this.setState({ isOpen: !this.state.isOpen });
        }}
      >
        {this.state.isOpen ? '- ' : '+ '}{name}
      </p>
      {this.state.isOpen && (
        <div className={'innerMargin'}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Tree data={children} />
          </React.Suspense>
        </div>
      )}
      </>
    );
  }
}

export default Folder
