import FeaturedMovieList from "../components/FeaturedMovieList";
import FeaturedTVShowList from "../components/FeaturedTVShowList";
import Hero from "../components/Hero";
import FirstContent from "../components/FirstContent";
import SecondContent from "../components/SecondContent";

const HomePage = () => {
    return (
      <main>
        <Hero/>
        <hr/>
        <FeaturedMovieList/>
        <hr/>
        <FirstContent/>
        <hr/>
        <FeaturedTVShowList/>
        <hr/>
        <SecondContent/>
      </main>
    )
}

export default HomePage
