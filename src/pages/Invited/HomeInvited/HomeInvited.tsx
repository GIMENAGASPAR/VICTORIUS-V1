import { Head } from '../../partials';
import { Header } from '../../partials';
function HomeInvited() {
  return (
    <>
    <Head></Head>
    <Header></Header>
    <section className="publicidad">espacio publicidad</section>
      <div className="categorias-padre">
        <div className="col-sm categorias-hijo">1 of 4</div>
        <div className="col-sm categorias-hijo">1 of 4</div>
        <div className="col-sm categorias-hijo">1 of 4</div>
      </div>
    </>
  )
}
export default HomeInvited;