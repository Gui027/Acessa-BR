import React from 'react';
import './footer.scss';
import iconTop from '../../images/Vector_1.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__section footer__section--first">
                <div className="container">
                    <p>
                        <strong>Observação:</strong> este site é uma amostra de desenvolvimento tecnológico de iniciativa independente, as informações aqui apresentadas podem estar eventualmente desatualizadas, por isso recomendamos sempre conferir as informações diretamente com o estabelecimento. A exibição dos locais, nesta página não caracteria recomendação de uso.
                    </p>
                </div>
            </div>
            <div className="footer__section footer__section--second">
                <div className="footer__container">
                    <p>
                        <strong>Projeto Elaborado durante a RDW <a href="https://ebaconline.com" target="_blank" rel="noreferrer">E.B.A.C</a> 2021</strong>
                        <small>
                            Projetado por <a href="https://github.com/cavalcantemmarcelo" target="_blank" rel="noreferrer">Marcelo Cavalcante </a> e <a href="https://github.com/mja-maia/" target="_blank" rel="noreferrer">Miguel Maia</a>, desenvolvido por Aluno EBAC.
                        </small>
                    </p>
                    <a href="#top" className="button">
                        <img src={iconTop} alt="Voltar ao topo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

