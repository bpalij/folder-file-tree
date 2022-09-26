import React from "react";
import { FILE, FOLDER } from '../constants/constants';

const File = React.lazy(() => import('./File'));
const Folder = React.lazy(() => import('./Folder'));

class Tree extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {
          data.map((oneData, i) => {
            const { type } = oneData;
            if (type === FILE) {
              return (
                <React.Suspense fallback={<p>Loading...</p>} key={JSON.stringify({ ...oneData, i })}>
                  <File data={oneData} />
                </React.Suspense>
              )
            }
            if (type === FOLDER) {
              return (
                <React.Suspense fallback={<p>Loading...</p>} key={JSON.stringify({ ...oneData, i })}>
                  <Folder data={oneData} />
                </React.Suspense>
              )
            }
            return <></>
          })
        }
      </>
    );
  }
}

export default Tree;
