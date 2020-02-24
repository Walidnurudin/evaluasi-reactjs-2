import React, {Component} from 'react';
import { data } from './component/Data';
import Navbar from './component/navbar';
import Content from './component/content';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = { 
      Data: []
    };
  }

  componentDidMount(){
    this.setState ({ Data:data });
  }

  handleClick = (id) => {
    this.props.history.push(`/${id}`);
  }

  render(){
    return (
      <div>
      <Navbar />
      <div className="ganjel"></div>
        {
          this.state.Data.map((param) => {
            return (
              <div>
                <Content 
                title={param.title}
                pubDate={param.pubDate}
                author={param.author}
                thumbnail={param.thumbnail}
                handleClick={() => this.handleClick(param.id)}
                />
             <br/>
             <hr/>
             </div>
             )
          })
        }
      </div>
    );
  }
}

export default App;
