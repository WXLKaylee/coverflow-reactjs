import React, { Component } from 'react';
import Coverflow from '../src/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1,
          src: 'example/1.jpeg',
          label: '蜘蛛侠',
        },
        { id: 2,
          src: 'example/2.jpeg',
          label: '美国队长',
        },
        { id: 3,
          src: 'example/3.jpeg',
          label: '猩红女巫',
        },
        { id: 4,
          src: 'example/1.jpeg',
          label: '蜘蛛侠',
        },
        { id: 5,
          src: 'example/2.jpeg',
          label: '美国队长',
        },
        { id: 6,
          src: 'example/3.jpeg',
          label: '猩红女巫',
        },
      ]
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="box">
        <Coverflow items={ items } style={ { margin: '0 auto', background: '#999' } } hasLabel boxWidth={ 500 }
          boxHeight={ 250 } itemWidth={ 120 } itemHeight={ 120 } />
      </div>
    );
  }

}

export default App;
