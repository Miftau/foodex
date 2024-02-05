import { useNavigate } from "react-router-dom";

export default function SignUpButton() {
    const navigate = useNavigate();

    const navigateToSignUp = () => {
      navigate('/signup');
    }
    return (
      <button className="cta-btn" onClick={navigateToSignUp}>
        Get started
      </button>
    );
}
