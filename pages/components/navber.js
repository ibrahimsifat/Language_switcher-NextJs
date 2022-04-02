
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from "next/router";
import LanguageSwitcher from './LanguageSwitcher';
const NavBar = () => {

    const { locale, locales, defaultLocale, asPath } = useRouter();
console.log(locale);
const { t } = useTranslation('common')
return (
  <div className='flex justify-center mt-5 bg-green-400 px-0 mx-0'>
  <div className="menu mx-auto">
      <ul className='flex'>
          <li className="mx-3 text-white hover:text-gray-500 font-bold p-2"><Link href='/'>{t('home')}</Link></li>
          <li className="mx-3 text-white hover:text-gray-500 font-bold p-2"> <Link href='/about'>{t('about')}</Link></li>
          <li className="mx-3 text-white hover:text-gray-500 font-bold p-2"> <Link href='/products'>{t('nav_products')}</Link></li>
          <li className="mx-3 text-white hover:text-gray-500 font-bold p-2"> <Link href='/contact'>{t('contact')}</Link></li>
      </ul>
  </div>
  <div className="language  py-2 mx-auto ">
     
          <LanguageSwitcher/>
  </div>



  </div>
 )
}

export default NavBar;
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common', 'footer']),
//   },
// })