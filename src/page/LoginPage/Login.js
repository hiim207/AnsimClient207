import './Login.css';
import getCookie from '../../components/GetCookie';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

//import CryptoJS from 'crypto-js'; //AES 암호화 알고리즘으로 패스워드 쿠키를 암호화/복호화

const Login = () =>{

    //Ref 초기화
    const user_idRef = useRef();
    const user_idSaveRef = useRef('N');
    const passwordRef = useRef();
    const pwSaveRef = useRef('N');
    const rememberUser_idRef = useRef();
    const rememberPasswordRef = useRef();
    const rememberMeRef = useRef();
    const jwtRef = useRef();

    //state 초기화
    const [user_id, setUser_id] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    let user_idCookie = getCookie('user_id');
    let user_idSaveCookie = getCookie('user_idSave');
    let passwordCookie = getCookie('password');
    let pwSaveCookie = getCookie('pwSave');
    let authkeyCookie = getCookie('authkey');
    let accessTokenCookie = getCookie('accessToken');
    let refreshTokenCookie = getCookie('refreshToken');

    // //첫번째 렌더링 시 쿠키를 읽어 user_id, password,자동로그인 여부 확인한 후 쿠키에 저장된 user_id, password값을 input value에 넣어준다.
    // useEffect(()=> {
    //
    //     checkBoxConfirm() },[]);
    //
    // const checkBoxConfirm = async () => {
    //
    //     //user_id 쿠키 존재 여부 확인 후 user_id 쿠키가 존재하면 user_id state에 할당
    //     // if(user_idCookie !== undefined && user_idSaveCookie === 'Y'){ //user_id 쿠키가 존재하면
    //     //     setUser_id(user_idCookie); //user_id state에 user_id 쿠키값을 할당
    //     //     rememberUser_idRef.current.checked = true; //user_id 기억 체크
    //     // } else rememberUser_idRef.current.checked = false;
    //
    //     //패스워드 쿠키 존재 여부 확인 후 패스워드 쿠키가 존재하면 패스워드 state에 할당
    //     // if(passwordCookie !== undefined && pwSaveCookie === 'Y'){ //패스워드 쿠키가 존재하면
    //         //Base64로 인코딩 된 password를 디코딩
    //         //const decrypt = CryptoJS.enc.Base64.parse(passwordCookie);
    //         //const hashData = decrypt.toString(CryptoJS.enc.Utf8);
    //     //     setPassword(passwordCookie);  //password state에 디코팅 된 패스워드 쿠키 값 할당
    //     //     rememberPasswordRef.current.checked = true; //password 기억 체크
    //     // } else rememberPasswordRef.current.checked = false;
    //
    //     //자동로그인 쿠키 존재 여부 확인 후 자동로그인 쿠키가 존재하면
    //     // if(authkeyCookie !== undefined){ //자동로그인 쿠키가 존재하면 autoLogin=PASS 쿼리를 포함하여 서버로 비동기 전송
    //     //
    //     //     let formData = new FormData();
    //     //     formData.append("authkey",authkeyCookie);
    //     //     // await fetch('/restapi/loginCheck?autoLogin=PASS',{
    //     //     await fetch('/member/login?autoLogin=PASS',{
    //     //         method : 'POST',
    //     //         body : formData
    //     //     }).then((response) => response.json())
    //     //         .then((data) => {
    //     //             if(data.message === 'GOOD'){
    //     //                 document.location.href='/guide/map';
    //     //             } else {
    //     //                 alert("시스템 장애로 자동 로그인이 실패 했습니다.");
    //     //             }
    //     //         }).catch((error)=> { console.log("error = " + error);} );
    //     // }
    //
    // }

    //id 체크 관리
    // const checkRememberUser_id = (e) => {
    //     if(e.target.checked) {
    //         rememberMeRef.current.checked = false;
    //         jwtRef.current.checked = false;
    //         user_idSaveRef.current = "Y";
    //     }
    // }

    //패스워드 체크 관리
    // const checkRememberPassword = (e) => {
    //     if(e.target.checked) {
    //         rememberMeRef.current.checked = false;
    //         jwtRef.current.checked = false;
    //         pwSaveRef.current = "Y";
    //     }
    // }

    //자동로그인 체크 관리
    // const checkRememberMe = (e) => {
    //     if(e.target.checked) {
    //         // rememberUser_idRef.current.checked = false;
    //         // rememberPasswordRef.current.checked = false;
    //         jwtRef.current.checked = false;
    //     }
    // }

    //JWT 체크 관리
    // const checkJWT = (e) => {
    //     if(e.target.checked) {
    //         // rememberUser_idRef.current.checked = false;
    //         // rememberPasswordRef.current.checked = false;
    //         // rememberMeRef.current.checked = false;
    //     }
    // }

    //아이디, 패스워드 검증 이후 아이디, 패스워드 쿠키 등록
    // const cookieManage = (username, role, authkey, accessToken, refreshToken) => {
    const cookieManage = (accessToken, refreshToken) => {

        // //user_id 쿠키 등록
        // document.cookie = 'user_id=' + user_id + ';path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
        // if(rememberUser_idRef.current.checked)
        //     document.cookie = 'user_idSave=Y;path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
        // else  document.cookie = 'user_idSave=Y;path=/; max-age=0';
        //
        // //password 쿠키 등록
        // document.cookie = 'password=' + password + ';path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
        // if(rememberPasswordRef.current.checked)
        //     document.cookie = 'pwSave=Y;path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
        // else document.cookie = 'pwSave=Y;path=/; max-age=0';

        //자동로그인 쿠키 등록
        // if(rememberMeRef.current.checked) {
        //     document.cookie = 'authkey=' + authkey + ';path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
        // } else document.cookie = 'authkey=' + authkey + ';path=/; max-age=0';

        //JWT 쿠키 등록
        if(jwtRef.current.checked) {
            document.cookie = 'accessToken=' + accessToken + ';path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
            document.cookie = 'refreshToken=' + refreshToken + ';path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
        } else {
            document.cookie = 'accessToken=' + accessToken + ';path=/; max-age=0';
            document.cookie = 'refreshToken=' + refreshToken + ';path=/; max-age=0';
        }

        // document.cookie = 'username=' + decodeURIComponent(username) + ';path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
        // document.cookie = 'role=' + role + ';path=/; expires=Sun, 31 Dec 2023 23:59:59 GMT';
    }

    //REST API 서버와의 비동기 통신으로 아이/패스워드 검증
    const loginCheck = async () =>{
        if(user_id === null || user_id ===''){
            alert('아이디를 입력하세요.');
            user_idRef.current.focus();
            return false;
        }
        if(password === null || password === ''){
            alert('패스워드를 입력하세요');
            passwordRef.current.focus();
            return false;
        }

        let formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("password", password);

        //JWT 로그인
        if(jwtRef.current.checked){

            // await fetch('http://localhost:8080/restapi/loginCheck?autoLogin=JWTNew',{
            // await fetch('http://localhost:8080/member/loginCheck?jwtLogin=JWTNew',{
            await fetch('http://localhost:8080/member/loginCheck',{

                method : 'POST',
                body : formData

            }).then((response) => response.json())
                .then((data) => {
                    console.log('jwt컨트롤러로 보낸다')
                    if(data.message === 'JWT'){
                        console.log('컨트롤러에서 jwt 받았다')
                        cookieManage(data.authkey, data.accessToken, data.refreshToken);
                        document.location.href='/guide/map';
                    } else if(data.message === 'ID_NOT_FOUND') {
                        setMessage('존재하지 않는 아이디입니다.');
                    } else if(data.message === 'PASSWORD_NOT_FOUND') {
                        setMessage('잘못된 패스워드입니다.');
                    } else {
                        console.log("message = " + data.message);
                        alert("시스템 장애로 로그인이 실패 했습니다.");
                    }
                }).catch((error)=> { 
                    console.log("이런이런 ㅠㅠ")
                    console.log("error = " + error);} );


        }else { //일반 로그인(user_id,password,자동로그인 인증)
            // await fetch('http://localhost:8080/restapi/loginCheck?autoLogin=NEW',{
            await fetch('http://localhost:8080/member/loginCheck',{
                method : 'POST',
                body : formData
            }).then((response) => response.json())
                .then((data) => {
                    console.log("보낸다");
                    if(data.message === 'GOOD'){
                        console.log("받았다");
                        cookieManage(data.authkey);
                        console.log("쿠키정리");
                        document.location.href='/guide/map';
                        console.log("리로케이션 한다");
                    } else if(data.message === 'ID_NOT_FOUND') {
                        setMessage('존재하지 않는 ID입니다.');
                    } else if(data.message === 'PASSWORD_NOT_FOUND') {
                        setMessage('잘못된 패스워드입니다.');
                    } else {
                        console.log("message = " + data.message);
                        alert("시스템 장애로 로그인이 실패 했습니다.");
                    }
                }).catch((error)=> { console.log("에러다");
                    console.log("error = " + error);} );
        }
    }

    //패스워드 입력창에서 엔터를 눌렀을때 로그인
    const onKeyDown = (e) => {
        if(e.key === 'Enter'){
            loginCheck();
        }
    };

    return(
        <div className='main'>
            <div>
                <img className="logo" src ="/images/steak2.png" alt="안심" />
            </div>
            <p className="ansimName">안심동행</p>
            {/*<h2>Sign In</h2>*/}
            <div className='login'>
                {/* 아이디 */}
                <input type="text" ref={user_idRef} value={user_id} className="user_id"
                       onChange={(e) => setUser_id(e.target.value)} placeholder="ID을 입력하세요."/>
                {/* 패스워드 */}
                <input type="password" ref={passwordRef} value={password} className="password"
                       onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요." onKeyDown={onKeyDown}/>
                <p style={{color: 'red', textAlign: 'center'}}>{message}</p>

                {/* 체크박스[아이디 기억, 패스워드 기억, 자동 로그인, JWT 로그인 */}
                <div className="checkboxContainer">
                    {/*<label>*/}
                    {/*    <input type="checkbox" ref={rememberUser_idRef} onChange={(e) => checkRememberUser_id(e)}/>ID 기억*/}
                    {/*</label>*/}
                    {/*<label>*/}
                    {/*    <input type="checkbox" ref={rememberPasswordRef} onChange={(e) => checkRememberPassword(e)}/>PW*/}
                    {/*    기억*/}
                    {/*</label>*/}

                    {/*<label>*/}
                    {/*    <input type="checkbox" ref={rememberMeRef} onChange={(e) => checkRememberMe(e)}/>자동 로그인*/}
                    {/*</label>*/}
                    <label>
                        {/*<input type="checkbox" ref={jwtRef} onChange={(e) => checkJWT(e)}/>JWT 로그인*/}
                        <input type="checkbox" ref={jwtRef} />JWT 로그인
                    </label>
                </div>
                <br/>
                <Link to="/member/signup" className="signupBtn">Sign Up</Link><br/>
                {/* 로그인 버튼 */}
                <input type="button" className="login_btn" value="로그인" onClick={loginCheck}/>
                <Link to="/oauth2/authorization/google" className="linkBtn">
                    <img src="/images/google.png" alt="google Login" style={{width: '100%', cursor: 'pointer'}}/>
                </Link>
                <Link to="/oauth2/authorization/kakao" className="linkBtn">
                <img src="/images/kakao1.png" alt="Kakao Login" style={{width: '100%', cursor: 'pointer',}}/>
                </Link>
                <Link to="/oauth2/authorization/naver" className="linkBtn">
                    <img src="/images/naver.png" alt="Naver Login" style={{width: '100%', cursor: 'pointer'}}/>
                </Link>

                <Link to="/member/searchID" className="findIdBtn">Find ID</Link>
                <Link to="/member/searchPassword" className="findPwBtn">Find Password</Link>
            </div>
        </div>
    );
};

export default Login;