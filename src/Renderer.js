
export function Renderer() {
  const wall = {
    path: './images/wall.png'
  }
  
  const buildComponent = function(infos) {
    var component = document.createElement('img');
    component.src = infos.path;
    component.onload = function() {};
    return component;
  }
  
  this.render = function(container_id) {
    document.getElementById(container_id).appendChild(buildComponent(wall));
  }
};
