import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-feed",
  templateUrl: "feed.html",
  providers: [MoovieProvider]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Feed",
    usuario: "Henrique Ferraz",
    data: "November 5, 1955",
    descricao: "Teste de inserção de página",
    quant_likes: 33,
    quant_comments: 4,
    horario: "11h ago",
    avatar: "assets/images/avatar.png",
    imagem: "assets/images/advance.png"
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private MoovieProvider: MoovieProvider
  ) {}

  ionViewDidLoad() {
    this.MoovieProvider.trazendoMoovies().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
