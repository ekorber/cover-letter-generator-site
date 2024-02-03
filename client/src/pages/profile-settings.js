import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/btn-primary";


function ProfileSettingsPage() {
  return (
    <>
      <Link to="/dashboard"><PrimaryButton className='mb-4 w-28'>Dashboard</PrimaryButton></Link>
    </>
  );
}

export default ProfileSettingsPage;