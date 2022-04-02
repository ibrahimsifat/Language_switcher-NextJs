import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';
const English_Flag='/english_flag.png'
const Bangla_Flag='/bangladesh_flag.png'
const Arabic_Flag='/saudi_flag.png'

const LanguageSwitcher = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { t } = useTranslation('common')
    return (
        <div class="group inline-block">
        <button
          class="outline-none focus:outline-none  px-2  bg-white   flex items-center min-w-32"
        >
          {/* <span class="pr-1 font-semibold flex-1">{t('Language')}</span> */}
          {
             locale === "en"?  
             <Link
             activeClassName={locale === "en"}
             href={asPath}
             locale="en"
           >
           <li class="rounded-sm py-1  flex justify-start cursor-pointer items-center">
         <Image
           src={English_Flag}
           alt='flag'
           width="30px"
           height="25px"
           /> 
           <span className='mx-2 '>English</span>
           
           </li>
           </Link>:locale === "ar"?
            <Link
            activeClassName={locale === "ar"}
            href={asPath}
            locale="ar"
          >
          <li class="rounded-sm  py-1  flex justify-start cursor-pointer items-center">
        <Image
          src={Arabic_Flag}
          alt='flag'
          width="30px"
          height="25px"
          /> 
          <span className='mx-2 '>عربي</span>
          
          </li>
          </Link>:
          <Link
            activeClassName={locale === "bn"}
            href={asPath}
            locale="bn"
          >
          <li class="rounded-sm  py-1 flex justify-start cursor-pointer items-center">
        <Image
          src={Bangla_Flag}
          alt='flag'
          width="30px"
          height="25px"
          /> 
          <span className='mx-2 '>বাংলা</span>
          
          </li>
          </Link>
          }
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-36 font-bold"
        >
            { locale === "en"||
            <Link
            activeClassName={locale === "en"}
            href={asPath}
            locale="en"
          >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100 flex justify-start cursor-pointer items-center">
        <Image
          src={English_Flag}
          alt='flag'
          width="30px"
          height="25px"
          /> 
          <span className='mx-2 '>English</span>
          
          </li>
          </Link>
}{ locale === "ar"||
          <Link
            activeClassName={locale === "ar"}
            href={asPath}
            locale="ar"
          >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100 flex justify-start cursor-pointer items-center">
        <Image
          src={Arabic_Flag}
          alt='flag'
          width="30px"
          height="25px"
          /> 
          <span className='mx-2 '>عربي</span>
          
          </li>
          </Link>
}

{ locale === "bn"||
          <Link
            activeClassName={locale === "bn"}
            href={asPath}
            locale="bn"
          >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100 flex justify-start cursor-pointer items-center">
        <Image
          src={Bangla_Flag}
          alt='flag'
          width="30px"
          height="25px"
          /> 
          <span className='mx-2 '>বাংলা</span>
          
          </li>
          </Link>
}
        </ul>
      </div>
    );
};

export default LanguageSwitcher;