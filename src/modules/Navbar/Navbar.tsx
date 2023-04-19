import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

interface NavbarProps {
  isAuthenticated: boolean;
}

export default function Navbar({ isAuthenticated = true }: NavbarProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleToggleIsOpened = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div
          className={`${styles["burger-menu"]} ${
            isOpened ? styles.active : ""
          }`}
          onClick={handleToggleIsOpened}
        >
          <div className={styles["burger-menu__middle-bun"]}></div>
        </div>
        <Link to={"/"}>
          <div className={styles["nav-logo"]}>
            <svg
              // width="144"
              // height="61"
              viewBox="0 0 144 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.16051 49V12.6364H17.5071C20.2652 12.6364 22.6148 13.1631 24.5561 14.2166C26.4974 15.2583 27.977 16.7083 28.995 18.5668C30.0249 20.4134 30.5398 22.544 30.5398 24.9588C30.5398 27.3736 30.0189 29.5043 28.9773 31.3509C27.9356 33.1974 26.4264 34.6357 24.4496 35.6655C22.4846 36.6953 20.1054 37.2102 17.3118 37.2102H8.16761V31.049H16.0689C17.5485 31.049 18.7678 30.7945 19.7266 30.2855C20.6972 29.7647 21.4193 29.0485 21.8928 28.1371C22.3781 27.2138 22.6207 26.1544 22.6207 24.9588C22.6207 23.7514 22.3781 22.6979 21.8928 21.7983C21.4193 20.8868 20.6972 20.1825 19.7266 19.6854C18.7559 19.1764 17.5249 18.9219 16.0334 18.9219H10.8487V49H3.16051Z"
                fill="#252525"
              />
              <mask
                id="mask0_2_38"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="3"
                y="12"
                width="28"
                height="37"
              >
                <path
                  d="M3.16051 49V12.6364H17.5071C20.2652 12.6364 22.6148 13.1631 24.5561 14.2166C26.4974 15.2583 27.977 16.7083 28.995 18.5668C30.0249 20.4134 30.5398 22.544 30.5398 24.9588C30.5398 27.3736 30.0189 29.5043 28.9773 31.3509C27.9356 33.1974 26.4264 34.6357 24.4496 35.6655C22.4846 36.6953 20.1054 37.2102 17.3118 37.2102H8.16761V31.049H16.0689C17.5485 31.049 18.7678 30.7945 19.7266 30.2855C20.6972 29.7647 21.4193 29.0485 21.8928 28.1371C22.3781 27.2138 22.6207 26.1544 22.6207 24.9588C22.6207 23.7514 22.3781 22.6979 21.8928 21.7983C21.4193 20.8868 20.6972 20.1825 19.7266 19.6854C18.7559 19.1764 17.5249 18.9219 16.0334 18.9219H10.8487V49H3.16051Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask0_2_38)">
                <rect
                  x="9.45639"
                  y="5"
                  width="5.7224"
                  height="21"
                  transform="rotate(39.85 9.45639 5)"
                  fill="#ABEBFF"
                />
                <rect
                  x="15.911"
                  y="6.05908"
                  width="5.7224"
                  height="31.2199"
                  transform="rotate(39.85 15.911 6.05908)"
                  fill="#3B5AFF"
                />
                <rect
                  x="23.351"
                  y="5.79315"
                  width="5.7224"
                  height="44.9914"
                  transform="rotate(39.85 23.351 5.79315)"
                  fill="#C387FF"
                />
              </g>
              <path
                d="M31.9922 49V31H36.832V34.1406H37.0195C37.3477 33.0234 37.8984 32.1797 38.6719 31.6094C39.4453 31.0312 40.3359 30.7422 41.3438 30.7422C41.5938 30.7422 41.8633 30.7578 42.1523 30.7891C42.4414 30.8203 42.6953 30.8633 42.9141 30.918V35.3477C42.6797 35.2773 42.3555 35.2148 41.9414 35.1602C41.5273 35.1055 41.1484 35.0781 40.8047 35.0781C40.0703 35.0781 39.4141 35.2383 38.8359 35.5586C38.2656 35.8711 37.8125 36.3086 37.4766 36.8711C37.1484 37.4336 36.9844 38.082 36.9844 38.8164V49H31.9922ZM52.79 49.3516C50.9697 49.3516 49.3955 48.9648 48.0674 48.1914C46.7471 47.4102 45.7275 46.3242 45.0088 44.9336C44.29 43.5352 43.9307 41.9141 43.9307 40.0703C43.9307 38.2109 44.29 36.5859 45.0088 35.1953C45.7275 33.7969 46.7471 32.7109 48.0674 31.9375C49.3955 31.1562 50.9697 30.7656 52.79 30.7656C54.6104 30.7656 56.1807 31.1562 57.501 31.9375C58.8291 32.7109 59.8525 33.7969 60.5713 35.1953C61.29 36.5859 61.6494 38.2109 61.6494 40.0703C61.6494 41.9141 61.29 43.5352 60.5713 44.9336C59.8525 46.3242 58.8291 47.4102 57.501 48.1914C56.1807 48.9648 54.6104 49.3516 52.79 49.3516ZM52.8135 45.4844C53.6416 45.4844 54.333 45.25 54.8877 44.7813C55.4424 44.3047 55.8604 43.6562 56.1416 42.8359C56.4307 42.0156 56.5752 41.082 56.5752 40.0352C56.5752 38.9883 56.4307 38.0547 56.1416 37.2344C55.8604 36.4141 55.4424 35.7656 54.8877 35.2891C54.333 34.8125 53.6416 34.5742 52.8135 34.5742C51.9775 34.5742 51.2744 34.8125 50.7041 35.2891C50.1416 35.7656 49.7158 36.4141 49.4268 37.2344C49.1455 38.0547 49.0049 38.9883 49.0049 40.0352C49.0049 41.082 49.1455 42.0156 49.4268 42.8359C49.7158 43.6562 50.1416 44.3047 50.7041 44.7813C51.2744 45.25 51.9775 45.4844 52.8135 45.4844ZM64.8955 31H69.8877V49.8906C69.8877 51.2813 69.6143 52.4063 69.0674 53.2656C68.5205 54.125 67.7354 54.7539 66.7119 55.1523C65.6963 55.5508 64.4814 55.75 63.0674 55.75C62.8955 55.75 62.7314 55.7461 62.5752 55.7383C62.4111 55.7383 62.2393 55.7344 62.0596 55.7266V51.8242C62.1924 51.832 62.3096 51.8359 62.4111 51.8359C62.5049 51.8438 62.6064 51.8477 62.7158 51.8477C63.5205 51.8477 64.083 51.6758 64.4033 51.332C64.7314 50.9961 64.8955 50.4883 64.8955 49.8086V31ZM67.3799 28.6797C66.6455 28.6797 66.0127 28.4336 65.4814 27.9414C64.9502 27.4414 64.6846 26.8437 64.6846 26.1484C64.6846 25.4609 64.9502 24.8711 65.4814 24.3789C66.0127 23.8789 66.6455 23.6289 67.3799 23.6289C68.1299 23.6289 68.7666 23.8789 69.29 24.3789C69.8213 24.8711 70.0869 25.4609 70.0869 26.1484C70.0869 26.8437 69.8213 27.4414 69.29 27.9414C68.7666 28.4336 68.1299 28.6797 67.3799 28.6797ZM82.0898 49.3516C80.2383 49.3516 78.6445 48.9766 77.3086 48.2266C75.9805 47.4687 74.957 46.3984 74.2383 45.0156C73.5195 43.625 73.1602 41.9805 73.1602 40.082C73.1602 38.2305 73.5195 36.6055 74.2383 35.207C74.957 33.8086 75.9688 32.7187 77.2734 31.9375C78.5859 31.1562 80.125 30.7656 81.8906 30.7656C83.0781 30.7656 84.1836 30.957 85.207 31.3398C86.2383 31.7148 87.1367 32.2812 87.9023 33.0391C88.6758 33.7969 89.2773 34.75 89.707 35.8984C90.1367 37.0391 90.3516 38.375 90.3516 39.9062V41.2773H75.1523V38.1836H85.6523C85.6523 37.4648 85.4961 36.8281 85.1836 36.2734C84.8711 35.7187 84.4375 35.2852 83.8828 34.9727C83.3359 34.6523 82.6992 34.4922 81.9727 34.4922C81.2148 34.4922 80.543 34.668 79.957 35.0195C79.3789 35.3633 78.9258 35.8281 78.5977 36.4141C78.2695 36.9922 78.1016 37.6367 78.0938 38.3477V41.2891C78.0938 42.1797 78.2578 42.9492 78.5859 43.5977C78.9219 44.2461 79.3945 44.7461 80.0039 45.0977C80.6133 45.4492 81.3359 45.625 82.1719 45.625C82.7266 45.625 83.2344 45.5469 83.6953 45.3906C84.1563 45.2344 84.5508 45 84.8789 44.6875C85.207 44.375 85.457 43.9922 85.6289 43.5391L90.2461 43.8438C90.0117 44.9531 89.5313 45.9219 88.8047 46.75C88.0859 47.5703 87.1563 48.2109 86.0156 48.6719C84.8828 49.125 83.5742 49.3516 82.0898 49.3516ZM101.742 49.3516C99.8984 49.3516 98.3125 48.9609 96.9844 48.1797C95.6641 47.3906 94.6484 46.2969 93.9375 44.8984C93.2344 43.5 92.8828 41.8906 92.8828 40.0703C92.8828 38.2266 93.2383 36.6094 93.9492 35.2187C94.668 33.8203 95.6875 32.7305 97.0078 31.9492C98.3281 31.1602 99.8984 30.7656 101.719 30.7656C103.289 30.7656 104.664 31.0508 105.844 31.6211C107.023 32.1914 107.957 32.9922 108.645 34.0234C109.332 35.0547 109.711 36.2656 109.781 37.6562H105.07C104.938 36.7578 104.586 36.0352 104.016 35.4883C103.453 34.9336 102.715 34.6562 101.801 34.6562C101.027 34.6562 100.352 34.8672 99.7734 35.2891C99.2031 35.7031 98.7578 36.3086 98.4375 37.1055C98.1172 37.9023 97.957 38.8672 97.957 40C97.957 41.1484 98.1133 42.125 98.4258 42.9297C98.7461 43.7344 99.1953 44.3477 99.7734 44.7695C100.352 45.1914 101.027 45.4023 101.801 45.4023C102.371 45.4023 102.883 45.2852 103.336 45.0508C103.797 44.8164 104.176 44.4766 104.473 44.0312C104.777 43.5781 104.977 43.0352 105.07 42.4023H109.781C109.703 43.7773 109.328 44.9883 108.656 46.0352C107.992 47.0742 107.074 47.8867 105.902 48.4727C104.73 49.0586 103.344 49.3516 101.742 49.3516ZM122.552 31V34.75H111.712V31H122.552ZM114.173 26.6875H119.165V43.4687C119.165 43.9297 119.235 44.2891 119.376 44.5469C119.517 44.7969 119.712 44.9727 119.962 45.0742C120.22 45.1758 120.517 45.2266 120.853 45.2266C121.087 45.2266 121.321 45.207 121.556 45.168C121.79 45.1211 121.97 45.0859 122.095 45.0625L122.88 48.7773C122.63 48.8555 122.278 48.9453 121.825 49.0469C121.372 49.1563 120.821 49.2227 120.173 49.2461C118.97 49.293 117.915 49.1328 117.009 48.7656C116.11 48.3984 115.411 47.8281 114.911 47.0547C114.411 46.2812 114.165 45.3047 114.173 44.125V26.6875ZM133.743 49.3516C131.923 49.3516 130.349 48.9648 129.021 48.1914C127.7 47.4102 126.681 46.3242 125.962 44.9336C125.243 43.5352 124.884 41.9141 124.884 40.0703C124.884 38.2109 125.243 36.5859 125.962 35.1953C126.681 33.7969 127.7 32.7109 129.021 31.9375C130.349 31.1562 131.923 30.7656 133.743 30.7656C135.563 30.7656 137.134 31.1562 138.454 31.9375C139.782 32.7109 140.806 33.7969 141.524 35.1953C142.243 36.5859 142.603 38.2109 142.603 40.0703C142.603 41.9141 142.243 43.5352 141.524 44.9336C140.806 46.3242 139.782 47.4102 138.454 48.1914C137.134 48.9648 135.563 49.3516 133.743 49.3516ZM133.767 45.4844C134.595 45.4844 135.286 45.25 135.841 44.7813C136.396 44.3047 136.813 43.6562 137.095 42.8359C137.384 42.0156 137.528 41.082 137.528 40.0352C137.528 38.9883 137.384 38.0547 137.095 37.2344C136.813 36.4141 136.396 35.7656 135.841 35.2891C135.286 34.8125 134.595 34.5742 133.767 34.5742C132.931 34.5742 132.228 34.8125 131.657 35.2891C131.095 35.7656 130.669 36.4141 130.38 37.2344C130.099 38.0547 129.958 38.9883 129.958 40.0352C129.958 41.082 130.099 42.0156 130.38 42.8359C130.669 43.6562 131.095 44.3047 131.657 44.7813C132.228 45.25 132.931 45.4844 133.767 45.4844Z"
                fill="#252525"
              />
            </svg>
          </div>
        </Link>
        <ul
          className={`${styles["nav-links"]} ${isOpened ? styles.opened : ""}`}
        >
          <li className={styles["nav-link"]}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link to={"/projects"}>All projects</Link>
          </li>
          {isAuthenticated ? (
            <li className={styles["nav-link"]}>
              <Link to={"/projects-management"}>Management panel</Link>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}