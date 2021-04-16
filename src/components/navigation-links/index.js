// import React from 'react';
// import * as ReactRedux from 'react-redux';
// // import * as AppRedux from '../../redux';
// // import { Link } from "react-router-dom";

// interface Props {
//   className?: string,
//   onClick?: () => void,
// }

// export const NavigationLinks = ({
//     className = 'item',
//     onClick,
//   }: Props) => {
//     const strings = ReactRedux.useSelector((state) => state.strings);
//     const lang = ReactRedux.useSelector((state) => state.lang);
  
//     const goto = (section: string) => (e: React.MouseEvent) => {
//       e.preventDefault();
//       const el = document.getElementById(section);
//       if (el) {
//         el.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//         onClick && onClick();
//       }
//     }

//   return (
//     <React.Fragment>
//         {/* <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/" style={{textDecoration: "none"}}>
//                 <a className="nav-link active" aria-current="page" href="#">
//                   {strings.ru["nav-main"]}
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/" style={{textDecoration: "none"}}>
//                 <a className="nav-link" href="#">
//                   {strings[lang]["nav-about-us"]}
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/object-page" style={{textDecoration: "none"}}>
//                 <a className="nav-link" href="">
//                   {strings.ru["nav-projects"]}
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/news" style={{textDecoration: "none"}}>
//                 <a className="nav-link" href="#">
//                   {strings[lang]["nav-news"]}
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/career-page" style={{textDecoration: "none"}}>
//                 <a className="nav-link" href="/">
//                   {strings[lang]["nav-career"]}
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contacts-page" style={{textDecoration: "none"}}>
//                 <a className="nav-link" href="/" style={{color: "white"}}>
//                   {strings[lang]["nav-contacts"]}
//                 </a>
//               </Link>
//             </li>
//           </ul> */}

//         <a className={className} aria-current="page" href="#" onClick={goto('home')}>
//             {strings[lang]["nav-main"]}
//         </a>
//         <a className="nav-link" href="#" onClick={goto('/')}>
//             {strings[lang]["nav-about-us"]}
//         </a>
//         <a className="nav-link" href="/" onClick={goto('object-page')}>
//             {strings[lang]["nav-projects"]}
//         </a>
//         <a className="nav-link" href="/" onClick={goto('news')}>
//             {strings[lang]["nav-news"]}
//         </a>
//         <a className="nav-link" href="/" onClick={goto('career-page')}>
//             {strings[lang]["nav-career"]}
//         </a>
//         <a className="nav-link" href="/" onClick={goto('contacts-page')} style={{color: "white"}}>
//             {strings[lang]["nav-contacts"]}
//         </a>
//     </React.Fragment>
//   )
// }
