import Logo from '../assets/logo.png';
import Curriculo from '../assets/Rodrigo Cv pt-br.pdf';

const Header = () => {
  return (
    <div className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='w-[150px]' src={Logo} />
          </a>
          <a className="btn btn-sm pt-3" href={Curriculo} download="Rodrigo Cv pt-br.pdf">Baixar CV</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
