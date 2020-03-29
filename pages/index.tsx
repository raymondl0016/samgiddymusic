import Link from 'next/link'
import Layout from '../components/Layout'
import './index.scss'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="example">Hello World!</div>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
