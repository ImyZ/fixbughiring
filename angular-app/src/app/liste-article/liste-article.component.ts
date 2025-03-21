import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.scss']
})
export class ListeArticleComponent implements OnInit {

  articles: any[] = [];
  loading: boolean = true;
  message: string | null = null;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    // Fetch the list of articles from /api/getlist
    this.listService.getList().subscribe({
      next: (data) => {
        this.articles = data; // Assign the fetched data to the articles array
        this.loading = false; // Set loading to false once data is fetched
      },
      error: (err) => {
        console.error('Error fetching articles:', err);
        this.loading = false;
      }
    });

    // Fetch the message from /api/newroute
    this.listService.getNewRouteMessage().subscribe({
      next: (data) => {
        this.message = data.message; // Assign the message to the variable
      },
      error: (err) => {
        console.error('Error fetching message:', err);
      }
    });
  }
}
