import NavBar from './NavBar';
import NavPage from './NavPage';

const MainPage = () => {
  return (
    <>
    <section>
      <div>

        {/* nav section */}
        <div>
          <NavBar />
        </div>

        {/* navPage section */}
        <div>
          <NavPage />
        </div>

      </div>
    </section>
    </>
  )
}

export default MainPage;
