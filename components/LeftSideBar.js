import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import ThemeToggle from "@assets/utils/themeToggle";

const SideBarCon = tw.aside`flex flex-col w-[5%]  relative  justify-center `;
const Center = tw.span`flex flex-col  space-y-10`;
const SvgCon = styled.div`
  ${tw`flex justify-center items-center cursor-pointer `}
  svg {
    ${tw`h-8 w-8 `}
  }
`;
const LeftSideBar = () => {
  return (
    <SideBarCon>
      <Center>
        <Link href="/">
          <SvgCon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </SvgCon>
        </Link>
        <Link href="/">
          <SvgCon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </SvgCon>
        </Link>
        <SvgCon>
          <ThemeToggle />
        </SvgCon>
      </Center>
    </SideBarCon>
  );
};
export default LeftSideBar;
