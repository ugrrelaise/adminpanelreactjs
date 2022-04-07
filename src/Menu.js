import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="./Anasayfa">
      <img src="images/oguzkaganlogo.png" alt="AdminLTE Logo" style={{width: '100%', height: '70px', marginTop: '20px'}} />
    </a>
    <div className="sidebar">
        <div className="info" style={{color: '#fff', textAlign: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
        Yönetim Paneli
        </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Yönetim
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./Anasayfa" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Anasayfa</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</div>

    )
  }
}
