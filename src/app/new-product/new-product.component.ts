import { Component, OnInit } from '@angular/core';
import { FileInput } from 'ngx-material-file-input';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  nome: string = null;
  img: FileInput[] = null;
  files: File[];
  categoria = 'Mesas';
  loading = false;
  erroImg = false;
  erroNome = false;
  erroImgMsg = 'Imagem com problema!';

  constructor(private pService: ProductService) { }

  ngOnInit() {
  }

  setTitle(text: string) {
    this.categoria = text;
  }

  createProd() {
    this.erroNome = this.nome === null || this.nome === '';
    this.validImg();
    if (!this.erroNome && !this.erroImg) {
      this.loading = true;
      this.loading = true;
      let paths: string[];
      this.pService.makeFileRequest(this.files).then(resp => {
        paths = resp;
        this.pService.postarProduct(
          this.nome,
          paths,
          this.categoria,
          new Date()
        ).subscribe(response => {
          console.log(response);
          this.loading = false;
          alert('tudokey');
          // this.openSnack('Sucesso ao criar a nova promoção!', 'Ir para Promoções');
        });
      }).catch(erro => {
        console.log(erro);
        this.loading = false;
        alert('deomerds');
        // this.openSnack(erro);
      });
    }
  }

  validImg() {
    let erro = true;
    if (!(this.img === null || this.img === undefined)) {
      this.files = this.img['_files'];
    } else {
      this.files = [];
      this.erroImgMsg = 'Poste ao menos uma imagem!';
      erro = false;
    }
    if (this.files.length > 5) {
      this.erroImgMsg = 'Poste no máximo 5 imagens!';
      erro = false;
    }
    this.files.forEach(file => {
      if ((file.type !== 'image/png') && (file.type !== 'image/jpeg') && (file.type !== 'image/gif')) {
        this.erroImgMsg = 'As imagens devem ser do tipo .jpg, .gif ou .png!';
        erro = false;
      }
    });
  this.erroImg = !(erro);
  }

}
