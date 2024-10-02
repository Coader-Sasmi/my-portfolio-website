"use client";

export default function Footer() {
  return (
    <footer className="text-tertiary body-font  w-full border-t bg-black">
      <div className="bg-black border-t">
        <footer className="w-full ">
          <div className="flex items-center"></div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center p-4 gap-4 bg-gray-900 ">
            <span className="flex items-center gap-2 ">
              <h3 className="font-medium tracking-wide text-sm">Made with</h3>
              <h3 className="font-medium tracking-wide text-sm animate-pulse ">
                ❤️
              </h3>
              <h3 className="font-medium tracking-wide text-sm">by</h3>
              <h3 className="font-medium tracking-wide text-theme animate-pulse text-sm text-primary">
                Sasmita
              </h3>
            </span>
            <span className="hidden md:flex">|</span>
            <h3 className="font-medium tracking-wide text-sm">
              © copyright {new Date().getFullYear()} Sasmita. All right
              reserved.
            </h3>
          </div>
        </footer>
        {/* <div className="container mx-auto py-4 px-5 flex flex-wrap lg:flex-row flex-col lg:justify-between  justify-center items-center text-gray-300">
          <p className=" text-sm text-center sm:text-left font-medium pb-2">
            © 2022 Energy and Utilities
            <Link
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className=" ml-1"
              target="_blank"
            >
              All Rights Reserved.
            </Link>
          </p>
          <span className="font-medium inline-flex text-center lg:text-start">
            <p>
              Designed and Developed by{" "}
              <span className="text-primary ">
                <Link href="https://searchingyard.com/" target=" ">
                  SearchingYard Software Private Limited
                </Link>
              </span>
            </p>
          </span>
        </div> */}
      </div>
    </footer>
  );
}
