import imagens from "./imagens";
import "./home.css";
export default function Home() {
  return (
    <div>
      <div class="row">
        {imagens.map((imagem) => (
          <img id="imagem" class="col s3" src={imagem} alt="imagem"></img>
        ))}
      </div>
    </div>
  );
}
