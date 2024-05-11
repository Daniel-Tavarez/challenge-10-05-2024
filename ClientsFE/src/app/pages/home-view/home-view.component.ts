import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.loadClients();
  }

  async redirectToAddressDetail(clientId: number) {
    await this.router.navigate(['/addresses', clientId]);
  }

  filterValue: boolean = false;
  emptyStar: string = 'assets/img/empty-star.png';
  star: string = 'assets/img/star.png';

  saveOrDeleteFavoritedMovie(movieId: number, isFavorite: boolean): void {
    const favoriteMovies: { movieId: number; favorite: boolean }[] = JSON.parse(
      localStorage.getItem('favoriteMovies') || '[]'
    );

    const movieIndex = favoriteMovies.findIndex(
      (movie) => movie.movieId === movieId
    );

    if (isFavorite) {
      if (movieIndex !== -1) {
        favoriteMovies[movieIndex].favorite = true;
      } else {
        favoriteMovies.push({ movieId, favorite: true });
      }
    } else {
      if (movieIndex !== -1) {
        favoriteMovies.splice(movieIndex, 1);
      }
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }

  loadClients(): void {
    this.clientService.getAll().subscribe((clients) => {
      this.clients = clients;
    });
  }
}
