import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionsComponent} from "./questions/questions.component";
import {HomeComponent} from "./home/home.component";
import { ListeArticleComponent } from './liste-article/liste-article.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: '', component: HomeComponent },
  { path: 'liste_article', component: ListeArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
