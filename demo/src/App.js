import React from 'react';
import BMap from 'BMap';
import './App.css';

class App extends React.Component{
  componentDidMount() {
    let map = new BMap.Map("container");
    let point = new window.BMap.Point(120.7, 28);
    map.centerAndZoom(point, 11);
    map.addEventListener("click",function(e){
      let newIcon = new BMap.Icon(require('./img/dian1.png'),new BMap.Size(36,36),{anchor:new BMap.Size(18,36)});
      let marker = new BMap.Marker(e.point,{icon:newIcon});
      map.addOverlay(marker);
    });
    map.enableScrollWheelZoom(true);
  }

  render() {
    return(
        <div id="container"></div>
    )
  }
}

export default App;
