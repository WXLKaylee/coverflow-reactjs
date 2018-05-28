import React, { Component } from 'react';
import Coverflow from '../src/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1,
          src: 'example/1.jpeg',
          label: '第一张',
        },
        { id: 2,
          src: 'example/2.jpeg',
          label: '第二张',
        },
        { id: 3,
          src: 'example/3.jpeg',
          label: '第三张',
        },
        { id: 4,
          src: 'example/1.jpeg',
          label: '第四张',
        },
        { id: 5,
          src: 'example/2.jpeg',
          label: '第五张',
        },
        { id: 6,
          src: 'example/3.jpeg',
          label: '第六张',
        },
        { id: 7,
          src: 'example/3.jpeg',
          label: '第七张',
        },
      ]
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="box">
        <Coverflow items={ items } style={ { margin: '0 auto', background: '#999' } } hasLabel boxWidth={ 500 }
          boxHeight={ 250 } itemWidth={ 120 } itemHeight={ 120 } cycled />
      </div>
    );
  }

}

export default App;
