import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginUser, setUserId, signUpUser } from "../slices/userSlice";
import { fetchWishList } from "../slices/wishListSlice";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const {user,isError}=useSelector(state=>state.userSlice);
  console.log(isError)
  const closeLoginModal = () => {
    document.getElementById("loginModal").style.display = "none";
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [nameType,setNameType]=useState("SignUp")

  const login = (e) => {
    e.preventDefault();
    console.log(email,password);

   if(email == 'admin@gmail.com' && password== 'admin'){
    console.log(email,password)
    dispatch(setUserId({uid : 'admin'}));
    nevigate('/admin');
   }
   else{
    dispatch(loginUser({email:email,password:password}));
    }
  };
  
   useEffect(()=>{
    if(isError == ''){
        closeLoginModal();
      }
   },[isError])

  const signUp = (e) => {
    e.preventDefault();
    console.log("submit sign up");
    console.log(email,password);
    dispatch(signUpUser({email:email,password:password}));
    setEmail('')
    setPassword('')
  };

  return (
    <div
      className="jquery-modal blocker current"
      id="loginModal"
      style={{ opacity: "1", display: "none", zIndex: "80" }}
    >
      <div
        className="modal"
        id="quick-view-modal"
        style={{ opacity: "1", display: "inline-block", width: "75vw" }}
      >
        <div className="product-quickview show">
          <div className="container">
            <div className="row">
              <a
                href="#close-modal"
                rel="modal:close"
                class="close-modal "
                style={{ top: "9.5px", right: "11.5px" }}
                onClick={closeLoginModal}
              >
                Close
              </a>
              <div className="col-12 col-md-6 mx-auto">
                <div className="cta__form">
                  <div
                    className="section-title"
                    style={{ marginBottom: "1.875em" }}
                  >
                    <h2>{nameType}</h2>
                    <img
                      src="assets/images/introduction/IntroductionOne/content-deco.png"
                      alt="Decoration"
                    />
                  </div>
                  <div style={{color:'red',fontSize:'16px',marginBottom:'0.5em'}}>
                    {isError && (
                        <>{isError}
                        </>
                    )}
                  </div>
                  {nameType == "SignUp" && (
                    <form
                      onSubmit={signUp}
                      className="cta__form__detail validated-form"
                      // action="#"
                      // novalidate="novalidate"
                    >
                      <div className="input-validator">
                        <input
                          type="email"
                          placeholder="Your email"
                          name="email"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-validator">
                        <input
                          type="password"
                          placeholder="Your password"
                          name="password"
                          required="required"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                      </div>
                     
                      <button
                        type="submit"
                        style={{ margin: "0 10px 10px 0" }}
                        className="btn -light-red"
                      >
                        SignUp
                      </button>
                      <div style={{marginTop:'0.5em'}}>
                      <label htmlFor="" > Already have a account ?</label>
                      <button
                      style={{padding:'2',marginLeft:'7px',border:'1px'}}
                        // className="btn -light-black"
                        onClick={() => setNameType("Login")}
                      >
                        Login
                      </button>
                      </div>
                    </form>
                  )}
                  {nameType != "SignUp" && (
                    <form
                      onSubmit={login}
                      className="cta__form__detail validated-form"
                      // action="#"
                      // novalidate="novalidate"
                    >
                      <div className="input-validator">
                        <input
                          type="email"
                          placeholder="Your email"
                          name="email"
                          required
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                      <div className="input-validator">
                        <input
                          type="password"
                          placeholder="Your password"
                          name="password"
                          required="required"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                      </div>
                     
                      <button
                        type="submit"
                        style={{ margin: "0 10px 10px 0" }}
                        className="btn -light-red"
                      >
                        Login
                      </button>
                      <div style={{marginTop:'0.5em'}}>
                      <label htmlFor="" > Create a new account ?</label>
                      <button
                      style={{padding:'2',marginLeft:'10px',border:'1px'}}
                        // className="btn -light-black"
                        onClick={() => setNameType("SignUp")}
                      >
                        SignUp
                      </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
