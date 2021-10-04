import React from 'react';
import { Link } from 'gatsby';

// import Image from '../components/image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" description="woo" />
        <h1>get in touch</h1>
        <p>
            send me an email at <strong>me@andreafinlay.com</strong>
        </p>
        {/* <Image /> */}
        <Link to="/">home</Link>
    </Layout>
);

export default SecondPage;
