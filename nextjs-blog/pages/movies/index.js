// Import the Next.js link component to create client-side navigation links for each post.
// Import the reusable date formatter so publication dates can be displayed in a readable format.
import Date from '../../components/date';

// Import the page head component for setting the browser tab title and metadata.
import Head from 'next/head';
// Import the shared page layout and the site title constant used by the homepage header.
import Layout, { siteTitle } from '../components/layout';
// Import the CSS module that contains the homepage styles used by this screen.
import utilStyles from '../utils.module.css';
import { fetchJson } from '../../lib/jsonFetcher';


// Export a static page prop function so Next.js can preload the blog entries before rendering.
//const dataURL = "https://dev-de-carlo-cs-5513-week-11.pantheonsite.io//wp-json/twentytwentyone-child/v1/special";
//const dataURL2 = "https://dev-de-carlo-cs-5513-week-11.pantheonsite.io/wp-json/wp/v2/movie";
//const dataURL3 = "https://dev-de-carlo-cs-5513-week-11.pantheonsite.io/wp-json/wp/v2/snack";


export async function getStaticProps() {
const moviesUrl = "https://dev-de-carlo-cs-5513-week-11.pantheonsite.io/wp-json/wp/v2/movie";

const movies = await fetchJson(moviesUrl);
  // Call the JSON data helper to fetch all post metadata for the homepage list.

  // Return the data object that will be passed into the Home component as props.
  return {
    props: {
      movies
    }
  };
}

//create a movies component to pull into home
export function Movies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
            {movie.acf.movie_name} <br/> 
           <ul><li> {movie.acf.movie_description}</li></ul>

        </li>

      ))}
    </ul>
  );
}

// Export the Home page component that renders the landing page and blog summary list.
export default function Home({ movies }) {
  // Return the page structure, including the site layout and content sections.
  return (
    // Wrap the page in the shared site layout and mark this as the home page header.
    <Layout home>

      <Head>

        <title>{siteTitle}</title>
      </Head>
      

        <section className={`dropShadow maintainForeWhite `}>

          <section className={`${utilStyles.headingMd} foreWhite`}>

            <p>Movies</p>

            <section className={`${utilStyles.headingMd} foreBlue maintainForeBlue`}>

              <p>


              </p>
            </section>
          </section>
        </section>


        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <br />

        <br />
          <h2 className={utilStyles.headingLg}>Favorites</h2>

          <ul className={utilStyles.list}>

          

              <li className={utilStyles.listItem} >


                <Movies movies = {movies} />


                <br />

                

                <br />

                <small className={utilStyles.lightText}>


                </small>
              </li>
            
          </ul>
        </section>
        <h6>API Data Reference Located <a href="https://dev-de-carlo-cs-5513-week-11.pantheonsite.io/wp-json/wp/v2/movie">here</a></h6>
        <div>
          <a href="/">← Back to home</a>
        </div>

    </Layout>
  );
}

