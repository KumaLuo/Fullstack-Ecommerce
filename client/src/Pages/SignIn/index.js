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
                    <img src={logo} alt="Bacola Logo" className="mb-2 w-75" />


                </div>
            </div>
        </section>
    );
}

export default SignIn;