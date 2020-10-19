// DOCUMENTATION: http://styletron.org

import PropTypes from 'prop-types'
import { styled, useStyletron } from 'styletron-react'
import Layout from "./layout";
// statically styled component
const Title = styled('h1', {
  color: 'red',
  fontSize: '82px',
})
import { i18n, Link, withTranslation } from '../i18n'
// dynamically styled component
const SubTitle = styled('h2', ({ $size }) => ({
  color: 'blue',
  fontSize: `${$size}px`,
}))

const Home = ({ t }) => {
  // an alternative hook based API
  const [css] = useStyletron()
  return (
    <Layout>
        <div>
            <Title>Title</Title>
            <SubTitle $size={50}>Subtitle</SubTitle>
            <p className={css({ fontSize: '32px' })}>Styled by hook</p>
        </div>
    </Layout>
  )
}

Home.getInitialProps = async () => ({
    namespacesRequired: ['common', 'footer'],
})

Home.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)