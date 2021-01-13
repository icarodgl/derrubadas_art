import imagens from "./imagens";
import "./home.css";
export default function Home() {
  function imageMouserHover(e, imagem) {
    e.target.src = imagem.v;
  }
  function imageMouserLeave(e, imagem) {
    e.target.src = imagem.f;
  }

  return (
    <div>
      <div class="row">
        {imagens.map((imagem) => (
          <img
            onMouseEnter={(e) => imageMouserHover(e, imagem)}
            onMouseLeave={(e) => imageMouserLeave(e, imagem)}
            id="imagem"
            class="col s3"
            src={imagem.f}
            alt="imagem"
          ></img>
        ))}
      </div>
    </div>
  );
}
