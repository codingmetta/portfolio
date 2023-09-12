export default function DemoBtn(props) {
    return (
        <button type="button" className="projectcard-btn demo-btn">
            <a href={props.link} className="flex flex-row items-center">
                <span className="whitespace-nowrap">
                    Live Demo
                </span>

                <svg
                    className="demo-btn-logo"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 10">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </button>
    );
}