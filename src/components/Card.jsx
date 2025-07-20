import Footer from './Footer';
import Header from './Header';

function Card() {
  return (
    <article className="max-w-[340px] w-full px-4 py-6 bg-white rounded-lg border border-gray-100">
      <Header />
      <Footer />
    </article>
  );
}
export default Card;
