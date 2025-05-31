import { Button } from '@mui/material';
import logo from '../../assets/images/bacola-logo.png';
import TextField from '@mui/material/TextField';


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
                            <div className='form-group mb-3'>
                                <TextField
                                    type="email"
                                    className="form-control"
                                    required
                                    fullWidth
                                    variant='standard'
                                    label="Email"
                                />

                                <TextField
                                    type="password"
                                    className="form-control mt-3"
                                    required
                                    fullWidth
                                    variant='standard'
                                    label="Password"
                                />
                            </div>
                            <div className="security-code d-flex mb-3 align-items-center">
                                <TextField
                                    type="text"
                                    className="form-control"
                                    required
                                    fullWidth
                                    variant='standard'
                                    label="Security Code"
                                />

                                <img
                                    src="https://media.istockphoto.com/id/500593190/photo/composition-finger-frame-mans-hands-capture-the-sunset.jpg?s=612x612&w=0&k=20&c=S7cuvvC_hlu39Fj5jon6__3DD0j265aAsqvYX4C0lEM="
                                    alt="Security Code Icon"
                                    onClick={() => alert('Security code clicked!')}
                                    style={{ cursor: 'pointer', marginLeft: '10px', marginTop: '16px', minWidth: '40%', maxHeight: '40px' }}
                                />

                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                {/* <Link className='d-flex'>Forget Password?</Link> */}
                                <a href="/forget-password" className='border-effect cursor'>Forget Password?</a>
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

                            <div className="d-flex align-items-center">
                                <button type="submit" className="btn btn-primary w-75">
                                    Sign In
                                </button>

                                <button type="button" className="btn btn-secondary ml-auto" onClick={() => window.location.href = '/'}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                        <p className="text-center mb-2 mt-2">
                            Don't have an account? <a href="/signup" className='border-effect cursor'><strong>Sign Up</strong></a>
                        </p>

                        <p className="text-center" style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', marginTop: '8px' }}>
                            Or continue with social accounts
                        </p>

                        {/* <div className="icons d-flex justify-content-center">

                            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google Icon" className="me-2" onClick={() => window.location.href = 'https://google.com'} />

                            <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook Icon" className="me-2" onClick={() => window.location.href = 'https://facebook.com'} />

                            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Ins Icon" className="me-2" onClick={() => window.location.href = 'https://instagram.com'} />

                            <img src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000" alt="Twitter Icon" className="me-2" onClick={() => window.location.href = 'https://twitter.com'} />

                        </div> */}
                        <div className='w-100 d-flex justify-content-center'>
                            <Button variant="outlined" className="w-75" style={{ textDecoration: 'none', fontWeight: '600' }}>
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google Icon" style={{ width: '28px', height: '28px', marginRight: "10px" }} />
                                Sign in with Google
                            </Button>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
}

export default SignIn;