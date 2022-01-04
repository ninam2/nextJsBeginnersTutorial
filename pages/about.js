import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const About = () => {
  return(
      <>
          <Head>
              <title> Ninja List | About</title>
              <meta name="keywords" content="ninjas"/>
          </Head>
          <div>
              <h1 className={styles.title}>About</h1>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
              <Link href="/ninjas/">
                  <a className={styles.btn}>See Ninja Listing</a>
              </Link>
          </div>
      </>
  )

}

export default About;
