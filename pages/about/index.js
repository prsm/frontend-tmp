import CustomHead from '@components/customHead';
import Footer from '@components/footer';
import Nav from '@components/nav';

export default function Index() {
  return (
    <div>
      <CustomHead title="PR1SM - About" />
      <Nav></Nav>
      <h1>About page</h1>
      <Footer></Footer>
    </div>
  );
}
