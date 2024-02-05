import { Link } from "react-router-dom";
import PrimaryButton from "../components/buttons/btn-primary";

function TemplateEditorPage() {
  return (
    <>
      <Link to="/dashboard"><PrimaryButton className='mb-4 w-28'>Dashboard</PrimaryButton></Link>
    </>
  );
}

export default TemplateEditorPage;