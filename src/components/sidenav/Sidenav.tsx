import "./Sidenav.scss";
import logo_image from "../../images/sidenav/graph.png";

const Sidenav = () => {
  return (
    <div className="p-sidenav">
      <div className="p-sidenav__logo">
        <img
          className="p-sidenav__logo__image"
          src={logo_image}
          alt="logo_image"
        />
        <p className="p-sidenav__logo__text">Analist </p>
      </div>
      <ul className="p-sidenav__list">
        <li className="p-sidenav__list__items">
          <svg
            className="p-sidenav__list__items__image"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 15.22 3.08 17.68 4.84 19.49"
              stroke="#5B5C5E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21.5002C13.8667 21.5002 15.38 19.987 15.38 18.1202C15.38 16.2535 13.8667 14.7402 12 14.7402C10.1333 14.7402 8.62 16.2535 8.62 18.1202C8.62 19.987 10.1333 21.5002 12 21.5002Z"
              stroke="#5B5C5E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z"
              stroke="#5B5C5E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="p-sidenav__list__items__text">Overview</p>
        </li>
        <li className="p-sidenav__list__items">
          <svg
            className="p-sidenav__list__items__image"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02 5.97C2.75 7.65 2 9.74 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2"
              stroke="#5B5C5E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5"
              stroke="#5B5C5E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8"
              stroke="#5B5C5E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="p-sidenav__list__items__text">Analytics</p>
        </li>
        <li className="p-sidenav__list__items">
          <svg
            className="p-sidenav__list__items__image"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
              stroke="#858688"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 8H17"
              stroke="#858688"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 13H13"
              stroke="#858688"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="p-sidenav__list__items__text">Messages </p>
        </li>
        <li className="p-sidenav__list__items">
          <svg
            className="p-sidenav__list__items__image"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="#858688"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="#858688"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 9.08984H20.5"
              stroke="#858688"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="#858688"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 13.7002H15.7037"
              stroke="#858688"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 16.7002H15.7037"
              stroke="#858688"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 13.7002H12.0045"
              stroke="#858688"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 16.7002H12.0045"
              stroke="#858688"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 13.7002H8.30329"
              stroke="#858688"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 16.7002H8.30329"
              stroke="#858688"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="p-sidenav__list__items__text">Calender</p>
        </li>
        <li className="p-sidenav__list__items">
          <svg
            className="p-sidenav__list__items__image"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9.10986V14.8799C3 16.9999 3 16.9999 5 18.3499L10.5 21.5299C11.33 22.0099 12.68 22.0099 13.5 21.5299L19 18.3499C21 16.9999 21 16.9999 21 14.8899V9.10986C21 6.99986 21 6.99986 19 5.64986L13.5 2.46986C12.68 1.98986 11.33 1.98986 10.5 2.46986L5 5.64986C3 6.99986 3 6.99986 3 9.10986Z"
              stroke="#858688"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#858688"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="p-sidenav__list__items__text">Settings</p>
        </li>
        <li className="p-sidenav__list__items">
          <svg
            className="p-sidenav__list__items__image"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.65781 16.553L8.65765 16.5514C8.64448 16.4164 8.74312 16.2915 8.88742 16.2777L8.88857 16.2776C9.01805 16.265 9.14809 16.3675 9.16229 16.5076C9.31334 18.1406 9.78432 19.3788 10.8052 20.1849C11.8078 20.9766 13.2422 21.27 15.12 21.27H15.25C17.3196 21.27 18.8704 20.9092 19.8848 19.8948C20.8992 18.8804 21.26 17.3296 21.26 15.26V8.73998C21.26 6.67035 20.8992 5.11955 19.8848 4.10518C18.8704 3.0908 17.3196 2.72998 15.25 2.72998H15.12C13.2318 2.72998 11.7903 3.02843 10.7867 3.83531C9.76814 4.65428 9.30412 5.91033 9.16275 7.56657C9.15118 7.64767 9.11335 7.70965 9.06793 7.74841C9.02382 7.78605 8.96456 7.80941 8.88633 7.80213L8.88634 7.80202L8.87564 7.80125C8.74625 7.79201 8.63893 7.67631 8.64852 7.52879C8.8121 5.62129 9.40024 4.33018 10.4001 3.50266C11.4112 2.6658 12.9301 2.22998 15.11 2.22998H15.24C17.6375 2.22998 19.23 2.74461 20.2327 3.74728C21.2354 4.74996 21.75 6.3425 21.75 8.73998V15.26C21.75 17.6575 21.2354 19.25 20.2327 20.2527C19.23 21.2554 17.6375 21.77 15.24 21.77H15.11C12.9445 21.77 11.4341 21.3414 10.4249 20.5176C9.42686 19.7029 8.83515 18.432 8.65781 16.553Z"
              fill="#858688"
              stroke="#858688"
            />
            <path
              d="M14.88 12.25H2C1.86614 12.25 1.75 12.1339 1.75 12C1.75 11.8661 1.86614 11.75 2 11.75H14.88C15.0139 11.75 15.13 11.8661 15.13 12C15.13 12.1382 15.0195 12.25 14.88 12.25Z"
              fill="#858688"
              stroke="#858688"
            />
            <path
              d="M15.2935 12.3534L15.6471 11.9998L15.2935 11.6463L12.4735 8.82629C12.3788 8.73155 12.3788 8.56814 12.4735 8.4734C12.5683 8.37866 12.7317 8.37866 12.8264 8.4734L16.1764 11.8234C16.2712 11.9181 16.2712 12.0816 16.1764 12.1763L12.8264 15.5263C12.7752 15.5776 12.7145 15.5998 12.65 15.5998C12.5854 15.5998 12.5248 15.5776 12.4735 15.5263C12.3788 15.4316 12.3788 15.2681 12.4735 15.1734L15.2935 12.3534Z"
              fill="#858688"
              stroke="#858688"
            />
          </svg>
          <p className="p-sidenav__list__items__text">Logout</p>
        </li>
      </ul>
    </div>
  );
};
export default Sidenav;
