import React from "react";
import er from "./errors.module.scss";

export default function Error() {
  return (
    <section className={`${er.er}`}>
      <div className={` ${er.er} d-flex flex-column align-items-center justify-content-center gap-3`}>
        <svg
          width="296"
          height="181"
          viewBox="0 0 296 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M142.16 56.6793C145.908 59.0808 150.927 59.0437 154.738 56.2404L184.668 34.01C186.016 32.9988 186.926 31.4424 187.062 29.7713C188.097 17.3061 176.436 12.5303 169.191 17.9105L139.249 40.1617C137.866 41.1804 136.977 42.7501 136.848 44.4552C136.421 50.3646 138.785 54.5166 142.16 56.6793Z"
            fill="#999999"
          />
          <path
            d="M181.792 56.5976C184.194 52.8495 184.156 47.8309 181.353 44.0193L159.123 14.09C158.112 12.7411 156.555 11.8315 154.884 11.6954C142.419 10.6603 137.643 22.3216 143.023 29.5661L165.275 59.5087C166.293 60.8916 167.863 61.7805 169.568 61.9092C175.477 62.3366 179.629 59.9729 181.792 56.5976Z"
            fill="#999999"
          />
          <path
            d="M72.5689 66.7716C76.9722 67.4247 81.5341 65.3325 83.8607 61.2126L102.04 28.663C102.855 27.1875 103.046 25.395 102.485 23.8151C98.3168 12.022 85.7226 12.4489 81.322 20.3271L63.1395 52.9011C62.2961 54.3974 62.1291 56.1935 62.7111 57.8014C64.745 63.3663 68.6035 66.1835 72.5689 66.7716Z"
            fill="#999999"
          />
          <path
            d="M108.681 50.4425C109.334 46.0392 107.242 41.4774 103.122 39.1508L70.5721 20.9719C69.0967 20.1564 67.3041 19.9651 65.7242 20.5264C53.9311 24.6947 54.3581 37.2888 62.2362 41.6894L94.8103 59.8719C96.3066 60.7154 98.1027 60.8824 99.7106 60.3004C105.275 58.2665 108.093 54.408 108.681 50.4425Z"
            fill="#999999"
          />
          <path
            d="M285.335 82.3942C284.95 84.6596 282.382 85.7386 280.463 84.4781C273.128 79.6527 265.907 76.6008 256.979 77.0017C253.216 77.1747 247.698 78.4013 242.552 87.1512C234.755 100.382 247.243 125.497 254.7 140.496L255.821 142.746C256.941 144.725 257.982 146.636 258.895 148.509C259.862 150.427 259.015 152.76 257.048 153.66L247.228 158.058C243.481 159.741 239.119 158.235 237.109 154.653C229.914 141.688 218.062 126.97 209.778 121.216C197.351 112.598 184.21 105.606 170.696 100.458C141.312 89.2624 111.426 87.6285 86.4988 95.8705C80.6277 97.8235 72.5548 101.615 67.3814 108.731C59.0525 120.203 59.1893 137.783 63.2433 152.574C63.7686 153.987 64.2627 155.33 64.7055 156.652C65.6201 159.343 64.1768 162.176 61.457 162.947C59.7009 163.456 57.6554 164.041 55.6099 164.625L53.7272 165.369C49.0339 167.238 43.6884 164.707 42.2763 159.832C42.2093 159.64 42.1667 159.445 42.1263 159.276C34.6585 139.595 23.3754 120.861 9.08221 105.377C7.43407 103.572 5.69477 101.849 3.93323 100.153C0.958787 97.3539 0.727129 92.6921 3.5418 89.7321C5.525 87.6663 7.53269 85.5983 9.5626 83.5034C11.9305 81.0553 15.827 80.9939 18.2664 83.3462C27.1276 91.8718 34.9328 101.535 41.6136 111.327C43.4003 105.786 45.9756 100.494 49.5267 95.6075C56.3668 86.2062 66.766 78.9797 79.5899 74.7512C89.1289 71.5932 98.5673 69.7578 107.751 68.9122C135.278 66.3776 160.467 72.7804 178.564 79.6874C192.181 84.876 205.406 91.7112 218.001 100.017C217.624 91.627 219.088 83.3896 223.533 75.8689C232.695 60.3069 244.953 55.8331 254.21 54.9807C254.823 54.9244 255.435 54.868 256.027 54.863C267.12 54.362 276.302 56.9855 284.464 61.1401C286.951 62.3978 288.291 65.1488 287.83 67.9169L285.413 82.4366L285.335 82.3942Z"
            fill="#999999"
          />
        </svg>
        <p className="kr-h1">WE’RE PREPARING !</p>
        <p  className="kr-h1">현재 페이지 준비중입니다.</p>
      </div>
    </section>
  );
}