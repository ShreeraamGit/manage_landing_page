import { Navbar, ImageComponent, ImageComponentTwo } from '../components';
import { Hero, About, ReviewSlider, Simplfy, Footer } from '../sections';

const Page = () => (
  <div className="h-full w-full relative overflow-hidden">
    <ImageComponent />
    <ImageComponentTwo />
    <Navbar />
    <Hero />
    <About />
    <ReviewSlider />
    <Simplfy />
    <Footer />
  </div>
);

export default Page;
