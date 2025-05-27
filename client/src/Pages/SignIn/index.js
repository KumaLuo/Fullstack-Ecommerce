import { Link } from 'react-router-dom';
import logo from '../../assets/images/bacola-logo.png';


const SignIn = () => {
    return (
        <section className="sign-in">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1280 720"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                className="sign-in__bg-svg"
            >
                <rect width="100%" height="100%" fill="#E5E5E5" />
                <g clipPath="url(#clip0_0_1)">
                    <rect width="100%" height="100%" fill="#2148C0" />
                    <circle cy="720" r="362" fill="#264ECA" />
                    <circle cy="720" r="286" fill="#244BC5" />
                    <circle cy="720" r="219" fill="#274FC7" />
                    <path
                        d="M672.5 139C536.9 151.8 444.667 51 415.5 -1L1279.5 2.5V720.5H1183C884.2 682.5 934.5 531 997 460C1033.5 410.167 1099.5 290.1 1071.5 208.5C1036.5 106.5 842 123 672.5 139Z"
                        fill="#264ECA"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_0_1">
                        <rect width="100%" height="100%" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className="container">
                <div className="box card p-3 shadow border-0 align-items-center">
                    <img src={logo} alt="Bacola Logo" className="w-75" />
                    <div className="w-100">
                        <h2>Sign In</h2>
                        <form className="w-100">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="security-code mb-2 d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Security Code"
                                    required
                                />

                                <img
                                    src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                                    alt="Security Code Icon"
                                    onClick={() => alert('Security code clicked!')}
                                    style={{ cursor: 'pointer', marginLeft: '10px', maxHeight: '40px', minWidth: '40%' }}
                                />

                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                <Link className='d-flex'>Forget Password?</Link>
                                <div className="ml-auto form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember Me
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Sign In
                            </button>
                        </form>
                        <p className="text-center">
                            Don't have an account? <a href="/signup"><strong>Sign Up</strong></a>
                        </p>

                        <p className="text-center" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                            Or continue with social accounts
                        </p>

                        <div className="icons d-flex justify-content-center">

                            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google Icon" className="me-2" onClick={() => window.location.href = 'https://google.com'} />

                            <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook Icon" className="me-2" onClick={() => window.location.href = 'https://facebook.com'} />

                            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Ins Icon" className="me-2" onClick={() => window.location.href = 'https://instagram.com'} />

                            <img src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000" alt="Twitter Icon" className="me-2" onClick={() => window.location.href = 'https://twitter.com'} />



                        </div>

                    </div>



                </div>
            </div>
        </section>
    );
}

export default SignIn;