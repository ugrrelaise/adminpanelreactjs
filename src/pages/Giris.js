import React, {useState, useEffect, }  from "react";
import { useNavigate }  from "react-router-dom";
import axios from 'axios';
import App from "../App";

function Giris(){

    const navigate = useNavigate();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


  function Login()
  {
    let variables= {username, password};
    const LOGIN_URL= "https://cors-anywhere.herokuapp.com/https://panel.oguzkagansavunma.com/phpcnnfolder/admncontrol.php";

    axios.post(LOGIN_URL, variables).then(response => {
      console.log(response);
      if("hata" != response.data)
      {
        setError("Başarılı..!");
        navigate('/Anasayfa');
      }
      else
      {
        setError("Giriş Başarısız. Yeniden deneyin..!");
      }
    });
  }

  return (

      <div class="d-flex justify-content-center" style={{marginTop: '180px'}}>
<div className="register-box">
  <div className="register-logo" style={{marginTop: '-30px'}}>
    <img src="images/oguzkaganlogo.png" />
  </div>
  <div className="card" style={{marginTop: 50, border: '#e9ecef', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
    <div className="card-body register-card-body" style={{background: '#e9ecef'}}>
      <p className="login-box-msg pull-left">Yönetim Paneli</p>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Kullanıcı Adı" name="KULLANICIADI" onChange={e => setUserName(e.target.value)} />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-user" />
          </div>
        </div>
      </div>
      <div className="input-group mb-3" style={{marginTop: 20}}>
        <input type="password" className="form-control" placeholder="Şifre" name="PAROLA" onChange={e => setPassword(e.target.value)} />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock" />
          </div>
        </div>
      </div>
      <div className="input-group mb-3" style={{marginTop: 30}}>
        <button onClick={Login} className="btn btn-primary btn-block" style={{background: '#37548d', border: 'none'}}>Giriş Yap</button>
      </div>
      <div className="center" style={{marginTop: 10, textAlign: 'center'}}>{error}</div>
    </div>
  </div>
</div>
</div>
  );
}
export default Giris;