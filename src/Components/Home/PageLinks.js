import { Link } from 'react-router-dom'

function PageLinks() {
  return (
    <article className='p-2 pageLinks flex align-center justify-center gap-5xl'>
        <Link to='/companyplans' alt='companyPlans'>
          <img src='/monthlySchemes.svg' alt='monthlySchemes' />
        </Link>
        <Link to='/products' alt='futurePlans'>
          <img src='/whatsNew.svg' alt='whatsNew' />
        </Link>
    </article>
  )
}

export default PageLinks