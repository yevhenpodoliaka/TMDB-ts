import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import {FcUpLeft} from "react-icons/fc"


export default function GoBackLink() {
  let location = useLocation();
  const page = useRef(location.state?.from);
  const backPage = page.current || '/';
  const backLinkHref = location.state ? location.state?.from : backPage;
  return (
    <>
      <Link to={backLinkHref}><FcUpLeft fontSize={35}/></Link>
    </>
  );
}


