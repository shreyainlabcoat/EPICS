import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getRequirement } from '../../features/requirements/requirementSlice'
import { useParams} from 'react-router-dom'
import Header from '../../components/Volunteer/Header'
//Version 3
import '../../index.css'



function ViewRequirement() {
  const dispatch = useDispatch();
  const { adminId } = useParams();

  useEffect(() => {
    dispatch(getRequirement(adminId))
      .catch((error) => {
        toast.error("Error fetching requirement");
      });
  }, [adminId, dispatch]);

  const { requirement } = useSelector((state) => state.requirements);

  // Check if requirement is an array and has at least one element
  //Version 2
  if (!requirement || !requirement.length) {
    return (
      <>
        <Header />
        <div className="requirement-container">
          <p className="requirements-box">No current requirement set by Admin</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />
      <header>
        <div className="requirements-container">
          <h3 className="requirements-title">Our Current Requirements</h3>
          <div className="requirements-box">
            {requirement[0].requirements}
          </div>
        </div>
      </header>
    </div>
  );
}

export default ViewRequirement